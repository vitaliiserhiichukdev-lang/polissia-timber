import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { whatsappHref } from '../../data/contact'
import { useI18n } from '../../i18n/useI18n'

/**
 * Floating WhatsApp shortcut, on every page.
 *
 * It appears once the visitor has scrolled a little: over the hero it would sit
 * on top of the primary buttons, which already offer the same chat. Rendered
 * after hydration only, so the prerendered page carries no stray fixed element.
 */
export default function WhatsAppButton() {
  const { t } = useI18n()
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (value) => setVisible(value > 480))

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappHref(t.whatsapp.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.common.whatsappCta}
          title={t.common.whatsappCta}
          className="group fixed right-4 bottom-4 z-[90] flex items-center rounded-full bg-whatsapp p-3.5 text-white shadow-lift transition-colors duration-300 hover:bg-whatsapp-700 md:right-6 md:bottom-6"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <WhatsAppIcon size={26} />
          <span className="hidden max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-[max-width,padding] duration-500 ease-expo group-hover:max-w-60 group-hover:px-2 md:inline">
            {t.common.whatsappCta}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
