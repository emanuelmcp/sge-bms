import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
  ParseIntPipe,
} from '@nestjs/common';
import { CompanyService } from '../company/company.service';
import { CreateCompanyDto } from '../shared/dto/create-company.dto';
import { UpdateCompanyDto } from '../shared/dto/update-company.dto';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('create')
  @Render('create-company')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async showCompanyCreationForm() {}

  @Get('update/:id')
  @Render('updatecompany')
  async showCompanyUpdatingForm(@Param('id', ParseIntPipe) id: number) {
    const company = await this.companyService.findOne(id);
    return { company };
  }

  @Get()
  @Render('companies')
  async viewAllCompanies() {
    const companies = await this.companyService.findAll();
    return { companies };
  }

  @Post()
  @Redirect('companies')
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Post(':id')
  update(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
