"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Users, FileText, LayoutDashboard } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import type { Candidate } from "@/types/candidate";
import type { Job } from "@/types/job";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [candidatesCount, setCandidatesCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candidatesResponse, jobsResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/api/v1/candidates?skip=0&limit=100`),
          fetch(`${API_BASE_URL}/api/v1/jobs?skip=0&limit=100`),
        ]);

        if (candidatesResponse.ok) {
          const candidates: Candidate[] = await candidatesResponse.json();
          setCandidatesCount(candidates.length);
        }

        if (jobsResponse.ok) {
          const jobs: Job[] = await jobsResponse.json();
          setJobsCount(jobs.length);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppLayout>
      <div className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Welcome to Your Dashboard
            </h2>
            <p className="text-stone-600">
              Manage your recruitment process with AI-powered insights
            </p>
          </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-violet-600" />
                  </div>
                </div>
                {isLoading ? (
                  <>
                    <div className="h-8 w-16 bg-stone-200 rounded animate-pulse mb-2" />
                    <div className="h-4 w-32 bg-stone-200 rounded animate-pulse" />
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-800">{candidatesCount}</h3>
                    <p className="text-sm text-stone-600">Total Candidates</p>
                  </>
                )}
              </div>

              <div className="bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-sky-600" />
                  </div>
                </div>
                {isLoading ? (
                  <>
                    <div className="h-8 w-16 bg-stone-200 rounded animate-pulse mb-2" />
                    <div className="h-4 w-32 bg-stone-200 rounded animate-pulse" />
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-800">{jobsCount}</h3>
                    <p className="text-sm text-stone-600">Active Job Offers</p>
                  </>
                )}
              </div>
            </div>

            {/* Empty State */}
            <div className="bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-3xl shadow-lg p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-500 flex items-center justify-center mx-auto mb-6">
                  <LayoutDashboard className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  Get Started with Recruit Genius
                </h3>
                <p className="text-stone-600 mb-6">
                  Your dashboard is ready. Start by creating your first job offer or uploading candidate CVs to begin the AI-powered recruitment process.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button 
                    onClick={() => router.push("/app/job-offer/new")}
                    className="px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
                  >
                    Create Job Offer
                  </button>
                  <button 
                    onClick={() => router.push("/app/upload-cv")}
                    className="px-6 py-3 bg-stone-100 text-stone-700 font-semibold rounded-xl hover:bg-stone-200 transition-colors"
                  >
                    Upload CVs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
