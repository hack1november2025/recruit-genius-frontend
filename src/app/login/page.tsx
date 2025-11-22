"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Lock, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Hardcoded credentials check
    if (username === "user1" && password === "user1") {
      // Simulate loading
      setTimeout(() => {
        router.push("/app");
      }, 500);
    } else {
      setIsLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-4">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-20%] left-[-15%] w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
      <div className="absolute top-[10%] right-[-10%] w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob [animation-delay:2s]" />
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob [animation-delay:4s]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-full shadow-lg mb-4">
            <Sparkles className="w-5 h-5 text-violet-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Recruit Genius
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-stone-600">
            Sign in to access your recruitment dashboard
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-stone-200/80 rounded-3xl shadow-2xl p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-violet-500 to-sky-500 text-white text-base font-semibold rounded-xl shadow-lg shadow-violet-500/30 hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

            {/* Demo Credentials */}
            <div className="mt-4 p-4 bg-sky-50 border border-sky-200 rounded-xl">
              <p className="text-xs text-sky-700 text-center">
                <strong>Demo Credentials:</strong> user1 / user1
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-stone-500 mt-6">
          Recruit Genius © 2025 - AI-Powered Recruitment
        </p>
      </div>
    </div>
  );
}
