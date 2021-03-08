import { Test, TestingModule } from '@nestjs/testing';
import { CCrudController } from './c-crud.controller';

describe('CCrud Controller', () => {
  let controller: CCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CCrudController],
    }).compile();

    controller = module.get<CCrudController>(CCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
