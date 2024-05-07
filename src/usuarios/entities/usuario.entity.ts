import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 120 })
    nome: string;

    @Column({ type: "varchar", length: 90 })
    email: string;

    @Column({ type: "tinyint", unsigned: true })
    idade: number;

    @Column({ type: 'varchar', length: 2 })
    nacionalidade: string;

    @Column()
    profissao: string;


}
