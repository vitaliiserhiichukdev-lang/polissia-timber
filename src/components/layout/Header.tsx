import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import Icon from '../ui/Icon'
import useBodyLock from '../../hooks/useBodyLock'
import { brand } from '../../data/contact'
import { useI18n } from '../../i18n/useI18n'
import { cn } from '../../lib/cn'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash, key } = useLocation()
  const { scrollY } = useScroll()
  const { t } = useI18n()

  useBodyLock(menuOpen)
  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 24))

  // Close the drawer on any navigation — including hash-only links such as
  // /#gallery, which keep the pathname unchanged. Leaving it open would also
  // leave the body scroll-locked, so the section jump would appear to do
  // nothing.
  useEffect(() => setMenuOpen(false), [pathname, hash, key])

  // Only the top of the home page sits over the dark hero.
  const transparent = pathname === '/' && !scrolled && !menuOpen

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] border-b transition-[background-color,border-color,box-shadow] duration-500',
        transparent
          ? 'border-transparent bg-transparent'
          : 'border-line bg-paper/85 backdrop-blur-xl backdrop-saturate-150',
        scrolled && !transparent && 'shadow-[0_1px_20px_rgba(20,18,15,0.07)]',
      )}
    >
      <div className="container-page flex min-h-header items-center gap-4 py-3 lg:gap-8">
        <Link to="/" aria-label={`${brand.name} — ${t.common.home}`} className="shrink-0">
          <Logo inverse={transparent} />
        </Link>

        <nav className="mx-auto hidden items-center gap-6 xl:flex xl:gap-7" aria-label="Main">
          {t.nav.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={cn(
                'group relative py-1 text-sm font-medium whitespace-nowrap transition-colors duration-300',
                transparent ? 'text-inverse/80 hover:text-white' : 'text-muted hover:text-oak-600',
              )}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-400 ease-expo group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <a
            href={`tel:${brand.phoneHref}`}
            className={cn(
              'hidden items-center gap-2 text-sm font-medium transition-colors duration-300 2xl:inline-flex',
              transparent ? 'text-inverse/80 hover:text-white' : 'text-muted hover:text-oak-600',
            )}
          >
            <Icon name="phone" size={16} />
            {brand.phone}
          </a>

          <LanguageSwitcher inverse={transparent} />

          <Link to="/#contact" className="btn btn-sm hidden sm:inline-flex">
            {t.common.requestQuote}
            <span className="btn-icon">
              <Icon name="arrowRight" size={16} />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.common.closeMenu : t.common.openMenu}
            className={cn(
              'grid size-11 place-items-center rounded-xl border transition-colors duration-300 xl:hidden',
              transparent
                ? 'border-white/30 text-inverse hover:bg-white/10'
                : 'border-line-strong text-ink-800 hover:bg-sand-100',
            )}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="absolute inset-x-0 top-full max-h-[calc(100vh-var(--spacing-header))] overflow-y-auto border-b border-line bg-paper px-gutter pt-5 pb-8 shadow-lift xl:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {t.nav.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center justify-between border-b border-line py-4 pl-1 font-display text-2xl text-ink-800 transition-[color,padding] duration-400 ease-expo hover:pl-3 hover:text-oak-600"
                  >
                    <span>{link.label}</span>
                    <Icon name="arrowRight" size={18} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted"
              >
                <Icon name="mail" size={16} />
                {brand.email}
              </a>
              <a
                href={`tel:${brand.phoneHref}`}
                className="inline-flex items-center gap-2 text-sm text-muted"
              >
                <Icon name="phone" size={16} />
                {brand.phone}
              </a>
              <Link to="/#contact" className="btn btn-oak mt-2 w-full">
                {t.common.requestQuote}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
