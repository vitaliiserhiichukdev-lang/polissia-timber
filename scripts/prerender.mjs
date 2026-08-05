import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Writes one static HTML file per route, using the client build's index.html as
 * the template.
 *
 * Run after both Vite builds — see the `build` script. Every page ends up as a
 * real file on disk, so a crawler that does not execute JavaScript still gets
 * the full page, and the client hydrates that markup rather than repainting.
 */

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = join(root, 'dist')

const { render, targets, notFoundTarget, sitemap } = await import(
  join(root, '.ssr-build/entry-server.js')
)

const template = await readFile(join(dist, 'index.html'), 'utf8')

for (const slot of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(slot)) {
    throw new Error(`index.html is missing the ${slot} slot — prerendering would be a no-op.`)
  }
}

const buildPage = (target) => {
  const { html, head, title, lang } = render(target)

  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)
}

const write = async (file, contents) => {
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, contents)
}

for (const target of targets) {
  const page = buildPage(target)

  if (target.url === '/') {
    await write(join(dist, 'index.html'), page)
  } else {
    // Both forms, deliberately. Static hosts disagree about which file answers
    // an extensionless URL: some resolve `/uk` to `uk/index.html`, others only
    // to `uk.html`, and `vite preview` serves the SPA fallback unless the path
    // ends in a slash. Guessing wrong means the canonical URL returns the wrong
    // page, which is worse than two extra kilobytes. Both copies carry the same
    // canonical tag, so there is no duplicate-content cost.
    await write(join(dist, target.url, 'index.html'), page)
    await write(join(dist, `${target.url}.html`), page)
  }
  console.log(`prerendered  ${target.url}`)
}

await write(join(dist, '404.html'), buildPage(notFoundTarget))
console.log('prerendered  /404.html')

// Generated rather than kept in public/, so it can never advertise a URL the
// build did not emit.
await write(join(dist, 'sitemap.xml'), sitemap())
console.log('generated    /sitemap.xml')

console.log(`\n${targets.length + 1} pages written to dist/`)
