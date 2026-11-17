import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tarefas')
export class Tarefa {
  @PrimaryGeneratedColumn('increment')
  projetoId: number;

  @Column({ type: 'varchar', length: 50 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  status: string;
}
