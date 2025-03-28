import { Injectable } from '@nestjs/common';

@Injectable()
export class CodeReviewsService {
  getProjectToReview(projectName: string) {
    console.log(`Getting data for project: ${projectName}`);
  }
}
