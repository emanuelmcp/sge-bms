import { Module } from '@nestjs/common';
import { IncidencesService } from './incidences.service';
import { IncidencesController } from './incidences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incidence } from './entities/incidence.entity';

@Module({
  controllers: [IncidencesController],
  providers: [IncidencesService],
  imports: [TypeOrmModule.forFeature([Incidence])],
})
export class IncidencesModule {}
