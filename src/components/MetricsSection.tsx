"use client";

import {
  Award,
  TrendingUp,
  CheckCircle2,
  BarChart2,
  Target,
  Clock,
  BookOpen,
  Zap,
} from "lucide-react";

const metrics = [
  {
    icon: Target,
    name: "Skills Match Score",
    range: "0-100%",
    description:
      "Measures overlap between job-required skills and candidate's extracted skills using semantic similarity.",
    color: "violet",
  },
  {
    icon: TrendingUp,
    name: "Experience Relevance",
    range: "0-10",
    description:
      "Calculates years of relevant experience weighted by recency. Recent roles score higher.",
    color: "sky",
  },
  {
    icon: BookOpen,
    name: "Education Fit Score",
    range: "0-10",
    description:
      "Evaluates degree level and field relevance. Includes certifications like AWS, PMP, etc.",
    color: "emerald",
  },
  {
    icon: Award,
    name: "Achievement Impact",
    range: "0-10",
    description:
      "Quantifies accomplishments by extracting metrics like 'increased sales by 20%' using NLP.",
    color: "amber",
  },
  {
    icon: BarChart2,
    name: "Keyword Density",
    range: "0-100%",
    description:
      "Density of job-specific terms, normalized to detect keyword stuffing or underuse.",
    color: "pink",
  },
  {
    icon: Clock,
    name: "Employment Gap Score",
    range: "0-10",
    description:
      "Identifies unexplained gaps longer than 6 months. Low scores trigger manual review.",
    color: "orange",
  },
  {
    icon: CheckCircle2,
    name: "Readability & Structure",
    range: "0-10",
    description:
      "Assesses CV clarity using Flesch-Kincaid readability, section organization, and length.",
    color: "indigo",
  },
  {
    icon: Zap,
    name: "AI Confidence Score",
    range: "0-100%",
    description:
      "Meta-metric on AI extraction reliability. Low confidence (<80%) suggests human verification.",
    color: "teal",
  },
];

const colorMap: Record<
  string,
  { bg: string; text: string; border: string; gradient: string }
> = {
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    gradient: "from-violet-500 to-violet-600",
  },
  sky: {
    bg: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-200",
    gradient: "from-sky-500 to-sky-600",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-emerald-600",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    gradient: "from-amber-500 to-amber-600",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-200",
    gradient: "from-pink-500 to-pink-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
    gradient: "from-orange-500 to-orange-600",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
    gradient: "from-indigo-500 to-indigo-600",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-200",
    gradient: "from-teal-500 to-teal-600",
  },
};

export function MetricsSection() {
  return (
    <section className="px-4 md:px-6 py-20 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-full shadow-lg mb-4">
            <BarChart2 className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-semibold text-slate-800">
              8 Core Evaluation Metrics
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Data-Driven
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Candidate Assessment
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Our AI analyzes CVs using 8 objective metrics, providing a
            comprehensive Overall Candidate Fit Score (0-100%) to help you make
            informed hiring decisions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric) => {
            const colors = colorMap[metric.color];
            return (
              <div
                key={metric.name}
                className="group bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <metric.icon className={`w-6 h-6 ${colors.text}`} />
                </div>

                {/* Title & Range */}
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {metric.name}
                </h3>
                <div
                  className={`inline-block px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} text-xs font-semibold mb-3`}
                >
                  {metric.range}
                </div>

                {/* Description */}
                <p className="text-stone-600 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Composite Score Card */}
        <div className="bg-gradient-to-r from-violet-500 to-sky-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Overall Candidate Fit Score
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Aggregate all 8 metrics into a single 0-100% score using
                weighted averages: 40% skills/experience, 30%
                education/achievements, 30% quality/risk. Weights are
                customizable per job type.
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="text-6xl font-bold">100%</div>
              <div className="text-sm text-white/80 text-center mt-1">
                Max Score
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
