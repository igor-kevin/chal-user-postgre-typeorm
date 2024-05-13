import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Publicacao } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Publicacao])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule { }
