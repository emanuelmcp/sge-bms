import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  ParseIntPipe,
  Redirect,
} from '@nestjs/common';
import { CreateRoleDto } from 'src/shared/dto/create-role.dto';
import { UpdateRoleDto } from 'src/shared/dto/update-role.dto';
import { RoleService } from '../role/role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('create')
  @Render('create-role')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async showRoleCreationForm() {}

  @Get('/update/:id')
  @Render('update-role')
  async showRoleUpdatingForm(@Param('id', ParseIntPipe) id: number) {
    const role = await this.roleService.findOne(id);
    return { role };
  }

  @Get()
  @Render('roles')
  async viewAllRoles() {
    const roles = await this.roleService.findAll();
    return { roles };
  }

  @Post()
  @Redirect('role')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Get('/delete/:id')
  @Redirect('/role')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.remove(id);
  }
}
