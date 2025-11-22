"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, MapPin, DollarSign, Calendar, Users, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import AppLayout from "@/components/AppLayout";
import type { Job } from "@/types/job";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function JobDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const jobId = params.job_id as string;

  const [job, setJob] = useState<Job | null>(null);
  const [isLoadingJob, setIsLoadingJob] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/jobs/${jobId}`);
        if (response.ok) {
          const data: Job = await response.json();
          setJob(data);
        } else {
          toast.error("Failed to load job details");
        }
      } catch (error) {
        console.error("Error fetching job:", error);
        toast.error("Failed to load job details");
      } finally {
        setIsLoadingJob(false);
      }
    };

    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  const handleFindMatches = async () => {
    router.push(`/app/job-offer/${jobId}/matches`);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-700";
      case "draft":
        return "bg-amber-100 text-amber-700";
      case "closed":
        return "bg-stone-100 text-stone-700";
      default:
        return "bg-stone-100 text-stone-700";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <AppLayout>
      <div className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <button
            onClick={() => router.push("/app/job-offer")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Job Offers</span>
          </button>

          {isLoadingJob ? (
            // Job Skeleton
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 mb-6 animate-pulse">
              <div className="h-8 w-3/4 bg-stone-200 rounded mb-4" />
              <div className="h-4 w-32 bg-stone-200 rounded mb-6" />
              <div className="flex gap-4 mb-6">
                <div className="h-4 w-24 bg-stone-200 rounded" />
                <div className="h-4 w-32 bg-stone-200 rounded" />
                <div className="h-4 w-28 bg-stone-200 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-stone-200 rounded" />
                <div className="h-4 w-full bg-stone-200 rounded" />
                <div className="h-4 w-3/4 bg-stone-200 rounded" />
              </div>
            </div>
          ) : job ? (
            <>
              {/* Job Details Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 mb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-stone-800 mb-2">{job.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-stone-600 mb-4">
                      {job.department && (
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.department}
                        </span>
                      )}
                      {job.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      )}
                      {job.salary_range && (
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary_range}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(job.created_at)}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      job.status
                    )}`}
                  >
                    {job.status}
                  </span>
                </div>

                {/* Description */}
                <div className="prose prose-stone max-w-none mb-6">
                  {job.description.split("\n").map((line, index) => {
                    if (line.startsWith("# ")) {
                      return (
                        <h1 key={index} className="text-2xl font-bold text-stone-800 mb-3">
                          {line.slice(2)}
                        </h1>
                      );
                    } else if (line.startsWith("## ")) {
                      return (
                        <h2 key={index} className="text-xl font-semibold text-stone-700 mt-4 mb-2">
                          {line.slice(3)}
                        </h2>
                      );
                    } else if (line.startsWith("- ")) {
                      return (
                        <li key={index} className="ml-6 text-stone-600 mb-1 list-disc">
                          {line.slice(2)}
                        </li>
                      );
                    } else if (line.trim() === "") {
                      return <br key={index} />;
                    } else {
                      return (
                        <p key={index} className="text-stone-600 mb-2">
                          {line}
                        </p>
                      );
                    }
                  })}
                </div>

                {/* Find Matches Button */}
                <button
                  onClick={handleFindMatches}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-500 to-sky-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  <TrendingUp className="w-5 h-5" />
                  Find Matching Candidates
                </button>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-12 text-center">
              <p className="text-stone-600">Job not found</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
