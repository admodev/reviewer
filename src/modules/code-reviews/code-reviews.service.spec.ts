import { Test, TestingModule } from '@nestjs/testing';
import { CodeReviewsService } from './application/code-reviews.service';

describe('CodeReviewsService', () => {
  let service: CodeReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeReviewsService],
    }).compile();

    service = module.get<CodeReviewsService>(CodeReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
