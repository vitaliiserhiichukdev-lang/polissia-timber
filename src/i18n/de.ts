import type { Dictionary } from './types'
import { brand } from '../data/contact'

/**
 * German copy.
 *
 * Sortier- und Trocknungsbegriffe folgen der schriftlichen Spezifikation des
 * Unternehmens (Festast, Schwarzast, Splintholz, eingewachsene Rinde, Markröhre,
 * Dampfschaden, Holzwurmbefall). Diese Begriffe sind kaufentscheidend: eine
 * falsch übersetzte Toleranz ist ein Handelsstreit — vor der Veröffentlichung
 * von einem Muttersprachler aus der Branche prüfen lassen.
 */
export const de: Dictionary = {
  locale: 'de',
  htmlLang: 'de',
  label: 'Deutsch',
  short: 'DE',

  meta: {
    homeTitle: `${brand.name} — Schnittholz aus der Ukraine für europäische Märkte`,
    homeDescription:
      'Ukrainischer Hersteller und Exporteur von Schnittholz: besäumte Eichenbretter der Klassen I–IV, Kiefernbauholz und Eichenparkett. Stabile Liefermengen und Zustellung in ganz Europa.',
    notFoundTitle: `Seite nicht gefunden | ${brand.name}`,
    notFoundDescription: 'Die gesuchte Seite existiert nicht.',
  },

  nav: [
    { key: 'products', label: 'Produkte', href: '/#products' },
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
    viewProducts: 'Produkte ansehen',
    viewDetails: 'Details ansehen',
    viewProduct: 'Zum Produkt',
    onRequest: 'Auf Anfrage',
    priceFrom: 'Preis ab',
    pricing: 'Preis',
    quotedPerSpecification: 'Angebot nach Spezifikation',
    gradeBased: 'Nach Sortierklasse, EUR / m³',
    skipToContent: 'Zum Inhalt springen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    language: 'Sprache',
    home: 'Startseite',
    products: 'Produkte',
    perCubicMetre: '/ m³',
    priceUnit: 'EUR / m³',
    openImage: 'Bild öffnen',
    closeViewer: 'Bildansicht schließen',
    previousImage: 'Vorheriges Bild',
    nextImage: 'Nächstes Bild',
    viewFullSize: 'In voller Größe ansehen',
    mm: 'mm',
    logoSub: 'Schnittholz aus der Ukraine · Export',
  },

  hero: {
    eyebrow: 'Ukraine · Hersteller & Exporteur',
    titleLead: 'Schnittholz aus der Ukraine',
    titleAccent: 'für europäische Märkte',
    lead: 'Wir produzieren und exportieren Schnittholz nach Europa: besäumte Eichenbretter, sortiert nach schriftlicher Spezifikation, Kiefernbauholz und Parkett aus massiver Eiche. Qualitätskontrolle in jeder Stufe, exportfertig verpackt und dokumentiert.',
    insetCaption: 'Besäumtes Eichenbrett · Klasse I · 30 mm',
    scrollLabel: 'Zum Abschnitt Produkte springen',
    imageAlt: 'Pakete ukrainischen Schnittholzes gestapelt auf dem Exportplatz',
  },

  stats: [
    {
      value: '4',
      label: 'Sortierklassen',
      detail: 'Klassen I–IV, geprüft nach unserer schriftlichen Eichenspezifikation.',
    },
    {
      value: '5',
      label: 'Standardquerschnitte Eiche',
      detail: 'Breiten von 80 bis 230 mm, durchgehend 30 mm Dicke.',
    },
    {
      value: '12',
      label: 'Parkett-Farbtöne',
      detail: 'Chevron-Eichenparkett, von weiß geölt bis dunkles Espresso.',
    },
    {
      value: 'EU',
      label: 'Liefergebiet',
      detail: 'Regelmäßige Komplettladungen und Container in ganz Europa.',
    },
  ],

  about: {
    eyebrow: 'Über das Unternehmen',
    title: 'Ein ukrainischer Hersteller, ausgerichtet auf europäische Einkäufer',
    lead: 'Wir bieten ein breites Sortiment an Massivholzprodukten, gefertigt nach aktuellen Qualitätsstandards und den Anforderungen internationaler Märkte — und wir steuern den gesamten Weg vom Rundholz bis zum beladenen LKW.',
    action: 'So produzieren wir',
    quote:
      '„Wir setzen auf langfristige Partnerschaften und garantieren bei jedem Auftrag hohe Produktqualität.“',
    highlights: [
      {
        title: 'Produktion und Export aus einer Hand',
        body: 'Wir sind auf Herstellung und Export von Schnittholz nach Europa spezialisiert und decken den gesamten Weg ab — von der Rundholzannahme bis zum beladenen LKW. Das bedeutet eine Verantwortungsstelle für Ihren Auftrag statt einer Kette von Zwischenhändlern.',
      },
      {
        title: 'Kontrolle in jeder Stufe',
        body: 'Jede Produktionsstufe wird kontrolliert — von der Rohstoffauswahl über Einschnitt, Trocknung und Sortierung bis zu Verpackung und Lieferung. Jede Partie wird gegen eine schriftliche Spezifikation geprüft, bevor sie das Werk verlässt.',
      },
      {
        title: 'Exportfertig nach europäischen Anforderungen',
        body: 'Alle Produkte durchlaufen die Qualitätskontrolle, erfüllen europäische Anforderungen und sind exportfertig: nach Klasse sortiert, umbändelt, markiert und dokumentiert, damit Abfertigung und Entladung ohne Überraschungen ablaufen.',
      },
    ],
    tags: ['Eigene Produktion', 'Schriftliche Spezifikationen', 'Exportdokumente'],
  },

  catalog: {
    eyebrow: 'Produktkatalog',
    title: 'Drei Produktlinien, ein Standard',
    lead: 'Besäumte Eichenbretter sind unser Kerngeschäft. Daneben liefern wir Kiefernbauholz und Parkett aus massiver Eiche — alles von uns produziert, sortiert und verpackt.',
    action: 'Vollständige Preisliste anfragen',
    footnote:
      'Sonderquerschnitte, Sonderlängen und Klassenmischungen fertigen wir auf Auftrag — senden Sie uns Ihre Spezifikation, wir bestätigen Machbarkeit und Preis.',
    cardLabels: {
      woodType: 'Holzart',
      sizes: 'Verfügbare Maße',
      grade: 'Sortierklasse',
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
    lead: 'Seit Anwendung der EU-Entwaldungsverordnung darf ein Importeur Holz ohne flächenbezogene Herkunftsdaten und Sorgfaltserklärung nicht auf dem EU-Markt in Verkehr bringen. Wir stellen dieses Paket mit der Sendung zusammen, nicht erst auf Nachfrage.',
    eudr: {
      badge: 'EUDR',
      title: 'Was Sie mit jeder Sendung erhalten',
      body: 'Die Verordnung (EU) 2023/1115 macht den Importeur dafür verantwortlich, nachzuweisen, dass das Holz entwaldungsfrei und legal geerntet ist. Dieser Nachweis muss vom Lieferanten kommen, deshalb erstellen wir ihn als Teil des Auftrags und nicht als Papierkram am Ende.',
      points: [
        'Geokoordinaten der Erntefläche für die jeweilige Partie',
        'Holzart, Volumen und Ernteland je Paket, passend zur Packliste',
        'Legalitätsnachweis der Ernte, rückverfolgbar vom Stamm bis zum Paket',
        'DDS-Referenz für Ihre Meldung im EU-TRACES-System',
      ],
      note: 'Senden Sie Spezifikation und Zielort — wir bestätigen den genauen Dokumentensatz für Ihre Importroute vor der Beauftragung.',
    },
    documentsTitle: 'Exportdokumente',
    documents: [
      {
        icon: 'shield',
        title: 'Pflanzengesundheitszeugnis',
        body: 'Wird vom staatlichen Pflanzenschutzdienst für jede Schnittholzsendung ausgestellt, die die Ukraine verlässt.',
        status: 'Je Sendung',
      },
      {
        icon: 'box',
        title: 'ISPM-15 Hitzebehandlung',
        body: 'Markierung für Holzverpackungen, Unterlagen und Paletten zur Ladungssicherung.',
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
        body: 'Volumen, Querschnitt und Klasse je Paket, übereinstimmend mit der Markierung auf der Bänderung, damit der Wareneingang die Lieferung gegen die Rechnung prüfen kann.',
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
    title: 'Fünf kontrollierte Stufen, vom Stamm bis zur Beladung',
    lead: 'Wir kontrollieren jede Produktionsstufe — von der Rohstoffauswahl bis zu Verpackung und Lieferung. Jede Stufe hat eine festgelegte Prüfung, bevor das Material weitergeht.',
    steps: [
      {
        icon: 'oak',
        title: 'Rohstoffauswahl',
        body: 'Stämme werden nach Holzart, Durchmesser und Gesundheit ausgewählt, bevor sie die Sägelinie erreichen. Material mit Markfehlern, Insektenbefall oder Dampfschaden wird bei der Annahme aussortiert — dort ist die Fehlerbeseitigung am günstigsten.',
      },
      {
        icon: 'factory',
        title: 'Einschnitt und Fertigung',
        body: 'Besäumte Bretter werden auf feste Querschnitte geschnitten — 30 mm Dicke in Breiten von 80 bis 230 mm — mit sauberen, parallelen Kanten und rechtwinklig gekappten Enden. Kiefernquerschnitte fertigen wir nach den Maßen des jeweiligen Projekts.',
      },
      {
        icon: 'shield',
        title: 'Trocknung und Qualitätskontrolle',
        body: 'Die Bretter werden zur kontrollierten Trocknung gestapelt und anschließend Stück für Stück nach unserer schriftlichen Spezifikation sortiert: Astgröße und -art, Splintholz, eingewachsene Rinde, Risse. Markröhre, Holzwurmbefall, Dampfschaden und Stirnrisse sind in keiner Klasse zulässig.',
      },
      {
        icon: 'box',
        title: 'Verpackung',
        body: 'Jede Klasse wird separat in gleichmäßige Pakete verpackt, umbändelt, kantengeschützt und mit Maß, Klasse und Volumen markiert, damit der Wareneingang eine Lieferung in Minuten prüfen kann.',
      },
      {
        icon: 'truck',
        title: 'Export und Lieferung',
        body: 'Wir beladen Komplettladungen und Container mit vollständigen Exportdokumenten und halten Sie vom Versand bis zur Entladung überall in Europa auf dem Laufenden.',
      },
    ],
    callout: {
      title: 'Schriftliche Spezifikationen statt mündlicher Zusagen',
      body: 'Unsere Sortierregeln für Eiche legen genau fest, was jede Klasse zulässt — Astgröße und -art, Splintholz, eingewachsene Rinde — und was nie akzeptiert wird: Markröhre, Dampfschaden, Holzwurmbefall, Mikrorisse, Stirnrisse und doppeltes Splintholz.',
      action: 'Sortierregeln lesen',
    },
    capacityTitle: 'Produktionskapazität',
    capacityLead:
      'Die Zahlen, die zu prüfen sind, bevor Sie eine Produktionssaison einem Lieferanten anvertrauen.',
    // TO CONFIRM — die Produktion muss diese Werte vor dem Launch liefern.
    capacity: [
      {
        value: 'TBC',
        unit: 'm³ / Monat',
        label: 'Ausstoß Eichenschnittholz',
        detail: 'Besäumte Bretter mit 30 mm über alle fünf Standardquerschnitte.',
      },
      {
        value: 'TBC',
        unit: 'm³ / Schicht',
        label: 'Durchsatz Sägelinie',
        detail: 'Von der Rundholzannahme zum besäumten, gekappten Brett.',
      },
      {
        value: 'TBC',
        unit: 'Kammern',
        label: 'Trocknungskapazität',
        detail: 'Kammern im Betrieb, mit dem Volumen je Charge.',
      },
      {
        value: 'TBC',
        unit: 'm³ / Charge',
        label: 'Kammerfüllung',
        detail: 'Getrocknetes Volumen je Zyklus — es bestimmt die Partiegröße mit einheitlicher Holzfeuchte.',
      },
      {
        value: '5',
        unit: 'Querschnitte',
        label: 'Standardquerschnitte Eiche',
        detail: 'Breiten 80, 115, 150, 170 und 230 mm — laufend vorrätig, nicht auf Auftrag geschnitten.',
      },
      {
        value: '4',
        unit: 'Klassen',
        label: 'Sortierklassen',
        detail: 'Klassen I–IV, Stück für Stück nach der schriftlichen Spezifikation geprüft.',
      },
    ],
    capacityNote:
      'Jedes Stück wird vor dem Verpacken nach der schriftlichen Spezifikation sortiert, sodass eine Nachbestellung derselben Klasse in Ihrem Betrieb dieselbe Ausbeute liefert.',
  },

  advantages: {
    eyebrow: 'Unsere Stärken',
    title: 'Warum europäische Einkäufer mit uns arbeiten',
    lead: 'Alles Folgende sind Zusagen, an denen wir gemessen werden: Qualität, Menge, Logistik und Preis.',
    items: [
      {
        icon: 'oak',
        title: 'Langsam gewachsenes Holz',
        body: 'Langsam gewachsene ukrainische Eiche und Kiefer mit dichter, gleichmäßiger Struktur — der Rohstoff hinter der Festigkeit und Haltbarkeit, für die uns Kunden wählen.',
      },
      {
        icon: 'shield',
        title: 'Europäische Qualitätsstandards',
        body: 'Die Produkte werden nach aktuellen Qualitätsstandards und internationalen Marktanforderungen gefertigt und nach einer dokumentierten Spezifikation mit definierten Toleranzen sortiert.',
      },
      {
        icon: 'stack',
        title: 'Produktion in großen Mengen',
        body: 'Stabile Liefermengen mit wiederholbarer Sortierung, sodass Sie eine Produktionssaison auf uns planen können, statt Spotpartien nachzujagen.',
      },
      {
        icon: 'truck',
        title: 'Verlässliche Logistik',
        body: 'Termingerechte Lieferung in ganz Europa per Komplettladung oder Container, mit Verpackung und Exportpapieren vor dem Versand.',
      },
      {
        icon: 'tag',
        title: 'Wettbewerbsfähige Preise',
        body: 'Preise direkt vom Hersteller mit transparenten Preislisten nach Sortierklasse — keine Händlermarge zwischen Sägewerk und Ihrem Lager.',
      },
      {
        icon: 'partners',
        title: 'Individuelle Betreuung',
        body: 'Maße, Klassen und Verpackung nach Ihrer Spezifikation. Wir setzen auf langfristige Partnerschaften und behandeln jeden Auftrag als Teil davon.',
      },
    ],
  },

  gallery: {
    eyebrow: 'Galerie',
    title: 'Unser Holz, fotografiert im Versandzustand',
    lead: 'Sieben Aufnahmen statt eines Kontaktbogens: die Kante eines sortierten Bretts, die Pakete, in denen es den Platz verlässt, der Bestand hinter einer Nachbestellung. Aufgenommen auf unserem eigenen Platz und in unserer Werkstatt, nicht bei einer Bildagentur gekauft.',
    action: 'Alle zwölf Parkett-Farbtöne ansehen',
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
    originLabel: 'Unser Platz',
    ringLabel: '{km} km',
    mapNote:
      'Die Ringe zeigen die Luftlinie vom Platz, nicht die Straßenentfernung — sie zeigen die Reichweite, kein Angebot. Fragen Sie die Lieferzeit für Ihre genaue Adresse an, wir bestätigen sie.',
    loadsTitle: 'Was in eine Ladung passt',
    loadsLead:
      'Fracht wird je Ladung berechnet, nicht je Kubikmeter — die günstigste Bestellung ist deshalb meist eine volle.',
    loads: [
      {
        value: '22–24',
        unit: 'm³',
        label: 'Komplettladung',
        detail: 'Standard-Planenauflieger 13,6 m mit umbändelten Paketen — die übliche EU-Straßenlieferung.',
      },
      {
        value: '25–28',
        unit: 'm³',
        label: '40-Fuß-Container',
        detail: 'Für anschließende Seefracht oder Ziele außerhalb der Straßenreichweite.',
      },
      {
        // TO CONFIRM — kaufmännische Entscheidung, keine Messung.
        value: 'TBC',
        unit: 'm³',
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
    casesLead: 'Anonymisiert, aber real: die Querschnitte, Mengen und Routen, die wir tatsächlich verladen.',
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
    eyebrow: 'Häufige Fragen',
    title: 'Klassen, Mengen, Dokumente und Lieferung',
    lead: 'Die Antworten, die wir am Telefon geben — hier schriftlich. Fehlt etwas, fragen Sie nach, wir ergänzen es.',
    items: [
      {
        question: 'Was unterscheidet die Klassen I–IV?',
        answer:
          'Die Klasse ergibt sich daraus, was das Brett zeigen darf, und die Grenzen sind schriftlich festgelegt. Klasse I erlaubt Festäste bis 3–5 mm und sonst nichts; Klasse II ergänzt Festäste bis 25–35 mm, Schwarzäste bis 15–25 mm und 20–25 mm Splintholz; Klasse III erweitert dies auf Festäste bis 35 mm bei schmalen Querschnitten und bis 70 mm bei 230 mm Breite, zusätzlich eingewachsene Rinde; Klasse IV, gefertigt in 230 mm, erlaubt Festäste bis 120 mm. Markröhre, Dampfschaden, Holzwurmbefall, Mikrorisse, Stirnrisse und doppeltes Splintholz sind in keiner Klasse zulässig.',
      },
      {
        question: 'Welche Querschnitte und Längen produzieren Sie?',
        answer:
          'Besäumte Eichenbretter werden mit fester Dicke von 30 mm in fünf Breiten geschnitten — 80, 115, 150, 170 und 230 mm — mit festen Längen je Querschnitt im Bereich 320 bis 2 450 mm. Kiefernbauholz schneiden wir nach Ihrer Querschnittsliste statt nach festem Katalog.',
      },
      {
        question: 'Fertigen Sie Sonderquerschnitte oder Klassenmischungen?',
        answer:
          'Ja. Sonderquerschnitte, Sonderlängen und Klassenmischungen fertigen wir auf Auftrag — senden Sie die Spezifikation, wir bestätigen Machbarkeit und Preis, bevor Sie sich binden.',
      },
      {
        question: 'Welche Holzfeuchte liefern Sie?',
        answer:
          'Kammergetrocknet oder lufttrocken, je Auftrag festgelegt. Nennen Sie uns Zielfeuchte und Toleranz, wir bestätigen sie im Angebot — die Trocknung beeinflusst sowohl den Preis als auch die Partiegröße, die wir auf eine Spezifikation halten können.',
      },
      {
        question: 'Liefern Sie EUDR-Geodaten und eine DDS-Referenz?',
        answer:
          'Ja. Jede Sendung wird mit den Koordinaten der Erntefläche, Holzart, Volumen und Ernteland je Paket, dem Legalitätsnachweis der Ernte und der DDS-Referenz für Ihre EU-Meldung geliefert. Bestätigen Sie Ihre Importroute mit uns, dann nennen wir den genauen Dokumentensatz vor der Beauftragung.',
      },
      {
        question: 'Mit welchen Incoterms arbeiten Sie?',
        answer:
          'EXW, FCA, CPT und DAP. DAP ist die übliche Wahl für EU-Käufer, die die Ware ohne eigene Frachtorganisation an ihrem Tor wollen; FCA passt zu Käufern mit eigenem Spediteur.',
      },
      {
        question: 'Wie wird das Holz verpackt und markiert?',
        answer:
          'Jede Klasse wird separat in gleichmäßige, umbändelte Pakete mit Kantenschutz verpackt, mit Querschnitt, Klasse und Volumen markiert und ebenso auf der Packliste geführt — so prüft der Wareneingang eine Lieferung in Minuten gegen die Rechnung, statt sie umzustapeln.',
      },
      {
        question: 'Wie werden Preise kalkuliert und wie lange gelten sie?',
        answer:
          'Je Kubikmeter, nach Querschnitt und Klasse — unsere veröffentlichte Eichenpreisliste reicht von 700 €/m³ für gemischte Klasse 80 × 30 mm bis 2 650 €/m³ für Klasse I bei 230 mm. Der Endpreis hängt von Menge, Trocknung und Lieferbedingungen ab und wird je Partie im Angebot bestätigt.',
      },
      {
        question: 'Senden Sie Muster vor einer Bestellung?',
        answer:
          'Ja. Für Parkett senden wir Farbmuster vor der Auftragsbestätigung, für Schnittholz können wir sortierte Musterbretter senden, damit Sie unsere Sortierung gegen Ihren eigenen Standard prüfen, bevor Sie eine Ladung beauftragen.',
      },
      {
        question: 'In welchen Sprachen arbeiten Sie?',
        answer:
          'Deutsch, Englisch, Polnisch und Ukrainisch — in der Korrespondenz und in den Dokumenten.',
      },
      {
        question: 'Wie hoch ist Ihre Mindestbestellmenge?',
        // TO CONFIRM — kaufmännische Entscheidung. Ausgeblendet bis zur Antwort.
        answer: 'TBC',
      },
      {
        question: 'Wie lang ist die Lieferzeit nach Deutschland oder Polen?',
        // TO CONFIRM — siehe exportSection.leadTimes. Ausgeblendet bis zur Antwort.
        answer: 'TBC',
      },
    ],
  },

  contact: {
    eyebrow: 'Angebot anfragen',
    title: 'Sagen Sie uns, was Sie brauchen',
    lead: 'Senden Sie Querschnitte, Klassen und Mengen. Wenn Sie noch unsicher sind, beschreiben Sie den Einsatzzweck — wir schlagen die wirtschaftlichste Spezifikation vor.',
    labels: {
      email: 'E-Mail',
      phone: 'Telefon',
      production: 'Produktion & Export',
      hours: 'Geschäftszeiten',
      languages: 'Wir sprechen',
    },
    values: {
      address: 'Region Kyjiw, Ukraine',
      hours: 'Mo–Fr, 08:00–18:00 (EET)',
      languages: 'Deutsch, Englisch, Polnisch, Ukrainisch',
    },
    noteBefore: 'Lieber per E-Mail? Schreiben Sie direkt an ',
    noteAfter:
      ' und legen Sie Ihre Spezifikation bei — wir antworten auf Deutsch, Englisch oder Polnisch.',
  },

  form: {
    name: 'Name *',
    namePlaceholder: 'Thomas Müller',
    company: 'Firma',
    companyPlaceholder: 'Holzhandel GmbH',
    country: 'Land',
    countryPlaceholder: 'Deutschland',
    email: 'E-Mail *',
    emailPlaceholder: 'einkauf@firma.de',
    phone: 'Telefon',
    phonePlaceholder: '+49 000 000 000',
    product: 'Produkt',
    productPlaceholder: 'Produkt wählen…',
    productMixed: 'Gemischt / mehrere Produkte',
    grade: 'Sortierklasse',
    gradeAny: 'Beliebig / bitte beraten',
    dimensions: 'Maße (D × B × L)',
    dimensionsPlaceholder: '30 × 230 × 2 050 mm',
    volume: 'Menge pro Monat',
    volumePlaceholder: 'z. B. 40 m³',
    moisture: 'Holzfeuchte',
    moistureOptions: {
      any: 'Beliebig / bitte beraten',
      kd: 'Kammergetrocknet (KD)',
      ad: 'Lufttrocken (AD)',
      fresh: 'Frisch geschnitten',
    },
    destination: 'Zielort',
    destinationPlaceholder: 'Stadt oder Hafen, z. B. Hamburg',
    incoterms: 'Lieferbedingungen',
    incotermsAny: 'Noch nicht entschieden',
    message: 'Nachricht *',
    messagePlaceholder: 'Was sonst das Angebot beeinflusst — Toleranzen, Verpackung, Termine…',
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
      product: 'Produkt',
      grade: 'Sortierklasse',
      dimensions: 'Maße',
      volume: 'Menge / Monat',
      moisture: 'Holzfeuchte',
      destination: 'Zielort',
      incoterms: 'Lieferbedingungen',
      notSpecified: 'Nicht angegeben',
    },
  },

  productPage: {
    aboutTitle: 'Über dieses Produkt',
    specsEyebrow: 'Technische Daten',
    specsTitle: 'Spezifikation',
    specsLead:
      'Wird je Auftrag bestätigt — senden Sie Ihren Bedarf, wir nennen die genauen Werte im Angebot.',
    pricesEyebrow: 'Preisliste',
    pricesTitle: 'Preise nach Querschnitt und Klasse',
    pricesLead:
      'Unsere veröffentlichte Preisliste. Die Querschnitte sind fest; die Längen je Querschnitt sind wie aufgeführt verfügbar.',
    gradesEyebrow: 'Sortierung',
    gradesTitle: 'Was jede Klasse zulässt',
    gradesLead:
      'Direkt aus unserer schriftlichen Spezifikation für besäumtes Eichenschnittholz. Die Toleranzen unterscheiden sich zwischen schmalen und breiten Querschnitten.',
    finishesEyebrow: 'Farbtöne',
    finishesTitle: 'Zwölf Produktionstöne',
    finishesLead:
      'Jeder Ton wird auf dieselbe Chevron-Eichenlamelle aufgebracht, sodass Sie Töne innerhalb eines Projekts mischen können, ohne Lieferant oder Format zu wechseln.',
    inquiryEyebrow: 'Anfrage',
    inquiryTitle: 'Angebot anfragen: {product}',
    inquiryLead:
      'Nennen Sie die benötigten Querschnitte, Klassen und Mengen. Wir antworten mit Verfügbarkeit, Preis und Lieferzeit für Ihren Zielort.',
    relatedEyebrow: 'Ebenfalls im Programm',
    relatedTitle: 'Weitere Produktlinien',
    priceInformation: 'Preisinformation',
    seePriceList: 'Preisliste ansehen',
    permitted: 'Zulässig',
    notPermitted: 'In keiner Klasse zulässig',
    availableLengths: 'Verfügbare Längen',
    priceColumn: 'Preis',
    gradeColumn: 'Klasse',
    gradeLabel: 'Klasse {code}',
    mixedGrade: 'Gemischte Klasse',
    priceFootnote:
      'Die Preise gelten je Kubikmeter und sind indikativ: der Endbetrag hängt von Menge, Trocknung und Lieferbedingungen ab und wird je Partie im Angebot bestätigt.',
  },

  footer: {
    products: 'Produkte',
    company: 'Unternehmen',
    exportOffice: 'Exportabteilung',
    claim: 'Schnittholz aus der Ukraine für den europäischen Markt.',
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
    'oak-edged-boards': {
      name: 'Besäumte Eichenbretter',
      kicker: 'Kernprodukt',
      category: 'Besäumtes Schnittholz',
      species: 'Europäische Eiche (Quercus robur)',
      tagline: 'Sortiertes Eichenschnittholz in fünf festen Querschnitten, Preis nach Klasse.',
      shortDescription:
        'Unser Kerngeschäft: besäumte Eichenbretter, bekannt für Festigkeit, Haltbarkeit und natürliche Optik — sortiert von Klasse I bis IV nach schriftlicher Spezifikation.',
      description: [
        'Besäumte Eichenbretter sind das Rückgrat unserer Produktion. Jedes Brett wird mit fester Dicke von 30 mm in einer von fünf Breiten geschnitten — 80, 115, 150, 170 oder 230 mm — mit parallelen Kanten, rechtwinklig gekappten Enden und einem definierten Längenbereich je Querschnitt.',
        'Die Sortierung ist keine Ermessensfrage. Jedes Stück wird gegen schriftliche Toleranzen für Fest- und Schwarzäste, Splintholz, eingewachsene Rinde und Risse geprüft, und die Grenzen unterscheiden sich zwischen den schmalen (150/170 mm) und breiten (230 mm) Querschnitten. Markröhre, Holzwurmbefall, Dampfschaden, Mikrorisse, Stirnrisse und doppeltes Splintholz sind in keiner Klasse zulässig.',
        'Das Ergebnis ist ein Produkt, das Sie wiederholt mit Sicherheit einkaufen können: dieselbe Klasse liefert in Ihrem Betrieb dieselbe Ausbeute, Partie für Partie.',
      ],
      keyFacts: [
        { label: 'Dicke', value: '30 mm' },
        { label: 'Breiten', value: '80 / 115 / 150 / 170 / 230 mm' },
        { label: 'Längen', value: '320 – 2 450 mm' },
        { label: 'Klassen', value: 'I, II, III, IV' },
      ],
      priceNote:
        'Ab 700 €/m³ (80 × 30 mm, gemischte Klasse). Klasse I in 230 mm ab 2 650 €/m³.',
      sizesSummary: '30 × 80–230 mm, Längen 320–2 450 mm',
      gradesSummary: 'Klassen I–IV und Pakete gemischter Klasse',
      advantages: [
        'Fünf feste Querschnitte laufend vorrätig — Nachbestellungen kommen identisch an',
        'Klassentoleranzen schriftlich dokumentiert, nicht telefonisch vereinbart',
        'Preisliste nach Klasse, Sie zahlen nur für die Qualität, die Sie brauchen',
        'Nach Klasse verpackt und markiert für eine schnelle Wareneingangsprüfung',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Holzart', value: 'Europäische Eiche (Quercus robur)' },
            { label: 'Produktart', value: 'Besäumtes Schnittholz, auf Wunsch gehobelt' },
            { label: 'Herkunft', value: 'Ukraine' },
            { label: 'Sortierung', value: 'Klassen I–IV nach Werksspezifikation' },
          ],
        },
        {
          group: 'Maße',
          items: [
            { label: 'Dicke', value: '30 mm' },
            { label: 'Breiten', value: '80, 115, 150, 170, 230 mm' },
            { label: 'Längenbereich', value: '320 – 2 450 mm, feste Längen je Querschnitt' },
            { label: 'Kanten / Enden', value: 'Beidseitig besäumt, Enden rechtwinklig gekappt' },
          ],
        },
        {
          group: 'Lieferung',
          items: [
            // TO CONFIRM — Trocknungsgrad
            { label: 'Holzfeuchte', value: 'Kammergetrocknet oder lufttrocken — bei Anfrage angeben' },
            { label: 'Verpackung', value: 'Umbändelte Pakete, nach Querschnitt und Klasse sortiert' },
            { label: 'Markierung', value: 'Querschnitt, Klasse und Volumen je Paket' },
            { label: 'Bedingungen', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
      gradeBands: [
        {
          widths: 'Breiten 150 und 170 mm',
          grades: [
            { code: 'I', name: 'Klasse I', allowances: ['Festäste bis 3–5 mm'] },
            {
              code: 'II',
              name: 'Klasse II',
              allowances: [
                'Festäste bis 25 mm',
                'Schwarzäste bis 15 mm, mindestens 10 mm von der Kante entfernt',
                'Splintholz 20 mm, ohne Durchtritt auf eine Seite',
              ],
            },
            {
              code: 'III',
              name: 'Klasse III',
              allowances: [
                'Festäste bis 35 mm',
                'Schwarzäste bis 25 mm, mindestens 10 mm von der Kante entfernt',
                'Eingewachsene Rinde bis 3 × 50 mm',
                'Splintholz 35 mm auf einer Seite, 10 mm durchtretend auf der anderen',
              ],
            },
          ],
        },
        {
          widths: 'Breite 230 mm',
          grades: [
            { code: 'I', name: 'Klasse I', allowances: ['Festäste bis 5 mm'] },
            {
              code: 'II',
              name: 'Klasse II',
              allowances: [
                'Festäste 30–35 mm',
                'Schwarzäste bis 25 mm, mindestens 10 mm von der Kante entfernt',
                'Splintholz 25 mm, ohne Durchtritt auf eine Seite',
                'Eingewachsene Rinde bis 50 mm',
              ],
            },
            {
              code: 'III',
              name: 'Klasse III',
              allowances: [
                'Festäste bis 70 mm',
                'Schwarzäste bis 40 mm, mindestens 10 mm von der Kante entfernt',
                'Eingewachsene Rinde bis 3 × 80 mm',
                'Splintholz 10 mm auf der Sichtseite, 30 mm auf der Rückseite',
              ],
            },
            {
              code: 'IV',
              name: 'Klasse IV',
              allowances: [
                'Festäste bis 120 mm, mindestens 10 mm von der Kante entfernt',
                'Eingewachsene Rinde bis 5 × 100 mm',
                'Splintholz 20 mm auf der Sichtseite, unbegrenzt auf der Rückseite',
              ],
            },
          ],
        },
      ],
      notPermitted: [
        'Markröhre / Kern',
        'Dampfschaden',
        'Holzwurmbefall',
        'Mikrorisse',
        'Stirnrisse',
        'Doppeltes Splintholz',
      ],
    },

    'pine-construction-timber': {
      name: 'Kiefernbauholz',
      kicker: 'Mengengeschäft',
      category: 'Bauholz',
      species: 'Gemeine Kiefer (Pinus sylvestris)',
      tagline: 'Bretter, Latten und Kanthölzer für Wohn-, Gewerbe- und Industriebau.',
      shortDescription:
        'Kiefernbauholz für Wohn-, Gewerbe- und Industriebau — nach Ihren Querschnitten geschnitten und in großen, wiederholbaren Mengen geliefert.',
      description: [
        'Wir liefern Kiefernholz für Bau und Ausbau: besäumte Bretter, Latten, Sparren und Kanthölzer. Die Querschnitte werden nach Ihrer Spezifikation gefertigt statt in einen festen Katalog gepresst, was Kiefer zu unserer flexibelsten Produktlinie macht.',
        'Kiefer arbeitet zuverlässig und verhält sich vorhersehbar: leicht, auf der Baustelle einfach zu befestigen und zu schneiden, und nach der Trocknung formstabil. Sie ist die natürliche Wahl für Ständerwerk, Schalung, Dachkonstruktionen, Balkenlagen, Verpackungen und den Innenausbau.',
        'Weil Kiefer in Mengen läuft, zeigt sich hier unsere Produktionsgröße. Bündel werden gleichmäßig umbändelt und auf konstante Längen geschnitten, sodass ein LKW voll wird — was die Frachtkosten je Kubikmeter senkt.',
      ],
      keyFacts: [
        { label: 'Produkte', value: 'Bretter, Latten, Kanthölzer' },
        { label: 'Querschnitte', value: 'Nach Spezifikation' },
        { label: 'Längen', value: 'Bis 6 000 mm' }, // TO CONFIRM
        { label: 'Lieferung', value: 'Komplettladungen' },
      ],
      priceNote: 'Preis auf Anfrage — Kalkulation je Kubikmeter gegen Ihre Querschnittsliste.',
      sizesSummary: 'Querschnitte und Längen auf Auftrag',
      gradesSummary: 'Bauqualität, Sortierung auf Anfrage',
      advantages: [
        'Querschnitte nach Ihrer Zeichnung statt nach festem Katalog',
        'Stabile Liefermengen für mehrphasige Bauprojekte',
        'Gleichmäßige Bündel, die effizient laden und schnell entladen',
        'Geeignet für Tragwerk, Schalung, Verpackung und Innenausbau',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Holzart', value: 'Gemeine Kiefer (Pinus sylvestris)' },
            { label: 'Produktart', value: 'Besäumte Bretter, Latten, Kanthölzer' },
            { label: 'Herkunft', value: 'Ukraine' },
            {
              label: 'Anwendungen',
              value: 'Ständerwerk, Dach, Schalung, Ausbau, Verpackung',
            },
          ],
        },
        {
          // TO CONFIRM — indikative Bereiche, mit der Produktion abstimmen
          group: 'Maße',
          items: [
            { label: 'Brettdicke', value: '25 – 50 mm' },
            { label: 'Brettbreite', value: '100 – 200 mm' },
            { label: 'Kantholzquerschnitte', value: '50 × 50 bis 150 × 150 mm' },
            { label: 'Längen', value: '3 000 – 6 000 mm' },
          ],
        },
        {
          group: 'Lieferung',
          items: [
            { label: 'Holzfeuchte', value: 'Frisch geschnitten oder getrocknet — bei Anfrage angeben' },
            { label: 'Verpackung', value: 'Umbändelte Bündel, kantengeschützt' },
            { label: 'Verladung', value: 'Komplettladung oder 40-Fuß-Container' },
            { label: 'Bedingungen', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
      gradeBands: [],
      notPermitted: [],
    },

    'oak-parquet-boards': {
      name: 'Parkett aus Massivholz',
      kicker: '12 Farbtöne',
      category: 'Bodenbelag',
      species: 'Europäische Eiche',
      tagline: 'Chevron-Eichenparkett, das eine elegante Optik mit langer Nutzungsdauer verbindet.',
      shortDescription:
        'Parkett aus Massivholz mit eleganter Optik, Verlässlichkeit und langer Nutzungsdauer — Eiche im Chevron-Format in zwölf Farbtönen.',
      description: [
        'Unser Parkett entsteht aus derselben Eiche, die wir selbst einschneiden und sortieren, gefräst im Chevron-Format, damit der fertige Boden als durchgehendes Muster wirkt und nicht als Fläche einzelner Dielen.',
        'Zwölf Farbtöne werden produziert, von weiß geölt und Greige über natürliche Eiche und Honig bis Walnuss, Schokolade und dunkles Espresso. Dieselbe Lamelle bedient damit ein helles skandinavisches Interieur ebenso wie ein dunkles, formelles — ohne Lieferantenwechsel.',
        'Beim Parkett zeigt die Eiche, woher ihr Ruf kommt: strapazierfähig unter Verkehr, reparierbar statt Wegwerfware, und nach einem Jahrzehnt besser aussehend als viele Böden am ersten Tag.',
      ],
      keyFacts: [
        { label: 'Muster', value: 'Chevron' },
        { label: 'Holzart', value: 'Europäische Eiche' },
        { label: 'Farbtöne', value: '12 Standardtöne' },
        { label: 'Format', value: 'Nach Spezifikation' },
      ],
      priceNote: 'Preis auf Anfrage — Kalkulation je Quadratmeter nach Farbton und Format.',
      sizesSummary: 'Chevron-Format, Maße nach Spezifikation',
      gradesSummary: 'Select und Rustikal, 12 Farbtöne',
      advantages: [
        'Zwölf Produktionstöne von weiß geölt bis dunkles Espresso',
        'Chevron-Format für enge, wiederholbare Fugen gefräst',
        'Aus unserer eigenen sortierten Eiche — ein Lieferant vom Stamm bis zum Boden',
        'Strapazierfähig und reparierbar, auf lange Nutzungsdauer ausgelegt',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Holzart', value: 'Europäische Eiche' },
            { label: 'Muster', value: 'Chevron (französisches Fischgrät)' },
            { label: 'Farbtöne', value: '12 Standardtöne, Sondertöne auf Anfrage' },
            { label: 'Herkunft', value: 'Ukraine' },
          ],
        },
        {
          // TO CONFIRM — Aufbau, Dicke und Nutzschicht
          group: 'Format',
          items: [
            { label: 'Aufbau', value: 'Massiv oder Mehrschicht — bei Anfrage angeben' },
            { label: 'Dicke', value: 'Nach Spezifikation' },
            { label: 'Breite / Länge', value: 'Nach Spezifikation' },
            { label: 'Oberfläche', value: 'Geölt oder lackiert, auf Wunsch gebürstet' },
          ],
        },
        {
          group: 'Lieferung',
          items: [
            { label: 'Verpackung', value: 'Kartons auf Paletten, foliert' },
            { label: 'Verkaufseinheit', value: 'Quadratmeter' },
            { label: 'Bemusterung', value: 'Farbmuster vor der Auftragsbestätigung' },
            { label: 'Bedingungen', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
      gradeBands: [],
      notPermitted: [],
    },
  },

  photos: {
    oakGradeA: {
      alt: 'Besäumte Eichenbretter der Klasse I mit sauberer, gleichmäßiger Struktur',
      caption: 'Besäumte Eichenbretter — Klasse I',
    },
    oakGradeB: {
      alt: 'Besäumte Eichenbretter der Klasse II mit kleinen gesunden Ästen',
      caption: 'Besäumte Eichenbretter — Klasse II',
    },
    oakGradeC: {
      alt: 'Besäumte Eichenbretter der Klasse III mit Ästen und Splintholz',
      caption: 'Besäumte Eichenbretter — Klasse III',
    },
    oakEdge: {
      alt: 'Kantendetail eines gehobelten Eichenbretts, 30 mm dick',
      caption: 'Kantendetail — 30 mm Eiche',
    },
    machined: {
      alt: 'Bearbeitete Eichen- und Kiefernbretter, gestapelt vor dem Verpacken',
      caption: 'Bearbeitete Bretter vor dem Verpacken',
    },
    pinePacks: {
      alt: 'Umbändelte Kiefernbrettpakete, gestapelt auf dem Platz',
      caption: 'Kiefernbrettpakete, ladefertig',
    },
    pineBundles: {
      alt: 'Kiefernlatten und -bretter, gebündelt für den Export',
      caption: 'Gebündelte Kiefernquerschnitte',
    },
    pineBeams: {
      alt: 'Kiefernkanthölzer und -bretter, gestapelt im Sägewerk',
      caption: 'Kiefernkanthölzer',
    },
    pineYard: {
      alt: 'Große Stapel Kiefernholz auf dem Exportplatz',
      caption: 'Platzbestand — Kiefernholz',
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
