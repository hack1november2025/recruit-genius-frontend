"use client";

import { Sparkles, Users, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 md:px-6 py-20 md:py-32">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-20%] left-[-15%] w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
      <div className="absolute top-[10%] right-[-10%] w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              AI-Powered Recruitment Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
            Revolutionize Your
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Hiring Process
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Streamline recruitment with AI-driven job offers, intelligent CV
            evaluation, and a conversational agent that makes hiring faster,
            smarter, and more efficient.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="/login"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-500 to-sky-500 text-white text-lg font-semibold rounded-full shadow-lg shadow-violet-500/30 hover:scale-105 transition-transform duration-300 text-center"
            >
              Login
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 text-amber-500 fill-amber-500" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">90%</div>
              <div className="text-sm text-stone-600">Faster Job Posting</div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-violet-500" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">85%</div>
              <div className="text-sm text-stone-600">Better Candidate Match</div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-8 h-8 text-sky-500" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">70%</div>
              <div className="text-sm text-stone-600">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
