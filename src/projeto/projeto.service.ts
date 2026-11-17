import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Projeto } from './projeto.entity';
import { Repository } from 'typeorm';
<<<<<<< HEAD
import { ProjetoContract } from './projeto.contract';

@Injectable()
export class ProjetoService implements ProjetoContract{
=======

@Injectable()
export class ProjetoService {
>>>>>>> 294e876 (Projeto service and entity)
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
<<<<<<< HEAD
            throw new NotFoundException(`O projeto com o ID: ${id}, não existe.`);
=======
            throw new NotFoundException(`O projeto com o ID: ${idx}, não existe.`);
>>>>>>> 294e876 (Projeto service and entity)
        }

        return idx;
    }

    async existe(id: number): Promise<boolean> {
<<<<<<< HEAD
        const projeto = await this.projetoRepository.findOneBy({ id });
        return projeto !== null;
    }
}
=======
        
    }
}
>>>>>>> 294e876 (Projeto service and entity)
