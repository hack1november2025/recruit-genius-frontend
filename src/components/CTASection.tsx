"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="px-4 md:px-6 py-20 md:py-24 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-violet-500 to-sky-500 rounded-3xl p-8 md:p-16 text-white shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Join the AI Recruitment Revolution
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Transform
              <br />
              Your Hiring Process?
            </h2>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Join hundreds of HR teams using AI to streamline recruitment,
              reduce time-to-hire by 70%, and find better candidates faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="group w-full sm:w-auto px-8 py-4 bg-white text-violet-600 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white text-lg font-semibold rounded-full hover:bg-white/30 transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-stone-600">
            Have questions? Contact us at{" "}
            <a
              href="mailto:valerio.silva@klx.pt"
              className="text-violet-600 font-semibold hover:underline"
            >
              valerio.silva@klx.pt
            </a>
          </p>
          <p className="text-sm text-stone-500">
            Built by the Hackathon Team • Version 1.0 • November 2025
          </p>
        </div>
      </div>
    </section>
  );
}
