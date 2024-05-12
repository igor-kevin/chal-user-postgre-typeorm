import { Post } from "src/posts/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 120 })
    nome: string;

    @Column({ type: "varchar", length: 90 })
    email: string;

    @Column({ type: "int", unsigned: true })
    idade: number;

    @Column({ type: 'varchar', length: 2 })
    nacionalidade: string;

    @Column({ type: 'varchar', length: 50 })
    profissao: string;

    @OneToMany(() => Post, (post) => post.usuario)
    posts: Post[]
}
