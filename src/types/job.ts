export interface Job {
  title: string;
  description: string;
  department: string | null;
  location: string | null;
  salary_range: string | null;
  additional_metadata: Record<string, unknown> | null;
  id: number;
  status: string;
  created_at: string;
  updated_at: string | null;
}
