export interface ProjetoContract {
  existe(projetoId: number): Promise<boolean>;
}

export const PROJETO_CONTRACT = Symbol('PROJETO_CONTRACT');
