import { Delete, Get, Inject, Injectable, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ) { }

  @Post()
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(createUsuarioDto)
    return await this.usuarioRepository.save(usuario);
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
