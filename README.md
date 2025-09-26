# Dinâmicas de Apoio - Saúde Mental Gamificada

Uma aplicação web moderna e minimalista para promover dinâmicas gamificadas de apoio em saúde mental para diferentes contextos (família, amigos, comunidade e autoconhecimento). Front-end em HTML/CSS/JS + back-end mínimo em Node.js (Express). Empacotada com Docker e preparada para deploy em EC2 (AWS).


# Visão geral

Mental Health Dynamics é um catálogo de dinâmicas e atividades gamificadas para apoiar a saúde mental em contextos familiares, entre amigos e em comunidade. O projeto inclui:

* Conteúdo (dinâmicas, categorias, dicas) em JSON/JS.
* Front-end em HTML/CSS/vanilla JS para interação (filtros, favoritos, modal, timer).
* Back-end minimal (Node.js + Express) que serve arquivos estáticos e expõe APIs simples (opcional).
* Empacotamento em Docker para facilitar deploy.

---

# Funcionalidades

* Exibição de categorias e dinâmicas.
* Filtros por dificuldade, duração e participantes.
* Modal com detalhes, materiais, passos e dicas.
* Favorites em memória (ex.: para futuras persistências).
* Timer de atividade.
* API simples (`/api/saudacao`) pronta para extensão.

---

# Arquitetura

* Cliente (browser): `/public/index.html`, `/public/style.css`, `/public/app.js`.
* Servidor (Node): `server.js` serve a pasta `public` e permite rotas API.
* Container: imagem Docker construída a partir do `Dockerfile`.
* Infra: EC2 rodando Docker; Security Group liberando porta 8080 para o frontend; backend pode ficar isolado em subnet privada / outro SG.

---

# Estrutura do repositório

```
mental-health-app/
├─ public/
│  ├─ index.html
│  ├─ style.css
│  ├─ app.js
│  └─ assets/
├─ server.js
├─ package.json
├─ package-lock.json
├─ Dockerfile
├─ docker-compose.yml     # opcional
├─ .dockerignore
└─ README.md
```

---

# Pré-requisitos

* Node.js (v18+ recomendado) e npm (para dev local).
* Docker (para build/exec de containers).
* Acesso SSH à instância EC2 (chave `.pem`) ou outro método seguro (Instance Connect / SSM).
* Conta AWS e permissão para criar EC2 / Security Groups (para deploy em nuvem).

---

# Rodando localmente (rápido)

1. Instale dependências:

```bash
npm install
```

2. Rodar em desenvolvimento:

```bash
npm run dev    # ou `node server.js` se não usar nodemon
```

3. Abrir no navegador:

```
http://localhost:8080
```

> **Observação**: `server.js` por padrão usa `process.env.PORT || 8080`. Ajuste se desejar outra porta.

---

# Usando Docker (local e EC2)

### Dockerfile recomendado

```dockerfile
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD wget -q --spider http://localhost:8080/ || exit 1

CMD ["node", "server.js"]
```

### .dockerignore (exemplo)

```
node_modules
npm-debug.log
.git
.env
```

### Build e run local

```bash
# build
docker build -t mental-health-app:latest .

# run
docker run -d --name mental-health-app -p 8080:8080 --restart unless-stopped mental-health-app:latest

# logs
docker logs -f mental-health-app
```

### Parar/remover

```bash
docker stop mental-health-app
docker rm mental-health-app
```

---

# Deploy rápido via GitHub → EC2 (manual)

1. **No GitHub**: faça push do repo (público).
2. **Na EC2** (após SSH):

```bash
# instalar git se necessário
sudo apt update && sudo apt install -y git

# clonar
git clone https://github.com/SEU_USUARIO/SEU_REPO.git ~/meu-projeto
cd ~/meu-projeto

# build e run docker
docker build -t mental-health-app:latest .
docker rm -f mental-health-app 2>/dev/null || true
docker run -d --name mental-health-app -p 8080:8080 --restart unless-stopped mental-health-app:latest
```

