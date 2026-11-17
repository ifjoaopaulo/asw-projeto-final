import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tarefas')
export class Tarefa {
  @PrimaryGeneratedColumn('increment')
  tarefaId!: number;

  @Column({ type: 'integer' })
  projetoId!: number;

  @Column({ type: 'varchar', length: 50 })
  titulo!: string;

  @Column({ type: 'text' })
  status!: string;
}
