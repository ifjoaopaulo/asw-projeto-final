import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CriarTarefaDto {
  @IsInt()
  projetoId!: number;

  @IsString()
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  titulo!: string;

  @IsString()
  @IsNotEmpty({ message: 'O status é obrigatório.' })
  status!: string;
}
