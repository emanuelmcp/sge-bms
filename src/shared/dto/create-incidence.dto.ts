import { IsString } from 'class-validator';

export class CreateIncidenceDto {
  @IsString()
  description: string;
}
