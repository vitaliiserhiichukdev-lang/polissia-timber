import type { Dictionary } from './types'
import { brand } from '../data/contact'
import { formatEuro, highestPrice, priceFrom } from '../data/pricing'

const from = formatEuro(priceFrom, true)
const top = formatEuro(highestPrice('oak-chevron-parquet'), true)

/**
 * German copy.
 *
 * Parkettbegriffe: Mehrschichtparkett, Nutzschicht, Landhausdiele, Chevron
 * (französisches Fischgrät), Fischgrät. „Englischer Verband“ ist im Deutschen
 * ein anderes Verlegemuster und wird deshalb bewusst nicht für Fischgrät
 * verwendet. Sortierungen A-B (Select) und C (Rustikal) wie auf der Preisliste.
 * Vor der Veröffentlichung von einem Muttersprachler aus der Branche prüfen
 * lassen — eine falsch übersetzte Angabe ist ein Handelsstreit.
 */
export const de: Dictionary = {
  locale: 'de',
  htmlLang: 'de',
  label: 'Deutsch',
  short: 'DE',
  decimalComma: true,

  meta: {
    homeTitle: `${brand.name} — Mehrschichtparkett aus Eiche aus der Ukraine`,
    homeDescription: `Ukrainischer Hersteller und Exporteur von Eichen-Mehrschichtparkett: Landhausdiele, Chevron und Fischgrät in den Sortierungen A-B und C, 14 mm mit 3,2 mm Nutzschicht. Preise ab ${from} pro m², Lieferung in ganz Europa.`,
    notFoundTitle: `Seite nicht gefunden | ${brand.name}`,
    notFoundDescription: 'Die gesuchte Seite existiert nicht.',
  },

  nav: [
    { key: 'products', label: 'Parkett', href: '/#products' },
    { key: 'compliance', label: 'Nachweise', href: '/#compliance' },
    { key: 'about', label: 'Unternehmen', href: '/#about' },
    { key: 'production', label: 'Produktion', href: '/#production' },
    { key: 'gallery', label: 'Galerie', href: '/#gallery' },
    { key: 'export', label: 'Export', href: '/#export' },
    { key: 'faq', label: 'FAQ', href: '/#faq' },
    { key: 'contact', label: 'Kontakt', href: '/#contact' },
  ],

  common: {
    requestQuote: 'Angebot anfragen',
    quoteShort: 'Angebot',
    viewProducts: 'Parkett wählen',
    viewProduct: 'Zum Format',
    priceFrom: 'ab',
    skipToContent: 'Zum Inhalt springen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    language: 'Sprache',
    home: 'Startseite',
    products: 'Parkett',
    perSquareMetre: '/ m²',
    priceUnit: 'EUR / m²',
    openImage: 'Bild öffnen',
    closeViewer: 'Ansicht schließen',
    previousImage: 'Vorheriges',
    nextImage: 'Nächstes',
    viewFullSize: 'In voller Größe ansehen',
    playVideo: 'Video abspielen',
    pauseVideo: 'Video anhalten',
    video: 'Video',
    mm: 'mm',
    logoSub: 'Eichenparkett · Export',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Per WhatsApp schreiben',
  },

  whatsapp: {
    general:
      'Guten Tag! Ich interessiere mich für Ihr Eichenparkett. Könnten Sie mir die aktuelle Preisliste und Verfügbarkeit senden?',
    selection:
      'Guten Tag! Ich interessiere mich für {product}, Sortierung {grade}, {size} — {price} pro m² laut Ihrer Preisliste. Bitte bestätigen Sie Verfügbarkeit und Lieferung nach: ',
  },

  hero: {
    eyebrow: 'Ukraine · Parketthersteller & Exporteur',
    titleLead: 'Mehrschichtparkett aus Eiche',
    titleAccent: 'Diele, Chevron, Fischgrät',
    lead: 'Europäische Eiche auf einem 14-mm-Element mit 3,2 mm Nutzschicht, sortiert nach A-B oder C und mit offenen Preisen pro Quadratmeter. Von uns produziert, oberflächenbehandelt und verpackt, geliefert in ganz Europa.',
    insetCaption: 'Chevron, verlegt',
    priceBadge: 'Preisliste ab',
    imageAlt: 'Ausstellungswand mit Chevron- und Fischgrät-Parkettmustern aus Eiche',
  },

  stats: [
    { value: '3', label: 'Formate', detail: 'Landhausdiele, Chevron und Fischgrät.' },
    { value: '2', label: 'Sortierungen', detail: 'A-B Select und C Rustikal, getrennt bepreist.' },
    { value: '3,2 mm', label: 'Nutzschicht Eiche', detail: 'Auf 14 mm — dick genug zum Abschleifen und Erneuern.' },
    { value: '12', label: 'Farbtöne', detail: 'Chevron von weiß geölt bis Espresso.' },
  ],

  about: {
    eyebrow: 'Über uns',
    title: 'Ein ukrainischer Parketthersteller für europäische Kunden',
    lead: 'Wir fertigen Mehrschichtböden aus Eiche in drei Formaten und zwei Sortierungen — und steuern den ganzen Weg von der Eichenlamelle bis zum beladenen LKW.',
    action: 'So produzieren wir',
    quote:
      '„Wir setzen auf langfristige Partnerschaften und garantieren bei jedem Auftrag hohe Produktqualität.“',
    highlights: [
      {
        title: 'Produktion und Export aus einer Hand',
        body: 'Wir produzieren die Elemente, behandeln die Oberfläche und versenden selbst. Das heißt: ein Ansprechpartner für Ihren Auftrag — keine Kette von Zwischenhändlern zwischen Werk und Lager.',
      },
      {
        title: 'Jedes Element sortiert',
        body: 'Jedes Element wird vor dem Verpacken nach A-B oder C sortiert, sodass eine Nachbestellung in derselben Sortierung denselben Boden ergibt — Partie für Partie, Objekt für Objekt.',
      },
      {
        title: 'Exportfertig nach EU-Anforderungen',
        body: 'Nach Format und Sortierung in Kartons auf Paletten verpackt, gekennzeichnet und dokumentiert — damit eine Sendung ohne Überraschungen verzollt und entladen wird.',
      },
    ],
    tags: ['Eigene Produktion', 'Offene Preisliste', 'Exportdokumente'],
  },

  catalog: {
    eyebrow: 'Parkettsortiment',
    title: 'Format, Sortierung und Maß wählen',
    lead: 'Drei Formate in zwei Sortierungen, alle auf demselben 14-mm-Mehrschichtelement. Wählen Sie eine Kombination, um Preis pro Quadratmeter, Maße und Aufnahmen aus unserer Linie zu sehen — und senden Sie sie als Anfrage oder WhatsApp-Nachricht.',
    footnote:
      'Andere Breiten, Längen, Oberflächen und Sortierungsmischungen fertigen wir auf Bestellung — senden Sie Ihre Spezifikation, wir bestätigen Machbarkeit und Preis.',
    formatStep: 'Format',
    gradeStep: 'Sortierung',
    sizeStep: 'Maß',
    priceLabel: 'Preis',
    priceNote: 'Pro m², laut aktueller Preisliste. Der Endpreis wird im Angebot bestätigt.',
    specs: { thickness: 'Stärke', wearLayer: 'Nutzschicht', width: 'Breite', length: 'Länge' },
    randomLengths: 'Wechsellängen',
    fixedLengths: 'Stablängen',
    details: 'Alles zu {product}',
  },

  priceList: {
    eyebrow: 'Preisliste',
    title: 'Alle Formate und Sortierungen auf einen Blick',
    lead: 'Die vollständige Liste, Zeile für Zeile, in Euro pro Quadratmeter. Alle Elemente 14 mm mit 3,2 mm Nutzschicht aus Eiche.',
    size: 'Maß',
    footnote:
      'Preise pro Quadratmeter und unverbindlich: Der Endbetrag hängt von Menge, Oberfläche und Lieferbedingungen ab und wird im Angebot bestätigt.',
  },

  // TO CONFIRM — die Beschreibungen folgen der üblichen Lesart von A-B und C;
  // durch die schriftlichen Sortierregeln des Unternehmens ersetzen.
  grades: {
    AB: {
      name: 'Select',
      summary: 'Ruhige, gleichmäßige Maserung für einen klaren, einheitlichen Boden.',
      traits: [
        'Gleichmäßige Farbe, geringe Unterschiede zwischen den Elementen',
        'Nur kleine, gesunde Äste, vereinzelt',
        'Minimaler Splint',
        'Für moderne und minimalistische Räume',
      ],
    },
    C: {
      name: 'Rustikal',
      summary: 'Lebhafte Maserung, Äste und Farbspiel — der natürlichste Look.',
      traits: [
        'Ausgeprägte Maserung und natürliche Farbunterschiede',
        'Größere gesunde Äste und gekittete Risse',
        'Splint zulässig',
        'Ein charaktervoller Boden zu einem niedrigeren Preis',
      ],
    },
  },

  /**
   * VOR VERÖFFENTLICHUNG PRÜFEN. Dieser Block enthält regulatorische Aussagen.
   * Jede Zeile muss vom Unternehmen bestätigt werden: eine EUDR- oder
   * Zertifizierungsaussage, die der Exporteur nicht belegen kann, blockiert die
   * Zollabfertigung des Käufers. Positionen mit Status `TBC` werden nicht
   * angezeigt — siehe `src/data/pending.ts`.
   */
  compliance: {
    eyebrow: 'Nachweise und Dokumentation',
    title: 'EUDR-bereit: Geodaten der Flächen und DDS-Referenz je Sendung',
    lead: 'Seit Anwendung der EU-Entwaldungsverordnung darf ein Importeur Holzfußböden ohne flächenbezogene Herkunftsdaten und Sorgfaltserklärung nicht auf dem EU-Markt in Verkehr bringen. Wir stellen dieses Paket mit der Sendung zusammen, nicht erst auf Nachfrage.',
    eudr: {
      badge: 'EUDR',
      title: 'Was Sie mit jeder Sendung erhalten',
      body: 'Die Verordnung (EU) 2023/1115 macht den Importeur dafür verantwortlich, nachzuweisen, dass die Eiche entwaldungsfrei und legal geerntet ist. Dieser Nachweis muss vom Lieferanten kommen, deshalb erstellen wir ihn als Teil des Auftrags und nicht als Papierkram am Ende.',
      points: [
        'Geokoordinaten der Erntefläche für die jeweilige Partie',
        'Holzart, Volumen und Ernteland der Partie, passend zur Packliste',
        'Legalitätsnachweis der Ernte, rückverfolgbar vom Stamm bis zur Palette',
        'DDS-Referenz für Ihre Meldung im EU-TRACES-System',
      ],
      note: 'Senden Sie Spezifikation und Zielort — wir bestätigen den genauen Dokumentensatz für Ihre Importroute vor der Beauftragung.',
    },
    documentsTitle: 'Exportdokumente',
    documents: [
      {
        icon: 'box',
        title: 'ISPM-15 Hitzebehandlung',
        body: 'Markierung der Holzpaletten und Unterlagen, auf denen die Kartons reisen.',
        status: 'Je Sendung',
      },
      {
        icon: 'globe',
        title: 'EUR.1 / Ursprungserklärung',
        body: 'Präferenzieller Ursprungsnachweis nach dem Abkommen EU–Ukraine, damit die Ware zum Präferenzsatz abgefertigt wird.',
        status: 'Je Sendung',
      },
      {
        icon: 'stack',
        title: 'Packliste und Spezifikation',
        body: 'Format, Maß, Sortierung und Quadratmeter je Palette, übereinstimmend mit den Kartonetiketten, damit der Wareneingang die Lieferung gegen die Rechnung prüfen kann.',
        status: 'Bei jeder Ladung',
      },
      {
        // TO CONFIRM — nicht veröffentlichen, bevor die Zertifikatsnummer vorliegt.
        icon: 'leaf',
        title: 'FSC / PEFC Chain of Custody',
        body: 'Zertifiziertes Material auf Anfrage, getrennt von nicht zertifizierter Ware kalkuliert.',
        status: 'TBC',
      },
    ],
    disclaimer:
      'Die Dokumentenanforderungen unterscheiden sich je Mitgliedstaat und Importroute. Dies ersetzt nicht Ihre eigene Sorgfaltspflicht: wir liefern die Nachweise, die Erklärung geben Sie ab.',
  },

  process: {
    eyebrow: 'Qualität und Produktion',
    title: 'Vier kontrollierte Stufen, von der Lamelle bis zur Palette',
    lead: 'Jedes Element durchläuft dieselbe Linie und dieselben Prüfungen, bevor es verpackt wird. Die Bilder und Clips unten stammen aus unserer eigenen Produktion.',
    steps: [
      {
        icon: 'oak',
        title: 'Nutzschicht aus Eiche',
        body: 'Eichenlamellen werden nach Maserung und Farbe ausgewählt und als 3,2-mm-Nutzschicht mit einer stabilen Trägerlage verbunden — so entsteht ein 14-mm-Mehrschichtelement.',
      },
      {
        icon: 'factory',
        title: 'Zuschnitt und Profilierung',
        body: 'Die Elemente werden ins Format geschnitten — Dielen in Wechsellängen, Fischgrätstäbe mit geraden Enden, Chevron-Rohlinge mit schrägen Enden — und so profiliert, dass die Fugen dicht schließen.',
      },
      {
        icon: 'layers',
        title: 'Oberflächenbehandlung',
        body: 'Schleifen, Bürsten und eine natürliche oder farbige Oberfläche auf der Walzenlinie, damit jedes Element eines Auftrags dieselbe Oberfläche trägt.',
      },
      {
        icon: 'box',
        title: 'Sortierung und Verpackung',
        body: 'Jedes Element wird nach A-B oder C sortiert, nach Format und Sortierung in Kartons verpackt, palettiert und für den schnellen Wareneingang gekennzeichnet.',
      },
    ],
    callout: {
      title: 'Eine offene Preisliste statt „Preis auf Anfrage“',
      body: 'Jedes Format, jedes Maß und jede Sortierung hat einen veröffentlichten Preis pro Quadratmeter. Was Sie in der Auswahl sehen, ist die Zeile, nach der wir anbieten.',
      action: 'Zur Preisliste',
    },
    capacityTitle: 'Produktionskapazität',
    capacityLead:
      'Die Zahlen, die sich zu prüfen lohnen, bevor Sie eine Saison an Projekten auf einen Lieferanten planen.',
    // TO CONFIRM — Angaben der Produktion. Werte mit `TBC` werden nicht angezeigt.
    capacity: [
      {
        value: 'TBC',
        unit: 'm² / Monat',
        label: 'Parkettausstoß',
        detail: 'Über alle drei Formate und beide Sortierungen.',
      },
      {
        value: 'TBC',
        unit: 'm² / Schicht',
        label: 'Oberflächenlinie',
        detail: 'Geschliffene und behandelte Elemente pro Schicht.',
      },
      {
        value: '3',
        unit: 'Formate',
        label: 'Diele, Chevron, Fischgrät',
        detail: 'Alle auf einer 14-mm-Mehrschichtkonstruktion.',
      },
      {
        value: '2',
        unit: 'Sortierungen',
        label: 'A-B und C',
        detail: 'Jedes Element vor dem Verpacken sortiert.',
      },
    ],
    capacityNote:
      'Jedes Element wird vor dem Verpacken sortiert, deshalb ergibt eine Nachbestellung in derselben Sortierung denselben Boden.',
  },

  advantages: {
    eyebrow: 'Unsere Vorteile',
    title: 'Warum europäische Kunden mit uns arbeiten',
    lead: 'Alles Folgende sind Zusagen, an denen wir gemessen werden: Qualität, Konstruktion, Logistik und Preis.',
    items: [
      {
        icon: 'oak',
        title: 'Europäische Eiche, ukrainische Produktion',
        body: 'Dichte, langsam gewachsene Eiche mit gleichmäßiger Maserung für die Nutzschicht — das Material, das einem Boden Optik und Lebensdauer gibt.',
      },
      {
        icon: 'shield',
        title: 'Formstabile Mehrschichtkonstruktion',
        body: 'Ein 14-mm-Element mit 3,2 mm Nutzschicht aus Eiche arbeitet mit den Jahreszeiten weniger als Massivholz, und die Deckschicht ist dick genug zum Abschleifen und Erneuern.',
      },
      {
        icon: 'layers',
        title: 'Drei Formate, eine Konstruktion',
        body: 'Diele, Chevron und Fischgrät haben denselben Aufbau, sodass sich Formate in einem Projekt ohne Höhenversatz an der Schwelle kombinieren lassen.',
      },
      {
        icon: 'truck',
        title: 'Zuverlässige Logistik',
        body: 'Termingerechte Lieferung in ganz Europa per Komplettladung oder Container, Verpackung und Exportpapiere vor dem Versand vorbereitet.',
      },
      {
        icon: 'tag',
        title: 'Transparente Preise',
        body: 'Ein veröffentlichter Preis pro Quadratmeter für jedes Format, Maß und jede Sortierung — direkt vom Hersteller, ohne Händlermarge.',
      },
      {
        icon: 'partners',
        title: 'Individuelle Betreuung',
        body: 'Breiten, Längen, Oberflächen und Verpackung passend zu Ihrem Projekt. Wir setzen auf langfristige Partnerschaften und behandeln jeden Auftrag als Teil davon.',
      },
    ],
  },

  gallery: {
    eyebrow: 'Galerie',
    title: 'Unser Parkett in Bild und Video',
    lead: 'Der Showroom, verlegte Böden und unsere eigene Oberflächenlinie — Fotos und kurze Clips aus der Produktion, keine Bildagentur.',
    action: 'Alle zwölf Chevron-Farbtöne ansehen',
  },

  exportSection: {
    eyebrow: 'Export und Lieferung',
    title: 'Aufgebaut für europäische Lieferketten',
    lead: 'Wettbewerbsfähige Preise und termingerechte Lieferung in ganz Europa, mit stabilen Mengen, auf die Sie Ihre Produktion planen können.',
    points: [
      {
        icon: 'truck',
        title: 'Lieferung in Europa',
        body: 'Wettbewerbsfähige Preise und termingerechte Lieferung in ganz Europa — Straßenfracht für EU-Ziele, Container für den anschließenden Seetransport.',
      },
      {
        icon: 'stack',
        title: 'Stabile Lieferketten',
        body: 'Stabile Liefermengen aus eigener Produktion, mit vereinbarten Monatsmengen für Vertragskunden.',
      },
      {
        icon: 'globe',
        title: 'Internationale Zusammenarbeit',
        body: 'Dokumente, Sortierterminologie und Verpackung sind auf den internationalen Handel ausgelegt, Kommunikation auf Deutsch, Englisch und Polnisch.',
      },
      {
        icon: 'partners',
        title: 'Langfristige Partnerschaften',
        body: 'Wir setzen auf langfristige Beziehungen und garantieren hohe Produktqualität, professionellen Service und verlässliche Auftragsabwicklung.',
      },
    ],
    panelTitle: 'Unsere Lieferziele',
    panelBody: 'Komplettladungen und Container in der gesamten EU. Verfügbare Lieferbedingungen: {terms}.',
    cta: 'Lieferung besprechen',
    countries: {
      PL: 'Polen',
      DE: 'Deutschland',
      CZ: 'Tschechien',
      SK: 'Slowakei',
      AT: 'Österreich',
      HU: 'Ungarn',
      RO: 'Rumänien',
      IT: 'Italien',
      NL: 'Niederlande',
      BE: 'Belgien',
      FR: 'Frankreich',
      ES: 'Spanien',
      LT: 'Litauen',
      LV: 'Lettland',
      EE: 'Estland',
      DK: 'Dänemark',
    },
    originLabel: 'Produktion',
    ringLabel: '{km} km',
    mapNote:
      'Die Ringe zeigen die Luftlinie von der Produktion, nicht die Straßenentfernung — sie zeigen die Reichweite, kein Angebot. Fragen Sie die Lieferzeit für Ihre genaue Adresse an, wir bestätigen sie.',
    loadsTitle: 'Was in eine Ladung passt',
    loadsLead:
      'Fracht wird je Ladung berechnet, nicht je Quadratmeter — die günstigste Bestellung ist deshalb meist eine volle.',
    // TO CONFIRM — m² je Ladung hängen vom Palettenformat ab. Ausgeblendet, solange `TBC`.
    loads: [
      {
        value: 'TBC',
        unit: 'm²',
        label: 'Komplettladung',
        detail: 'Standard-Planenauflieger 13,6 m mit palettierten Kartons — die übliche EU-Straßenlieferung.',
      },
      {
        value: 'TBC',
        unit: 'm²',
        label: '40-Fuß-Container',
        detail: 'Für anschließende Seefracht oder Ziele außerhalb der Straßenreichweite.',
      },
      {
        // TO CONFIRM — kaufmännische Entscheidung, keine Messung.
        value: 'TBC',
        unit: 'm²',
        label: 'Mindestbestellmenge',
        detail: 'Unterhalb einer Komplettladung konsolidieren wir mit einer weiteren Sendung in dieselbe Richtung.',
      },
    ],
    leadTimesTitle: 'Lieferzeiten und Incoterms',
    leadTimesLead:
      'Gerechnet ab bestätigtem Auftrag und geklärten Zahlungsbedingungen bis zur Entladung an Ihrer Adresse.',
    // TO CONFIRM — routenabhängig; ausgeblendet bis zur Bestätigung durch die Logistik.
    leadTimes: [
      { destination: 'Polen', days: 'TBC', mode: 'Straße, Komplettladung' },
      { destination: 'Deutschland', days: 'TBC', mode: 'Straße, Komplettladung' },
      { destination: 'Tschechien / Slowakei', days: 'TBC', mode: 'Straße, Komplettladung' },
      { destination: 'Italien', days: 'TBC', mode: 'Straße, Komplettladung' },
      { destination: 'Niederlande / Belgien', days: 'TBC', mode: 'Straße, Komplettladung' },
      { destination: 'Überseeziele', days: 'TBC', mode: 'See, 40-Fuß-Container' },
    ],
    leadTimeColumns: { destination: 'Zielort', days: 'Laufzeit', mode: 'Transportart' },
    leadTimeNote:
      'Grenzübergang und Zollabfertigung sind in den Zeiten oben enthalten. Verfügbare Lieferbedingungen: EXW, FCA, CPT und DAP — bei DAP steht die Ware an Ihrem Tor, Abgaben geregelt.',
    casesTitle: 'Letzte Sendungen',
    casesLead: 'Anonymisiert, aber real: die Formate, Mengen und Routen, die wir tatsächlich verladen.',
    // TO CONFIRM — aus den Versandunterlagen befüllen. Ausgeblendet solange `TBC`.
    cases: [
      { volume: 'TBC', spec: 'TBC', destination: 'TBC', terms: 'DAP', days: 'TBC' },
      { volume: 'TBC', spec: 'TBC', destination: 'TBC', terms: 'FCA', days: 'TBC' },
      { volume: 'TBC', spec: 'TBC', destination: 'TBC', terms: 'CPT', days: 'TBC' },
    ],
    caseLabels: {
      volume: 'Volumen',
      spec: 'Spezifikation',
      destination: 'Zielort',
      terms: 'Bedingungen',
      days: 'Laufzeit',
    },
  },

  faq: {
    eyebrow: 'Fragen von Einkäufern',
    title: 'Sortierungen, Maße, Preise und Lieferung',
    lead: 'Die Antworten, die wir am Telefon geben — hier schriftlich. Fehlt etwas, fragen Sie nach, wir ergänzen es.',
    items: [
      {
        question: 'Was unterscheidet die Sortierungen A-B und C?',
        answer:
          'A-B (Select) ist die ruhigere Sortierung: gleichmäßige Farbe, kleine gesunde Äste und minimaler Splint. C (Rustikal) ist die lebhafte: ausgeprägte Maserung, größere gesunde Äste, gekittete Risse und Splint sind zulässig. Beides ist dasselbe Element — 14 mm mit 3,2 mm Nutzschicht aus Eiche — getrennt bepreist; Sie wählen also die Optik, nicht ein anderes Produkt.',
      },
      {
        question: 'Welche Formate und Maße produzieren Sie?',
        answer:
          'Landhausdielen in 125 × 600–1 400, 145 × 800–1 600 und 195 × 1 700–2 500 mm in Wechsellängen; Chevron und Fischgrät in 125 mm Breite mit Stäben von 500, 600 und 700 mm. Alle Formate sind 14 mm stark mit 3,2 mm Nutzschicht aus Eiche.',
      },
      {
        question: 'Wie ist das Element aufgebaut?',
        answer:
          'Es ist Mehrschichtparkett: eine 3,2 mm starke Nutzschicht aus europäischer Eiche auf einer stabilen Trägerlage, 14 mm gesamt. Die Deckschicht ist dick genug zum Abschleifen und Erneuern, und der Schichtaufbau arbeitet bei Feuchteänderungen weniger als Massivholz.',
      },
      {
        question: 'Wie werden Preise angegeben?',
        answer: `Pro Quadratmeter, nach Format, Maß und Sortierung — von ${from}/m² für Diele 125 mm in Sortierung C bis ${top}/m² für Chevron A-B. Der Endbetrag hängt von Menge, Oberfläche und Lieferbedingungen ab und wird im Angebot bestätigt.`,
      },
      {
        question: 'Fertigen Sie andere Maße, Oberflächen oder Sortierungsmischungen?',
        answer:
          'Ja. Andere Breiten und Längen, geölt oder lackiert, natur oder farbig, sowie Sortierungsmischungen fertigen wir auf Bestellung — senden Sie die Spezifikation, wir bestätigen Machbarkeit und Preis, bevor Sie sich festlegen.',
      },
      {
        question: 'Liefern Sie EUDR-Geodaten und eine DDS-Referenz?',
        answer:
          'Ja. Jede Sendung wird mit den Koordinaten der Erntefläche, Holzart, Volumen und Ernteland, dem Legalitätsnachweis der Ernte und der DDS-Referenz für Ihre EU-Meldung geliefert. Bestätigen Sie Ihre Importroute mit uns, dann nennen wir den genauen Dokumentensatz vor der Beauftragung.',
      },
      {
        question: 'Mit welchen Incoterms arbeiten Sie?',
        answer:
          'EXW, FCA, CPT und DAP. DAP ist die übliche Wahl für EU-Kunden, die die Ware ohne eigene Frachtorganisation ans Tor geliefert haben möchten; FCA passt für Kunden mit eigenem Spediteur.',
      },
      {
        question: 'Wie wird das Parkett verpackt?',
        answer:
          'In Kartons nach Format und Sortierung, auf Paletten, foliert und gekennzeichnet mit Format, Maß, Sortierung und Quadratmetern — genauso in der Packliste, damit der Wareneingang eine Lieferung in Minuten gegen die Rechnung prüfen kann.',
      },
      {
        question: 'Senden Sie Muster vor einer Bestellung?',
        answer:
          'Ja. Wir senden Muster der Sortierung und Oberfläche vor der Auftragsbestätigung, damit Sie das Element vor der Festlegung auf eine Ladung mit Ihrem eigenen Standard vergleichen können.',
      },
      {
        question: 'Kann ich per WhatsApp bestellen?',
        answer:
          'Ja. Senden Sie Format, Sortierung, Maß und Menge — oder einfach ein Foto des Grundrisses — und wir antworten mit einem Angebot. Die Auswahl auf dieser Seite füllt die Nachricht für Sie vor.',
      },
      {
        question: 'In welchen Sprachen arbeiten Sie?',
        answer: 'Deutsch, Englisch, Polnisch und Ukrainisch — in Korrespondenz und Dokumenten.',
      },
      {
        question: 'Wie hoch ist Ihre Mindestbestellmenge?',
        // TO CONFIRM — kaufmännische Entscheidung. Bis zur Antwort ausgeblendet.
        answer: 'TBC',
      },
      {
        question: 'Wie lang ist die Lieferzeit nach Deutschland oder Polen?',
        // TO CONFIRM — siehe exportSection.leadTimes. Bis zur Antwort ausgeblendet.
        answer: 'TBC',
      },
    ],
  },

  contact: {
    eyebrow: 'Angebot anfragen',
    title: 'Sagen Sie uns, was Sie brauchen',
    lead: 'Senden Sie Formate, Sortierungen und Mengen. Wenn Sie noch unsicher sind, beschreiben Sie das Projekt — wir schlagen die wirtschaftlichste Spezifikation vor.',
    labels: {
      email: 'E-Mail',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      production: 'Produktion & Export',
      hours: 'Geschäftszeiten',
      languages: 'Wir sprechen',
    },
    values: {
      address: 'Bronnyky, Bohdan-Chmelnyzkyj-Str., Rajon Riwne, Oblast Riwne, Ukraine',
      hours: 'Mo–Fr, 08:00–18:00 (EET)',
      languages: 'Deutsch, Englisch, Polnisch, Ukrainisch',
    },
    whatsappTitle: 'Schneller per WhatsApp',
    whatsappBody:
      'Senden Sie Format, Sortierung und Menge — oder einfach ein Foto des Grundrisses — und wir antworten mit Angebot und Verfügbarkeit.',
    noteBefore: 'Lieber per E-Mail? Schreiben Sie direkt an ',
    noteAfter:
      ' und legen Sie Ihre Spezifikation bei — wir antworten auf Deutsch, Englisch oder Polnisch.',
  },

  form: {
    name: 'Name *',
    namePlaceholder: 'Thomas Müller',
    company: 'Firma',
    companyPlaceholder: 'Parkett GmbH',
    country: 'Land',
    countryPlaceholder: 'Deutschland',
    email: 'E-Mail *',
    emailPlaceholder: 'einkauf@firma.de',
    phone: 'Telefon',
    phonePlaceholder: '+49 000 000 000',
    product: 'Format',
    productPlaceholder: 'Format wählen…',
    productMixed: 'Mehrere Formate',
    grade: 'Sortierung',
    gradeAny: 'Beliebig / bitte beraten',
    dimensions: 'Maß (B × L × Stärke)',
    dimensionsPlaceholder: '125 × 600–1 400 × 14/3,2 mm',
    volume: 'Menge',
    volumePlaceholder: 'z. B. 250 m²',
    finish: 'Oberfläche',
    finishOptions: {
      any: 'Beliebig / bitte beraten',
      unfinished: 'Unbehandelt',
      oiled: 'Geölt',
      lacquered: 'Lackiert',
    },
    destination: 'Zielort',
    destinationPlaceholder: 'Stadt oder Hafen, z. B. Hamburg',
    incoterms: 'Lieferbedingungen',
    incotermsAny: 'Noch nicht entschieden',
    message: 'Nachricht *',
    messagePlaceholder: 'Was sonst das Angebot beeinflusst — Farbton, Verpackung, Termine…',
    submit: 'Anfrage senden',
    sending: 'Wird gesendet…',
    required: 'Mit * markierte Felder sind Pflichtfelder.',
    privacy: 'Wir verwenden Ihre Daten nur zur Beantwortung dieser Anfrage.',
    errors: {
      name: 'Bitte nennen Sie uns Ihren Namen.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      message: 'Bitte ein paar Worte zu Ihrem Bedarf.',
    },
    sentTitle: 'Anfrage erhalten',
    sentBody:
      'Vielen Dank — unser Exportteam meldet sich mit einem Angebot und der aktuellen Verfügbarkeit.',
    mailTitle: 'Ihre E-Mail ist fertig zum Senden',
    mailBody:
      'Wir haben eine vorbereitete Nachricht in Ihrem Mailprogramm geöffnet. Falls nichts erscheint, schreiben Sie uns direkt an {email}.',
    sendAnother: 'Weitere Anfrage senden',
    failed: 'Beim Senden des Formulars ist etwas schiefgegangen. Bitte schreiben Sie an {email}.',
    mailSubject: 'Angebotsanfrage — {product}',
    mailFields: {
      name: 'Name',
      company: 'Firma',
      country: 'Land',
      email: 'E-Mail',
      phone: 'Telefon',
      product: 'Format',
      grade: 'Sortierung',
      dimensions: 'Maße',
      volume: 'Menge',
      finish: 'Oberfläche',
      destination: 'Zielort',
      incoterms: 'Lieferbedingungen',
      notSpecified: 'Nicht angegeben',
    },
  },

  productPage: {
    aboutTitle: 'Über dieses Format',
    configureTitle: 'Sortierung und Maß wählen',
    specsEyebrow: 'Technische Daten',
    specsTitle: 'Spezifikation',
    specsLead:
      'Je Auftrag bestätigt — senden Sie Ihre Anforderung, wir nennen die genauen Werte im Angebot.',
    pricesEyebrow: 'Preisliste',
    pricesTitle: 'Preise nach Maß und Sortierung',
    pricesLead: 'Direkt aus unserer Preisliste, in Euro pro Quadratmeter.',
    gradesEyebrow: 'Sortierungen',
    gradesTitle: 'A-B oder C: was sich ändert',
    gradesLead:
      'Dasselbe Element in zwei Sortierungen. Die Sortierung bestimmt, wie ruhig oder lebhaft die Oberfläche wirkt — und den Preis.',
    finishesEyebrow: 'Farbtöne',
    finishesTitle: 'Zwölf Produktionsfarbtöne',
    finishesLead:
      'Jeder Farbton wird auf denselben Chevron-Stab aus Eiche aufgebracht, sodass Sie Töne in einem Projekt kombinieren können, ohne Lieferant oder Format zu wechseln.',
    inquiryEyebrow: 'Anfrage',
    inquiryTitle: 'Angebot anfragen: {product}',
    inquiryLead:
      'Nennen Sie Sortierung, Maß und Menge. Wir antworten mit Verfügbarkeit, Preis und Lieferzeit für Ihr Ziel.',
    relatedEyebrow: 'Ebenfalls im Programm',
    relatedTitle: 'Weitere Formate',
    seePriceList: 'Zur vollständigen Preisliste',
  },

  footer: {
    products: 'Parkett',
    company: 'Unternehmen',
    exportOffice: 'Exportbüro',
    claim: 'Mehrschichtparkett aus Eiche aus der Ukraine für den europäischen Markt.',
    rights: 'Alle Rechte vorbehalten.',
  },

  notFound: {
    eyebrow: 'Fehler 404',
    title: 'Diese Seite wurde abgesägt',
    lead: 'Die gesuchte Seite existiert nicht. Unsere Produkte sind allerdings alle noch da.',
    backHome: 'Zurück zur Startseite',
    contactCta: 'Exportteam kontaktieren',
  },

  products: {
    'oak-chevron-parquet': {
      name: 'Eiche Chevron-Parkett',
      shortName: 'Chevron',
      kicker: 'Französisches Fischgrät',
      category: 'Mehrschichtparkett',
      tagline: 'Stäbe mit schrägen Enden, die sich zu einem durchgehenden V treffen — das klassische französische Muster.',
      shortDescription:
        'Chevron aus Eiche als Mehrschichtparkett, 125 mm breit, Stäbe 500, 600 und 700 mm, Sortierungen A-B und C, zwölf Farbtöne.',
      description: [
        'Chevron-Stäbe haben schräg geschnittene Enden, sodass das Muster als durchgehendes V mit gerader Mittelfuge läuft — der Boden der Pariser Altbauwohnung und das architektonischste unserer drei Formate.',
        'Jeder Stab ist 125 mm breit und 500, 600 oder 700 mm lang, auf unserer 14-mm-Mehrschichtkonstruktion mit 3,2 mm Nutzschicht aus europäischer Eiche. Derselbe Aufbau wie bei Diele und Fischgrät — die Formate treffen an der Schwelle ohne Absatz aufeinander.',
        'Zwölf Produktionsfarbtöne stehen zur Wahl, von weiß geölt und Greige über Natur und Honig bis Nuss, Schokolade und dunkles Espresso.',
      ],
      advantages: [
        'Schräge Enden, präzise gefräst für dichte, wiederholbare Fugen',
        'Drei Stablängen, um das Muster dem Raum anzupassen',
        'Zwölf Produktionsfarbtöne, Sondertöne auf Anfrage',
        'Derselbe 14-mm-Aufbau wie Diele und Fischgrät',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Holzart', value: 'Europäische Eiche' },
            { label: 'Muster', value: 'Chevron (französisches Fischgrät)' },
            { label: 'Aufbau', value: 'Mehrschicht, 14 mm mit 3,2 mm Nutzschicht Eiche' },
            { label: 'Herkunft', value: 'Ukraine' },
          ],
        },
        {
          group: 'Format',
          items: [
            { label: 'Breite', value: '125 mm' },
            { label: 'Stablängen', value: '500 / 600 / 700 mm' },
            { label: 'Sortierungen', value: 'A-B Select, C Rustikal' },
            // TO CONFIRM — Oberflächenoptionen
            { label: 'Oberfläche', value: 'Geölt oder lackiert, gebürstet auf Anfrage' },
          ],
        },
        {
          group: 'Lieferung',
          items: [
            { label: 'Verpackung', value: 'Kartons auf Paletten, foliert' },
            { label: 'Verkaufseinheit', value: 'Quadratmeter' },
            { label: 'Muster', value: 'Sortierungs- und Farbmuster vor Auftragsbestätigung' },
            { label: 'Lieferbedingungen', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
    },

    'oak-plank-flooring': {
      name: 'Eichen-Landhausdiele',
      shortName: 'Diele',
      kicker: 'Drei Breiten',
      category: 'Mehrschichtdiele',
      tagline: 'Lange, ruhige Dielen in 125, 145 und 195 mm — der vielseitigste Eichenboden.',
      shortDescription:
        'Landhausdiele aus Eiche als Mehrschichtparkett in drei Breiten und Wechsellängen bis 2 500 mm, Sortierungen A-B und C.',
      description: [
        'Die Landhausdiele passt in fast jeden Raum: lange Dielen im wilden Verband, die Maserung in Raumlänge. Wir fertigen drei Breiten — 125, 145 und 195 mm — damit das Format der Diele dem Maßstab des Raums folgen kann.',
        'Die Längen wechseln innerhalb jeder Breite — 600–1 400 mm bei 125, 800–1 600 mm bei 145 und 1 700–2 500 mm bei 195 mm —, sodass die Stöße nicht in einer Linie liegen und der Boden wie gewachsenes Holz wirkt, nicht wie Fliesen.',
        'Jede Diele ist 14-mm-Mehrschichtparkett aus Eiche mit 3,2 mm Nutzschicht, auf unserer eigenen Linie natur oder farbig behandelt und einzeln nach A-B oder C sortiert.',
      ],
      advantages: [
        'Drei Breiten, von klassischen 125 mm bis zur breiten 195-mm-Diele',
        'Wechsellängen bis 2 500 mm für einen natürlichen Verband',
        'Natur- oder Farbtöne auf der eigenen Linie',
        'Derselbe 14-mm-Aufbau wie Chevron und Fischgrät',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Holzart', value: 'Europäische Eiche' },
            { label: 'Format', value: 'Landhausdiele, wilder Verband' },
            { label: 'Aufbau', value: 'Mehrschicht, 14 mm mit 3,2 mm Nutzschicht Eiche' },
            { label: 'Herkunft', value: 'Ukraine' },
          ],
        },
        {
          group: 'Format',
          items: [
            { label: 'Breiten', value: '125 / 145 / 195 mm' },
            { label: 'Längen', value: '600–1 400 / 800–1 600 / 1 700–2 500 mm' },
            { label: 'Sortierungen', value: 'A-B Select, C Rustikal' },
            // TO CONFIRM — Oberflächenoptionen
            { label: 'Oberfläche', value: 'Natur oder farbig, geölt oder lackiert' },
          ],
        },
        {
          group: 'Lieferung',
          items: [
            { label: 'Verpackung', value: 'Kartons auf Paletten, foliert' },
            { label: 'Verkaufseinheit', value: 'Quadratmeter' },
            { label: 'Muster', value: 'Sortierungs- und Farbmuster vor Auftragsbestätigung' },
            { label: 'Lieferbedingungen', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
    },

    'oak-herringbone-parquet': {
      name: 'Eiche Fischgrätparkett',
      shortName: 'Fischgrät',
      kicker: 'Klassisches Fischgrät',
      category: 'Mehrschichtparkett',
      tagline: 'Stäbe mit geraden Enden im Zickzack verlegt — das klassische Fischgrätmuster.',
      shortDescription:
        'Fischgrät aus Eiche als Mehrschichtparkett, 125 mm breit, Stäbe 500, 600 und 700 mm, Sortierungen A-B und C.',
      description: [
        'Fischgrätstäbe haben gerade Enden: Jeder Stab stößt an die Längsseite des nächsten, sodass das Muster im Zickzack springt, statt sich in einer geraden Fuge zu treffen. Der klassische Parkettboden, der die Fugen eines belebten Raums besser verbirgt als jedes andere Verlegebild.',
        'Die Stäbe sind 125 mm breit und 500, 600 oder 700 mm lang, auf unserer 14-mm-Mehrschichtkonstruktion mit 3,2 mm Nutzschicht aus europäischer Eiche — derselbe Aufbau wie bei Diele und Chevron.',
        'Bei gleichem Maß und gleicher Sortierung liegt Fischgrät preislich unter Chevron — der wirtschaftlichste Weg zu einem gemusterten Boden in unserem Sortiment.',
      ],
      advantages: [
        'Stäbe mit geraden Enden für das traditionelle Zickzack',
        'Drei Stablängen, um das Muster dem Raum anzupassen',
        'Der wirtschaftlichste Musterboden im Sortiment',
        'Derselbe 14-mm-Aufbau wie Diele und Chevron',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Holzart', value: 'Europäische Eiche' },
            { label: 'Muster', value: 'Fischgrät' },
            { label: 'Aufbau', value: 'Mehrschicht, 14 mm mit 3,2 mm Nutzschicht Eiche' },
            { label: 'Herkunft', value: 'Ukraine' },
          ],
        },
        {
          group: 'Format',
          items: [
            { label: 'Breite', value: '125 mm' },
            { label: 'Stablängen', value: '500 / 600 / 700 mm' },
            { label: 'Sortierungen', value: 'A-B Select, C Rustikal' },
            // TO CONFIRM — Oberflächenoptionen
            { label: 'Oberfläche', value: 'Geölt oder lackiert, gebürstet auf Anfrage' },
          ],
        },
        {
          group: 'Lieferung',
          items: [
            { label: 'Verpackung', value: 'Kartons auf Paletten, foliert' },
            { label: 'Verkaufseinheit', value: 'Quadratmeter' },
            { label: 'Muster', value: 'Sortierungs- und Farbmuster vor Auftragsbestätigung' },
            { label: 'Lieferbedingungen', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
    },
  },

  photos: {
    showroom: {
      alt: 'Ausstellungswand mit Chevron- und Fischgrät-Parkettmustern aus Eiche',
      caption: 'Showroom — Chevron und Fischgrät',
    },
    interiorPlank: {
      alt: 'Breite Eichendielen im Flur, im Schlafzimmer dahinter Chevron',
      caption: 'Diele und Chevron, verlegt',
    },
    chevronInterior: {
      alt: 'Chevron-Parkett aus Eiche, natur, verlegt im Flur unter einer Treppe',
      caption: 'Chevron, Eiche natur',
    },
    plankSelect: {
      alt: 'Helle Eichendielen der Sortierung A-B, gestapelt auf einer Palette',
      caption: 'Diele — Sortierung A-B Select',
    },
    herringboneShowroom: {
      alt: 'Zwei Fischgrät-Parkettmuster aus Eiche im Showroom',
      caption: 'Fischgrät — Muster im Showroom',
    },
    plankFinishingLinePoster: {
      alt: 'Eichendielen auf den Walzen der Oberflächenlinie',
      caption: 'Diele auf der Oberflächenlinie',
    },
    plankShortBoardsPoster: {
      alt: 'Eichenelemente verlassen die Oberflächenmaschine',
      caption: 'Elemente am Ende der Linie',
    },
    chevronBlanksPoster: {
      alt: 'Gestapelte Chevron-Rohlinge mit schrägen Enden',
      caption: 'Chevron-Rohlinge, zugeschnitten und profiliert',
    },
    plankTonedLinePoster: {
      alt: 'Grau getönte Eichendielen auf der Walzenlinie',
      caption: 'Getönte Diele auf der Linie',
    },
    parquet1: {
      alt: 'Chevron-Eichenparkett im Farbton Smoked Cognac',
      caption: 'Parkett — Smoked Cognac',
    },
    parquet2: {
      alt: 'Chevron-Eichenparkett im Farbton Tobacco',
      caption: 'Parkett — Tobacco',
    },
    parquet3: {
      alt: 'Chevron-Eichenparkett im Farbton Grey Truffle',
      caption: 'Parkett — Grey Truffle',
    },
    parquet4: {
      alt: 'Chevron-Eichenparkett im Farbton Honey Oak',
      caption: 'Parkett — Honey Oak',
    },
    parquet5: {
      alt: 'Chevron-Eichenparkett im Farbton Dark Espresso',
      caption: 'Parkett — Dark Espresso',
    },
    parquet6: {
      alt: 'Chevron-Eichenparkett im Farbton Sand Greige',
      caption: 'Parkett — Sand Greige',
    },
    parquet7: {
      alt: 'Chevron-Eichenparkett im Farbton Silver Dune',
      caption: 'Parkett — Silver Dune',
    },
    parquet8: {
      alt: 'Chevron-Eichenparkett im ungefärbten Farbton Natural Oak',
      caption: 'Parkett — Natural Oak',
    },
    parquet9: {
      alt: 'Chevron-Eichenparkett im Farbton White Oiled, weiß geölt',
      caption: 'Parkett — White Oiled',
    },
    parquet10: {
      alt: 'Chevron-Eichenparkett im Farbton Ash Grey',
      caption: 'Parkett — Ash Grey',
    },
    parquet11: {
      alt: 'Chevron-Eichenparkett im Farbton Walnut Shadow',
      caption: 'Parkett — Walnut Shadow',
    },
    parquet12: {
      alt: 'Chevron-Eichenparkett im Farbton Chocolate',
      caption: 'Parkett — Chocolate',
    },
  },

  videos: {
    plankFinishingLine: {
      alt: 'Video: Eichendielen laufen über die Oberflächenlinie',
      caption: 'Diele auf der Oberflächenlinie',
    },
    plankShortBoards: {
      alt: 'Video: Eichenelemente verlassen die Oberflächenmaschine',
      caption: 'Elemente am Ende der Linie',
    },
    chevronBlanks: {
      alt: 'Video: Chevron-Rohlinge mit schrägen Enden nach dem Profilieren',
      caption: 'Chevron-Rohlinge',
    },
    plankTonedLine: {
      alt: 'Video: grau getönte Eichendielen auf der Walzenlinie',
      caption: 'Getönte Diele auf der Linie',
    },
  },

  finishes: [
    { id: 'parquet1', name: 'Smoked Cognac', tone: 'Warmes Mittelbraun' },
    { id: 'parquet2', name: 'Tobacco', tone: 'Goldbraun' },
    { id: 'parquet3', name: 'Grey Truffle', tone: 'Graubraun' },
    { id: 'parquet4', name: 'Honey Oak', tone: 'Natürlich warm' },
    { id: 'parquet5', name: 'Dark Espresso', tone: 'Tiefbraun' },
    { id: 'parquet6', name: 'Sand Greige', tone: 'Helles Neutral' },
    { id: 'parquet7', name: 'Silver Dune', tone: 'Kühles Beige' },
    { id: 'parquet8', name: 'Natural Oak', tone: 'Ungefärbte Eiche' },
    { id: 'parquet9', name: 'White Oiled', tone: 'Weiß geölt' },
    { id: 'parquet10', name: 'Ash Grey', tone: 'Sanftes Grau' },
    { id: 'parquet11', name: 'Walnut Shadow', tone: 'Mitteldunkles Braun' },
    { id: 'parquet12', name: 'Chocolate', tone: 'Dunkles Kakao' },
  ],
}
