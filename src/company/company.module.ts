import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from '../controllers/company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../shared/entities/company.entity';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [TypeOrmModule.forFeature([Company])],
})
export class CompanyModule {}
