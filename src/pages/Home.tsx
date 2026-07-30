import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Catalog from '../components/sections/Catalog'
import Process from '../components/sections/Process'
import Advantages from '../components/sections/Advantages'
import GallerySection from '../components/sections/GallerySection'
import ExportSection from '../components/sections/ExportSection'
import Contact from '../components/sections/Contact'
import useSeo from '../hooks/useSeo'
import { company } from '../data/company'

export default function Home() {
  useSeo({
    title: `${company.name} — ${company.tagline}`,
    description:
      'Ukrainian producer and exporter of premium timber: oak edged boards in grades I–IV, pine construction materials and natural oak parquet. Stable large-volume supply and delivery throughout Europe.',
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
