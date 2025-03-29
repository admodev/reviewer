export interface CodeReviewRequest {
  code: string;
  language: string;
}

export interface CodeReviewFeedback {
  summary: string;
  issues: { line: number; message: string }[];
  recommendations: string;
}
