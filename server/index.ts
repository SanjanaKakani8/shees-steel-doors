// Local development Express server.
//
// In production (Vercel), the /api/doors and /api/contact endpoints are
// served by the standalone serverless functions in /api instead of this
// file — Vercel does not run a persistent Express process. This server
// exists purely so the same API surface can be exercised locally with
// `npm run server`, alongside `npm run dev` for the Vite frontend
// (see vite.config.ts, which proxies /api/* to this server during dev).

import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import { DOOR_MODELS } from '../src/data/doors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Basic permissive CORS for local development only.
app.use((req: Request, res: Response, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  next();
});

// GET /api/doors — full door catalog retrieval.
app.get('/api/doors', (_req: Request, res: Response) => {
  res.json({ doors: DOOR_MODELS });
});

// GET /api/doors/:id — retrieve a single door by id.
app.get('/api/doors/:id', (req: Request, res: Response) => {
  const door = DOOR_MODELS.find((d) => d.id === req.params.id);
  if (!door) {
    res.status(404).json({ error: 'Door not found' });
    return;
  }
  res.json({ door });
});

// POST /api/contact — contact form submission.
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, phone, message } = req.body ?? {};

  if (!name || !phone || !message) {
    res.status(400).json({ error: 'name, phone, and message are required.' });
    return;
  }

  // Future expansion point: forward this inquiry to an email service,
  // CRM, or database. For now, we log it server-side and acknowledge
  // receipt — the frontend also offers the inquiry via WhatsApp directly.
  console.log('[contact] New inquiry received:', {
    name,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  });

  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`SHEES backend dev server running at http://localhost:${PORT}`);
});
