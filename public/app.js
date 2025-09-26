// Mental Health Dynamics App JavaScript

// Data from provided JSON
const appData = {
  categories: [
    {
      id: "familia",
      name: "Família",
      description: "Dinâmicas para fortalecer vínculos entre pais e filhos",
      icon: "👨‍👩‍👧‍👦",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: "amigos", 
      name: "Amigos",
      description: "Atividades para grupos de amigos se apoiarem mutuamente",
      icon: "👥",
      color: "bg-green-100 text-green-800"
    },
    {
      id: "comunidade",
      name: "Apoio Comunitário", 
      description: "Dinâmicas para pessoas externas oferecerem suporte",
      icon: "🤝",
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: "autoconhecimento",
      name: "Autoconhecimento",
      description: "Atividades individuais de reflexão e crescimento pessoal",
      icon: "🧘‍♀️",
      color: "bg-yellow-100 text-yellow-800"
    }
  ],
  
  dynamics: [
    {
      id: 1,
      title: "Cofre de Memórias",
      category: "familia",
      description: "Criação conjunta de uma caixa com recordações e momentos especiais da família",
      objective: "Fortalecer vínculos familiares através do compartilhamento de memórias positivas",
      participants: "2-6 pessoas",
      duration: "45-60 minutos",
      difficulty: "Fácil",
      materials: ["Caixa decorativa", "Fotos antigas", "Pequenos objetos", "Papel colorido", "Canetas"],
      steps: [
        "Cada membro escolhe 3-5 objetos que representem momentos especiais",
        "Compartilhem a história por trás de cada item",
        "Decorarem a caixa juntos",
        "Criem um ritual para adicionar novas memórias"
      ],
      tips: "Respeite o ritmo de cada pessoa para compartilhar. Algumas memórias podem ser mais emocionais.",
      variations: "Pode ser feito digitalmente com fotos e vídeos"
    },
    {
      id: 2,
      title: "Teatro de Fantoches das Emoções",
      category: "familia", 
      description: "Criação de histórias com fantoches para expressar sentimentos de forma lúdica",
      objective: "Facilitar a expressão de emoções através da linguagem simbólica",
      participants: "2-5 pessoas",
      duration: "30-45 minutos",
      difficulty: "Fácil",
      materials: ["Fantoches ou meias", "Materiais para decorar", "Cenário improvisado"],
      steps: [
        "Cada pessoa cria seu fantoche representando uma emoção",
        "Inventem histórias onde os fantoches interagem",
        "Explorem diferentes finais para as histórias",
        "Conversem sobre o que sentiram durante a atividade"
      ],
      tips: "Permita que as crianças liderem as histórias. Fantoches podem falar coisas que seria difícil dizer diretamente.",
      variations: "Use desenhos ou bonecos se não tiver fantoches"
    },
    {
      id: 3,
      title: "Mapa de Emoções Familiar",
      category: "familia",
      description: "Desenho conjunto de como cada membro da família se sente em diferentes situações",
      objective: "Desenvolver inteligência emocional e empatia entre familiares",
      participants: "2-6 pessoas", 
      duration: "40-50 minutos",
      difficulty: "Médio",
      materials: ["Papel grande", "Lápis de cor", "Adesivos", "Revistas para recortar"],
      steps: [
        "Desenhem o contorno de uma casa grande no papel",
        "Cada cômodo representa uma situação familiar diferente",
        "Usem cores e símbolos para mostrar como se sentem em cada situação",
        "Compartilhem e discutam os diferentes pontos de vista"
      ],
      tips: "Não julgue as emoções de ninguém. Todas são válidas e importantes.",
      variations: "Pode ser feito como app digital ou mural na parede"
    },
    {
      id: 4,
      title: "Círculo de Apoio",
      category: "amigos",
      description: "Dinâmica de compartilhamento e escuta ativa entre amigos",
      objective: "Fortalecer vínculos de amizade através da vulnerabilidade compartilhada",
      participants: "3-8 pessoas",
      duration: "60-90 minutos", 
      difficulty: "Médio",
      materials: ["Objeto para passar (bastão da fala)", "Cadeiras em círculo", "Papel para anotações"],
      steps: [
        "Sentem em círculo, apenas quem tem o objeto pode falar",
        "Cada pessoa compartilha algo que está vivenciando",
        "Os outros apenas escutam, sem dar conselhos",
        "Ao final, oferecem palavras de apoio e carinho"
      ],
      tips: "Estabeleça regras de confidencialidade. O que é dito no círculo, fica no círculo.",
      variations: "Pode ser feito online com videoconferência"
    },
    {
      id: 5,
      title: "Desafio dos 30 Dias do Bem-Estar",
      category: "amigos",
      description: "Criar metas de bem-estar mental em grupo com sistema de apoio mútuo",
      objective: "Estabelecer hábitos saudáveis com apoio do grupo de amigos",
      participants: "3-10 pessoas",
      duration: "30 dias (15 min/dia)",
      difficulty: "Médio",
      materials: ["App de mensagens", "Calendário", "Lista de atividades"],
      steps: [
        "Cada pessoa escolhe 1-3 hábitos para desenvolver",
        "Criem um grupo para compartilhar progresso diário",
        "Estabeleçam recompensas para marcos alcançados",
        "Apoiem-se mutuamente nos dias difíceis"
      ],
      tips: "Comece com metas pequenas e alcançáveis. O importante é a consistência.",
      variations: "Pode incluir desafios criativos como foto do dia ou gratidão diária"
    },
    {
      id: 6,
      title: "Rede de Cuidado Comunitária",
      category: "comunidade",
      description: "Mapear e conectar pessoas de apoio na comunidade local",
      objective: "Criar uma rede de suporte social mais ampla e acessível",
      participants: "5-15 pessoas",
      duration: "90-120 minutos",
      difficulty: "Difícil", 
      materials: ["Mapa da região", "Post-its", "Marcadores", "Lista de contatos"],
      steps: [
        "Mapeiem recursos de saúde mental na região",
        "Identifiquem pessoas dispostas a ajudar",
        "Criem um sistema de contato para emergências",
        "Estabeleçam encontros regulares de check-in"
      ],
      tips: "Inclua profissionais locais, líderes religiosos, educadores e vizinhos solidários.",
      variations: "Pode ser feito digitalmente com grupos de WhatsApp ou Telegram"
    },
    {
      id: 7,
      title: "Diário de Gratidão Gamificado",
      category: "autoconhecimento",
      description: "Sistema de pontos e níveis para reflexões diárias de gratidão",
      objective: "Desenvolver pensamento positivo através da prática regular de gratidão",
      participants: "1 pessoa",
      duration: "10-15 min/dia",
      difficulty: "Fácil",
      materials: ["Caderno", "Canetas coloridas", "Adesivos", "Calendário"],
      steps: [
        "Escreva 3 coisas pelas quais é grato todos os dias",
        "Ganhe pontos por consistência (1 ponto por dia)",
        "Desbloqueie níveis a cada 7 dias consecutivos",
        "Crie recompensas pessoais para marcos alcançados"
      ],
      tips: "Seja específico nas gratidões. Em vez de 'família', escreva 'o abraço da minha mãe hoje'.",
      variations: "Use apps como Gratitude ou Five Minute Journal"
    },
    {
      id: 8,
      title: "Mandala de Emoções",
      category: "autoconhecimento",
      description: "Criação artística representando estados internos através de formas e cores",
      objective: "Expressar e processar emoções através da arte terapêutica",
      participants: "1 pessoa",
      duration: "45-60 minutos",
      difficulty: "Médio",
      materials: ["Papel", "Lápis de cor", "Giz de cera", "Compasso", "Régua"],
      steps: [
        "Desenhe um círculo grande no papel",
        "Divida em seções representando diferentes emoções",
        "Use cores e padrões para expressar cada sentimento",
        "Reflita sobre o que a mandala revela sobre seu estado atual"
      ],
      tips: "Não se preocupe com perfeição artística. O processo é mais importante que o resultado.",
      variations: "Pode ser feito digitalmente ou com materiais naturais como folhas e flores"
    },
    {
      id: 9,
      title: "Jogo das Qualidades Familiares",
      category: "familia",
      description: "Cada membro da família escreve e compartilha qualidades que admira nos outros",
      objective: "Aumentar autoestima e fortalecer vínculos através do reconhecimento mútuo",
      participants: "2-8 pessoas",
      duration: "30-40 minutos",
      difficulty: "Fácil",
      materials: ["Papel colorido", "Canetas", "Caixa ou recipiente", "Fita adesiva"],
      steps: [
        "Cada pessoa escreve qualidades dos outros em papéis separados",
        "Coloquem todos os papéis na caixa",
        "Cada um retira papéis aleatórios e lê em voz alta",
        "Tentem adivinhar quem escreveu sobre quem"
      ],
      tips: "Incentive qualidades específicas e comportamentais, não apenas físicas.",
      variations: "Pode incluir memórias especiais junto com as qualidades"
    },  
    {
      id: 10,
      title: "Workshop de Talentos entre Amigos",
      category: "amigos",
      description: "Cada pessoa ensina algo que sabe fazer bem para o grupo",
      objective: "Fortalecer autoestima e vínculos através do compartilhamento de habilidades",
      participants: "3-8 pessoas",
      duration: "120-180 minutos",
      difficulty: "Médio",
      materials: ["Materiais específicos de cada talento", "Espaço adequado", "Câmera para registrar"],
      steps: [
        "Cada pessoa prepara uma mini-aula de 15-20 minutos",
        "Todos participam ativamente aprendendo",
        "Celebrem os talentos únicos de cada um",
        "Planejem encontros futuros para aprofundar aprendizados"
      ],
      tips: "Talentos podem ser simples: fazer café especial, contar piadas, organizar espaços.",
      variations: "Pode ser feito online com tutoriais ao vivo"
    },
    {
      id: 11,
      title: "Grupo de Caminhada Terapêutica",
      category: "comunidade", 
      description: "Atividade física em grupo combinada com conversas de apoio mútuo",
      objective: "Combinar benefícios do exercício físico com suporte social",
      participants: "4-12 pessoas",
      duration: "60-90 minutos",
      difficulty: "Fácil",
      materials: ["Tênis confortáveis", "Garrafa de água", "Rota planejada"],
      steps: [
        "Estabeleçam rota e horário fixos semanais",
        "Caminhem em duplas ou trios, trocando periodicamente",
        "Conversem sobre desafios e vitórias da semana",
        "Terminem com alongamento e momento de gratidão"
      ],
      tips: "Adapte o ritmo para o membro menos condicionado. O foco é estar juntos.",
      variations: "Pode incluir caminhadas temáticas ou em locais diferentes"
    },
    {
      id: 12,
      title: "Linha do Tempo Positiva",
      category: "autoconhecimento",
      description: "Mapear conquistas e momentos de crescimento pessoal ao longo da vida",
      objective: "Reconhecer trajetória de superação e construir narrativa de resiliência",
      participants: "1 pessoa", 
      duration: "60-90 minutos",
      difficulty: "Médio",
      materials: ["Papel grande", "Fotos", "Marcadores", "Adesivos", "Fita adesiva"],
      steps: [
        "Desenhe uma linha horizontal representando sua vida",
        "Marque momentos significativos de crescimento e superação",
        "Adicione fotos, desenhos ou símbolos representativos",
        "Reflita sobre padrões de força e resiliência identificados"
      ],
      tips: "Inclua pequenas vitórias diárias, não apenas grandes marcos.",
      variations: "Pode ser feita digitalmente ou como mural permanente"
    },
    {
      id: 13,
      title: "Caça ao Tesouro da Gratidão",
      category: "familia",
      description: "Procurar pela casa itens que simbolizam momentos especiais em família",
      objective: "Redescobrir memórias positivas através de objetos significativos",
      participants: "2-6 pessoas",
      duration: "45-60 minutos", 
      difficulty: "Fácil",
      materials: ["Lista de pistas", "Cestinha", "Câmera", "Papel para histórias"],
      steps: [
        "Criem pistas sobre objetos com significado familiar",
        "Cada pessoa busca um objeto seguindo as pistas",
        "Compartilhem a história por trás de cada item encontrado",
        "Criem um 'museu familiar' temporário com os objetos"
      ],
      tips: "Inclua objetos simples como uma caneca favorita ou foto antiga.",
      variations: "Pode ser feita em espaços externos como parques ou praias"
    },
    {
      id: 14,
      title: "Projeto Colaborativo Criativo",
      category: "amigos",
      description: "Criar algo significativo juntos como arte, música, história ou vídeo",
      objective: "Fortalecer vínculos através da co-criação e colaboração",
      participants: "3-10 pessoas",
      duration: "120-300 minutos (pode ser dividido)",
      difficulty: "Médio",
      materials: ["Materiais específicos do projeto escolhido", "Espaço criativo"],
      steps: [
        "Escolham juntos o tipo de projeto (música, arte, vídeo, etc.)",
        "Definam papéis baseados nos talentos de cada um",
        "Trabalhem colaborativamente respeitando ideias de todos",
        "Celebrem o resultado final juntos"
      ],
      tips: "O processo é mais importante que o resultado. Divirtam-se criando!",
      variations: "Pode ser projeto beneficente para a comunidade"
    },
    {
      id: 15,
      title: "Oficinas Criativas Comunitárias",
      category: "comunidade",
      description: "Aulas de artesanato, culinária ou outras habilidades para grupos diversos",
      objective: "Criar espaços de convivência e aprendizado mútuo na comunidade",
      participants: "8-20 pessoas",
      duration: "120-180 minutos",
      difficulty: "Médio",
      materials: ["Materiais específicos da oficina", "Espaço comunitário", "Instrutores voluntários"],
      steps: [
        "Organizem espaço comunitário para encontros regulares",
        "Cada encontro tem um tema/habilidade diferente",
        "Pessoas mais experientes ensinam outras",
        "Criem grupo para compartilhar criações e marcar encontros"
      ],
      tips: "Rodem a liderança entre participantes. Todos têm algo para ensinar.",
      variations: "Pode incluir trocas de habilidades ou bazares beneficentes"
    },
    {
      id: 16,
      title: "Quiz de Personalidade Interativo",
      category: "autoconhecimento",
      description: "Descobrir pontos fortes e características pessoais através de questionário gamificado",
      objective: "Promover autoconhecimento e valorização de características positivas",
      participants: "1 pessoa",
      duration: "30-45 minutos",
      difficulty: "Fácil", 
      materials: ["Questionário estruturado", "Papel", "Caneta", "Espelho"],
      steps: [
        "Responda questões sobre preferências e comportamentos",
        "Calcule pontuação para diferentes traços de personalidade",
        "Leia descrições dos seus pontos fortes identificados",
        "Reflita sobre como usar essas qualidades no dia a dia"
      ],
      tips: "Não existem respostas certas ou erradas. Seja honesto consigo mesmo.",
      variations: "Use apps como 16Personalities ou StrengthsFinder"
    },
    {
      id: 17,
      title: "Jogo da Confiança",
      category: "amigos",
      description: "Atividades para fortalecer vínculos de confiança entre amigos",
      objective: "Desenvolver confiança mútua através de exercícios de vulnerabilidade controlada",
      participants: "4-8 pessoas",
      duration: "60-75 minutos",
      difficulty: "Médio",
      materials: ["Vendas para os olhos", "Obstáculos seguros", "Espaço amplo"],
      steps: [
        "Formem duplas para exercícios de confiança",
        "Uma pessoa guia a outra vendada por obstáculos",
        "Troquem de papéis e compartilhem como se sentiram",
        "Façam círculo final para discutir a experiência"
      ],
      tips: "Estabeleça regras claras de segurança. Respeite limites de cada pessoa.",
      variations: "Pode incluir exercícios de quedas controladas ou compartilhamento de segredos"
    },
    {
      id: 18,
      title: "Clube do Livro Terapêutico",
      category: "comunidade",
      description: "Leitura e discussão de livros motivacionais em grupo",
      objective: "Combinar aprendizado com suporte social através da literatura",
      participants: "5-12 pessoas",
      duration: "90-120 minutos/encontro",
      difficulty: "Médio",
      materials: ["Livros selecionados", "Caderno de anotações", "Local confortável"],
      steps: [
        "Escolham livros sobre crescimento pessoal, resiliência, saúde mental",
        "Leiam capítulos entre encontros",
        "Discutam aprendizados e como aplicar na vida real",
        "Compartilhem experiências pessoais relacionadas aos temas"
      ],
      tips: "Inclua ficções que abordam temas de superação, não apenas autoajuda.",
      variations: "Pode incluir podcasts, documentários ou audiolivros"
    },
    {
      id: 19,
      title: "Meditação Guiada por Níveis",
      category: "autoconhecimento", 
      description: "Sistema progressivo de mindfulness com diferentes estágios de dificuldade",
      objective: "Desenvolver prática regular de meditação de forma gradual e sustentável",
      participants: "1 pessoa",
      duration: "5-45 minutos/sessão",
      difficulty: "Progressivo",
      materials: ["App de meditação", "Almofada", "Local silencioso", "Fones de ouvido"],
      steps: [
        "Comece com 5 minutos diários de respiração consciente",
        "Aumente gradualmente tempo e complexidade",
        "Desbloqueie novos tipos de meditação a cada semana",
        "Registre progresso e benefícios observados"
      ],
      tips: "Consistência é mais importante que duração. Comece pequeno e seja paciente.",
      variations: "Pode incluir meditação caminhando ou em movimento"
    },
    {
      id: 20,
      title: "Atividades de Voluntariado em Grupo",
      category: "comunidade",
      description: "Engajar em causas sociais como forma de terapia através do serviço",
      objective: "Encontrar propósito e significado através do serviço aos outros",
      participants: "4-15 pessoas",
      duration: "180-300 minutos",
      difficulty: "Médio",
      materials: ["Contato com ONGs locais", "Transporte", "Materiais específicos da atividade"],
      steps: [
        "Identifiquem causas que tocam o coração do grupo",
        "Entrem em contato com organizações locais",
        "Participem regularmente de atividades voluntárias",
        "Reflitam sobre impacto pessoal e social da experiência"
      ],
      tips: "Escolha atividades alinhadas com valores do grupo. O voluntariado deve gerar alegria.",
      variations: "Pode incluir arrecadação de fundos, visitas a asilos, limpeza ambiental"
    }
  ],

  benefits: [
    {
      title: "Redução do Estresse",
      description: "Atividades lúdicas diminuem cortisol e promovem relaxamento",
      icon: "🧘‍♀️"
    },
    {
      title: "Fortalecimento de Vínculos", 
      description: "Experiências compartilhadas criam conexões mais profundas",
      icon: "❤️"
    },
    {
      title: "Autoconhecimento",
      description: "Dinâmicas promovem reflexão e descoberta de potenciais",
      icon: "🔍"
    },
    {
      title: "Desenvolvimento de Habilidades",
      description: "Jogos terapêuticos exercitam comunicação e empatia",
      icon: "🚀"
    }
  ]
};

