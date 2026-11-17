import { Module } from '@nestjs/common';
import { ProjetoController } from './projeto.controller';
import { ProjetoService } from './projeto.service';
import { PROJETO_CONTRACT } from './projeto.contract';


@Module({
  controllers: [ProjetoController],
  providers: [ProjetoService, { provide: PROJETO_CONTRACT, useExisting: ProjetoService }],
  exports: [PROJETO_CONTRACT]
})
export class ProjetoModule { }
