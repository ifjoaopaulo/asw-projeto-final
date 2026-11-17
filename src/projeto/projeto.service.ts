import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Projeto } from './projeto.entity';
import { Repository } from 'typeorm';
<<<<<<< HEAD
<<<<<<< HEAD
import { ProjetoContract } from './projeto.contract';

@Injectable()
export class ProjetoService implements ProjetoContract{
=======

@Injectable()
export class ProjetoService {
>>>>>>> 294e876 (Projeto service and entity)
=======
import { ProjetoContract } from './projeto.contract';

@Injectable()
export class ProjetoService implements ProjetoContract{
>>>>>>> 11de0a2 (Projeto complete)
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
<<<<<<< HEAD
            throw new NotFoundException(`O projeto com o ID: ${id}, não existe.`);
=======
            throw new NotFoundException(`O projeto com o ID: ${idx}, não existe.`);
>>>>>>> 294e876 (Projeto service and entity)
=======
            throw new NotFoundException(`O projeto com o ID: ${id}, não existe.`);
>>>>>>> 11de0a2 (Projeto complete)
        }

        return idx;
    }

    async existe(id: number): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
        const projeto = await this.projetoRepository.findOneBy({ id });
        return projeto !== null;
    }
}
=======
        
    }
}
>>>>>>> 294e876 (Projeto service and entity)
=======
        const projeto = await this.projetoRepository.findOneBy({ id });
        return projeto !== null;
    }
}
>>>>>>> 11de0a2 (Projeto complete)
