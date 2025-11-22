"use client";

import { useState } from "react";
import { Send, Edit3, Save, X, Check } from "lucide-react";
import { toast } from "sonner";
import AppLayout from "@/components/AppLayout";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function JobOfferPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const [editableMarkdown, setEditableMarkdown] = useState(markdown);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);

  const handleEdit = () => {
    setIsEditing(true);
    setEditableMarkdown(markdown);
  };

  const handleSave = () => {
    setMarkdown(editableMarkdown);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditableMarkdown(markdown);
    setIsEditing(false);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setIsEditing(false);

    try {
      const url = threadId 
        ? `${API_BASE_URL}/api/v1/job-descriptions/chat?thread_id=${threadId}`
        : `${API_BASE_URL}/api/v1/job-descriptions/chat`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate job description");
      }

      const data = await response.json();
      
      setMarkdown(data.response || data.message || data.description || "");
      if (data.thread_id) {
        setThreadId(data.thread_id);
      }
      setPrompt("");
    } catch (error) {
      console.error("Error generating job description:", error);
      setMarkdown("# Error\n\nFailed to generate job description. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const handleSaveJobOffer = async () => {
    if (!markdown.trim() || !threadId) {
      toast.error("No job description to save");
      return;
    }

    setIsSaving(true);
    toast.loading("Saving job description...", { id: "save-job" });

    try {
      const url = `${API_BASE_URL}/api/v1/job-descriptions/chat?thread_id=${threadId}`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "I like, please save then." }),
      });

      if (response.ok) {
        toast.success("Job description saved successfully!", { id: "save-job" });
        // Clear the page
        setMarkdown("");
        setEditableMarkdown("");
        setThreadId(null);
        setIsEditing(false);
      } else {
        throw new Error("Failed to save job description");
      }
    } catch (error) {
      console.error("Error saving job description:", error);
      toast.error("Failed to save job description. Please try again.", { id: "save-job" });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AppLayout>
      <div className="p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-stone-800">Job Offer Generator</h1>
            <p className="text-stone-600 mt-1">Create and customize job offers with AI assistance</p>
          </div>
          <div className="flex gap-2">
            {markdown && !isEditing && (
              <button
                onClick={handleSaveJobOffer}
                disabled={isSaving}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Check className="w-4 h-4" />
                {isSaving ? "Saving..." : "Save"}
              </button>
            )}
            {!isEditing ? (
              <button
                onClick={handleEdit}
                disabled={!markdown || isSaving}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Edit3 className="w-4 h-4" />
                Edit
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Apply
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-300 text-stone-700 rounded-lg hover:bg-stone-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Markdown Display/Editor Area */}
        <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 mb-6 h-[400px] overflow-y-auto">
          {isGenerating ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-8 bg-stone-200 rounded w-3/4"></div>
              <div className="h-4 bg-stone-200 rounded w-1/2"></div>
              <div className="h-4 bg-stone-200 rounded w-5/6"></div>
              <div className="h-4 bg-stone-200 rounded w-4/6"></div>
              <div className="h-6 bg-stone-200 rounded w-2/3 mt-6"></div>
              <div className="h-4 bg-stone-200 rounded w-full"></div>
              <div className="h-4 bg-stone-200 rounded w-full"></div>
              <div className="h-4 bg-stone-200 rounded w-3/4"></div>
            </div>
          ) : !isEditing ? (
            markdown ? (
              <div className="prose prose-stone max-w-none">
                {markdown.split('\n').map((line, index) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={`line-${index}`} className="text-3xl font-bold text-stone-800 mb-4">{line.slice(2)}</h1>;
                  } else if (line.startsWith('## ')) {
                    return <h2 key={`line-${index}`} className="text-2xl font-semibold text-stone-700 mt-6 mb-3">{line.slice(3)}</h2>;
                  } else if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={`line-${index}`} className="font-semibold text-stone-800 mb-2">{line.slice(2, -2)}</p>;
                  } else if (line.startsWith('- ')) {
                    return <li key={`line-${index}`} className="ml-6 text-stone-600 mb-1 list-disc">{line.slice(2)}</li>;
                  } else if (line.trim() === '') {
                    return <br key={`line-${index}`} />;
                  } else {
                    return <p key={`line-${index}`} className="text-stone-600 mb-2">{line}</p>;
                  }
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-stone-400">
                <p>Start by entering a job description request below...</p>
              </div>
            )
          ) : (
            <textarea
              value={editableMarkdown}
              onChange={(e) => setEditableMarkdown(e.target.value)}
              className="w-full h-full p-4 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 font-mono text-sm resize-none"
              placeholder="Enter markdown content..."
            />
          )}
        </div>

        {/* Prompt Input Area */}
        <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="job-prompt" className="block text-sm font-semibold text-stone-700">
              Generate Job Offer
            </label>
            {threadId && (
              <span className="text-xs text-stone-500 bg-stone-100 px-3 py-1 rounded-full font-mono">
                {threadId}
              </span>
            )}
          </div>
          <div className="flex gap-3">
            <input
              id="job-prompt"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="E.g., Senior Frontend Developer with React experience..."
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              disabled={isGenerating}
            />
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-5 h-5" />
              {isGenerating ? "Generating..." : "Send"}
            </button>
          </div>
          <p className="text-xs text-stone-500 mt-2">
            {threadId 
              ? "Continue the conversation to refine your job description or request to save it."
              : "Describe the job position you want to create, and AI will generate a complete job description."
            }
          </p>
        </div>
      </div>
      </div>
    </AppLayout>
  );
}
