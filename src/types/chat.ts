export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatRequest {
  query: string;
  thread_id?: string;
  user_identifier?: string;
}

export interface ChatResponse {
  thread_id: string;
  response_text: string;
  structured_response: {
    type: string;
    agent_used_tools: boolean;
  };
  candidate_ids: number[];
  error: string | null;
}
