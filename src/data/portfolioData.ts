/**
 * ============================================================================
 * DADOS DO PORTFÓLIO - ATLETA DE CORRIDA PROFISSIONAL
 * ============================================================================
 * Todas as informações contidas aqui são 100% locais e offline.
 * Edite os textos, números, recordes e links abaixo para personalizar seu site.
 * ============================================================================
 */

import { PersonalRecord, MetricCard, SkillItem, ProjectItem, SocialLink } from '../types';

/**
 * 1. INFORMAÇÕES PESSOAIS E APRESENTAÇÃO (HERO & BIO)
 * Edite aqui seu nome, título, slogan e parágrafos sobre sua trajetória.
 */
export const athleteProfile = {
  name: "Bruno",
  nickname: "The Pacing Machine",
  title: "Atleta Profissional de Corrida & Meio-Fundo",
  subTitle: "Maratonista de Elite | Especialista em 21k e 42k | Atleta de Alto Rendimento",
  location: "São Paulo, SP - Brasil & Campos do Jordão (Treino em Altitude)",
  status: "Em Ciclo de Treinamento Olímpico",
  
  // Parágrafos da seção "Sobre Mim"
  about: {
    lead: "Transformando disciplina diária, precisão biomecânica e resiliência mental em resultados nos principais palcos do atletismo mundial.",
    paragraph1: "Iniciei minha trajetória nas pistas de atletismo aos 14 anos, competindo nos 3.000m e 5.000m rasos. Ao longo da última década, migrei progressivamente para as provas de rua e me especializei na Meia Maratona e Maratona, acumulando mais de 45.000 km rodados em ciclos rigorosos de periodização.",
    paragraph2: "Meu foco atual está na busca constante do índice olímpico, combinando ciência esportiva, treinos em altitude, controle rigoroso de lactato sanguíneo e análise de dados biomecânicos. Acredito que a corrida em alto nível é o encontro perfeito entre entrega física absoluta e estratégia milimétrica.",
    philosophy: "«A corrida não mente. Cada fração de segundo conquistada na linha de chegada é forjada na solidão dos treinos matinais antes do sol nascer.»",
  },
};

/**
 * 2. ESTATÍSTICAS E MÉTRICAS GERAIS
 * Números de impacto para a seção inicial.
 */
export const athleteMetrics: MetricCard[] = [
  {
    id: "m1",
    label: "Recorde Pessoal (42k)",
    value: "02h 11m 45s",
    subtext: "Ritmo médio de 3:07 min/km"
  },
  {
    id: "m2",
    label: "VO2 Máximo",
    value: "82.4 ml/kg",
    subtext: "Avaliado em laboratório olímpico"
  },
  {
    id: "m3",
    label: "Volume Anual",
    value: "5.400+ km",
    subtext: "Média de 140km a 180km/semana"
  },
  {
    id: "m4",
    label: "Pódios Oficiais",
    value: "28+",
    subtext: "Provas nacionais e internacionais"
  },
];

/**
 * 3. RECORDES PESSOAIS (RPs / PRs)
 * Seus melhores tempos oficiais devidamente homologados.
 */
export const personalRecords: PersonalRecord[] = [
  {
    id: "pr1",
    distance: "Maratona (42.195 km)",
    time: "02:11:45",
    pace: "03:07 min/km",
    event: "Maratona Internacional de Berlim",
    year: 2024
  },
  {
    id: "pr2",
    distance: "Meia Maratona (21.097 km)",
    time: "01:02:18",
    pace: "02:57 min/km",
    event: "Meia Maratona de Valência",
    year: 2024
  },
  {
    id: "pr3",
    distance: "10.000m (Pista)",
    time: "28:34.12",
    pace: "02:51 min/km",
    event: "Troféu Brasil de Atletismo",
    year: 2023
  },
  {
    id: "pr4",
    distance: "5.000m (Pista)",
    time: "13:48.50",
    pace: "02:45 min/km",
    event: "Campeonato Sul-Americano",
    year: 2023
  }
];

/**
 * 4. HABILIDADES (SKILLS)
 * Separadas rigorosamente em:
 * - Conhecimentos Técnicos e Fisiológicos
 * - Habilidades Interpessoais (Soft Skills)
 * - Ferramentas e Equipamentos
 */
export const athleteSkills: SkillItem[] = [
  // Habilidades Técnicas / Atléticas
  {
    id: "s1",
    name: "Periodização & Planejamento de Ciclos",
    description: "Estruturação de macrociclos de 16 a 24 semanas visando o pico de performance em provas-alvo.",
    level: 95,
    category: "technical",
    tag: "Metodologia"
  },
  {
    id: "s2",
    name: "Gestão de Ritmo & Pacing Estratégico",
    description: "Capacidade de manter variações de pace inferiores a 2 segundos/km mesmo sob fadiga extrema.",
    level: 98,
    category: "technical",
    tag: "Técnica"
  },
  {
    id: "s3",
    name: "Treinamento em Altitude & Hipóxia",
    description: "Adaptação fisiológica com estágios acima de 2.200m para aumento da massa de hemoglobina.",
    level: 90,
    category: "technical",
    tag: "Fisiologia"
  },
  {
    id: "s4",
    name: "Nutrição & Estratégia de Carboidratos Intra-Prova",
    description: "Ingestão precisa de 90g a 120g de carboidratos/hora com controle osmótico estomacal.",
    level: 92,
    category: "technical",
    tag: "Nutrição"
  },
  {
    id: "s5",
    name: "Análise Biomecânica de Passada",
    description: "Otimização de oscilação vertical, tempo de contato com o solo e cadência (~184-190 spm).",
    level: 88,
    category: "technical",
    tag: "Biomecânica"
  },

  // Habilidades Interpessoais (Soft Skills)
  {
    id: "s6",
    name: "Disciplina Férrea & Rotina Rígida",
    description: "Constância absoluta em treinos bi-diários, sono monitorado e recuperação diária.",
    level: 99,
    category: "soft",
    tag: "Mentalidade"
  },
  {
    id: "s7",
    name: "Resiliência sob Dor & Fadiga Central",
    description: "Fortaleza psicológica nos quilômetros finais (o 'muro dos 35km' em maratonas).",
    level: 96,
    category: "soft",
    tag: "Psicológico"
  },
  {
    id: "s8",
    name: "Comunicação com Imprensa & Patrocinadores",
    description: "Representação profissional de marcas esportivas, entrevistas e palestras corporativas.",
    level: 90,
    category: "soft",
    tag: "Comunicação"
  },
  {
    id: "s9",
    name: "Liderança de Pelotão & Coelhos (Pacer)",
    description: "Coordenação de ritmo para equipes e suporte técnico a outros atletas de elite.",
    level: 94,
    category: "soft",
    tag: "Trabalho em Equipe"
  },

  // Ferramentas e Equipamentos
  {
    id: "s10",
    name: "Plataformas de Análise (TrainingPeaks & WKO5)",
    description: "Monitoramento diário de TSS (Training Stress Score), CTL (Fitness) e TSB (Forma).",
    level: 92,
    category: "gear",
    tag: "Software"
  },
  {
    id: "s11",
    name: "Monitores Cardíacos & Medidores de Lactato",
    description: "Testes invasivos de lactato no campo e sensores ópticos de frequência cardíaca contínua.",
    level: 88,
    category: "gear",
    tag: "Hardware"
  },
  {
    id: "s12",
    name: "Tecnologia de Calçados com Placa de Carbono",
    description: "Testes de retorno de energia e eficiência mecânica em supertênis de competição.",
    level: 95,
    category: "gear",
    tag: "Equipamento"
  }
];

/**
 * 5. PROJETOS & PRINCIPAIS COMPETIÇÕES
 * Cards detalhados com provas marcantes, projetos sociais ou clínicas de corrida.
 */
export const athleteProjects: ProjectItem[] = [
  {
    id: "proj1",
    title: "Maratona de Berlim: Quebra da Barreira dos 2h12m",
    category: "marathon",
    categoryLabel: "Maratona Internacional",
    year: "2024",
    description: "Conquista do novo recorde pessoal na prova mais rápida do planeta, com split negativo perfeito.",
    detailedStory: "Após um ciclo de 20 semanas com média de 165 km/semana e 4 semanas de altitude em Paipa (Colômbia), executei uma prova com parciais cirúrgicas: primeira metade em 1h05m55s e segunda metade em 1h05m50s.",
    results: [
      "Top 15 Geral Masculino Internacional",
      "Melhor tempo brasileiro do ano na prova",
      "Novo Recorde Pessoal homologado: 02:11:45"
    ],
    metrics: {
      distance: "42.195 km",
      pace: "3:07 min/km",
      placement: "14º Geral (2º Sul-Americano)",
      cadence: "186 ppm"
    },
    linkPlaceholder: "#detalhes-berlim"
  },
  {
    id: "proj2",
    title: "Meia Maratona de Valência: Sub 1h03m",
    category: "half",
    categoryLabel: "Meia Maratona",
    year: "2024",
    description: "Desempenho agressivo do km 1 ao 21, consolidando marca de nível mundial no circuito espanhol.",
    detailedStory: "Valência representou o teste chave antes do ciclo de maratona. Mantendo 2:57 min/km constante, consegui cruzar a linha de chegada no tempo de 01:02:18 com sensação controlada de lactato.",
    results: [
      "Marca entre as 5 melhores da história nacional nos 21k",
      "Passagem dos 10k em 29m22s",
      "Sensação térmica ideal de 12°C"
    ],
    metrics: {
      distance: "21.097 km",
      pace: "2:57 min/km",
      placement: "11º Geral",
      cadence: "188 ppm"
    },
    linkPlaceholder: "#detalhes-valencia"
  },
  {
    id: "proj3",
    title: "Projeto Passos do Futuro: Atletismo na Base",
    category: "project",
    categoryLabel: "Projeto Social & Mentoria",
    year: "2023 - Atual",
    description: "Iniciativa voluntária que atende 60 jovens da periferia com equipamentos, treinos e bolsas de incentivo.",
    detailedStory: "Acreditando que o esporte transforma realidades assim como transformou a minha, estruturamos uma clínica de atletismo semanal para descobrir e patrocinar jovens talentos dos 800m aos 10.000m.",
    results: [
      "Mais de 60 jovens atendidos ativamente",
      "12 atletas federados no campeonato estadual",
      "Doação de mais de 150 pares de tênis esportivos"
    ],
    metrics: {
      distance: "Comunidade",
      pace: "Impacto Social",
      placement: "Fundador & Mentor",
      cadence: "60+ Atletas"
    },
    linkPlaceholder: "#detalhes-social"
  },
  {
    id: "proj4",
    title: "Troféu Brasil de Atletismo: Pódio nos 10.000m",
    category: "track",
    categoryLabel: "Pista / 10.000m",
    year: "2023",
    description: "Medalha de Prata na principal competição do atletismo nacional após disputa tática acirrada.",
    detailedStory: "Prova extremamente tática com 25 voltas na pista. Após um início conservador com ritmo de 2:58/km, os últimos 2.000m foram disputados em ritmo abaixo de 2:42/km, garantindo o vice-campeonato nacional.",
    results: [
      "Medalha de Prata no Troféu Brasil",
      "Última volta de 400m em 57.8 segundos",
      "Qualificação para a Seleção Nacional"
    ],
    metrics: {
      distance: "10.000 metros",
      pace: "2:51 min/km",
      placement: "2º Lugar (Medalha de Prata)",
      cadence: "192 ppm"
    },
    linkPlaceholder: "#detalhes-trofeu"
  }
];

/**
 * 6. LINKS SOCIAIS & CONTATO
 * Seus links e e-mails de contato para patrocinadores, assessoria e imprensa.
 */
export const socialLinks: SocialLink[] = [
  {
    id: "soc1",
    name: "Instagram",
    url: "https://instagram.com/atletabruno",
    handle: "@atletabruno",
    icon: "instagram"
  },
  {
    id: "soc2",
    name: "Strava",
    url: "https://strava.com/athletes/bruno",
    handle: "Bruno [Elite Runner]",
    icon: "strava"
  },
  {
    id: "soc3",
    name: "LinkedIn",
    url: "https://linkedin.com/in/bruno-atleta",
    handle: "bruno-atleta",
    icon: "linkedin"
  },
  {
    id: "soc4",
    name: "GitHub",
    url: "https://github.com/bruno",
    handle: "bruno-runner",
    icon: "github"
  },
  {
    id: "soc5",
    name: "E-mail de Contato",
    url: "mailto:contato@bruno.com.br",
    handle: "contato@bruno.com.br",
    icon: "email"
  }
];

/**
 * 7. INFORMAÇÕES DE CONTATO DIRETO
 */
export const contactDetails = {
  email: "contato@bruno.com.br",
  pressEmail: "assessoria@bruno.com.br",
  location: "São Paulo - SP, Brasil",
  management: "Agência Apex Sports Management",
  availability: "Aberto para Patrocínios, Palestras Corporativas e Parcerias Técnicas"
};
