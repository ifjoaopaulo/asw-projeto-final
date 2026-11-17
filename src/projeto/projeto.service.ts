import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Projeto } from './projeto.entity';
import { Repository } from 'typeorm';
import { ProjetoContract } from './projeto.contract';
import { CriarProjetoDto } from './dto/criar-projeto.dto';

@Injectable()
export class ProjetoService implements ProjetoContract {
  constructor(
    @InjectRepository(Projeto)
    private readonly projetoRepository: Repository<Projeto>,
  ) { }

  async criar(dados: CriarProjetoDto): Promise<Projeto> {
    const projeto = this.projetoRepository.create(dados);
    return await this.projetoRepository.save(projeto);
  }

  async listar(): Promise<Projeto[]> {
    return await this.projetoRepository.find();
  }

  async buscarPorId(id: number): Promise<Projeto> {
    const idx = await this.projetoRepository.findOneBy({ id });
    if (idx === null) {
      throw new NotFoundException(`O projeto com o ID: ${id}, não existe.`);
    }
    return idx;
  }

  async existe(id: number): Promise<boolean> {
    const projeto = await this.projetoRepository.findOneBy({ id });
    return projeto !== null;
  }
}