// App State
let currentState = {
  currentSection: 'home',
  currentCategory: null,
  filteredDynamics: [],
  favorites: [], // In-memory favorites (not persisted due to localStorage restriction)
  currentDynamic: null,
  timer: {
    isRunning: false,
    seconds: 0,
    interval: null,
    duration: 1800 // 30 minutes default
  }
};

// DOM Elements
const elements = {
  benefitsGrid: document.getElementById('benefitsGrid'),
  categoriesGrid: document.getElementById('categoriesGrid'),
  dynamicsGrid: document.getElementById('dynamicsGrid'),
  favoritesGrid: document.getElementById('favoritesGrid'),
  dynamicsTitle: document.getElementById('dynamicsTitle'),
  searchInput: document.getElementById('searchInput'),
  difficultyFilter: document.getElementById('difficultyFilter'),
  participantsFilter: document.getElementById('participantsFilter'),
  durationFilter: document.getElementById('durationFilter'),
  favCount: document.getElementById('favCount'),
  modal: document.getElementById('dynamicModal'),
  modalTitle: document.getElementById('modalTitle'),
  modalBody: document.getElementById('modalBody'),
  timerModal: document.getElementById('timerModal'),
  timerDisplay: document.getElementById('timerDisplay'),
  timerMinutes: document.getElementById('timerMinutes')
};

