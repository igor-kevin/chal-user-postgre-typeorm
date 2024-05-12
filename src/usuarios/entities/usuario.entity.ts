import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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


}
