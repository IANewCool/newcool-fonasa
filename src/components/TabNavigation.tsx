'use client';

import { motion } from 'framer-motion';
import { useTGRStore } from '@/store/tgr-store';
import type { TabType } from '@/types';

const TABS: { id: TabType; label: string; icon: string }[] = [
  { id: 'inicio', label: 'Inicio', icon: '🏠' },
  { id: 'que-es', label: 'Que es FONASA', icon: '🏥' },
  { id: 'servicios', label: 'Servicios', icon: '📋' },
  { id: 'transparencia', label: 'GES/Tramos', icon: '⚕️' },
  { id: 'aprende', label: 'Aprende', icon: '📚' },
];

export default function TabNavigation() {
  const { activeTab, setActiveTab } = useTGRStore();

  return (
    <nav className="sticky top-0 z-50 bg-[var(--card)] border-b border-[var(--border)] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide py-2 gap-2">
          {TABS.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

function TabButton({
  tab,
  isActive,
  onClick
}: {
  tab: { id: TabType; label: string; icon: string };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative flex items-center gap-2 px-4 py-3 rounded-lg
        font-medium whitespace-nowrap transition-colors
        ${isActive
          ? 'text-white'
          : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-hover)]'
        }
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 gradient-primary rounded-lg"
          initial={false}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{tab.icon}</span>
      <span className="relative z-10 hidden sm:inline">{tab.label}</span>
    </motion.button>
  );
}
