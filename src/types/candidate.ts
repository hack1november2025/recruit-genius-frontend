export interface Candidate {
  name: string;
  email: string;
  phone: string | null;
  resume_text: string | null;
  resume_url: string | null;
  skills: string[];
  experience_years: string | null;
  education: string | null;
  notes: string | null;
  id: number;
  status: string;
  analysis: Record<string, unknown> | null;
  created_at: string;
  updated_at: string | null;
}
