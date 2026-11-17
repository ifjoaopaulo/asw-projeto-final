import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Projeto } from './projeto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjetoService {
    constructor(
        @InjectRepository(Projeto)
        private readonly projetoRepository: Repository<Projeto>,
    ){}

    async criar(dados: { nome: string; descricao?:string }): Promise<Projeto> {
        const projeto = this.projetoRepository.create(dados);
        return await this.projetoRepository.save(projeto);
    }

    async listar(): Promise<Projeto[]> {
        return await this.projetoRepository.find();
    }

    async buscarPorId(id: number): Promise<Projeto> {
        const idx = await this.projetoRepository.findOneBy({ id });
        if(idx === null){
            throw new NotFoundException(`O projeto com o ID: ${idx}, não existe.`);
        }

        return idx;
    }

    async existe(id: number): Promise<boolean> {
        
    }
}
