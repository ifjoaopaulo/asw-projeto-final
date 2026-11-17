import { Injectable } from "@nestjs/common";

@Injectable()
export class Tarefa {
  constructor(
    readonly projetoId: number,
    titulo: string,
    status: string,
  ) { };
}
