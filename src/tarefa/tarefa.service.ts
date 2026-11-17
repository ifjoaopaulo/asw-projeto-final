import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';
import { PROJETO_CONTRACT, type ProjetoContract } from 'src/projeto/projeto.contract';

@Injectable()
export class TarefaService {
  constructor(
    @InjectRepository(Tarefa)
    private readonly tarefaRepositorio: Repository<Tarefa>,
    @Inject(PROJETO_CONTRACT)
    private readonly projetoContrato: ProjetoContract,
  ) { };

  async criar(dados: { projetoId: number; titulo: string; status: string }): Promise<Tarefa> {
    const tarefa: Tarefa = this.tarefaRepositorio.create(dados);
    return await this.tarefaRepositorio.save(tarefa);
  }

  async listar(): Promise<Tarefa[]> {
    return await this.tarefaRepositorio.find();
  }

  async buscarPorProjeto(projetoId: number): Promise<Tarefa[]> {

  }
}
