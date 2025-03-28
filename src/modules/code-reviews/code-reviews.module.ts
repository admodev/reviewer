import { Module } from '@nestjs/common';
import { CodeReviewsController } from './infrastructure/code-reviews.controller';
import { CodeReviewsService } from './application/code-reviews.service';

@Module({
  controllers: [CodeReviewsController],
  providers: [CodeReviewsService],
})
export class CodeReviewsModule {}
