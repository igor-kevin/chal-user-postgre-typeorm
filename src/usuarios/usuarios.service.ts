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
  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  @Get('id')
  async findOne(@Param('id') id: number): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({ where: { id } })

  }

  @Put('id')
  async update(@Param('id') id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    let usuario = await this.usuarioRepository.findOne({ where: { id } })
    if (!usuario) {
      throw new NotFoundException('Não achou pelo ID')
    }
    return await this.usuarioRepository.save({ ...usuario, ...updateUsuarioDto })

  }

  @Delete('id')
  remove(@Param('id') id: number) {
    return `This action removes a #${id} usuario`;
  }
}
