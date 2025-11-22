"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Users, Mail, Phone, Calendar, Upload } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import type { Candidate } from "@/types/candidate";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function CandidatesPage() {
  const router = useRouter();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/candidates?skip=0&limit=100`);
        if (response.ok) {
          const data: Candidate[] = await response.json();
          setCandidates(data);
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-sky-100 text-sky-700";
      case "reviewing":
        return "bg-amber-100 text-amber-700";
      case "shortlisted":
        return "bg-violet-100 text-violet-700";
      case "hired":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-stone-100 text-stone-700";
      default:
        return "bg-stone-100 text-stone-700";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <AppLayout>
      <div className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-stone-800">Candidates</h1>
              <p className="text-stone-600 mt-1">Manage your candidate pipeline</p>
            </div>
            <button
              onClick={() => router.push("/app/upload-cv")}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              <Upload className="w-5 h-5" />
              Upload CV
            </button>
          </div>

          {/* Candidates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading ? (
              // Skeleton Loaders
              Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 animate-pulse"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="h-6 w-3/4 bg-stone-200 rounded mb-2" />
                      <div className="h-4 w-1/2 bg-stone-200 rounded" />
                    </div>
                    <div className="h-6 w-16 bg-stone-200 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-stone-200 rounded" />
                    <div className="h-4 w-2/3 bg-stone-200 rounded" />
                  </div>
                </div>
              ))
            ) : candidates.length === 0 ? (
              // Empty State
              <div className="col-span-full bg-white rounded-2xl shadow-lg border border-stone-200 p-12 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-500 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">No Candidates Yet</h3>
                <p className="text-stone-600 mb-6">
                  Start building your talent pool by uploading candidate CVs.
                </p>
                <button
                  onClick={() => router.push("/app/upload-cv")}
                  className="px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Upload First CV
                </button>
              </div>
            ) : (
              // Candidates Cards
              candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  onClick={() => router.push(`/app/candidates/${candidate.id}/cvs`)}
                  className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-stone-800 mb-1 group-hover:text-violet-600 transition-colors">
                        {candidate.name}
                      </h3>
                      {candidate.experience_years && (
                        <p className="text-sm text-stone-500">
                          {candidate.experience_years} experience
                        </p>
                      )}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        candidate.status
                      )}`}
                    >
                      {candidate.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {candidate.email && (
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{candidate.email}</span>
                      </div>
                    )}
                    {candidate.phone && (
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span>{candidate.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-stone-500">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>Added {formatDate(candidate.created_at)}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  {candidate.skills && candidate.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={`${candidate.id}-skill-${idx}`}
                          className="px-2 py-1 bg-violet-50 text-violet-700 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {candidate.skills.length > 3 && (
                        <span className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-xs font-medium">
                          +{candidate.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
