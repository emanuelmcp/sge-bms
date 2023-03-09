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
import { IncidencesService } from 'src/incidences/incidences.service';
import { CreateIncidenceDto } from 'src/shared/dto/create-incidence.dto';
import { UpdateIncidenceDto } from 'src/shared/dto/update-incidence.dto';

@Controller('incidences')
export class IncidencesController {
  constructor(private readonly incidencesService: IncidencesService) {}

  @Get('create')
  @Render('create-incidence')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async showIncidenceCreationForm() {}

  @Get()
  @Render('incidences')
  async viewAllIncidences() {
    const incidences = await this.incidencesService.findAll();
    return { incidences };
  }

  @Post('create-incidence')
  create(@Body() createIncidenceDto: CreateIncidenceDto) {
    return this.incidencesService.create(createIncidenceDto);
  }

  @Get('incidences/:id')
  findOne(@Param('id') id: string) {
    return this.incidencesService.findOne(+id);
  }

  @Patch('incidences/:id')
  update(
    @Param('id') id: string,
    @Body() updateIncidenceDto: UpdateIncidenceDto,
  ) {
    return this.incidencesService.update(+id, updateIncidenceDto);
  }

  @Delete('incidences/:id')
  remove(@Param('id') id: string) {
    return this.incidencesService.remove(+id);
  }
}
