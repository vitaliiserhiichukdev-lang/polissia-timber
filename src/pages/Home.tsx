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
      {/*
        The parquet picker first. EUDR is the filter that decides whether a
        shipment is possible at all, but a first-time visitor has to know what
        is being sold — and at what price — before any of that means anything.
        Compliance follows immediately.
      */}
      <Catalog />
      <Compliance />
      <About />
      <Process />
      <Advantages />
      <GallerySection />
      <ExportSection />
      <Faq />
      <Contact />
    </>
  )
}
