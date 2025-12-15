'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTGRStore } from '@/store/tgr-store';
import { TGR_SERVICES, FAQ_LIST, CHANNELS } from '@/data/fonasa-content';

type ServiceFilter = 'all' | 'online' | 'presencial';

export default function ServicesView() {
  const [filter, setFilter] = useState<ServiceFilter>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const {
    incrementServicesViewed,
    toggleFavoriteService,
    isFavoriteService,
    expandedFAQs,
    toggleFAQ
  } = useTGRStore();

  const filteredServices = TGR_SERVICES.filter((service) => {
    if (filter === 'all') return true;
    if (filter === 'online') return service.online;
    return !service.online;
  });

  const handleServiceClick = (serviceId: string) => {
    if (selectedService !== serviceId) {
      incrementServicesViewed();
    }
    setSelectedService(selectedService === serviceId ? null : serviceId);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <section className="text-center py-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Servicios Ciudadanos
        </h2>
        <p className="text-[var(--muted)]">
          Tramites y servicios disponibles para ciudadanos y empresas
        </p>
      </section>

      {/* Filtros */}
      <div className="flex justify-center gap-2">
        {(['all', 'online', 'presencial'] as ServiceFilter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === f
                ? 'gradient-primary text-white'
                : 'bg-[var(--card)] text-[var(--muted)] hover:bg-[var(--card-hover)]'
            }`}
          >
            {f === 'all' ? 'Todos' : f === 'online' ? '🌐 Online' : '🏢 Presencial'}
          </button>
        ))}
      </div>

      {/* Lista de servicios */}
      <section className="space-y-4">
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            isSelected={selectedService === service.id}
            isFavorite={isFavoriteService(service.id)}
            onClick={() => handleServiceClick(service.id)}
            onToggleFavorite={() => toggleFavoriteService(service.id)}
          />
        ))}
      </section>

      {/* Canales de atencion */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>📞</span> Canales de Atencion
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHANNELS.map((channel) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card text-center"
            >
              <span className="text-3xl mb-2 block">{channel.icon}</span>
              <h4 className="font-medium">{channel.name}</h4>
              <p className="text-sm text-[var(--muted)] mb-2">{channel.description}</p>
              <p className="text-xs text-[var(--primary)] font-medium">{channel.contact}</p>
              {channel.hours && (
                <p className="text-xs text-[var(--muted)] mt-1">{channel.hours}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>❓</span> Preguntas Frecuentes
        </h3>
        <div className="space-y-2">
          {FAQ_LIST.filter((faq) => faq.category === 'servicios').map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isExpanded={expandedFAQs.includes(faq.id)}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-4">
        <a
          href="https://fonasa.gob.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <span>🌐</span> Ir a Tramites FONASA
        </a>
      </section>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  isSelected,
  isFavorite,
  onClick,
  onToggleFavorite
}: {
  service: typeof TGR_SERVICES[0];
  index: number;
  isSelected: boolean;
  isFavorite: boolean;
  onClick: () => void;
  onToggleFavorite: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`card ${isSelected ? 'border-[var(--primary)]' : ''}`}
    >
      <div className="flex items-start gap-4 cursor-pointer" onClick={onClick}>
        <span className="text-3xl">{service.icon}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-semibold">{service.name}</h4>
            {service.online && (
              <span className="badge badge-success">
                <span>🌐</span> Online
              </span>
            )}
          </div>
          <p className="text-sm text-[var(--muted)] mt-1">{service.description}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="text-2xl hover:scale-110 transition-transform"
        >
          {isFavorite ? '⭐' : '☆'}
        </button>
      </div>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-[var(--border)] space-y-4">
              {/* Requisitos */}
              <div>
                <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <span>📋</span> Requisitos
                </h5>
                <ul className="space-y-1">
                  {service.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-[var(--muted)] flex items-start gap-2">
                      <span className="text-[var(--primary)]">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pasos */}
              <div>
                <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <span>📝</span> Pasos a seguir
                </h5>
                <ol className="space-y-1">
                  {service.steps.map((step, i) => (
                    <li key={i} className="text-sm text-[var(--muted)] flex items-start gap-2">
                      <span className="text-[var(--accent)] font-medium">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Link */}
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full"
              >
                <span>🔗</span> Ir al tramite
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQItem({
  faq,
  isExpanded,
  onToggle
}: {
  faq: typeof FAQ_LIST[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`card cursor-pointer ${isExpanded ? 'border-[var(--primary)]' : ''}`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="font-medium">{faq.question}</h4>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-[var(--muted)]"
        >
          ▼
        </motion.span>
      </div>

      <AnimatePresence>
        {isExpanded && (
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
    </div>
  );
}
