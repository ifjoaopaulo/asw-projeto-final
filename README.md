# Projeto Semestral de Arquitetura de Software (ASW)
Feito por: João Paulo Bastos e Thiago Rafael C. T. da Silva

## Sistema de Gerenciamento de Tarefas

Sistema capaz de armazenar tarefas associadas a diferentes projetos do usuário.

## Arquitetura: Monolito Modular

O projeto usa a arquitetura Monolito Modular, pois:
- Permite escalabilidade simples, por meio da criação de novos componentes (módulos) sem interferir nos que já existem.
- Comparado a outras arquiteturas, oferece escalabilidade, sem adicionar complexidade desnecessária a um projeto simples.

## Como rodar

Para rodar o sistema, siga o passo a passo:

1. Clone o repositório aonde desejar
``` bash
git clone https://github.com/ifjoaopaulo/asw-projeto-final.git
```

2. Rode o build do Docker Compose
``` bash
docker compose up --build
```

3. Use o cURL para testar as rotas (ou navegador no caso das rotas Get)

### Testes
#### POST /projetos
**Cenário 1: cria um projeto.** Esperado: `201`, e o corpo devolve o projeto com `id: 1`.
```
curl -i -X POST http://localhost:3000/projetos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Projeto Teste","descricao":"Primeiro projeto"}'
```

**Cenário 2: corpo sem `nome`.** Esperado: `400`.
```
curl -i -X POST http://localhost:3000/projetos \
  -H "Content-Type: application/json" \
  -d '{"descricao":"Sem nome"}'
```

#### GET /projetos

**Cenário 1 (rodar antes de criar qualquer projeto, num banco limpo):** Esperado: `200` e `[]`.
```
curl -i http://localhost:3000/projetos
```

**Cenário 2 (depois do POST de sucesso):** Esperado: `200` e uma lista com o "Projeto Teste".
```
curl -i http://localhost:3000/projetos
```

#### POST /tarefas

**Cenário 1: tarefa em projeto existente.** Esperado: `201`, com `projetoId: 1`, `titulo` e `status`.
```
curl -i -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{"projetoId":1,"titulo":"Primeira tarefa","status":"pendente"}'
```

**Cenário 2: projeto inexistente.** Esperado: `404` com a mensagem "Projeto com id 9999 não existe.".
```
curl -i -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{"projetoId":9999,"titulo":"Tarefa órfã","status":"pendente"}'
```

#### PATCH /tarefas/:id/status
**Cenário 1, 2 e 3: atualizando status de atividades já existentes.** Esperado: Nenhum erro, com retorno do objeto com status atualizado.
``` bash
curl -X PATCH http://localhost:3000/tarefas/1/status \
  -H "Content-Type: application/json" \
  -d '{"status": "em_andamento"}'
``` 
``` bash
curl -X PATCH http://localhost:3000/tarefas/1/status \
  -H "Content-Type: application/json" \
  -d '{"status": "concluida"}'
```
``` bash
curl -X PATCH http://localhost:3000/tarefas/1/status \
  -H "Content-Type: application/json" \
  -d '{"status": "pendente"}'
```

**Cenário 4: atualizando status de atividades já existentes com um status inválido.** Esperado: 400.
``` bash
curl -X PATCH http://localhost:3000/tarefas/1/status \
  -H "Content-Type: application/json" \
  -d '{"status": "teste"}'
```

#### GET /projetos/:id/tarefas

**Cenário 1: projeto com tarefas.** Esperado: `200` e uma lista só com as tarefas do projeto 1.
```
curl -i http://localhost:3000/projetos/1/tarefas
```

**Cenário 2: projeto inexistente.** Esperado: `404`, e não uma lista vazia.
```
curl -i http://localhost:3000/projetos/9999/tarefas
```

---

## Tecnologias

- TypeScript
- NestJS
- PostgreSQL
- Docker
