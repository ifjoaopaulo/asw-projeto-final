import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjetoModule } from './projeto/projeto.module';
import { TarefaModule } from './tarefa/tarefa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',        // depois muda para o nome do serviço do Docker
      port: 5432,
      username: 'postgres',     // ajuste conforme seu docker-compose
      password: 'postgres',     // ajuste conforme seu docker-compose
      database: 'taskmanager',  // nome do banco
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,        // ← isso cria as tabelas automaticamente
    }),
    ProjetoModule,
    TarefaModule,
  ],
})

export class AppModule {}