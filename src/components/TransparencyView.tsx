'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TRAMOS_FONASA, GES_AUGE, INCOME_CATEGORIES, EXPENSE_CATEGORIES } from '@/data/fonasa-content';

type ViewMode = 'tramos' | 'ges' | 'finanzas';

export default function TransparencyView() {
  const [viewMode, setViewMode] = useState<ViewMode>('tramos');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <section className="text-center py-6">
        <span className="text-5xl mb-4 block">⚕️</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          GES/AUGE y Tramos FONASA
        </h2>
        <p className="text-[var(--muted)]">
          Conoce tus beneficios segun tu tramo y las enfermedades con cobertura garantizada
        </p>
      </section>

      {/* Toggle */}
      <div className="flex justify-center">
        <div className="bg-[var(--card)] rounded-lg p-1 flex gap-1">
          <button
            onClick={() => setViewMode('tramos')}
            className={`px-4 py-2 rounded-md font-medium transition-all text-sm ${
              viewMode === 'tramos'
                ? 'gradient-primary text-white'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
          >
            📊 Tramos
          </button>
          <button
            onClick={() => setViewMode('ges')}
            className={`px-4 py-2 rounded-md font-medium transition-all text-sm ${
              viewMode === 'ges'
                ? 'gradient-success text-white'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
          >
            ⚕️ GES/AUGE
          </button>
          <button
            onClick={() => setViewMode('finanzas')}
            className={`px-4 py-2 rounded-md font-medium transition-all text-sm ${
              viewMode === 'finanzas'
                ? 'gradient-accent text-black'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
          >
            💰 Finanzas
          </button>
        </div>
      </div>

      {/* Contenido segun modo */}
      {viewMode === 'tramos' && <TramosSection />}
      {viewMode === 'ges' && <GESSection />}
      {viewMode === 'finanzas' && <FinanzasSection />}

      {/* Links */}
      <section className="text-center py-4 space-y-2">
        <p className="text-[var(--muted)] text-sm">
          Accede a informacion oficial de FONASA
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.fonasa.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>🌐</span> FONASA
          </a>
          <a
            href="https://www.supersalud.gob.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>🏛️</span> SuperSalud
          </a>
          <a
            href="https://www.minsal.cl/ges-auge/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>⚕️</span> GES Minsal
          </a>
        </div>
      </section>
    </div>
  );
}

function TramosSection() {
  return (
    <motion.div
      key="tramos"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Info general */}
      <div className="card text-center">
        <p className="text-[var(--muted)] mb-2">Tu tramo determina cuanto pagas</p>
        <p className="text-2xl font-bold">Tramos A y B = Gratuito</p>
        <p className="text-sm text-[var(--muted)]">En sistema publico (MAI)</p>
      </div>

      {/* Grid de tramos */}
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(TRAMOS_FONASA).map(([key, tramo], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
            style={{ borderLeftColor: tramo.color, borderLeftWidth: '4px' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold" style={{ color: tramo.color }}>
                  {tramo.nombre}
                </h3>
                <p className="text-sm text-[var(--muted)]">{tramo.descripcion}</p>
              </div>
              <span className="text-2xl font-bold" style={{ color: tramo.color }}>
                {tramo.copago}
              </span>
            </div>

            <div className="mb-3">
              <p className="text-xs font-medium mb-1">Requisitos:</p>
              <ul className="text-xs space-y-1">
                {tramo.requisitos.map((req, i) => (
                  <li key={i} className="flex items-start gap-1 text-[var(--muted)]">
                    <span style={{ color: tramo.color }}>•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--card-hover)] rounded-lg p-2 text-center">
              <p className="text-xs text-[var(--muted)]">Cobertura en sistema publico</p>
              <p className="font-bold" style={{ color: tramo.color }}>{tramo.cobertura}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Calculadora simple */}
      <div className="card border-[var(--primary)]">
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <span>🧮</span> ¿En que tramo estoy?
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-green-500/10 p-3 rounded-lg">
            <p className="text-xs text-[var(--muted)]">Sin ingresos</p>
            <p className="font-bold text-green-500">Tramo A</p>
          </div>
          <div className="bg-blue-500/10 p-3 rounded-lg">
            <p className="text-xs text-[var(--muted)]">Hasta $400.000</p>
            <p className="font-bold text-blue-500">Tramo B</p>
          </div>
          <div className="bg-yellow-500/10 p-3 rounded-lg">
            <p className="text-xs text-[var(--muted)]">$400.001 - $584.000</p>
            <p className="font-bold text-yellow-500">Tramo C</p>
          </div>
          <div className="bg-red-500/10 p-3 rounded-lg">
            <p className="text-xs text-[var(--muted)]">Mas de $584.000</p>
            <p className="font-bold text-red-500">Tramo D</p>
          </div>
        </div>
        <p className="text-xs text-center text-[var(--muted)] mt-3">
          Consulta tu tramo exacto en fonasa.cl con tu ClaveUnica
        </p>
      </div>
    </motion.div>
  );
}

function GESSection() {
  return (
    <motion.div
      key="ges"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Info GES */}
      <div className="card text-center border-[var(--success)]">
        <p className="text-[var(--muted)] mb-2">Garantias Explicitas en Salud</p>
        <p className="text-4xl font-bold text-[var(--success)]">{GES_AUGE.total_patologias}</p>
        <p className="text-lg">Enfermedades con cobertura garantizada</p>
        <p className="text-sm text-[var(--muted)] mt-2">
          Copago maximo: {GES_AUGE.copago_maximo}
        </p>
      </div>

      {/* Las 4 garantias */}
      <div className="grid md:grid-cols-4 gap-4">
        {GES_AUGE.garantias.map((garantia, index) => (
          <motion.div
            key={garantia.nombre}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="card text-center"
          >
            <span className="text-3xl mb-2 block">
              {garantia.nombre === 'Acceso' && '🚪'}
              {garantia.nombre === 'Oportunidad' && '⏱️'}
              {garantia.nombre === 'Proteccion Financiera' && '💰'}
              {garantia.nombre === 'Calidad' && '⭐'}
            </span>
            <h4 className="font-bold">{garantia.nombre}</h4>
            <p className="text-xs text-[var(--muted)]">{garantia.detalle}</p>
          </motion.div>
        ))}
      </div>

      {/* Enfermedades destacadas */}
      <div className="card">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <span>🏥</span> Patologias GES Destacadas
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {GES_AUGE.enfermedades_destacadas.map((enf, index) => (
            <motion.div
              key={enf.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between bg-[var(--card-hover)] p-3 rounded-lg"
            >
              <div>
                <p className="font-medium">{enf.nombre}</p>
                <p className="text-xs text-[var(--muted)]">Plazo: {enf.plazo}</p>
              </div>
              <span className="text-[var(--success)]">✓</span>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-center text-[var(--muted)] mt-4">
          Consulta las 87 patologias completas en minsal.cl/ges-auge
        </p>
      </div>

      {/* Como activar GES */}
      <div className="card border-[var(--warning)] bg-[var(--warning)]/5">
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <span>💡</span> Como activar tu GES
        </h3>
        <ol className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="bg-[var(--warning)] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">1</span>
            <span className="text-sm">Tu medico diagnostica una patologia GES</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-[var(--warning)] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">2</span>
            <span className="text-sm">Te entrega la Constancia de Informacion al Paciente (CIP)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-[var(--warning)] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">3</span>
            <span className="text-sm">Firmas aceptando y comienzan a correr los plazos garantizados</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-[var(--warning)] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">4</span>
            <span className="text-sm">Si no te atienden a tiempo, reclama en FONASA</span>
          </li>
        </ol>
      </div>
    </motion.div>
  );
}

function FinanzasSection() {
  const [showIncome, setShowIncome] = useState(true);
  const categories = showIncome ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  return (
    <motion.div
      key="finanzas"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Toggle ingresos/gastos */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setShowIncome(true)}
          className={`px-4 py-2 rounded-lg font-medium ${
            showIncome ? 'bg-green-500 text-white' : 'bg-[var(--card)]'
          }`}
        >
          💰 Ingresos
        </button>
        <button
          onClick={() => setShowIncome(false)}
          className={`px-4 py-2 rounded-lg font-medium ${
            !showIncome ? 'bg-red-500 text-white' : 'bg-[var(--card)]'
          }`}
        >
          💳 Gastos
        </button>
      </div>

      {/* Total */}
      <div className={`card text-center ${showIncome ? 'border-green-500' : 'border-red-500'}`}>
        <p className="text-[var(--muted)] mb-1">
          {showIncome ? 'Total Ingresos FONASA' : 'Total Gastos FONASA'}
        </p>
        <p className="text-3xl font-bold">~$8 billones CLP/año</p>
        <p className="text-xs text-[var(--muted)]">Aproximado 2024</p>
      </div>

      {/* Grafico de barras */}
      <div className="space-y-4">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{cat.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{cat.name}</h4>
                  <span className="text-sm font-bold">{cat.percentage}%</span>
                </div>
                <p className="text-xs text-[var(--muted)]">{cat.amount}</p>
              </div>
            </div>
            <div className="h-3 bg-[var(--card-hover)] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${cat.percentage}%` }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                className="h-full rounded-full"
                style={{ background: cat.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
