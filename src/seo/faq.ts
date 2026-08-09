import { isPending } from '../data/pending'
import type { Dictionary, FaqItem } from '../i18n/types'

/**
 * FAQ entries that actually have an answer.
 *
 * The rendered accordion and the FAQPage JSON-LD both read this, so structured
 * data can never advertise a question the page does not answer — which Google
 * treats as a rich-result violation.
 */
export const answeredFaq = (t: Dictionary): FaqItem[] =>
  t.faq.items.filter((item) => !isPending(item.answer))
