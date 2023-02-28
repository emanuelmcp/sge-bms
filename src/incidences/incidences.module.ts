import { Module } from '@nestjs/common';
import { IncidencesService } from './incidences.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incidence } from '../shared/entities/incidence.entity';
import { IncidencesController } from 'src/controllers/incidences.controller';

@Module({
  controllers: [IncidencesController],
  providers: [IncidencesService],
  imports: [TypeOrmModule.forFeature([Incidence])],
})
export class IncidencesModule {}
