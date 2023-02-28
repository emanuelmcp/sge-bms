import { IsString } from 'class-validator';
import { IsEmail, IsInt } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  companyName: string;

  @IsInt()
  postalCode: number;

  @IsString()
  city: string;

  @IsString()
  region: string;

  @IsString()
  cif: string;

  @IsEmail()
  email: string;

  @IsString()
  numberPhone: string;

  @IsString()
  contactName: string;
}
