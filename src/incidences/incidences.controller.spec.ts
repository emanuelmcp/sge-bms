import { Test, TestingModule } from '@nestjs/testing';
import { IncidencesController } from './incidences.controller';
import { IncidencesService } from './incidences.service';

describe('IncidencesController', () => {
  let controller: IncidencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidencesController],
      providers: [IncidencesService],
    }).compile();

    controller = module.get<IncidencesController>(IncidencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
