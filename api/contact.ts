// Vercel serverless function: POST /api/contact
//
// Deployed automatically by Vercel from this file's location under /api.
// For local development, the equivalent route is served by
// server/index.ts (run via `npm run server`) and proxied through Vite.

interface MinimalRequest {
  method?: string;
  body?: { name?: string; phone?: string; message?: string } | string | null;
}

interface MinimalResponse {
  status: (code: number) => MinimalResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
  end: () => void;
}

export default function handler(req: MinimalRequest, res: MinimalResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ error: 'Invalid JSON body' });
      return;
    }
  }

  const { name, phone, message } = body ?? {};

  if (!name || !phone || !message) {
    res.status(400).json({ error: 'name, phone, and message are required.' });
    return;
  }

  // Future expansion point: forward this inquiry to an email service,
  // CRM, or database. For now, we log it and acknowledge receipt — the
  // frontend also offers the inquiry via WhatsApp directly, so nothing
  // is lost if this endpoint is unreachable.
  console.log('[contact] New inquiry received:', {
    name,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  });

  res.status(200).json({ success: true });
}
