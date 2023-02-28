import { Injectable } from '@nestjs/common';
import { CreateIncidenceDto } from '../shared/dto/create-incidence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Incidence } from '../shared/entities/incidence.entity';
import { Repository } from 'typeorm';
import { UpdateIncidenceDto } from 'src/shared/dto/update-incidence.dto';

@Injectable()
export class IncidencesService {
  constructor(
    @InjectRepository(Incidence)
    private readonly incidenceRepository: Repository<Incidence>,
  ) {}
  create(createIncidenceDto: CreateIncidenceDto) {
    return this.incidenceRepository.save(createIncidenceDto);
  }

  async findAll() {
    return await this.incidenceRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} incidence`;
  }

  update(id: number, updateIncidenceDto: UpdateIncidenceDto) {
    return `This action updates a #${id} incidence`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidence`;
  }
}
