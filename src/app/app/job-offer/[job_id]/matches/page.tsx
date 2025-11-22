"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import AppLayout from "@/components/AppLayout";
import type { MatchingResponse } from "@/types/matching";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function JobMatchesPage() {
  const router = useRouter();
  const params = useParams();
  const jobId = params.job_id as string;

  const [matching, setMatching] = useState<MatchingResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      toast.loading("Finding matching candidates...", { id: "matching" });

      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/jobs/${jobId}/match?top_k=10`, {
          method: "POST",
        });

        if (response.ok) {
          const data: MatchingResponse = await response.json();
          setMatching(data);
          toast.success(`Found ${data.candidates.length} matching candidates!`, { id: "matching" });
        } else {
          throw new Error("Failed to find matches");
        }
      } catch (error) {
        console.error("Error finding matches:", error);
        toast.error("Failed to find matching candidates", { id: "matching" });
      } finally {
        setIsLoading(false);
      }
    };

    if (jobId) {
      fetchMatches();
    }
  }, [jobId]);

  const getMatchScoreColor = (score: number) => {
    if (score >= 70) return "text-green-600 bg-green-100";
    if (score >= 50) return "text-amber-600 bg-amber-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <AppLayout>
      <div className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <button
            onClick={() => router.push(`/app/job-offer/${jobId}`)}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Job Details</span>
          </button>

          {isLoading ? (
            // Loading Skeleton
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 animate-pulse"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="h-6 w-48 bg-stone-200 rounded mb-2" />
                      <div className="h-4 w-32 bg-stone-200 rounded mb-2" />
                      <div className="h-3 w-40 bg-stone-200 rounded" />
                    </div>
                    <div className="h-16 w-20 bg-stone-200 rounded-xl" />
                  </div>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={`metric-${i}`} className="h-16 bg-stone-200 rounded-lg" />
                    ))}
                  </div>
                  <div className="h-20 bg-stone-200 rounded-lg" />
                </div>
              ))}
            </div>
          ) : matching ? (
            <div className="space-y-6">
              {/* Summary Card */}
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-sky-900 mb-4">Matching Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-sky-700 font-semibold mb-1">Primary Stack/Domain</p>
                    <p className="text-sky-900">{matching.summary.primary_stack_or_domain}</p>
                  </div>
                  <div>
                    <p className="text-sky-700 font-semibold mb-1">Candidates Evaluated</p>
                    <p className="text-sky-900">
                      {matching.summary.total_candidates_evaluated} (Top{" "}
                      {matching.summary.top_candidates_returned} shown)
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sky-700 font-semibold mb-2">Key Required Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {matching.summary.key_required_skills.map((skill, idx) => (
                        <span
                          key={`skill-${idx}`}
                          className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Candidates List */}
              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-4">
                  Matching Candidates ({matching.candidates.length})
                </h3>
                <div className="space-y-4">
                  {matching.candidates.map((candidate) => (
                    <div
                      key={candidate.candidate_id}
                      className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-stone-800 mb-1">
                            {candidate.name}
                          </h4>
                          <p className="text-sm text-stone-600 mb-2">{candidate.current_role}</p>
                          <p className="text-xs text-stone-500">
                            {candidate.experience.total_years_experience} years experience •{" "}
                            {candidate.seniority_match}
                          </p>
                        </div>
                        <div className="text-right">
                          <div
                            className={`text-2xl font-bold px-4 py-2 rounded-xl ${getMatchScoreColor(
                              candidate.match_score
                            )}`}
                          >
                            {candidate.match_score.toFixed(1)}%
                          </div>
                          <p className="text-xs text-stone-500 mt-1">Match Score</p>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <div className="bg-stone-50 rounded-lg p-3">
                          <p className="text-xs text-stone-500 mb-1">Skills Match</p>
                          <p className="text-lg font-bold text-stone-800">
                            {candidate.skills_match_score}%
                          </p>
                        </div>
                        <div className="bg-stone-50 rounded-lg p-3">
                          <p className="text-xs text-stone-500 mb-1">Experience</p>
                          <p className="text-lg font-bold text-stone-800">
                            {candidate.experience_relevance_score}/10
                          </p>
                        </div>
                        <div className="bg-stone-50 rounded-lg p-3">
                          <p className="text-xs text-stone-500 mb-1">Education</p>
                          <p className="text-lg font-bold text-stone-800">
                            {candidate.education_fit_score}/10
                          </p>
                        </div>
                        <div className="bg-stone-50 rounded-lg p-3">
                          <p className="text-xs text-stone-500 mb-1">AI Confidence</p>
                          <p className="text-lg font-bold text-stone-800">
                            {candidate.ai_confidence_score.toFixed(0)}%
                          </p>
                        </div>
                      </div>

                      {/* Rationale */}
                      <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                        <p className="text-sm text-violet-900">{candidate.overall_rationale}</p>
                      </div>

                      {/* Threshold Flags */}
                      {(candidate.metrics_details.threshold_flags.skills_below_70 ||
                        candidate.metrics_details.threshold_flags.confidence_below_80 ||
                        candidate.metrics_details.threshold_flags.employment_gaps_detected) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {candidate.metrics_details.threshold_flags.skills_below_70 && (
                            <span className="flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">
                              <AlertCircle className="w-3 h-3" />
                              Low Skills Match
                            </span>
                          )}
                          {candidate.metrics_details.threshold_flags.confidence_below_80 && (
                            <span className="flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">
                              <AlertCircle className="w-3 h-3" />
                              Low AI Confidence
                            </span>
                          )}
                          {candidate.metrics_details.threshold_flags.employment_gaps_detected && (
                            <span className="flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">
                              <AlertCircle className="w-3 h-3" />
                              Employment Gaps
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-12 text-center">
              <p className="text-stone-600">No matching candidates found</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
