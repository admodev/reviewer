import { Module } from '@nestjs/common';
import { AppService } from './application/app.service';
import { CodeReviewsModule } from '../code-reviews/code-reviews.module';
import { AppController } from './infrastructure/app.controller';

@Module({
  imports: [CodeReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
