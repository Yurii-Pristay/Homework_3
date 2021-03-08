import { Test, TestingModule } from '@nestjs/testing';
import { CCrudService } from './c-crud.service';

describe('CCrudService', () => {
  let service: CCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CCrudService],
    }).compile();

    service = module.get<CCrudService>(CCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
