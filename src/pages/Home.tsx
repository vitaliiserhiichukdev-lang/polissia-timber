import Hero from '../components/sections/Hero'
import Compliance from '../components/sections/Compliance'
import About from '../components/sections/About'
import Catalog from '../components/sections/Catalog'
import Process from '../components/sections/Process'
import Advantages from '../components/sections/Advantages'
import GallerySection from '../components/sections/GallerySection'
import ExportSection from '../components/sections/ExportSection'
import Faq from '../components/sections/Faq'
import Contact from '../components/sections/Contact'
import useSeo from '../hooks/useSeo'

export default function Home() {
  useSeo('/')

  return (
    <>
      <Hero />
      {/* Directly under the hero: an EU buyer cannot act on price or grade
          until the EUDR question is answered. */}
      <Compliance />
      <About />
      <Catalog />
      <Process />
      <Advantages />
      <GallerySection />
      <ExportSection />
      <Faq />
      <Contact />
    </>
  )
}
