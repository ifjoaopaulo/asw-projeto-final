import { Module } from '@nestjs/common';
import { TarefaController } from './tarefa.controller';
import { TarefaService } from './tarefa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './tarefa.entity';
import { ProjetoModule } from 'src/projeto/projeto.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tarefa]), ProjetoModule],
  controllers: [TarefaController],
  providers: [TarefaService]
})

export class TarefaModule { }
