'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTGRStore } from '@/store/tgr-store';
import { TGR_FUNCTIONS, TGR_INFO, MODALIDADES } from '@/data/fonasa-content';
import type { TGRFunctionId } from '@/types';

export default function WhatIsTGRView() {
  const [selectedFunction, setSelectedFunction] = useState<TGRFunctionId | null>(null);
  const { markSectionCompleted, isSectionCompleted } = useTGRStore();

  const handleFunctionClick = (funcId: TGRFunctionId) => {
    setSelectedFunction(selectedFunction === funcId ? null : funcId);
    markSectionCompleted(`function-${funcId}`);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Introduccion */}
      <section className="text-center py-6">
        <span className="text-6xl mb-4 block">{TGR_INFO.icon}</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {TGR_INFO.fullName}
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          {TGR_INFO.description}
        </p>
      </section>

      {/* Historia */}
      <section className="card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>📜</span> Historia
        </h3>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <span className="text-4xl font-bold text-[var(--primary)]">
              {TGR_INFO.foundedYear}
            </span>
            <p className="text-xs text-[var(--muted)]">Año de creacion</p>
          </div>
          <div className="h-12 w-px bg-[var(--border)]" />
          <p className="text-[var(--muted)]">
            FONASA fue creado en 1979 como parte de la reforma al sistema de salud chileno,
            fusionando el Servicio Medico Nacional de Empleados (SERMENA) y el Servicio Nacional
            de Salud. Es el seguro publico de salud mas grande de Chile.
          </p>
        </div>
      </section>

      {/* Mision y Vision */}
      <div className="grid md:grid-cols-2 gap-4">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card border-l-4 border-l-[var(--primary)]"
        >
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <span>🎯</span> Mision
          </h3>
          <p className="text-[var(--muted)] text-sm">{TGR_INFO.mission}</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card border-l-4 border-l-[var(--accent)]"
        >
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <span>🔭</span> Vision
          </h3>
          <p className="text-[var(--muted)] text-sm">{TGR_INFO.vision}</p>
        </motion.section>
      </div>

      {/* Modalidades de Atencion */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>🏥</span> Modalidades de Atencion
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card border-l-4 border-l-green-500">
            <h4 className="font-bold text-lg mb-2">{MODALIDADES.MAI.nombre}</h4>
            <p className="text-sm text-[var(--muted)] mb-3">{MODALIDADES.MAI.descripcion}</p>
            <div className="mb-3">
              <p className="text-xs font-medium mb-1">Donde atenderse:</p>
              <div className="flex flex-wrap gap-1">
                {MODALIDADES.MAI.donde.map((lugar) => (
                  <span key={lugar} className="badge badge-success text-xs">{lugar}</span>
                ))}
              </div>
            </div>
            <ul className="text-xs space-y-1">
              {MODALIDADES.MAI.beneficios.map((b, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-green-500">✓</span>
                  <span className="text-[var(--muted)]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-l-4 border-l-blue-500">
            <h4 className="font-bold text-lg mb-2">{MODALIDADES.MLE.nombre}</h4>
            <p className="text-sm text-[var(--muted)] mb-3">{MODALIDADES.MLE.descripcion}</p>
            <div className="mb-3">
              <p className="text-xs font-medium mb-1">Donde atenderse:</p>
              <div className="flex flex-wrap gap-1">
                {MODALIDADES.MLE.donde.map((lugar) => (
                  <span key={lugar} className="badge badge-info text-xs">{lugar}</span>
                ))}
              </div>
            </div>
            <ul className="text-xs space-y-1">
              {MODALIDADES.MLE.beneficios.map((b, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-blue-500">✓</span>
                  <span className="text-[var(--muted)]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Funciones principales */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>⚙️</span> Funciones Principales
        </h3>
        <div className="space-y-3">
          {TGR_FUNCTIONS.map((func, index) => (
            <FunctionCard
              key={func.id}
              func={func}
              index={index}
              isSelected={selectedFunction === func.id}
              isCompleted={isSectionCompleted(`function-${func.id}`)}
              onClick={() => handleFunctionClick(func.id)}
            />
          ))}
        </div>
      </section>

      {/* Estructura */}
      <section className="card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>🏢</span> Estructura del Sistema de Salud
        </h3>
        <div className="flex flex-col items-center gap-4">
          <div className="gradient-primary text-white px-6 py-3 rounded-lg text-center">
            <p className="font-bold">Ministerio de Salud</p>
            <p className="text-sm text-blue-200">Ximena Aguilera</p>
          </div>
          <div className="w-px h-8 bg-[var(--border)]" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
            {['FONASA', 'Hospitales Publicos', 'CESFAM/Consultorios', 'SuperSalud'].map((org) => (
              <div key={org} className="bg-[var(--card-hover)] px-4 py-2 rounded-lg text-center text-sm">
                {org}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datos clave */}
      <section className="gradient-primary rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">Datos Clave</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <DataPoint icon="🏛️" value={TGR_INFO.foundedYear.toString()} label="Fundado" />
          <DataPoint icon="👥" value="15M+" label="Beneficiarios" />
          <DataPoint icon="⚕️" value="87" label="Patologias GES" />
          <DataPoint icon="🏥" value="200+" label="Hospitales" />
        </div>
      </section>
    </div>
  );
}

function FunctionCard({
  func,
  index,
  isSelected,
  isCompleted,
  onClick
}: {
  func: typeof TGR_FUNCTIONS[0];
  index: number;
  isSelected: boolean;
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`card cursor-pointer ${isSelected ? 'border-[var(--primary)]' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl">{func.icon}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">{func.name}</h4>
            {isCompleted && <span className="text-[var(--success)]">✓</span>}
          </div>
          <p className="text-sm text-[var(--muted)]">{func.description}</p>
        </div>
        <motion.span
          animate={{ rotate: isSelected ? 180 : 0 }}
          className="text-[var(--muted)]"
        >
          ▼
        </motion.span>
      </div>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <ul className="space-y-2">
                {func.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[var(--muted)]"
                  >
                    <span className="text-[var(--primary)]">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function DataPoint({
  icon,
  value,
  label
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div>
      <span className="text-2xl">{icon}</span>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-blue-200">{label}</p>
    </div>
  );
}
