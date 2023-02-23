import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Render,
} from '@nestjs/common';
import { IncidencesService } from './incidences.service';
import { CreateIncidenceDto } from './dto/create-incidence.dto';
import { UpdateIncidenceDto } from './dto/update-incidence.dto';

@Controller('incidences')
export class IncidencesController {
  constructor(private readonly incidencesController: IncidencesController) {}

  @Get()
  @Render('incidences')
  async viewAllIncidences() {
    const incidences = await this.incidencesController.viewAllIncidences();
    return { incidences };
  }

  //@Get()
  //@Render('create')
  //// eslint-disable-next-line @typescript-eslint/no-empty-function
  //createIncidence() {}

  //@Get(':id')
  //findOne(@Param('id') id: string) {
  //  return this.incidencesService.findOne(+id);
  //}
  //
  //@Patch(':id')
  //update(
  //  @Param('id') id: string,
  //  @Body() updateIncidenceDto: UpdateIncidenceDto,
  //) {
  //  return this.incidencesService.update(+id, updateIncidenceDto);
  //}
//
  //@Delete(':id')
  //remove(@Param('id') id: string) {
  //  return this.incidencesService.remove(+id);
  //}
}
