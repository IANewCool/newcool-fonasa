/**
 * FONASA → NUP publish endpoint.
 *
 * Integrates the shared T07 NUP adapter (../../../../../../_shared/nup-gov-adapter.js)
 * and publishes an INFORM every time the FONASA aranceles table is updated.
 *
 * Called by the ingest job (or manually via GET /api/nup/publish) whenever
 * the public FONASA dataset changes. Government data carries trust 0.95 and
 * every message includes source_url + timestamp_valid=true.
 */
import { NextResponse } from 'next/server';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type GovAdapter = typeof import('../../../../../../_shared/nup-gov-adapter.js');

let adapterPromise: Promise<GovAdapter> | null = null;
async function loadAdapter(): Promise<GovAdapter> {
  if (!adapterPromise) {
    const abs = path.resolve(process.cwd(), '..', '_shared', 'nup-gov-adapter.js');
    adapterPromise = import(pathToFileURL(abs).href) as Promise<GovAdapter>;
  }
  return adapterPromise;
}

let registered = false;

export async function GET() {
  return publish();
}

export async function POST() {
  return publish();
}

async function publish() {
  const adapter = await loadAdapter();
  if (!registered) {
    await adapter.register('fonasa', {
      categories: ['aranceles', 'tramos', 'ges-auge', 'modalidades'],
      jurisdiction: 'CL',
    });
    registered = true;
  }

  const result = await adapter.publishUpdate('aranceles', {
    titulo: 'FONASA aranceles 2026 disponibles',
    source_url: 'https://www.fonasa.cl/sites/fonasa/aranceles',
    payload: {
      year: 2026,
      modalidades: ['MLE', 'MAI'],
      tramos: ['A', 'B', 'C', 'D'],
      free_access: true,
    },
  });

  return NextResponse.json({ ok: true, module: 'fonasa', ...result });
}
