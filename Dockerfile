# Dockerfile = a "receita" para montar a IMAGEM da aplicação NestJS.
# Cada linha abaixo vira uma camada da imagem.

# Imagem base: já vem com Node.js instalado (versão alpine = Linux enxuto).
FROM node:22-alpine

# Pasta de trabalho dentro do container. Os comandos seguintes rodam aqui.
WORKDIR /app

# Copia só os arquivos de dependências primeiro.
# Motivo: o Docker guarda cada camada em cache. Se você só mudar o código
# (e não o package.json), o "npm ci" abaixo não precisa rodar de novo.
COPY package*.json ./

# Instala as dependências exatamente como estão no package-lock.json.
RUN npm ci

# Agora copia o resto do código (o que está no .dockerignore fica de fora).
COPY . .

# Compila o TypeScript para JavaScript (gera a pasta dist/).
RUN npm run build

# Documenta que a aplicação escuta na porta 3000 (não publica nada sozinho).
EXPOSE 3000

# Comando executado quando o container sobe.
CMD ["node", "dist/main"]
