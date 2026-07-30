/**
 * Single source of truth for company / brand content.
 *
 * The brand name and contact details are PLACEHOLDERS — replace the values in
 * `company` with the real ones before going live. Every component reads from
 * this file, so nothing else needs to be touched.
 */

import type { IconName } from '../components/ui/Icon'

export const company = {
  name: 'Dubrava Timber',
  legalName: 'Dubrava Timber LLC',
  tagline: 'Premium Ukrainian Timber for European Markets',
  claim: 'High-quality Ukrainian timber for the European market.',
  country: 'Ukraine',
  // TO CONFIRM — placeholder contact block
  email: 'export@dubrava-timber.com',
  phone: '+380 44 000 00 00',
  phoneHref: '+380440000000',
  address: {
    city: 'Kyiv region',
    country: 'Ukraine',
  },
  hours: 'Mon–Fri, 08:00–18:00 EET',
  site: 'https://dubrava-timber.com',
  incoterms: ['EXW', 'FCA', 'CPT', 'DAP'],
  languages: ['English', 'German', 'Polish', 'Ukrainian'],
} as const

export interface Stat {
  value: string
  label: string
  detail: string
}

export const stats: Stat[] = [
  {
    value: '4',
    label: 'Graded quality classes',
    detail: 'Grades I–IV assessed against our written oak specification.',
  },
  {
    value: '5',
    label: 'Standard oak sections',
    detail: 'Widths from 80 to 230 mm, all in 30 mm thickness.',
  },
  {
    value: '12',
    label: 'Parquet finishes',
    detail: 'Chevron oak parquet, from whitewashed to dark espresso.',
  },
  {
    value: 'EU',
    label: 'Delivery coverage',
    detail: 'Regular full-truck and container shipments across Europe.',
  },
]

export interface TextBlock {
  title: string
  body: string
}

export const aboutHighlights: TextBlock[] = [
  {
    title: 'Production and export under one roof',
    body: 'We specialise in the production and export of high-quality timber to European countries, covering the full path from log intake to a loaded truck. That means one point of responsibility for your order — not a chain of intermediaries.',
  },
  {
    title: 'Controlled at every stage',
    body: 'Every stage of production is carefully controlled — from raw material selection through sawing, drying and grading to packaging and delivery. Each batch is checked against a written specification before it leaves the yard.',
  },
  {
    title: 'Export-ready to European requirements',
    body: 'All products undergo quality control, comply with European requirements and are prepared for export: sorted by grade, strapped, marked and documented so they clear and unload without surprises.',
  },
]

export interface Advantage extends TextBlock {
  icon: IconName
}

export const advantages: Advantage[] = [
  {
    icon: 'oak',
    title: 'Premium Ukrainian wood',
    body: 'Slow-grown Ukrainian oak and pine with dense, even grain — the raw material behind the strength, durability and natural beauty our customers buy us for.',
  },
  {
    icon: 'shield',
    title: 'European quality standards',
    body: 'Products are manufactured to modern quality standards and international market requirements, and graded against a documented specification with defined tolerances.',
  },
  {
    icon: 'stack',
    title: 'Large-volume production',
    body: 'Stable large-volume supplies with repeatable grading, so you can plan a season of production around us instead of chasing spot lots.',
  },
  {
    icon: 'truck',
    title: 'Reliable logistics',
    body: 'Timely delivery throughout Europe by full truck or container, with packaging and export paperwork prepared before dispatch.',
  },
  {
    icon: 'tag',
    title: 'Competitive pricing',
    body: 'Direct-from-producer pricing with transparent grade-based price lists — no reseller margin between the sawmill and your warehouse.',
  },
  {
    icon: 'handshake',
    title: 'Individual customer approach',
    body: 'Sizes, grades and packing adapted to your specification. We value long-term partnerships and treat every order as part of one.',
  },
]

export interface ProcessStep extends TextBlock {
  step: string
  image: string
  imageAlt: string
  icon: IconName
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    icon: 'leaf',
    title: 'Raw material selection',
    body: 'Logs are selected by species, diameter and soundness before they reach the saw line. Material with pith defects, insect damage or steam damage is rejected at intake — the cheapest place to remove a defect.',
    image: '/building_materials/pine_tree_3.jpg',
    imageAlt: 'Selected pine logs and squared timber in the yard before sawing',
  },
  {
    step: '02',
    icon: 'factory',
    title: 'Sawing and manufacturing',
    body: 'Edged boards are cut to fixed sections — 30 mm thickness in widths from 80 to 230 mm — with clean parallel edges and square ends. Pine construction sections are cut to the dimensions each project asks for.',
    image: '/building_materials/pine_tree_2.jpg',
    imageAlt: 'Freshly sawn edged timber strapped into export bundles',
  },
  {
    step: '03',
    icon: 'shield',
    title: 'Drying and quality control',
    body: 'Boards are stacked for controlled drying, then graded piece by piece against our written specification: knot size and type, sapwood, ingrown bark, cracks. Pith, woodworm, steam damage and end cracks are accepted in no grade.',
    image: '/building_materials/pine_tree_1.jpg',
    imageAlt: 'Timber stacked with spacers for controlled drying',
  },
  {
    step: '04',
    icon: 'box',
    title: 'Packaging',
    body: 'Each grade is packed separately into uniform bundles, strapped, edge-protected and marked with size, grade and volume, so the receiving warehouse can check a delivery in minutes.',
    image: '/building_materials/pine_tree_4.jpg',
    imageAlt: 'Graded timber packs stacked and ready for loading',
  },
  {
    step: '05',
    icon: 'truck',
    title: 'Export and delivery',
    body: 'We load full trucks and containers with complete export documentation, and keep you updated from dispatch to unloading anywhere in Europe.',
    image: '/additional_image/oak_edged_board_2.jpg',
    imageAlt: 'Finished oak and pine boards prepared for export shipment',
  },
]

export interface ExportPoint extends TextBlock {
  icon: IconName
}

export const exportPoints: ExportPoint[] = [
  {
    icon: 'truck',
    title: 'European delivery',
    body: 'Competitive prices and timely delivery throughout Europe — road freight for EU destinations, containers for onward overseas shipment.',
  },
  {
    icon: 'stack',
    title: 'Stable supply chains',
    body: 'Stable large-volume supplies backed by our own production, with agreed monthly volumes for contract customers.',
  },
  {
    icon: 'globe',
    title: 'International cooperation',
    body: 'Documentation, grading language and packing prepared for international trade, with communication in English, German and Polish.',
  },
  {
    icon: 'handshake',
    title: 'Long-term partnerships',
    body: 'We value long-term partnerships and guarantee high product quality, professional service and reliable execution of every order.',
  },
]

// TO CONFIRM — indicative destination list used by the export section.
export const exportMarkets: string[] = [
  'Poland',
  'Germany',
  'Czechia',
  'Slovakia',
  'Austria',
  'Hungary',
  'Romania',
  'Italy',
  'Netherlands',
  'Belgium',
  'France',
  'Spain',
  'Lithuania',
  'Latvia',
  'Estonia',
  'Denmark',
]

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Production', href: '/#production' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Export', href: '/#export' },
  { label: 'Contact', href: '/#contact' },
]
