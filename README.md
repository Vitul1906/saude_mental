# Dinâmicas de Apoio - Saúde Mental Gamificada

Uma aplicação web moderna e minimalista para promover dinâmicas gamificadas de apoio em saúde mental para diferentes contextos (família, amigos, comunidade e autoconhecimento).

## 🎯 Objetivo

Facilitar o acesso a atividades lúdicas e terapêuticas que podem ser realizadas por pessoas em diferentes contextos para apoiar quem precisa de suporte em saúde mental.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **Docker** - Containerização para deploy consistente
- **CSS Modules** - Estilização isolada e performática
- **Vanilla JavaScript** - Interatividade sem dependências extras

## 🏗️ Estrutura do Projeto

```
mental-health-dynamics/
├── public/                 # Arquivos estáticos
├── src/
│   ├── app/               # App Router do Next.js
│   ├── components/        # Componentes React
│   └── data/             # Dados das dinâmicas
├── Dockerfile            # Configuração Docker
├── docker-compose.yml    # Orquestração dos containers
├── next.config.js        # Configuração do Next.js
└── package.json          # Dependências e scripts
```

## 🐳 Executando com Docker

### Pré-requisitos
- Docker
- Docker Compose

### Passos

1. Clone o repositório:
```bash
git clone <repository-url>
cd mental-health-dynamics
```

2. Execute com Docker Compose:
```bash
docker-compose up --build
```

3. Acesse a aplicação em: http://localhost:3000

### Comandos Úteis

```bash
# Executar em segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar os containers
docker-compose down

# Rebuildar imagem
docker-compose build --no-cache
```

## 💻 Desenvolvimento Local

1. Instale as dependências:
```bash
npm install
# ou
yarn install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

3. Acesse http://localhost:2525

## 📱 Funcionalidades

- **4 Categorias de Dinâmicas**: Família, Amigos, Comunidade, Autoconhecimento
- **20+ Dinâmicas Detalhadas**: Com objetivos, materiais, passos e dicas
- **Sistema de Favoritos**: Salva dinâmicas preferidas localmente
- **Filtros Avançados**: Por categoria, duração, dificuldade
- **Timer Integrado**: Para atividades com tempo determinado
- **Interface Responsiva**: Funciona em desktop e mobile
- **Design Minimalista**: Focado na experiência do usuário

## 🎨 Design System

- **Cores**: Paleta suave com tons de azul, verde, roxo e amarelo
- **Typography**: Fontes limpas e legíveis
- **Componentes**: Cards, botões e modais com bordas arredondadas
- **Animações**: Transições suaves e micro-interações

## 📋 Categorias de Dinâmicas

### 👨‍👩‍👧‍👦 Família
Atividades para fortalecer vínculos entre pais e filhos através de jogos, arte e compartilhamento de experiências.

### 👥 Amigos
Dinâmicas para grupos de amigos se apoiarem mutuamente em momentos difíceis através de atividades colaborativas.

### 🤝 Apoio Comunitário
Estratégias para pessoas da comunidade oferecerem suporte através de voluntariado e ações coletivas.

### 🧘‍♀️ Autoconhecimento
Atividades individuais para reflexão, crescimento pessoal e desenvolvimento da inteligência emocional.

## 🎯 Gamificação

- **Sistema de Níveis**: Progresso em meditação e hábitos
- **Pontuação**: Para atividades de gratidão e reflexão
- **Desafios**: Metas de 30 dias e objetivos semanais
- **Recompensas**: Marcos e conquistas pessoais

## 🔒 Privacidade

- Todos os dados são armazenados localmente no navegador
- Não há coleta de informações pessoais
- Sistema de favoritos usa localStorage

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você ou alguém que conhece está passando por um momento difícil, procure ajuda profissional:

- **CVV**: 188 (24h, gratuito)
- **CAPS**: Centros de Atenção Psicossocial
- **UBS**: Unidades Básicas de Saúde
- **Psicólogos e Psiquiatras**: Profissionais habilitados

## 📞 Contato

Para dúvidas sobre o projeto ou sugestões de novas dinâmicas, entre em contato através das issues do GitHub.

---

**Lembre-se**: Este aplicativo é um recurso complementar e não substitui o acompanhamento profissional em saúde mental.
