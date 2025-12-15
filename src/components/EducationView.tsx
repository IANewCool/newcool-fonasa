'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTGRStore } from '@/store/tgr-store';
import { GLOSSARY, LESSONS, FAQ_LIST } from '@/data/fonasa-content';

type EducationTab = 'glosario' | 'lecciones' | 'faq';

export default function EducationView() {
  const [activeTab, setActiveTab] = useState<EducationTab>('glosario');
  const [searchTerm, setSearchTerm] = useState('');
  const { markTermViewed, viewedTerms, completeLesson, stats } = useTGRStore();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <section className="text-center py-6">
        <span className="text-5xl mb-4 block">📚</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Aprende con FONASA
        </h2>
        <p className="text-[var(--muted)]">
          Glosario, lecciones y recursos educativos sobre el sistema de salud publico
        </p>
      </section>

      {/* Tabs */}
      <div className="flex justify-center gap-2">
        {(['glosario', 'lecciones', 'faq'] as EducationTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab
                ? 'gradient-primary text-white'
                : 'bg-[var(--card)] text-[var(--muted)] hover:bg-[var(--card-hover)]'
            }`}
          >
            {tab === 'glosario' && '📖 Glosario'}
            {tab === 'lecciones' && '🎓 Lecciones'}
            {tab === 'faq' && '❓ FAQ'}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'glosario' && (
          <GlossarySection
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            viewedTerms={viewedTerms}
            onTermView={markTermViewed}
          />
        )}
        {activeTab === 'lecciones' && (
          <LessonsSection
            completedCount={stats.lessonsCompleted}
            onComplete={completeLesson}
          />
        )}
        {activeTab === 'faq' && <FAQSection />}
      </AnimatePresence>

      {/* Progreso */}
      <section className="card">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span>📈</span> Tu Progreso de Aprendizaje
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-[var(--primary)]">
              {viewedTerms.length}/{GLOSSARY.length}
            </p>
            <p className="text-xs text-[var(--muted)]">Terminos vistos</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--success)]">
              {stats.lessonsCompleted}/{LESSONS.length}
            </p>
            <p className="text-xs text-[var(--muted)]">Lecciones completadas</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--accent)]">
              {stats.quizScore}%
            </p>
            <p className="text-xs text-[var(--muted)]">Mejor puntaje</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function GlossarySection({
  searchTerm,
  setSearchTerm,
  viewedTerms,
  onTermView
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  viewedTerms: string[];
  onTermView: (termId: string) => void;
}) {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = GLOSSARY.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTermClick = (termId: string) => {
    setExpandedTerm(expandedTerm === termId ? null : termId);
    onTermView(termId);
  };

  return (
    <motion.section
      key="glosario"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      {/* Busqueda */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar termino..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-3 pl-10 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:outline-none"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
      </div>

      {/* Lista de terminos */}
      <div className="space-y-2">
        {filteredTerms.map((term, index) => (
          <motion.div
            key={term.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`card cursor-pointer ${
              expandedTerm === term.id ? 'border-[var(--primary)]' : ''
            }`}
            onClick={() => handleTermClick(term.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{term.term}</h4>
                {viewedTerms.includes(term.id) && (
                  <span className="text-[var(--success)] text-sm">✓</span>
                )}
              </div>
              <motion.span
                animate={{ rotate: expandedTerm === term.id ? 180 : 0 }}
                className="text-[var(--muted)]"
              >
                ▼
              </motion.span>
            </div>

            <AnimatePresence>
              {expandedTerm === term.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 pt-3 border-t border-[var(--border)]">
                    <p className="text-sm text-[var(--muted)]">{term.definition}</p>
                    {term.example && (
                      <div className="mt-2 p-2 bg-[var(--background)] rounded-lg">
                        <p className="text-xs text-[var(--accent)]">
                          <strong>Ejemplo:</strong> {term.example}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function LessonsSection({
  completedCount,
  onComplete
}: {
  completedCount: number;
  onComplete: () => void;
}) {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const handleComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
      onComplete();
    }
    setActiveLesson(null);
  };

  return (
    <motion.section
      key="lecciones"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      {LESSONS.map((lesson, index) => (
        <motion.div
          key={lesson.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`card ${activeLesson === lesson.id ? 'border-[var(--primary)]' : ''}`}
        >
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => setActiveLesson(activeLesson === lesson.id ? null : lesson.id)}
          >
            <span className="text-3xl">{lesson.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{lesson.title}</h4>
                {completedLessons.includes(lesson.id) && (
                  <span className="badge badge-success">Completada</span>
                )}
              </div>
              <p className="text-sm text-[var(--muted)]">{lesson.description}</p>
            </div>
            <motion.span
              animate={{ rotate: activeLesson === lesson.id ? 180 : 0 }}
              className="text-[var(--muted)]"
            >
              ▼
            </motion.span>
          </div>

          <AnimatePresence>
            {activeLesson === lesson.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-[var(--border)] space-y-4">
                  {/* Contenido */}
                  <div className="space-y-3">
                    {lesson.content.map((paragraph, i) => (
                      <p key={i} className="text-sm text-[var(--muted)]">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Puntos clave */}
                  <div className="p-4 bg-[var(--background)] rounded-lg">
                    <h5 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <span>💡</span> Puntos Clave
                    </h5>
                    <ul className="space-y-1">
                      {lesson.keyPoints.map((point, i) => (
                        <li key={i} className="text-sm text-[var(--muted)] flex items-start gap-2">
                          <span className="text-[var(--primary)]">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Boton completar */}
                  {!completedLessons.includes(lesson.id) && (
                    <button
                      onClick={() => handleComplete(lesson.id)}
                      className="btn btn-primary w-full"
                    >
                      <span>✓</span> Marcar como completada
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.section>
  );
}

function FAQSection() {
  const { expandedFAQs, toggleFAQ } = useTGRStore();
  const generalFAQs = FAQ_LIST.filter((faq) => faq.category === 'general');

  return (
    <motion.section
      key="faq"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-2"
    >
      {generalFAQs.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className={`card cursor-pointer ${
            expandedFAQs.includes(faq.id) ? 'border-[var(--primary)]' : ''
          }`}
          onClick={() => toggleFAQ(faq.id)}
        >
          <div className="flex items-center justify-between gap-4">
            <h4 className="font-medium">{faq.question}</h4>
            <motion.span
              animate={{ rotate: expandedFAQs.includes(faq.id) ? 180 : 0 }}
              className="text-[var(--muted)]"
            >
              ▼
            </motion.span>
          </div>

          <AnimatePresence>
            {expandedFAQs.includes(faq.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="mt-3 pt-3 border-t border-[var(--border)] text-sm text-[var(--muted)]">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.section>
  );
}
