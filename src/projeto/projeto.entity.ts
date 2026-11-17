import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('projetos')
export class Projeto {
    @PrimaryGeneratedColumn('increment')
<<<<<<< HEAD
<<<<<<< HEAD
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    nome!: string;

    @Column({ type: 'text', nullable: true })
    descricao!: string;

    @CreateDateColumn()
    criadoEm!: Date;
=======
    id: number;
=======
    id!: number;
>>>>>>> 11de0a2 (Projeto complete)

    @Column({ type: 'varchar', length: 100 })
    nome!: string;

    @Column({ type: 'text', nullable: true })
    descricao!: string;

    @CreateDateColumn()
<<<<<<< HEAD
    criadoEm: Date;
>>>>>>> 294e876 (Projeto service and entity)
=======
    criadoEm!: Date;
>>>>>>> 11de0a2 (Projeto complete)
}