// Utility Functions
function showSection(sectionId) {
  // Hide all sections
  const sections = ['home', 'categorias', 'dinamicas', 'sobre', 'recursos', 'favorites'];
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      element.classList.add('hidden');
    }
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }
  
  currentState.currentSection = sectionId;
}

function formatDuration(duration) {
  const match = duration.match(/(\d+)-?(\d+)?\s*(\w+)/);
  if (match) {
    const [, min, max, unit] = match;
    if (max) {
      return `${min}-${max} ${unit}`;
    }
    return `${min} ${unit}`;
  }
  return duration;
}

function getDifficultyColor(difficulty) {
  const colors = {
    'Fácil': 'status--success',
    'Médio': 'status--warning',  
    'Difícil': 'status--error',
    'Progressivo': 'status--info'
  };
  return colors[difficulty] || 'status--info';
}

function extractParticipantCount(participants) {
  const match = participants.match(/(\d+)/);
  return match ? parseInt(match[1]) : 1;
}

function extractDurationMinutes(duration) {
  const match = duration.match(/(\d+)/);
  return match ? parseInt(match[1]) : 30;
}

// Render Functions
function renderBenefits() {
  if (!elements.benefitsGrid) return;
  
  elements.benefitsGrid.innerHTML = appData.benefits.map(benefit => `
    <div class="benefit-card fade-in">
      <div class="benefit-card__icon">${benefit.icon}</div>
      <h3 class="benefit-card__title">${benefit.title}</h3>
      <p class="benefit-card__description">${benefit.description}</p>
    </div>
  `).join('');
}

