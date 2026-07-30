import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Catalog from '../components/sections/Catalog'
import Process from '../components/sections/Process'
import Advantages from '../components/sections/Advantages'
import GallerySection from '../components/sections/GallerySection'
import ExportSection from '../components/sections/ExportSection'
import Contact from '../components/sections/Contact'
import useSeo from '../hooks/useSeo'
import { useI18n } from '../i18n/useI18n'

export default function Home() {
  const { t } = useI18n()

  useSeo({
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    path: '/',
  })

  return (
    <>
      <Hero />
      <About />
      <Catalog />
      <Process />
      <Advantages />
      <GallerySection />
      <ExportSection />
      <Contact />
    </>
  )
}
