import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { CriarProjetoDto } from './dto/criar-projeto.dto';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) { }

  @Post()
  async criar(@Body() body: CriarProjetoDto) {
    return await this.projetoService.criar(body);
  }

  @Get()
  async listar() {
    return await this.projetoService.listar();
  }

  @Get(':id')
  async buscar(@Param('id', ParseIntPipe) id: number) {
    return await this.projetoService.buscarPorId(id);
  }
}
