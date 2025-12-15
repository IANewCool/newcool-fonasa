'use client';

import { FONASA_INFO } from '@/data/fonasa-content';

export default function Footer() {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo y descripcion */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-2xl">🏥</span>
              <span className="font-bold">{FONASA_INFO.sigla}</span>
            </div>
            <p className="text-xs text-[var(--muted)] mt-1">
              Modulo educativo sobre el sistema publico de salud
            </p>
          </div>

          {/* Links oficiales */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href={FONASA_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--primary)]"
            >
              🌐 fonasa.cl
            </a>
            <a
              href="https://www.supersalud.gob.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--primary)]"
            >
              🏛️ SuperSalud
            </a>
            <a
              href="https://www.minsal.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--primary)]"
            >
              ⚕️ Minsal
            </a>
            <a
              href="https://www.chileatiende.gob.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--primary)]"
            >
              📋 ChileAtiende
            </a>
          </div>

          {/* NewCool branding */}
          <div className="text-center md:text-right">
            <a
              href="https://newcool-planet.vercel.app"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)]"
            >
              <span>🌍</span>
              <span>Planeta NewCool</span>
            </a>
            <p className="text-xs text-[var(--muted)] mt-1">
              Educacion ciudadana digital
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-4 border-t border-[var(--border)] text-center">
          <p className="text-xs text-[var(--muted)]">
            Este es un modulo educativo. Para tramites oficiales, visite{' '}
            <a
              href={FONASA_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)]"
            >
              fonasa.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