function renderCategories() {
  if (!elements.categoriesGrid) return;
  
  elements.categoriesGrid.innerHTML = appData.categories.map(category => `
    <div class="category-card category-card--${category.id} fade-in" 
         onclick="selectCategory('${category.id}')" 
         tabindex="0"
         role="button"
         aria-label="Explorar dinâmicas de ${category.name}">
      <div class="category-card__icon">${category.icon}</div>
      <h3 class="category-card__title">${category.name}</h3>
      <p class="category-card__description">${category.description}</p>
      <span class="category-card__cta">Explorar dinâmicas →</span>
    </div>
  `).join('');
}

function renderDynamics(dynamics = appData.dynamics, targetGrid = null) {
  const grid = targetGrid || elements.dynamicsGrid;
  if (!grid) return;
  
  const categoryDynamics = currentState.currentCategory && !targetGrid
    ? dynamics.filter(d => d.category === currentState.currentCategory)
    : dynamics;
    
  currentState.filteredDynamics = categoryDynamics;
  
  grid.innerHTML = categoryDynamics.map(dynamic => `
    <div class="dynamic-card fade-in" 
         onclick="openDynamicModal(${dynamic.id})"
         tabindex="0"
         role="button"
         aria-label="Ver detalhes de ${dynamic.title}">
      <div class="dynamic-card__header">
        <h3 class="dynamic-card__title">${dynamic.title}</h3>
        <button class="dynamic-card__favorite ${currentState.favorites.includes(dynamic.id) ? 'active' : ''}" 
                onclick="event.stopPropagation(); toggleFavorite(${dynamic.id})"
                aria-label="${currentState.favorites.includes(dynamic.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
          ${currentState.favorites.includes(dynamic.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <p class="dynamic-card__description">${dynamic.description}</p>
      <div class="dynamic-card__meta">
        <span class="meta-tag meta-tag--difficulty status ${getDifficultyColor(dynamic.difficulty)}">${dynamic.difficulty}</span>
        <span class="meta-tag meta-tag--participants">👥 ${dynamic.participants}</span>
        <span class="meta-tag meta-tag--duration">⏱️ ${formatDuration(dynamic.duration)}</span>
      </div>
    </div>
  `).join('');
}

