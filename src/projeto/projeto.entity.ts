import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('projetos')
export class Projeto {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 100 })
    nome: string;

    @Column({ type: 'text', nullable: true })
    descricao: string;

    @CreateDateColumn()
    criadoEm: Date;
}