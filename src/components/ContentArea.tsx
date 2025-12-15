'use client';

import { useTGRStore } from '@/store/tgr-store';
import Dashboard from './Dashboard';
import WhatIsTGRView from './WhatIsTGRView';
import ServicesView from './ServicesView';
import TransparencyView from './TransparencyView';
import EducationView from './EducationView';

export default function ContentArea() {
  const { activeTab } = useTGRStore();

  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
      {activeTab === 'inicio' && <Dashboard />}
      {activeTab === 'que-es' && <WhatIsTGRView />}
      {activeTab === 'servicios' && <ServicesView />}
      {activeTab === 'transparencia' && <TransparencyView />}
      {activeTab === 'aprende' && <EducationView />}
    </main>
  );
}
