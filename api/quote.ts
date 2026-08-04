import { handleQuote } from '../server/quote'

/** Vercel adapter — the logic lives in `server/quote.ts`. */
export const config = { runtime: 'edge' }

export default async function handler(request: Request): Promise<Response> {
  return handleQuote(request)
}