function renderFavorites() {
  if (!elements.favoritesGrid) return;
  
  const favoriteDynamics = appData.dynamics.filter(d => currentState.favorites.includes(d.id));
  
  if (favoriteDynamics.length === 0) {
    elements.favoritesGrid.innerHTML = '';
    document.getElementById('emptyFavorites').classList.remove('hidden');
    return;
  }
  
  document.getElementById('emptyFavorites').classList.add('hidden');
  renderDynamics(favoriteDynamics, elements.favoritesGrid);
}

// Modal Functions
function openDynamicModal(dynamicId) {
  const dynamic = appData.dynamics.find(d => d.id === dynamicId);
  if (!dynamic) return;
  
  currentState.currentDynamic = dynamic;
  
  elements.modalTitle.textContent = dynamic.title;
  elements.modalBody.innerHTML = `
    <div class="dynamic-detail__objective">
      <h4>🎯 Objetivo</h4>
      <p>${dynamic.objective}</p>
    </div>
    
    <div class="dynamic-detail__meta">
      <div class="dynamic-detail__meta-item">
        <span class="dynamic-detail__meta-label">Participantes</span>
        <span class="dynamic-detail__meta-value">👥 ${dynamic.participants}</span>
      </div>
      <div class="dynamic-detail__meta-item">
        <span class="dynamic-detail__meta-label">Duração</span>
        <span class="dynamic-detail__meta-value">⏱️ ${formatDuration(dynamic.duration)}</span>
      </div>
      <div class="dynamic-detail__meta-item">
        <span class="dynamic-detail__meta-label">Dificuldade</span>
        <span class="dynamic-detail__meta-value">
          <span class="status ${getDifficultyColor(dynamic.difficulty)}">${dynamic.difficulty}</span>
        </span>
      </div>
    </div>
    
    <div class="dynamic-detail__materials">
      <h4>📋 Materiais Necessários</h4>
      <ul>
        ${dynamic.materials.map(material => `<li>${material}</li>`).join('')}
      </ul>
    </div>
    
    <div class="dynamic-detail__steps">
      <h4>📝 Passo a Passo</h4>
      <ol>
        ${dynamic.steps.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>
    
    <div class="dynamic-detail__tips">
      <h4>💡 Dicas para Facilitadores</h4>
      <p>${dynamic.tips}</p>
    </div>
    
    <div class="dynamic-detail__variations">
      <h4>🔄 Variações</h4>
      <p>${dynamic.variations}</p>
    </div>
  `;
  
  // Update favorite button
  const favoriteBtn = document.getElementById('favoriteBtn');
  const isFavorited = currentState.favorites.includes(dynamic.id);
  favoriteBtn.innerHTML = isFavorited ? '❤️ Remover dos Favoritos' : '🤍 Adicionar aos Favoritos';
  favoriteBtn.className = `btn ${isFavorited ? 'btn--outline' : 'btn--secondary'}`;
  
  elements.modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  elements.modal.classList.add('hidden');
  elements.timerModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Timer Functions
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
  elements.timerDisplay.textContent = formatTime(currentState.timer.seconds);
}