3. **Testar externamente**:

```
http://<EC2_PUBLIC_IP>:8080
```

---

# Deploy automatizado (GitHub Actions) — sugestão

Use uma GitHub Action que, ao `push` na `main`, SSH na EC2 e executa `git pull` + `docker build` + `docker run`. Exemplo (resumido):

```yaml
# .github/workflows/deploy.yml (exemplo)
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: SSH deploy
        uses: appleboy/ssh-action@v0.1.7
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ubuntu
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            cd ~/meu-projeto || git clone https://github.com/SEU_USUARIO/SEU_REPO.git ~/meu-projeto
            cd ~/meu-projeto
            git fetch --all
            git reset --hard origin/main
            docker build -t mental-health-app:latest .
            docker rm -f mental-health-app 2>/dev/null || true
            docker run -d --name mental-health-app -p 8080:8080 --restart unless-stopped mental-health-app:latest
```

> Configure secrets no GitHub: `EC2_HOST`, `EC2_SSH_KEY` (sua PEM em formato seguro), etc.

---

# Rede / AWS — VPC, Security Groups e isolamento

### Servir publicamente (frontend)

* Security Group `frontend-sg` (associado à instância frontend):

  * Inbound:

    * SSH (22) — Source: seu IP (`x.x.x.x/32`)
    * Custom TCP — Port 8080 — Source: `0.0.0.0/0` (ou restrinja por CIDR)
  * Outbound: All traffic (default)

### Isolar back-end (opcional)

* Criar `backend-sg`:

  * Inbound:

    * Porta do backend (por ex. 3000) — Source: `frontend-sg` (permite que apenas instâncias com esse SG comuniquem)
  * Sem regras inbound públicas (não expor à internet)
* Colocar backend em subnet **privada** e frontend em subnet **pública**.
* Usar IGW + route table para subnets públicas.

### Nota prática (testes rápidos)

* Dentro da EC2 (front): `curl http://localhost:8080`
* Externamente: `curl -I http://<EC2_PUBLIC_IP>:8080`

---

# Testes e verificação

// Colocar imagens aqui rodando.

### Do seu computador

```bash
curl -I http://<EC2_PUBLIC_IP>:8080
# ou abra no navegador http://<EC2_PUBLIC_IP>:8080
```

### Teste de isolamento (if backend private)

* Tentar `curl http://<EC2_PUBLIC_IP>:<BACKEND_PORT>` deve falhar (se bem isolado).
* Do frontend (na EC2), `curl http://<BACKEND_PRIVATE_IP>:<BACKEND_PORT>` deve funcionar.

---


# Comandos úteis (resumo)

```bash
# local
npm install
npm run dev

# docker (local/ec2)
docker build -t mental-health-app .
docker run -d --name mental-health-app -p 8080:8080 --restart unless-stopped mental-health-app
docker logs -f mental-health-app
docker stop mental-health-app && docker rm mental-health-app

# enviar do PC para EC2
scp -i minha-chave.pem -r ./meu-projeto ubuntu@<EC2_IP>:/home/ubuntu/
# ou incremental
rsync -avz -e "ssh -i minha-chave.pem" ./meu-projeto ubuntu@<EC2_IP>:/home/ubuntu/
```

---


# Licença

* Licença: Mackenzie Vitor Costa Lemos - 10438932 | David Haim Raiber - 10395618.
* Obrigado por construir algo que promove saúde mental — se quiser, eu posso ajudar a transformar partes do front em componentes React, criar endpoints REST para salvar favoritos, ou montar o workflow completo de CI/CD.

---

Se quiser, eu já te **entrego um README.md pronto** (arquivo) para você copiar/colar no repo ou eu já gero os arquivos `server.js`, `Dockerfile`, `docker-compose.yml` e `deploy_ec2.sh` ajustados ao seu repositório — diga qual opção prefere e eu crio tudo agora.
