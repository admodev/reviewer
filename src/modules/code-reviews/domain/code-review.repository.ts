import { CodeReviewFeedback } from './code-review.types';

export interface CodeReviewRepository {
  analyzeCode(code: string, language: string): Promise<CodeReviewFeedback>;
}
