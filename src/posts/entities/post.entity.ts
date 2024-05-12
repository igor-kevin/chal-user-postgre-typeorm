import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    conteudo: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.posts)
    usuario: Usuario;
}
