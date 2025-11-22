"use client";

import {
  FileText,
  BarChart3,
  MessageSquare,
  Sparkles,
  Target,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI-Generated Job Offers",
    description:
      "Create comprehensive, well-structured job postings from brief descriptions in seconds. Our AI ensures consistency, quality, and inclusive language.",
    gradient: "from-violet-500 to-violet-600",
    bgGradient: "from-violet-50 to-violet-100",
  },
  {
    icon: Target,
    title: "Smart CV Evaluation",
    description:
      "Leverage 8 core metrics to objectively evaluate candidates: skills match, experience relevance, education fit, and achievement impact.",
    gradient: "from-sky-500 to-sky-600",
    bgGradient: "from-sky-50 to-sky-100",
  },
  {
    icon: MessageSquare,
    title: "CV Database Chat",
    description:
      "Interact with your candidate database using natural language. Available via web UI and Telegram for convenient mobile access.",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100",
  },
  {
    icon: BarChart3,
    title: "Interactive Dashboard",
    description:
      "Monitor recruitment metrics, track candidate pipelines, and gain AI-generated insights in real-time with our intuitive dashboard.",
    gradient: "from-amber-500 to-amber-600",
    bgGradient: "from-amber-50 to-amber-100",
  },
  {
    icon: Sparkles,
    title: "RAG-Powered Search",
    description:
      "Retrieval-Augmented Generation enables contextual candidate searches with follow-up questions and progressive filtering.",
    gradient: "from-pink-500 to-pink-600",
    bgGradient: "from-pink-50 to-pink-100",
  },
  {
    icon: Clock,
    title: "Reduce Time-to-Hire",
    description:
      "Automate repetitive tasks and focus on strategic decisions. Our platform cuts recruitment time by up to 70%.",
    gradient: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100",
  },
];

export function FeaturesSection() {
  return (
    <section className="px-4 md:px-6 py-20 md:py-24 bg-white/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Powerful Features for
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Modern HR Teams
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Everything you need to streamline your recruitment process and make
            data-driven hiring decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon
                  className={`w-7 h-7 bg-gradient-to-br ${feature.gradient} text-transparent`}
                  strokeWidth={2}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