function startTimer() {
  if (currentState.timer.isRunning) return;
  
  currentState.timer.isRunning = true;
  currentState.timer.interval = setInterval(() => {
    if (currentState.timer.seconds > 0) {
      currentState.timer.seconds--;
      updateTimerDisplay();
    } else {
      pauseTimer();
      alert('⏰ Tempo esgotado! A atividade foi concluída.');
    }
  }, 1000);
  
  document.getElementById('startPauseTimer').innerHTML = '⏸️ Pausar';
}

function pauseTimer() {
  currentState.timer.isRunning = false;
  if (currentState.timer.interval) {
    clearInterval(currentState.timer.interval);
    currentState.timer.interval = null;
  }
  document.getElementById('startPauseTimer').innerHTML = '▶️ Continuar';
}

function resetTimer() {
  pauseTimer();
  currentState.timer.seconds = currentState.timer.duration;
  updateTimerDisplay();
  document.getElementById('startPauseTimer').innerHTML = '▶️ Iniciar';
}

function openTimerModal() {
  if (currentState.currentDynamic) {
    const durationMinutes = extractDurationMinutes(currentState.currentDynamic.duration);
    currentState.timer.duration = durationMinutes * 60;
    currentState.timer.seconds = currentState.timer.duration;
    elements.timerMinutes.value = durationMinutes;
  }
  
  updateTimerDisplay();
  elements.timerModal.classList.remove('hidden');
}

