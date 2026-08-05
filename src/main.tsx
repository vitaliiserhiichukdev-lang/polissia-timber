import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { LocaleProvider } from './i18n/LocaleProvider'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element #root not found')

// LocaleProvider reads the locale from the URL, so it now sits inside the router.
const tree = (
  <StrictMode>
    <BrowserRouter>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </BrowserRouter>
  </StrictMode>
)

// `yarn build` prerenders every route to static HTML. Adopt that markup instead
// of discarding it and repainting — otherwise the prerender buys crawlers a
// readable page but costs visitors a blank first frame.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, tree)
} else {
  createRoot(rootElement).render(tree)
}
