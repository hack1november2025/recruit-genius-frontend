"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FileText, Plus, Calendar, MapPin, DollarSign } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import type { Job } from "@/types/job";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function JobOffersPage() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/jobs?skip=0&limit=100`);
        if (response.ok) {
          const data: Job[] = await response.json();
          setJobs(data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

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
              <h1 className="text-3xl font-bold text-stone-800">Job Offers</h1>
              <p className="text-stone-600 mt-1">Manage and track your open positions</p>
            </div>
            <button
              onClick={() => router.push("/app/job-offer/new")}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create New
            </button>
          </div>

          {/* Jobs List */}
          <div className="space-y-4">
            {isLoading ? (
              // Skeleton Loaders
              Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 animate-pulse"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="h-6 w-64 bg-stone-200 rounded mb-2" />
                      <div className="h-4 w-32 bg-stone-200 rounded" />
                    </div>
                    <div className="h-6 w-16 bg-stone-200 rounded-full" />
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="h-4 w-24 bg-stone-200 rounded" />
                    <div className="h-4 w-32 bg-stone-200 rounded" />
                    <div className="h-4 w-28 bg-stone-200 rounded" />
                  </div>
                </div>
              ))
            ) : jobs.length === 0 ? (
              // Empty State
              <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-12 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-500 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">No Job Offers Yet</h3>
                <p className="text-stone-600 mb-6">
                  Create your first job offer to start finding the perfect candidates.
                </p>
                <button
                  onClick={() => router.push("/app/job-offer/new")}
                  className="px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Create Job Offer
                </button>
              </div>
            ) : (
              // Jobs List
              jobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => router.push(`/app/job-offer/${job.id}`)}
                  className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-stone-800 mb-1">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                        {job.department && (
                          <span className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
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
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </span>
                  </div>
                  <p className="text-stone-600 text-sm line-clamp-2">
                    {job.description.replace(/[#*]/g, "").substring(0, 200)}...
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
