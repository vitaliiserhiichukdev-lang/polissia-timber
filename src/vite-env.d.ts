/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Optional HTTPS endpoint that receives quote requests as JSON
   * (e.g. a form service or your own API). When unset, the form falls back to
   * composing an email in the visitor's mail client.
   */
  readonly VITE_CONTACT_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
