import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TabType } from '@/types';

interface TGRStats {
  sectionsVisited: number;
  servicesViewed: number;
  lessonsCompleted: number;
  quizScore: number;
}

interface TGRState {
  // Navegacion
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;

  // Estadisticas de uso
  stats: TGRStats;
  incrementSectionsVisited: () => void;
  incrementServicesViewed: () => void;
  completeLesson: () => void;
  setQuizScore: (score: number) => void;

  // Secciones completadas
  completedSections: string[];
  markSectionCompleted: (sectionId: string) => void;
  isSectionCompleted: (sectionId: string) => boolean;

  // Servicios favoritos
  favoriteServices: string[];
  toggleFavoriteService: (serviceId: string) => void;
  isFavoriteService: (serviceId: string) => boolean;

  // Terminos del glosario vistos
  viewedTerms: string[];
  markTermViewed: (termId: string) => void;

  // FAQ expandidas
  expandedFAQs: string[];
  toggleFAQ: (faqId: string) => void;
}

export const useTGRStore = create<TGRState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      activeTab: 'inicio',
      stats: {
        sectionsVisited: 0,
        servicesViewed: 0,
        lessonsCompleted: 0,
        quizScore: 0
      },
      completedSections: [],
      favoriteServices: [],
      viewedTerms: [],
      expandedFAQs: [],

      // Acciones de navegacion
      setActiveTab: (tab) => {
        set({ activeTab: tab });
        get().incrementSectionsVisited();
      },

      // Acciones de estadisticas
      incrementSectionsVisited: () => {
        set((state) => ({
          stats: {
            ...state.stats,
            sectionsVisited: state.stats.sectionsVisited + 1
          }
        }));
      },

      incrementServicesViewed: () => {
        set((state) => ({
          stats: {
            ...state.stats,
            servicesViewed: state.stats.servicesViewed + 1
          }
        }));
      },

      completeLesson: () => {
        set((state) => ({
          stats: {
            ...state.stats,
            lessonsCompleted: state.stats.lessonsCompleted + 1
          }
        }));
      },

      setQuizScore: (score) => {
        set((state) => ({
          stats: {
            ...state.stats,
            quizScore: Math.max(state.stats.quizScore, score)
          }
        }));
      },

      // Acciones de secciones
      markSectionCompleted: (sectionId) => {
        set((state) => ({
          completedSections: state.completedSections.includes(sectionId)
            ? state.completedSections
            : [...state.completedSections, sectionId]
        }));
      },

      isSectionCompleted: (sectionId) => {
        return get().completedSections.includes(sectionId);
      },

      // Acciones de favoritos
      toggleFavoriteService: (serviceId) => {
        set((state) => ({
          favoriteServices: state.favoriteServices.includes(serviceId)
            ? state.favoriteServices.filter((id) => id !== serviceId)
            : [...state.favoriteServices, serviceId]
        }));
      },

      isFavoriteService: (serviceId) => {
        return get().favoriteServices.includes(serviceId);
      },

      // Acciones de glosario
      markTermViewed: (termId) => {
        set((state) => ({
          viewedTerms: state.viewedTerms.includes(termId)
            ? state.viewedTerms
            : [...state.viewedTerms, termId]
        }));
      },

      // Acciones de FAQ
      toggleFAQ: (faqId) => {
        set((state) => ({
          expandedFAQs: state.expandedFAQs.includes(faqId)
            ? state.expandedFAQs.filter((id) => id !== faqId)
            : [...state.expandedFAQs, faqId]
        }));
      }
    }),
    {
      name: 'newcool-tgr-storage'
    }
  )
);
