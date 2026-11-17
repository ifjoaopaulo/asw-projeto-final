import { Module } from '@nestjs/common';
import { ProjetoController } from './projeto.controller';
import { ProjetoService } from './projeto.service';
import { PROJETO_CONTRACT } from './projeto.contract';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projeto } from './projeto.entity';
=======
>>>>>>> daaabf0 (Adicionado contrato público de projeto/)


@Module({
  imports: [TypeOrmModule.forFeature([Projeto])],
  controllers: [ProjetoController],
  providers: [ProjetoService, { provide: PROJETO_CONTRACT, useExisting: ProjetoService }],
  exports: [PROJETO_CONTRACT]
})
export class ProjetoModule { }
