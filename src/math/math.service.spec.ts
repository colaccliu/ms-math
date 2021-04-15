import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathService],
    }).compile();

    service = module.get<MathService>(MathService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('should be return correct count', () => {
    expect(service.calculateWordCount('a b c c')).toEqual({ a: 1, b: 1, c: 2})
    expect(service.calculateWordCount('c c c d')).toEqual({ c: 3, d: 1})
  })
});
