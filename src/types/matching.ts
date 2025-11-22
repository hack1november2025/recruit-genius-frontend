export interface MatchingCandidate {
  candidate_id: number;
  cv_id: number;
  name: string;
  current_role: string;
  match_score: number;
  semantic_similarity_score: number;
  skills_match_score: number;
  experience_relevance_score: number;
  education_fit_score: number;
  achievement_impact_score: number;
  keyword_density_score: number;
  employment_gap_score: number;
  readability_score: number;
  ai_confidence_score: number;
  experience: {
    total_years_experience: number;
    relevant_experience_years: number;
    relevant_summary: string;
  };
  seniority_match: string;
  location_match: {
    candidate_location: string;
    candidate_city: string;
    compatible: boolean;
  };
  overall_rationale: string;
  metrics_details: {
    semantic_similarity: number;
    weights_used: {
      skills_experience: number;
      education_achievements: number;
      quality_risk: number;
    };
    threshold_flags: {
      skills_below_70: boolean;
      confidence_below_80: boolean;
      employment_gaps_detected: boolean;
    };
  };
}

export interface MatchingSummary {
  role_title: string;
  primary_stack_or_domain: string;
  key_required_skills: string[];
  nice_to_have_skills: string[];
  hard_constraints_applied: string[];
  total_candidates_evaluated: number;
  top_candidates_returned: number;
}

export interface MatchingResponse {
  job_id: number;
  summary: MatchingSummary;
  candidates: MatchingCandidate[];
}
