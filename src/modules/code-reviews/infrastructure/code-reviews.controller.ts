import { Controller, Get } from '@nestjs/common';
import { CodeReviewsService } from '../application/code-reviews.service';

@Controller('code-reviews')
export class CodeReviewsController {
  private codeReviewsService: CodeReviewsService;

  constructor(private readonly codeReviewsServiceImpl: CodeReviewsService) {
    this.codeReviewsService = codeReviewsServiceImpl;
  }

  @Get()
  getProjectToReviewData(): string {
    return '';
  }
}
