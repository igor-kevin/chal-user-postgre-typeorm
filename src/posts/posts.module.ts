import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [Usuario],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule { }
