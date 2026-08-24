/**
 * ============================================================================
 * DADOS DO PORTFÓLIO - ATLETA DE CORRIDA PROFISSIONAL
 * ============================================================================
 */

import { PersonalRecord, MetricCard, SkillItem, ProjectItem, SocialLink } from '../types';

export const athleteProfile = {
  name: "Bruno",
  nickname: "The Pacing Machine",
  title: "Atleta Profissional de Corrida & Meio-Fundo",
  subTitle: "Maratonista de Elite | Especialista em 21k e 42k | Atleta de Alto Rendimento",
  location: "São Paulo, SP - Brasil & Campos do Jordão (Treino em Altitude)",
  status: "Em Ciclo de Treinamento Olímpico",
  about: {
    lead: "Transformando disciplina diária, precisão biomecânica e resiliência mental em resultados nos principais palcos do atletismo mundial.",
    paragraph1: "Iniciei minha trajetória nas pistas de atletismo aos 14 anos, competindo nos 3.000m e 5.000m rasos. Ao longo da última década, migrei progressivamente para as provas de rua e me especializei na Meia Maratona e Maratona, acumulando mais de 45.000 km rodados em ciclos rigorosos de periodização.",
    paragraph2: "Meu foco atual está na busca constante do índice olímpico, combinando ciência esportiva, treinos em altitude, controle rigoroso de lactato sanguíneo e análise de dados biomecânicos. Acredito que a corrida em alto nível é o encontro perfeito entre entrega física absoluta e estratégia milimétrica.",
    philosophy: "«A corrida não mente. Cada fração de segundo conquistada na linha de chegada é forjada na solidão dos treinos matinais antes do sol nascer.»",
  },
};

export const athleteMetrics: MetricCard[] = [
  { id: "m1", label: "Melhor 5K Oficial", value: "18:35", subtext: "Pace 3:43 min/km (Olga Kos)" },
  { id: "m2", label: "Meia Maratona (21K)", value: "1h33min", subtext: "Pace 4:25 min/km (Meia das Pontes)" },
  { id: "m3", label: "Pódio em Categoria", value: "2º Lugar", subtext: "Cat. 18-28 anos (BSB Half 2025)" },
  { id: "m4", label: "Revezamento 100K", value: "6º Colocado", subtext: "Sexteto Misto (Volta do Lago)" },
];

export const personalRecords: PersonalRecord[] = [
  {
    id: "pr1",
    distance: "5 KM (Recorde)",
    time: "18:35",
    pace: "03:43 min/km",
    event: "Corrida Olga Kos Brasília Ano III",
    year: 2024
  },
  {
    id: "pr2",
    distance: "5 KM (Pódio)",
    time: "Pace 3:50",
    pace: "03:50 min/km",
    event: "BSB Half Marathon Speed Challenge (2º Lugar Cat. 18-28)",
    year: 2025
  },
  {
    id: "pr3",
    distance: "10 KM",
    time: "39:45",
    pace: "03:58 min/km",
    event: "Marca Pessoal 10K",
    year: 2024
  },
  {
    id: "pr4",
    distance: "21 KM (Meia Maratona)",
    time: "1h33min",
    pace: "04:25 min/km",
    event: "Meia das Pontes 2024",
    year: 2024
  }
];

export const athleteSkills: SkillItem[] = [
  { id: "s1", name: "Periodização & Planejamento de Ciclos", description: "Estruturação de macrociclos visando o pico de performance em provas-alvo.", level: 95, category: "technical", tag: "Metodologia" },
  { id: "s2", name: "Gestão de Ritmo & Pacing Estratégico", description: "Capacidade de manter variações de pace controladas mesmo sob fadiga.", level: 98, category: "technical", tag: "Técnica" },
  { id: "s3", name: "Resiliência & Fortaleza Mental", description: "Constância psicológica e foco nos momentos mais intensos da prova.", level: 96, category: "soft", tag: "Psicológico" },
  { id: "s4", name: "Nutrição & Hidratação Intra-Prova", description: "Estratégia de reposição de carboidratos e eletrólitos em treinos longos e provas.", level: 92, category: "technical", tag: "Nutrição" },
  { id: "s5", name: "Disciplina Diária & Rotina", description: "Constância absoluta em treinos matinais, consistência e recuperação.", level: 99, category: "soft", tag: "Mentalidade" },
  { id: "s6", name: "Tecnologia & Monitoramento", description: "Acompanhamento diário de métricas de pace, frequência cardíaca e carga de treino.", level: 92, category: "gear", tag: "Análise" }
];

export const athleteProjects: ProjectItem[] = [
  {
    id: "proj1",
    title: "Meia das Pontes 2024",
    category: "half",
    categoryLabel: "Meia Maratona (21K)",
    year: "2024",
    description: "Meia Maratona completada com percurso de 21,097 km em 1h33min e pace médio de 4:25 min/km.",
    detailedStory: "Participação oficial na Meia das Pontes 2024, cobrindo os 21,097 km da Meia Maratona com ritmo consistente de 4:25 min/km e fechando a prova no tempo de 1h33min.",
    results: [
      "Competição: Meia das Pontes 2024",
      "Distância Oficial: 21,097 km",
      "Tempo Final: 1h33min",
      "Pace Médio: 4:25 min/km"
    ],
    metrics: {
      distancia: "21,097 km",
      pace: "4:25 min/km",
      tempo: "1h33min",
      status: "Oficial"
    },
    linkPlaceholder: "#detalhes-meia-das-pontes"
  },
  {
    id: "proj2",
    title: "Volta do Lago CAIXA",
    category: "track",
    categoryLabel: "Revezamento 100km",
    year: "2024",
    description: "Desafio de 100 km em revezamento, conquistando o 6º lugar geral na categoria Sexteto Misto.",
    detailedStory: "Participação na tradicional e exigente prova Volta do Lago CAIXA (100km), correndo em equipe pelo Sexteto Misto e conquistando a 6ª colocação geral na categoria.",
    results: [
      "Competição: Volta do Lago CAIXA",
      "Distância Total: 100 km",
      "Categoria: Sexteto Misto",
      "Colocação da Equipe: 6º Colocado"
    ],
    metrics: {
      distancia: "100 km",
      categoria: "Sexteto Misto",
      colocacao: "6º Colocado",
      equipe: "Revezamento"
    },
    linkPlaceholder: "#detalhes-volta-do-lago"
  },
  {
    id: "proj3",
    title: "BSB Half Marathon Speed Challenge 2025",
    category: "5k",
    categoryLabel: "Pódio na Categoria",
    year: "2025",
    description: "Prova de 5 km com ritmo veloz de 3:50 min/km, conquistando o 2º lugar na categoria 18 a 28 anos.",
    detailedStory: "Desempenho de destaque na BSB Half Marathon Speed Challenge 2025, sustentando o pace forte de 3:50 min/km nos 5 km e conquistando o 2º lugar no pódio da categoria 18 a 28 anos.",
    results: [
      "Competição: BSB Half Marathon Speed Challenge 2025",
      "Distância: 5 km",
      "Pace: 3:50 min/km",
      "Classificação: 2º Colocado na Categoria 18 a 28 anos"
    ],
    metrics: {
      distancia: "5 km",
      pace: "3:50 min/km",
      categoria: "18-28 anos",
      podio: "2º Lugar"
    },
    linkPlaceholder: "#detalhes-bsb-half"
  },
  {
    id: "proj4",
    title: "Corrida Pela Inclusão Olga Kos Brasília Ano III",
    category: "5k",
    categoryLabel: "Recorde Pessoal 5K",
    year: "2024",
    description: "Marca expressiva nos 5 km com tempo final de 00:18:35 e pace médio de 03:43 min/km.",
    detailedStory: "Participação marcante na Corrida e Caminhada Pela Inclusão Olga Kos Brasília Ano III, completando os 5 km no tempo oficial de 00:18:35 a um ritmo médio de 03:43 min/km.",
    results: [
      "Competição: Corrida e Caminhada Pela Inclusão Olga Kos Brasília Ano III",
      "Distância: 5 km",
      "Tempo Final: 00:18:35",
      "Pace Médio: 03:43 min/km"
    ],
    metrics: {
      distancia: "5 km",
      pace: "03:43 min/km",
      tempo: "00:18:35",
      marca: "Melhor 5K"
    },
    linkPlaceholder: "#detalhes-olga-kos"
  }
];

export const socialLinks: SocialLink[] = [
  { id: "soc1", name: "Instagram", url: "https://instagram.com/o.bruno11", handle: "@o.bruno11", icon: "instagram" },
  { id: "soc2", name: "Strava", url: "https://strava.app.link/cCslKy4GR5b", handle: "Perfil Strava", icon: "strava" },
  { id: "soc3", name: "Garmin Connect", url: "https://connect.garmin.com/modern/profile/ded5391d-1dd5-4dd1-8083-475cc060e52e", handle: "Bruno dos anjos Del Toro", icon: "garmin" },
  { id: "soc4", name: "E-mail", url: "mailto:obrunodosanjos@gmail.com", handle: "obrunodosanjos@gmail.com", icon: "email" }
];

export const contactDetails = {
  email: "obrunodosanjos@gmail.com",
  pressEmail: "obrunodosanjos@gmail.com",
  location: "Brasília - DF, Brasil",
  management: "Assessoria Esportiva & Performance",
  availability: "Aberto para Parcerias Esportivas, Apoio e Patrocínios"
};
