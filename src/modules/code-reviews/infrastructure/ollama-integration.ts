import {
  CodeReviewFeedback,
  CodeReviewRequest,
} from '../domain/code-review.types';

export interface AiIntegration {
  analyze(request: CodeReviewRequest): Promise<CodeReviewFeedback>;
}
