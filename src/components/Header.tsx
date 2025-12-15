'use client';

import { motion } from 'framer-motion';
import { FONASA_INFO, FONASA_STATS } from '@/data/fonasa-content';

export default function Header() {
  return (
    <header className="gradient-primary py-8 px-4 relative overflow-hidden">
      {/* Patron decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Logo y titulo */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">🏥</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {FONASA_INFO.sigla}
              </h1>
              <p className="text-blue-200 text-sm">
                {FONASA_INFO.fullName}
              </p>
            </div>
          </div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 mb-6"
          >
            Tu salud, nuestro compromiso
          </motion.p>

          {/* Stats rapidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            <StatBadge
              icon="👥"
              value={FONASA_STATS.beneficiarios}
              label="Beneficiarios"
            />
            <StatBadge
              icon="📊"
              value={FONASA_STATS.cobertura}
              label="De la poblacion"
            />
            <StatBadge
              icon="⚕️"
              value="87 GES"
              label="Patologias cubiertas"
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

function StatBadge({
  icon,
  value,
  label
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
      <div className="flex items-center gap-2 justify-center">
        <span>{icon}</span>
        <span className="font-bold text-white">{value}</span>
      </div>
      <p className="text-xs text-blue-200">{label}</p>
    </div>
  );
}
