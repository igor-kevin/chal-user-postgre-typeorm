import { Delete, Get, Injectable, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {

  @Post()
  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }


  @Get()
  findAll() {
    return `This action returns all usuarios`;
  }

  @Get('id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} usuario`;
  }

  @Put('id')
  async update(@Param('id') id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  @Delete('id')
  remove(@Param('id') id: number) {
    return `This action removes a #${id} usuario`;
  }
}
