import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacao } from 'src/posts/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Publicacao])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuarioModule { }