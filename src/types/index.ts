// Tipos para NewCool TGR

export type TabType = 'inicio' | 'que-es' | 'servicios' | 'transparencia' | 'aprende';

export type TGRFunctionId = string;

export interface TGRFunction {
  id: string;
  name: string;
  icon: string;
  description: string;
  details: string[];
}

export interface TGRService {
  id: string;
  name: string;
  icon: string;
  description: string;
  requirements: string[];
  steps: string[];
  url: string;
  online: boolean;
}

export interface TGRStats {
  recaudacionAnual: string;
  pagosRealizados: string;
  funcionarios: string;
  oficinas: string;
}

export interface IncomeCategory {
  id: string;
  name: string;
  icon: string;
  amount: string;
  percentage: number;
  color: string;
  description: string;
}

export interface ExpenseCategory {
  id: string;
  name: string;
  icon: string;
  amount: string;
  percentage: number;
  color: string;
  description: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  example?: string;
}

export interface Lesson {
  id: string;
  title: string;
  icon: string;
  description: string;
  content: string[];
  keyPoints: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChannelInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
  contact: string;
  hours?: string;
}

export interface CuriousFact {
  id: string;
  fact: string;
  source?: string;
}
