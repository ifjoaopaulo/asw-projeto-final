import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CriarProjetoDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @MaxLength(100, { message: 'O nome deve ter no máximo 100 caracteres.' })
  nome!: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}
