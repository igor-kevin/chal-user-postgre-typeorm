import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Publicacao } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Publicacao)
    private readonly publicacaoRepository: Repository<Publicacao>,
  ) { }

  async create(createPostDto: CreatePostDto): Promise<Publicacao> {
    return this.publicacaoRepository.save(createPostDto);
  }

  async findAll(): Promise<Publicacao[]> {
    return await this.publicacaoRepository.find();
  }

  async findOne(id: number): Promise<Publicacao> {
    const publicacao = await this.publicacaoRepository.findOne({ where: { id } });
    if (!publicacao) {
      throw new NotFoundException('Não achou a publicação');
    }
    return publicacao;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Publicacao> {
    const publicacao = await this.publicacaoRepository.findOne({ where: { id } });
    if (!publicacao) {
      throw new NotFoundException('Não achou a publicação');
    }
    return this.publicacaoRepository.create({ ...publicacao, ...updatePostDto })
  }

  async remove(id: number): Promise<void> {
    const publicacao = await this.publicacaoRepository.findOne({ where: { id } });
    if (!publicacao) {
      throw new NotFoundException('Não achou a publicação');
    }
    await this.publicacaoRepository.delete(publicacao)
  }
}
