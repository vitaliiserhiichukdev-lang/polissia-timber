import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollManager from './components/layout/ScrollManager'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import NotFound from './pages/NotFound'
import { useI18n } from './i18n/useI18n'

export default function App() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const { t } = useI18n()

  return (
    <>
      <a href="#main" className="skip-link">
        {t.common.skipToContent}
      </a>
      <ScrollManager />
      <Header />

      <main id="main">
        <AnimatePresence mode="wait" initial={false}>
          {/* Opacity only: a translate on the page wrapper would shift the
              geometry that ScrollManager scrolls hash targets to. */}
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/products/:slug" element={<ProductPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  )
}
