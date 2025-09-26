# Puxa a imagem do node mais atual - todo docker começa assim
FROM node:22

# só definindo o direório pra rodar
WORKDIR /app

# copiando o json pra poder rodar o npm
COPY package*.json ./

# Instalando dependências do Node - Layer caching
RUN npm install

# Pegando o resto do projeto (full dir)
COPY . .

# Configurando as portas
ENV PORT=8080

EXPOSE 8080

# 7. Comando para iniciar o servidor
CMD ["npm", "start"]
