// Vercel serverless function: GET /api/doors or /api/doors?id=door001
//
// Deployed automatically by Vercel from this file's location under /api.
// For local development, the equivalent route is served by
// server/index.ts (run via `npm run server`) and proxied through Vite.

import { DOOR_MODELS } from '../src/data/doors';

interface MinimalRequest {
  method?: string;
  query?: Record<string, string | string[] | undefined>;
}

interface MinimalResponse {
  status: (code: number) => MinimalResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
  end: () => void;
}

export default function handler(req: MinimalRequest, res: MinimalResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method && req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const id = req.query?.id;

  if (id && typeof id === 'string') {
    const door = DOOR_MODELS.find((d) => d.id === id);
    if (!door) {
      res.status(404).json({ error: 'Door not found' });
      return;
    }
    res.status(200).json({ door });
    return;
  }

  res.status(200).json({ doors: DOOR_MODELS });
}
