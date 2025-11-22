"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot, User } from "lucide-react";
import { toast } from "sonner";
import AppLayout from "@/components/AppLayout";
import type { ChatMessage, ChatRequest, ChatResponse } from "@/types/chat";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function CvChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [threadId, setThreadId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const requestBody: ChatRequest = {
        query: userMessage.content,
        user_identifier: "web_user",
      };

      if (threadId) {
        requestBody.thread_id = threadId;
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/chat/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data: ChatResponse = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setThreadId(data.thread_id);

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: data.response_text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
      
      const errorMessage: ChatMessage = {
        role: "assistant",
        content: "Sorry, I encountered an error processing your request. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderMessageContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      // Bold text
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={`line-${index}`} className="font-bold text-stone-800 mb-2">
            {line.slice(2, -2)}
          </p>
        );
      }
      
      // Numbered list (e.g., "1. **Candidate:")
      if (/^\d+\.\s\*\*/.test(line)) {
        const [num, ...rest] = line.split("**");
        const title = rest[0] || "";
        return (
          <p key={`line-${index}`} className="font-bold text-violet-700 mb-2 mt-4">
            {num}
            {title}
          </p>
        );
      }
      
      // List items with dashes
      if (line.trim().startsWith("- **")) {
        const match = line.match(/- \*\*(.*?)\*\*:\s*(.*)/);
        if (match) {
          return (
            <p key={`line-${index}`} className="ml-4 mb-1">
              <span className="font-semibold text-stone-700">{match[1]}:</span>
              <span className="text-stone-600"> {match[2]}</span>
            </p>
          );
        }
      }
      
      // Simple list items
      if (line.trim().startsWith("- ")) {
        return (
          <li key={`line-${index}`} className="ml-6 text-stone-600 mb-1 list-disc">
            {line.slice(2)}
          </li>
        );
      }
      
      // Empty lines
      if (line.trim() === "") {
        return <br key={`line-${index}`} />;
      }
      
      // Regular text
      return (
        <p key={`line-${index}`} className="text-stone-600 mb-2">
          {line}
        </p>
      );
    });
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-stone-800">CV Chat</h1>
            <p className="text-stone-600 mt-1">
              Ask questions about candidates and their CVs
            </p>
            {threadId && (
              <p className="text-xs text-stone-500 mt-2 font-mono">
                Thread: {threadId}
              </p>
            )}
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-stone-50">
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.length === 0 ? (
              // Welcome Message
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-500 flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">
                  Welcome to CV Chat!
                </h3>
                <p className="text-stone-600 mb-4">
                  Ask me anything about your candidates and their CVs.
                </p>
                <div className="text-left max-w-md mx-auto bg-white rounded-xl p-4 text-sm text-stone-600">
                  <p className="font-semibold text-stone-800 mb-2">Try asking:</p>
                  <ul className="space-y-1 list-disc ml-4">
                    <li>"Find me senior Python developers"</li>
                    <li>"Who has AWS experience?"</li>
                    <li>"Compare Java developers by experience"</li>
                    <li>"Show me candidates from London"</li>
                  </ul>
                </div>
              </div>
            ) : (
              // Messages
              messages.map((message, idx) => (
                <div
                  key={`msg-${idx}`}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-3xl rounded-2xl p-4 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-violet-500 to-sky-500 text-white"
                        : "bg-white border border-stone-200 shadow-sm"
                    }`}
                  >
                    {message.role === "user" ? (
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    ) : (
                      <div className="prose prose-sm max-w-none">
                        {renderMessageContent(message.content)}
                      </div>
                    )}
                  </div>
                  {message.role === "user" && (
                    <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-stone-600" />
                    </div>
                  )}
                </div>
              ))
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="max-w-3xl rounded-2xl p-4 bg-white border border-stone-200 shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-stone-200 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about candidates, skills, experience..."
                className="flex-1 px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white rounded-xl hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                Send
              </button>
            </div>
            <p className="text-xs text-stone-500 mt-2">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