// Filter Functions
function applyFilters() {
  const searchTerm = elements.searchInput.value.toLowerCase();
  const difficultyFilter = elements.difficultyFilter.value;
  const participantsFilter = elements.participantsFilter.value;
  const durationFilter = elements.durationFilter.value;
  
  let filtered = appData.dynamics;
  
  // Category filter
  if (currentState.currentCategory) {
    filtered = filtered.filter(d => d.category === currentState.currentCategory);
  }
  
  // Search filter
  if (searchTerm) {
    filtered = filtered.filter(d => 
      d.title.toLowerCase().includes(searchTerm) ||
      d.description.toLowerCase().includes(searchTerm) ||
      d.objective.toLowerCase().includes(searchTerm)
    );
  }
  
  // Difficulty filter
  if (difficultyFilter) {
    filtered = filtered.filter(d => d.difficulty === difficultyFilter);
  }
  
  // Participants filter
  if (participantsFilter) {
    filtered = filtered.filter(d => {
      const count = extractParticipantCount(d.participants);
      switch(participantsFilter) {
        case '1': return count === 1;
        case '2-4': return count >= 2 && count <= 4;
        case '5-8': return count >= 5 && count <= 8;
        case '8+': return count > 8;
        default: return true;
      }
    });
  }
  
  // Duration filter
  if (durationFilter) {
    filtered = filtered.filter(d => {
      const minutes = extractDurationMinutes(d.duration);
      const filterValue = parseInt(durationFilter);
      if (durationFilter === '90+') {
        return minutes > 90;
      }
      return minutes <= filterValue;
    });
  }
  
  renderDynamics(filtered);
}

// Event Handlers
function selectCategory(categoryId) {
  currentState.currentCategory = categoryId;
  const category = appData.categories.find(c => c.id === categoryId);
  
  if (category) {
    elements.dynamicsTitle.textContent = `Dinâmicas - ${category.name}`;
    showSection('dinamicas');
    renderDynamics();
  }
}

