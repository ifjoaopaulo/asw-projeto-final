import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa.entity';

@Controller()
export class TarefaController {
  constructor(
    private readonly tarefaService: TarefaService,
  ) { }

  @Get('tarefas')
  async listar(): Promise<Tarefa[]> {
    return await this.tarefaService.listar();
  }

  @Get('projetos/:id/tarefas')
  async buscarPorProjeto(@Param('id', ParseIntPipe) id: number): Promise<Tarefa[]> {
    return await this.tarefaService.buscarPorProjeto(id);
  }

  @Post('tarefas')
  async criar(@Body() body: { projetoId: number, titulo: string, status: string }): Promise<Tarefa> {
    return await this.tarefaService.criar(body);
  }
}
