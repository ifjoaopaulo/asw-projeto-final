import { Body, Controller, Get, Patch, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa.entity';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';

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
  async criar(@Body() body: CriarTarefaDto): Promise<Tarefa> {
    return await this.tarefaService.criar(body);
  }

  @Patch('tarefas/:id/status')
  atualizarStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: string },
  ) {
    return this.tarefaService.atualizarStatus(id, body.status);
  }

}
