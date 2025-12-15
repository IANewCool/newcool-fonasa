'use client';

import { motion } from 'framer-motion';
import { useTGRStore } from '@/store/tgr-store';
import {
  TGR_FUNCTIONS,
  TGR_SERVICES,
  CURIOUS_FACTS,
  TGR_INFO,
  TRAMOS_FONASA
} from '@/data/fonasa-content';
import type { TabType } from '@/types';

export default function Dashboard() {
  const { setActiveTab, stats } = useTGRStore();

  const randomFact = CURIOUS_FACTS[Math.floor(Math.random() * CURIOUS_FACTS.length)];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <section className="text-center py-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Tu salud, tu derecho
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[var(--muted)] text-lg max-w-2xl mx-auto"
        >
          Descubre como funciona FONASA, el seguro publico de salud que cubre
          al 80% de los chilenos. Aprende sobre tramos, GES/AUGE y tus derechos.
        </motion.p>
      </section>

      {/* Tramos FONASA - Preview */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>📊</span> Tramos FONASA
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(TRAMOS_FONASA).map(([key, tramo], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center cursor-pointer"
              onClick={() => setActiveTab('transparencia')}
              style={{ borderLeftColor: tramo.color, borderLeftWidth: '4px' }}
            >
              <span className="text-2xl font-bold" style={{ color: tramo.color }}>
                {tramo.nombre}
              </span>
              <p className="text-xs text-[var(--muted)] mt-1">Copago: {tramo.copago}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Funciones principales */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>⚡</span> Que Hace FONASA
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {TGR_FUNCTIONS.map((func, index) => (
            <motion.div
              key={func.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center cursor-pointer"
              onClick={() => setActiveTab('que-es')}
            >
              <span className="text-3xl mb-2 block">{func.icon}</span>
              <h4 className="font-medium text-sm">{func.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Servicios destacados */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span>📋</span> Servicios Online
          </h3>
          <button
            onClick={() => setActiveTab('servicios')}
            className="text-[var(--primary)] text-sm hover:underline"
          >
            Ver todos →
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {TGR_SERVICES.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => setActiveTab('servicios')}
            />
          ))}
        </div>
      </section>

      {/* Dato curioso */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="gradient-accent rounded-xl p-6 text-black"
      >
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-lg mb-2">Sabias que...</h3>
            <p className="text-black/80">{randomFact.fact}</p>
            {randomFact.source && (
              <p className="text-xs mt-2 text-black/60">Fuente: {randomFact.source}</p>
            )}
          </div>
        </div>
      </motion.section>

      {/* CTA Secciones */}
      <section className="grid md:grid-cols-2 gap-4">
        <CTACard
          icon="⚕️"
          title="GES/AUGE y Tramos"
          description="87 enfermedades con cobertura garantizada y tus beneficios segun tramo"
          tab="transparencia"
          onClick={setActiveTab}
        />
        <CTACard
          icon="📚"
          title="Aprende con FONASA"
          description="Glosario, lecciones y todo lo que necesitas saber sobre tu salud"
          tab="aprende"
          onClick={setActiveTab}
        />
      </section>

      {/* Tu progreso */}
      {(stats.sectionsVisited > 0 || stats.servicesViewed > 0) && (
        <section className="card">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span>📈</span> Tu Progreso
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <ProgressStat value={stats.sectionsVisited} label="Secciones visitadas" />
            <ProgressStat value={stats.servicesViewed} label="Servicios explorados" />
            <ProgressStat value={stats.lessonsCompleted} label="Lecciones completadas" />
            <ProgressStat value={`${stats.quizScore}%`} label="Mejor puntaje quiz" />
          </div>
        </section>
      )}

      {/* Links oficiales */}
      <section className="text-center py-4">
        <p className="text-[var(--muted)] text-sm mb-2">
          Informacion oficial de FONASA
        </p>
        <a
          href={TGR_INFO.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary inline-flex"
        >
          <span>🌐</span> Visitar fonasa.cl
        </a>
      </section>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  onClick
}: {
  service: typeof TGR_SERVICES[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="card cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{service.icon}</span>
        <div>
          <h4 className="font-medium mb-1">{service.name}</h4>
          <p className="text-sm text-[var(--muted)] line-clamp-2">
            {service.description}
          </p>
          {service.online && (
            <span className="badge badge-success mt-2">
              <span>🌐</span> Online
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CTACard({
  icon,
  title,
  description,
  tab,
  onClick
}: {
  icon: string;
  title: string;
  description: string;
  tab: TabType;
  onClick: (tab: TabType) => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="card cursor-pointer flex items-center gap-4"
      onClick={() => onClick(tab)}
    >
      <span className="text-4xl">{icon}</span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-[var(--muted)]">{description}</p>
      </div>
      <span className="ml-auto text-[var(--primary)]">→</span>
    </motion.div>
  );
}

function ProgressStat({ value, label }: { value: string | number; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-[var(--primary)]">{value}</p>
      <p className="text-xs text-[var(--muted)]">{label}</p>
    </div>
  );
}
