import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { IncidencesService } from './incidences.service';
import { CreateIncidenceDto } from './dto/create-incidence.dto';
import { UpdateIncidenceDto } from './dto/update-incidence.dto';

@Controller('incidences')
export class IncidencesController {
  constructor(private readonly incidencesService: IncidencesService) {}

  @Post()
  create(@Body() createIncidenceDto: CreateIncidenceDto) {
    return this.incidencesService.create(createIncidenceDto);
  }

  @Get()
  @Render('incidences')
  async viewAllIncidences() {
    const incidences = await this.incidencesService.findAll();
    return { incidences };
  }

  @Get('create')
  @Render('createincidence')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async showIncidenceCreationForm() {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidencesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIncidenceDto: UpdateIncidenceDto,
  ) {
    return this.incidencesService.update(+id, updateIncidenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidencesService.remove(+id);
  }
}
