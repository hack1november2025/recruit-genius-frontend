"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, FileText, Calendar, Languages, ChevronDown, ChevronUp, Briefcase, GraduationCap, Award } from "lucide-react";
import { toast } from "sonner";
import AppLayout from "@/components/AppLayout";
import type { Candidate } from "@/types/candidate";
import type { CvDetail } from "@/types/cv-detail";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function CandidateCvsPage() {
  const router = useRouter();
  const params = useParams();
  const candidateId = params.id as string;

  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [cvs, setCvs] = useState<CvDetail[]>([]);
  const [expandedCvId, setExpandedCvId] = useState<number | null>(null);
  const [isLoadingCandidate, setIsLoadingCandidate] = useState(true);
  const [isLoadingCvs, setIsLoadingCvs] = useState(true);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/candidates?skip=0&limit=100`);
        if (response.ok) {
          const data: Candidate[] = await response.json();
          const foundCandidate = data.find(c => c.id === Number.parseInt(candidateId));
          if (foundCandidate) {
            setCandidate(foundCandidate);
          }
        }
      } catch (error) {
        console.error("Error fetching candidate:", error);
        toast.error("Failed to load candidate details");
      } finally {
        setIsLoadingCandidate(false);
      }
    };

    const fetchCvs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/cvs/candidate/${candidateId}`);
        if (response.ok) {
          const data: CvDetail[] = await response.json();
          setCvs(data);
        }
      } catch (error) {
        console.error("Error fetching CVs:", error);
        toast.error("Failed to load CVs");
      } finally {
        setIsLoadingCvs(false);
      }
    };

    if (candidateId) {
      fetchCandidate();
      fetchCvs();
    }
  }, [candidateId]);

  const toggleCvExpansion = (cvId: number) => {
    setExpandedCvId(expandedCvId === cvId ? null : cvId);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <AppLayout>
      <div className="p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <button
            onClick={() => router.push("/app/candidates")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Candidates</span>
          </button>

          {/* Candidate Info */}
          {isLoadingCandidate ? (
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 mb-6 animate-pulse">
              <div className="h-8 w-1/2 bg-stone-200 rounded mb-2" />
              <div className="h-4 w-1/3 bg-stone-200 rounded" />
            </div>
          ) : candidate ? (
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 mb-6">
              <h1 className="text-3xl font-bold text-stone-800 mb-2">{candidate.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                {candidate.email && <span>{candidate.email}</span>}
                {candidate.phone && <span>•</span>}
                {candidate.phone && <span>{candidate.phone}</span>}
                {candidate.experience_years && <span>•</span>}
                {candidate.experience_years && <span>{candidate.experience_years} experience</span>}
              </div>
            </div>
          ) : null}

          {/* CVs List */}
          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-4">
              CVs ({cvs.length})
            </h2>

            {isLoadingCvs ? (
              // Skeleton Loaders
              <div className="space-y-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                  <div
                    key={`skeleton-${idx}`}
                    className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 animate-pulse"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="h-6 w-3/4 bg-stone-200 rounded mb-2" />
                        <div className="h-4 w-1/2 bg-stone-200 rounded" />
                      </div>
                      <div className="h-10 w-10 bg-stone-200 rounded-lg" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={`metric-${i}`} className="h-4 bg-stone-200 rounded" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : cvs.length === 0 ? (
              // Empty State
              <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-12 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-500 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">No CVs Found</h3>
                <p className="text-stone-600 mb-6">
                  This candidate doesn't have any CVs uploaded yet.
                </p>
                <button
                  onClick={() => router.push("/app/upload-cv")}
                  className="px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Upload CV
                </button>
              </div>
            ) : (
              // CVs Cards
              <div className="space-y-4">
                {cvs.map((cv) => (
                  <div
                    key={cv.id}
                    className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden"
                  >
                    {/* CV Header */}
                    <div
                      onClick={() => toggleCvExpansion(cv.id)}
                      className="p-6 cursor-pointer hover:bg-stone-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="w-5 h-5 text-violet-600" />
                            <h3 className="text-lg font-bold text-stone-800">
                              {cv.file_name}
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(cv.created_at)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Languages className="w-4 h-4" />
                              {cv.original_language.toUpperCase()}
                              {cv.is_translated && " → EN"}
                            </span>
                            <span>{formatFileSize(cv.file_size_bytes)}</span>
                            {cv.structured_metadata.years_of_experience !== undefined && (
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                {cv.structured_metadata.years_of_experience} years exp
                              </span>
                            )}
                          </div>
                        </div>
                        <button className="p-2 hover:bg-stone-100 rounded-lg transition-colors">
                          {expandedCvId === cv.id ? (
                            <ChevronUp className="w-5 h-5 text-stone-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-stone-600" />
                          )}
                        </button>
                      </div>

                      {/* Quick Info */}
                      {cv.structured_metadata.technical_skills && cv.structured_metadata.technical_skills.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {cv.structured_metadata.technical_skills.slice(0, 5).map((skill, idx) => (
                            <span
                              key={`skill-${cv.id}-${idx}`}
                              className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {cv.structured_metadata.technical_skills.length > 5 && (
                            <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                              +{cv.structured_metadata.technical_skills.length - 5} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Expanded Content */}
                    {expandedCvId === cv.id && (
                      <div className="border-t border-stone-200 bg-stone-50 p-6 space-y-6">
                        {/* Work Experience */}
                        {cv.structured_metadata.work_experience && cv.structured_metadata.work_experience.length > 0 && (
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-bold text-stone-800 mb-3">
                              <Briefcase className="w-5 h-5 text-violet-600" />
                              Work Experience
                            </h4>
                            <div className="space-y-3">
                              {cv.structured_metadata.work_experience.map((exp, idx) => (
                                <div key={`exp-${cv.id}-${idx}`} className="bg-white rounded-lg p-4">
                                  <h5 className="font-semibold text-stone-800">{exp.position}</h5>
                                  <p className="text-sm text-stone-600">{exp.company}</p>
                                  <p className="text-xs text-stone-500 mt-1">
                                    {exp.start_date} - {exp.end_date} ({exp.duration_months} months)
                                  </p>
                                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                                    <ul className="mt-2 space-y-1">
                                      {exp.responsibilities.map((resp, ridx) => (
                                        <li key={`resp-${ridx}`} className="text-sm text-stone-600 list-disc ml-4">
                                          {resp}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Education */}
                        {cv.structured_metadata.education && cv.structured_metadata.education.length > 0 && (
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-bold text-stone-800 mb-3">
                              <GraduationCap className="w-5 h-5 text-violet-600" />
                              Education
                            </h4>
                            <div className="space-y-3">
                              {cv.structured_metadata.education.map((edu, idx) => (
                                <div key={`edu-${cv.id}-${idx}`} className="bg-white rounded-lg p-4">
                                  <h5 className="font-semibold text-stone-800">{edu.degree}</h5>
                                  <p className="text-sm text-stone-600">{edu.institution}</p>
                                  <p className="text-xs text-stone-500 mt-1">
                                    {edu.field_of_study} • {edu.graduation_year}
                                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Projects */}
                        {cv.structured_metadata.projects && cv.structured_metadata.projects.length > 0 && (
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-bold text-stone-800 mb-3">
                              <Award className="w-5 h-5 text-violet-600" />
                              Projects
                            </h4>
                            <div className="space-y-3">
                              {cv.structured_metadata.projects.map((project, idx) => (
                                <div key={`project-${cv.id}-${idx}`} className="bg-white rounded-lg p-4">
                                  <h5 className="font-semibold text-stone-800">{project.name}</h5>
                                  <p className="text-sm text-stone-600 mt-1">{project.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Full CV Text */}
                        <div>
                          <h4 className="text-lg font-bold text-stone-800 mb-3">
                            {cv.is_translated ? "Translated CV" : "Original CV"}
                          </h4>
                          <div className="bg-white rounded-lg p-6 max-h-96 overflow-y-auto">
                            <pre className="whitespace-pre-wrap text-sm text-stone-700 font-mono">
                              {cv.is_translated ? cv.translated_text : cv.original_text}
                            </pre>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