function toggleFavorite(dynamicId) {
  const index = currentState.favorites.indexOf(dynamicId);
  if (index === -1) {
    currentState.favorites.push(dynamicId);
  } else {
    currentState.favorites.splice(index, 1);
  }
  
  // Update favorite count
  elements.favCount.textContent = currentState.favorites.length;
  
  // Re-render current view
  if (currentState.currentSection === 'dinamicas') {
    applyFilters();
  } else if (currentState.currentSection === 'favorites') {
    renderFavorites();
  }
  
  // Update modal if open
  if (currentState.currentDynamic && currentState.currentDynamic.id === dynamicId) {
    const favoriteBtn = document.getElementById('favoriteBtn');
    const isFavorited = currentState.favorites.includes(dynamicId);
    favoriteBtn.innerHTML = isFavorited ? '❤️ Remover dos Favoritos' : '🤍 Adicionar aos Favoritos';
    favoriteBtn.className = `btn ${isFavorited ? 'btn--outline' : 'btn--secondary'}`;
  }
}

function shareActivity() {
  if (!currentState.currentDynamic) return;
  
  const dynamic = currentState.currentDynamic;
  const shareText = `Confira esta dinâmica para saúde mental: "${dynamic.title}"\n\n${dynamic.description}\n\nAcesse: ${window.location.origin}`;
  
  if (navigator.share) {
    navigator.share({
      title: dynamic.title,
      text: dynamic.description,
      url: window.location.origin
    });
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Link copiado para a área de transferência!');
    }).catch(() => {
      alert('Não foi possível copiar o link. Tente novamente.');
    });
  }
}

// Initialize App
function initializeApp() {
  // Render initial content
  renderBenefits();
  renderCategories();
  
  // Setup event listeners
  document.getElementById('exploreBtn').addEventListener('click', () => showSection('categorias'));
  document.getElementById('learnMoreBtn').addEventListener('click', () => showSection('sobre'));
  document.getElementById('backToCategoriesBtn').addEventListener('click', () => {
    currentState.currentCategory = null;
    showSection('categorias');
  });
  document.getElementById('backFromFavoritesBtn').addEventListener('click', () => showSection('home'));
  
  // Navigation
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href').substring(1);
      showSection(href);
    });
  });
  
  // Favorites button
  document.getElementById('favoritesBtn').addEventListener('click', () => {
    showSection('favorites');
    renderFavorites();
  });
  
  // Filters
  elements.searchInput.addEventListener('input', applyFilters);
  elements.difficultyFilter.addEventListener('change', applyFilters);
  elements.participantsFilter.addEventListener('change', applyFilters);
  elements.durationFilter.addEventListener('change', applyFilters);
  
  // Modal events
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('favoriteBtn').addEventListener('click', () => {
    if (currentState.currentDynamic) {
      toggleFavorite(currentState.currentDynamic.id);
    }
  });
  document.getElementById('startTimerBtn').addEventListener('click', openTimerModal);
  document.getElementById('shareBtn').addEventListener('click', shareActivity);
  
  // Timer events
  document.getElementById('closeTimerModal').addEventListener('click', closeModal);
  document.getElementById('startPauseTimer').addEventListener('click', () => {
    if (currentState.timer.isRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  });
  document.getElementById('resetTimer').addEventListener('click', resetTimer);
  elements.timerMinutes.addEventListener('change', (e) => {
    const minutes = parseInt(e.target.value) || 30;
    currentState.timer.duration = minutes * 60;
    currentState.timer.seconds = currentState.timer.duration;
    updateTimerDisplay();
  });
  
  // Close modal on overlay click
  elements.modal.addEventListener('click', (e) => {
    if (e.target === elements.modal || e.target.classList.contains('modal__overlay')) {
      closeModal();
    }
  });
  
  elements.timerModal.addEventListener('click', (e) => {
    if (e.target === elements.timerModal || e.target.classList.contains('modal__overlay')) {
      closeModal();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // Category card keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('category-card')) {
      const categoryId = e.target.getAttribute('onclick').match(/'(\w+)'/)[1];
      selectCategory(categoryId);
    }
  });
  
  // Dynamic card keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('dynamic-card')) {
      const dynamicId = e.target.getAttribute('onclick').match(/(\d+)/)[1];
      openDynamicModal(parseInt(dynamicId));
    }
  });
  
  console.log('🎮 Dinâmicas de Apoio - App inicializado com sucesso!');
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);