"use client";

import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle2, X, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import AppLayout from "@/components/AppLayout";
import type { CvUploadResponse } from "@/types/cv";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface UploadState {
  file: File | null;
  isUploading: boolean;
  uploadResult: CvUploadResponse | null;
  error: string | null;
}

export default function UploadCvPage() {
  const [state, setState] = useState<UploadState>({
    file: null,
    isUploading: false,
    uploadResult: null,
    error: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!validTypes.includes(file.type)) {
      toast.error("Only PDF and DOCX files are allowed");
      return;
    }

    setState({ file, isUploading: false, uploadResult: null, error: null });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!validTypes.includes(file.type)) {
      toast.error("Only PDF and DOCX files are allowed");
      return;
    }

    setState({ file, isUploading: false, uploadResult: null, error: null });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!state.file) return;

    setState(prev => ({ ...prev, isUploading: true, error: null }));
    toast.loading("Uploading CV...", { id: "upload-cv" });

    try {
      const formData = new FormData();
      formData.append("file", state.file);

      const response = await fetch(`${API_BASE_URL}/api/v1/cvs/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload CV");
      }

      const result: CvUploadResponse = await response.json();
      
      setState(prev => ({ 
        ...prev, 
        isUploading: false, 
        uploadResult: result 
      }));
      toast.success("CV uploaded successfully!", { id: "upload-cv" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to upload CV";
      setState(prev => ({ 
        ...prev, 
        isUploading: false, 
        error: errorMessage 
      }));
      toast.error(errorMessage, { id: "upload-cv" });
    }
  };

  const handleReset = () => {
    setState({
      file: null,
      isUploading: false,
      uploadResult: null,
      error: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  return (
    <AppLayout>
      <div className="p-6 md:p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-stone-800">Upload CV</h1>
            <p className="text-stone-600 mt-1">
              Upload candidate CVs for AI-powered analysis and matching
            </p>
          </div>

          {/* Upload Area */}
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8">
            {!state.uploadResult ? (
              <>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  className="border-2 border-dashed border-stone-300 rounded-xl p-12 text-center hover:border-violet-400 transition-colors cursor-pointer"
                  onClick={handleBrowse}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  
                  {state.file ? (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                        <FileText className="w-8 h-8 text-violet-600" />
                      </div>
                      <p className="font-semibold text-stone-800 mb-1">{state.file.name}</p>
                      <p className="text-sm text-stone-500">
                        {(state.file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 flex items-center justify-center mb-4">
                        <Upload className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-semibold text-stone-800 mb-1">
                        Drop your CV here or click to browse
                      </p>
                      <p className="text-sm text-stone-500">
                        Supports PDF and DOCX files
                      </p>
                    </div>
                  )}
                </div>

                {state.file && (
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={handleUpload}
                      disabled={state.isUploading}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <Upload className="w-5 h-5" />
                      {state.isUploading ? "Uploading..." : "Upload CV"}
                    </button>
                    <button
                      onClick={handleReset}
                      disabled={state.isUploading}
                      className="px-6 py-3 bg-stone-100 text-stone-700 rounded-lg hover:bg-stone-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {state.error && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800">Upload Failed</p>
                      <p className="text-sm text-red-600">{state.error}</p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">
                  CV Uploaded Successfully!
                </h3>
                <div className="bg-stone-50 rounded-lg p-6 text-left mb-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-stone-500">CV ID</p>
                      <p className="text-stone-800 font-mono text-sm">{state.uploadResult.cv_id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-stone-500">Candidate ID</p>
                      <p className="text-stone-800 font-mono text-sm">{state.uploadResult.candidate_id}</p>
                    </div>
                    {state.uploadResult.metadata.name && (
                      <div>
                        <p className="text-sm font-semibold text-stone-500">Name</p>
                        <p className="text-stone-800">{state.uploadResult.metadata.name}</p>
                      </div>
                    )}
                    {state.uploadResult.metadata.email && (
                      <div>
                        <p className="text-sm font-semibold text-stone-500">Email</p>
                        <p className="text-stone-800">{state.uploadResult.metadata.email}</p>
                      </div>
                    )}
                    {state.uploadResult.metadata.phone && (
                      <div>
                        <p className="text-sm font-semibold text-stone-500">Phone</p>
                        <p className="text-stone-800">{state.uploadResult.metadata.phone}</p>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Upload Another CV
                </button>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-6 bg-sky-50 border border-sky-200 rounded-lg p-6">
            <h4 className="font-semibold text-sky-900 mb-2">What happens next?</h4>
            <ul className="text-sm text-sky-800 space-y-1">
              <li>• CV is automatically analyzed and processed by AI</li>
              <li>• Basic information (email, name, phone) is extracted</li>
              <li>• Language is detected and translated if needed</li>
              <li>• Embeddings are created for semantic search</li>
              <li>• Candidate is linked to existing profile or new one is created</li>
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
