"use client";

import { useRouter } from "next/navigation";
import { LayoutDashboard, Users, FileText, MessageSquare, LogOut, Upload, Send } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col">
        <div className="p-6 border-b border-stone-200">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-sky-500 bg-clip-text text-transparent">
            Recruit Genius
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a
            href="/app"
            className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 rounded-xl font-medium transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <button
            onClick={() => router.push("/app/candidates")}
            className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 rounded-xl font-medium transition-colors w-full text-left"
          >
            <Users className="w-5 h-5" />
            <span>Candidates</span>
          </button>
          <button
            onClick={() => router.push("/app/job-offer")}
            className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 rounded-xl font-medium transition-colors w-full text-left"
          >
            <FileText className="w-5 h-5" />
            <span>Job Offers</span>
          </button>
          <button
            onClick={() => router.push("/app/upload-cv")}
            className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 rounded-xl font-medium transition-colors w-full text-left"
          >
            <Upload className="w-5 h-5" />
            <span>Upload CV</span>
          </button>
          <button
            onClick={() => router.push("/app/cv-chat")}
            className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 rounded-xl font-medium transition-colors w-full text-left"
          >
            <MessageSquare className="w-5 h-5" />
            <span>CV Chat</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-100 rounded-xl font-medium transition-colors w-full text-left"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative">
        {children}
        
        {/* Floating Telegram Button */}
        <a
          href="https://t.me/ai_recruiter_assitant_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 group"
        >
          <div className="flex items-center gap-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center">
              <Send className="w-6 h-6" />
            </div>
            <div className="hidden group-hover:block pr-2">
              <p className="font-semibold text-sm whitespace-nowrap">Talk with Gen</p>
              <p className="text-xs opacity-90 whitespace-nowrap">AI Recruiter Assistant</p>
            </div>
          </div>
        </a>
      </main>
    </div>
  );
}
