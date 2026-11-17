import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';
import { PROJETO_CONTRACT, type ProjetoContract } from 'src/projeto/projeto.contract';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';

@Injectable()
export class TarefaService {
  constructor(
    @InjectRepository(Tarefa)
    private readonly tarefaRepositorio: Repository<Tarefa>,
    @Inject(PROJETO_CONTRACT)
    private readonly projetoContrato: ProjetoContract,
  ) { };

  async criar(dados: CriarTarefaDto): Promise<Tarefa> {
    if (await this.projetoContrato.existe(dados.projetoId) === false) {
      throw new NotFoundException(`Projeto com id ${dados.projetoId} não existe.`);
    }

    const tarefa: Tarefa = this.tarefaRepositorio.create(dados);
    return await this.tarefaRepositorio.save(tarefa);
  }

  async listar(): Promise<Tarefa[]> {
    return await this.tarefaRepositorio.find();
  }

  async buscarPorProjeto(projetoId: number): Promise<Tarefa[]> {
    if (await this.projetoContrato.existe(projetoId) === false) {
      throw new NotFoundException(`Projeto com id ${projetoId} não existe.`);
    }

    return await this.tarefaRepositorio.find({ where: { projetoId } });
  }
}
