import { handleQuote } from '../../server/quote'

/** Netlify Functions v2 adapter — the logic lives in `server/quote.ts`. */
export default async (request: Request): Promise<Response> => handleQuote(request)

export const config = { path: '/api/quote' }
