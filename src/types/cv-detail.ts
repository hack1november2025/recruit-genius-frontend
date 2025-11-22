export interface CvDetail {
  candidate_id: number;
  id: number;
  original_text: string;
  translated_text: string;
  original_language: string;
  file_name: string;
  file_path: string;
  file_size_bytes: number;
  extracted_name: string | null;
  extracted_email: string | null;
  extracted_phone: string | null;
  structured_metadata: {
    full_name?: string;
    email?: string;
    phone?: string;
    location?: string;
    linkedin_url?: string | null;
    github_url?: string | null;
    portfolio_url?: string | null;
    professional_summary?: string | null;
    years_of_experience?: number;
    technical_skills?: string[];
    soft_skills?: string[];
    languages?: Array<{
      language: string;
      proficiency: string;
    }>;
    work_experience?: Array<{
      company: string;
      position: string;
      start_date: string;
      end_date: string;
      duration_months: number;
      responsibilities: string[];
      technologies: string[];
    }>;
    total_experience_months?: number;
    education?: Array<{
      institution: string;
      degree: string;
      field_of_study: string;
      graduation_year: number;
      gpa?: string | null;
    }>;
    highest_education_level?: string;
    certifications?: string[];
    projects?: Array<{
      name: string;
      description: string;
      [key: string]: unknown;
    }>;
    publications?: string[];
    awards?: string[];
    has_employment_gaps?: boolean;
    employment_gap_details?: string | null;
    career_progression?: string;
    [key: string]: unknown;
  };
  is_processed: boolean;
  is_translated: boolean;
  created_at: string;
  updated_at: string;
}
