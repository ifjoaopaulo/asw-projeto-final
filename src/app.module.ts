import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetoModule } from './projeto/projeto.module';
import { TarefaModule } from './tarefa/tarefa.module';

@Module({
  imports: [ProjetoModule, TarefaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
