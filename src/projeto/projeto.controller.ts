import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProjetoService } from './projeto.service';

@Controller('projetos')
export class ProjetoController {
    constructor(private readonly projetoService: ProjetoService){}

    @Post()
    async criar(@Body() body: { nome: string; descricao?: string }) {
        const resultado = await this.projetoService.criar(body);
        return resultado;
    }

    @Get()
    async listar(){
        return await this.projetoService.listar();
    }

    @Get(':id')
    async buscar(@Param('id', ParseIntPipe) id: number) {
        return await this.projetoService.buscarPorId(id);
    }
}