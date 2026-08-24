/**
 * ============================================================================
 * DEFINIÇÕES DE TIPOS (TYPESCRIPT)
 * ============================================================================
 * Estes tipos definem a estrutura dos dados do portfólio.
 * Todas as informações são locais e podem ser facilmente alteradas em portfolioData.ts.
 */

export interface PersonalRecord {
  id: string;
  distance: string; // Ex: "Maratona (42.195 km)", "Meia Maratona (21.097 km)", "10.000m"
  time: string;     // Ex: "02:11:45"
  pace: string;     // Ex: "3:07 min/km"
  event: string;    // Ex: "Maratona de Berlim"
  year: number;     // Ex: 2024
}

export interface MetricCard {
  id: string;
  label: string;
  value: string;
  subtext: string;
}

export interface SkillItem {
  id: string;
  name: string;
  description: string;
  level: number; // 0 - 100%
  category: 'technical' | 'soft' | 'gear';
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'marathon' | 'half' | 'track' | 'project' | '5k';
  categoryLabel: string;
  year: string;
  description: string;
  detailedStory: string;
  results: string[];
  metrics: Record<string, string>;
  linkPlaceholder: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'strava' | 'email' | 'garmin';
}
