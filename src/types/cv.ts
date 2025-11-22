export interface CvUploadResponse {
  cv_id: string;
  candidate_id: string;
  metadata: {
    email?: string;
    name?: string;
    phone?: string;
    language?: string;
    [key: string]: unknown;
  };
}
