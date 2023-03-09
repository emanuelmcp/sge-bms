import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from '../controllers/role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/shared/entities/role.entity';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [TypeOrmModule.forFeature([Role])],
})
export class RoleModule {}
