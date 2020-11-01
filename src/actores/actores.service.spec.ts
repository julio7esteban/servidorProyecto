import { Test, TestingModule } from '@nestjs/testing';
import { ActoresService } from './actores.service';

describe('ActoresService', () => {
  let service: ActoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActoresService],
    }).compile();

    service = module.get<ActoresService>(ActoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
