import { Test, TestingModule } from '@nestjs/testing';
import { ActoresController } from './actores.controller';

describe('ActoresController', () => {
  let controller: ActoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActoresController],
    }).compile();

    controller = module.get<ActoresController>(ActoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
