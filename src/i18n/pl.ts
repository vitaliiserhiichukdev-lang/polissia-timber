import type { Dictionary } from './types'
import { brand } from '../data/contact'
import { formatEuro, highestPrice, priceFrom } from '../data/pricing'

const from = formatEuro(priceFrom, true)
const top = formatEuro(highestPrice('oak-chevron-parquet'), true)

/**
 * Polska wersja.
 *
 * Terminologia parkietowa: deska warstwowa, warstwa użytkowa, jodełka
 * francuska (chevron), jodełka klasyczna; klasy A-B (Select) i C (Rustic)
 * jak w cenniku firmy. Przed publikacją zweryfikować z native speakerem
 * z branży — błędnie przetłumaczony parametr to spór handlowy.
 */
export const pl: Dictionary = {
  locale: 'pl',
  htmlLang: 'pl',
  label: 'Polski',
  short: 'PL',
  decimalComma: true,

  meta: {
    homeTitle: `${brand.name} — dębowy parkiet warstwowy z Ukrainy`,
    homeDescription: `Ukraiński producent i eksporter dębowego parkietu warstwowego: deska, jodełka francuska i jodełka klasyczna w klasach A-B i C, 14 mm z warstwą użytkową dębu 3,2 mm. Ceny od ${from} za m², dostawa w całej Europie.`,
    notFoundTitle: `Nie znaleziono strony | ${brand.name}`,
    notFoundDescription: 'Szukana strona nie istnieje.',
  },

  nav: [
    { key: 'products', label: 'Parkiet', href: '/#products' },
    { key: 'compliance', label: 'Dokumenty', href: '/#compliance' },
    { key: 'about', label: 'O firmie', href: '/#about' },
    { key: 'production', label: 'Produkcja', href: '/#production' },
    { key: 'gallery', label: 'Galeria', href: '/#gallery' },
    { key: 'export', label: 'Eksport', href: '/#export' },
    { key: 'faq', label: 'FAQ', href: '/#faq' },
    { key: 'contact', label: 'Kontakt', href: '/#contact' },
  ],

  common: {
    requestQuote: 'Zapytaj o wycenę',
    quoteShort: 'Wycena',
    viewProducts: 'Wybierz parkiet',
    viewProduct: 'Zobacz format',
    priceFrom: 'od',
    skipToContent: 'Przejdź do treści',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    language: 'Język',
    home: 'Strona główna',
    products: 'Parkiet',
    perSquareMetre: '/ m²',
    priceUnit: 'EUR / m²',
    openImage: 'Otwórz zdjęcie',
    closeViewer: 'Zamknij podgląd',
    previousImage: 'Poprzednie',
    nextImage: 'Następne',
    viewFullSize: 'Zobacz w pełnym rozmiarze',
    playVideo: 'Odtwórz wideo',
    pauseVideo: 'Zatrzymaj wideo',
    video: 'Wideo',
    mm: 'mm',
    logoSub: 'Parkiet dębowy · Eksport',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Napisz na WhatsApp',
  },

  whatsapp: {
    general:
      'Dzień dobry! Interesuje mnie Państwa parkiet dębowy. Proszę o aktualny cennik i dostępność.',
    selection:
      'Dzień dobry! Interesuje mnie {product}, klasa {grade}, {size} — {price} za m² według cennika. Proszę o potwierdzenie dostępności i dostawy do: ',
  },

  hero: {
    eyebrow: 'Ukraina · Producent i eksporter parkietu',
    titleLead: 'Dębowy parkiet warstwowy',
    titleAccent: 'deska, chevron, jodełka',
    lead: 'Dąb europejski na desce 14 mm z warstwą użytkową 3,2 mm, w klasie A-B lub C, z jawnymi cenami za metr kwadratowy. Produkujemy, wykańczamy i pakujemy sami, dostarczamy w całej Europie.',
    insetCaption: 'Jodełka francuska po montażu',
    priceBadge: 'Cennik od',
    imageAlt: 'Ściana showroomu z panelami parkietu dębowego w jodełkę francuską i klasyczną',
  },

  stats: [
    { value: '3', label: 'Formaty', detail: 'Deska, jodełka francuska i klasyczna.' },
    { value: '2', label: 'Klasy', detail: 'A-B Select i C Rustic, wyceniane osobno.' },
    { value: '3,2 mm', label: 'Warstwa użytkowa', detail: 'Na desce 14 mm — można ją cyklinować i odnawiać.' },
    { value: '12', label: 'Kolorów', detail: 'Chevron od bielonego do espresso.' },
  ],

  about: {
    eyebrow: 'O firmie',
    title: 'Ukraiński producent parkietu dla europejskich klientów',
    lead: 'Produkujemy dębowe podłogi warstwowe w trzech formatach i dwóch klasach — i kontrolujemy całą drogę od dębowej lameli do załadowanej naczepy.',
    action: 'Jak produkujemy',
    quote:
      '„Stawiamy na długoterminowe partnerstwo i gwarantujemy wysoką jakość produktu w każdym zamówieniu”.',
    highlights: [
      {
        title: 'Produkcja i eksport w jednych rękach',
        body: 'Sami produkujemy deski, wykańczamy je i wysyłamy. To jeden punkt odpowiedzialności za Twoje zamówienie — a nie łańcuch pośredników między fabryką a Twoim magazynem.',
      },
      {
        title: 'Każda deska sortowana',
        body: 'Każdą deskę klasyfikujemy jako A-B lub C przed zapakowaniem, więc ponowne zamówienie w tej samej klasie daje tę samą podłogę — partia za partią, inwestycja za inwestycją.',
      },
      {
        title: 'Gotowość eksportowa według wymagań UE',
        body: 'Pakowane według formatu i klasy w kartony na paletach, oznakowane i udokumentowane — aby dostawa przeszła odprawę i rozładunek bez niespodzianek.',
      },
    ],
    tags: ['Własna produkcja', 'Jawny cennik', 'Dokumenty eksportowe'],
  },

  catalog: {
    eyebrow: 'Oferta parkietu',
    title: 'Wybierz format, klasę i wymiar',
    lead: 'Trzy formaty w dwóch klasach, wszystkie na tej samej desce warstwowej 14 mm. Wybierz kombinację, aby zobaczyć cenę za metr kwadratowy, wymiary i nagrania z naszej linii — i wyślij ją jako zapytanie lub wiadomość na WhatsApp.',
    footnote:
      'Inne szerokości, długości, wykończenia i miksy klas produkujemy na zamówienie — prześlij specyfikację, a potwierdzimy wykonalność i cenę.',
    formatStep: 'Format',
    gradeStep: 'Klasa',
    sizeStep: 'Wymiar',
    priceLabel: 'Cena',
    priceNote: 'Za m², według aktualnego cennika. Ostateczną cenę potwierdzamy w ofercie.',
    specs: { thickness: 'Grubość', wearLayer: 'Warstwa użytkowa', width: 'Szerokość', length: 'Długość' },
    randomLengths: 'różne długości',
    fixedLengths: 'długości klepek',
    details: 'Wszystko o: {product}',
  },

  priceList: {
    eyebrow: 'Cennik',
    title: 'Wszystkie formaty i klasy w jednym miejscu',
    lead: 'Pełny cennik, pozycja po pozycji, w euro za metr kwadratowy. Każda deska ma 14 mm i warstwę użytkową dębu 3,2 mm.',
    size: 'Wymiar',
    footnote:
      'Ceny za metr kwadratowy mają charakter orientacyjny: ostateczna kwota zależy od ilości, wykończenia i warunków dostawy i jest potwierdzana w ofercie.',
  },

  // TO CONFIRM — opisy klas odpowiadają przyjętemu w branży rozumieniu A-B i C;
  // zastąpić pisemnymi zasadami sortowania firmy.
  grades: {
    AB: {
      name: 'Select',
      summary: 'Spokojne, równe usłojenie dla czystej, jednolitej podłogi.',
      traits: [
        'Jednolity kolor, niewielkie różnice między deskami',
        'Tylko małe zdrowe sęki, pojedyncze',
        'Minimalny udział bielu',
        'Do nowoczesnych i minimalistycznych wnętrz',
      ],
    },
    C: {
      name: 'Rustic',
      summary: 'Żywe usłojenie, sęki i gra kolorów — najbardziej naturalny wygląd.',
      traits: [
        'Wyraziste usłojenie i naturalne różnice kolorystyczne',
        'Większe zdrowe sęki i wypełnione pęknięcia',
        'Biel dopuszczalny',
        'Podłoga z charakterem w niższej cenie',
      ],
    },
  },

  /**
   * SPRAWDZIĆ PRZED PUBLIKACJĄ. Ten blok zawiera stwierdzenia regulacyjne. Każdy
   * wiersz musi potwierdzić firma: deklaracja EUDR lub certyfikacji, której
   * eksporter nie potrafi udokumentować, blokuje odprawę celną nabywcy. Pozycje
   * ze statusem `TBC` nie są wyświetlane — zob. `src/data/pending.ts`.
   */
  compliance: {
    eyebrow: 'Dokumenty i zgodność',
    title: 'Gotowość EUDR: dane geolokalizacyjne działek i numer DDS dla każdej dostawy',
    lead: 'Odkąd obowiązuje rozporządzenie UE w sprawie wylesiania, importer nie może wprowadzić drewnianych podłóg na rynek UE bez danych o pochodzeniu na poziomie działki i oświadczenia o due diligence. Ten pakiet przygotowujemy razem z dostawą, a nie po zapytaniu.',
    eudr: {
      badge: 'EUDR',
      title: 'Co otrzymujesz z każdą dostawą',
      body: 'Rozporządzenie (UE) 2023/1115 nakłada na importera obowiązek udowodnienia, że dąb nie jest powiązany z wylesianiem i zostało pozyskane legalnie. Te dowody musi dostarczyć dostawca, dlatego zbieramy je jako część zamówienia, a nie jako formalności na końcu.',
      points: [
        'Współrzędne geolokalizacyjne działek pozyskania dla danej partii',
        'Gatunek, objętość i kraj pozyskania dla partii, zgodnie z listą pakową',
        'Dowód legalności pozyskania, możliwy do prześledzenia od kłody do palety',
        'Numer oświadczenia DDS do zgłoszenia w systemie EU TRACES',
      ],
      note: 'Prześlij specyfikację i kierunek — potwierdzimy dokładny zestaw dokumentów dla Twojej trasy importu jeszcze przed zamówieniem.',
    },
    documentsTitle: 'Zestaw dokumentów eksportowych',
    documents: [
      {
        icon: 'box',
        title: 'ISPM-15, obróbka termiczna',
        body: 'Oznakowanie drewnianych palet i przekładek, na których jadą kartony.',
        status: 'Do każdej dostawy',
      },
      {
        icon: 'globe',
        title: 'EUR.1 / deklaracja pochodzenia',
        body: 'Dowód pochodzenia preferencyjnego na podstawie umowy UE–Ukraina, aby towar był odprawiony według stawki preferencyjnej.',
        status: 'Do każdej dostawy',
      },
      {
        icon: 'stack',
        title: 'Lista pakowa i specyfikacja',
        body: 'Format, wymiar, klasa i metry kwadratowe dla każdej palety, zgodnie z etykietami kartonów, aby przyjęcie towaru mogło sprawdzić dostawę względem faktury.',
        status: 'Z każdym załadunkiem',
      },
      {
        // TO CONFIRM — nie publikować, dopóki nie ma numeru certyfikatu.
        icon: 'leaf',
        title: 'FSC / PEFC, kontrola pochodzenia',
        body: 'Materiał certyfikowany na zapytanie, wyceniany oddzielnie od niecertyfikowanego.',
        status: 'TBC',
      },
    ],
    disclaimer:
      'Wymagania dokumentowe różnią się w zależności od kraju UE i trasy importu. Nie zastępuje to własnej procedury należytej staranności: my dostarczamy dowody, deklarację składasz Ty.',
  },

  process: {
    eyebrow: 'Jakość i produkcja',
    title: 'Cztery kontrolowane etapy, od lameli do palety',
    lead: 'Każda deska przechodzi tę samą linię i te same kontrole przed zapakowaniem. Kadry i nagrania poniżej pochodzą z naszej własnej produkcji.',
    steps: [
      {
        icon: 'oak',
        title: 'Warstwa użytkowa z dębu',
        body: 'Dębowe lamele dobieramy pod względem usłojenia i koloru i łączymy jako warstwę użytkową 3,2 mm ze stabilnym podkładem — tak powstaje deska warstwowa 14 mm.',
      },
      {
        icon: 'factory',
        title: 'Rozkrój i profilowanie',
        body: 'Deski tniemy na format — deski w różnych długościach, klepki jodełki z prostymi końcami, półfabrykaty chevronu ze skośnymi końcami — i profilujemy tak, aby łączenia zamykały się szczelnie.',
      },
      {
        icon: 'layers',
        title: 'Wykończenie powierzchni',
        body: 'Szlifowanie, szczotkowanie i naturalne lub barwione wykończenie na linii wałkowej, aby każda deska w zamówieniu miała tę samą powierzchnię.',
      },
      {
        icon: 'box',
        title: 'Sortowanie i pakowanie',
        body: 'Każdą deskę klasyfikujemy jako A-B lub C, pakujemy w kartony według formatu i klasy, układamy na paletach i znakujemy dla szybkiego przyjęcia.',
      },
    ],
    callout: {
      title: 'Jawny cennik zamiast „cena na zapytanie”',
      body: 'Każdy format, wymiar i klasa ma opublikowaną cenę za metr kwadratowy. To, co widzisz w wyborze, to pozycja, według której wyceniamy.',
      action: 'Zobacz cennik',
    },
    capacityTitle: 'Moce produkcyjne',
    capacityLead:
      'Liczby, które warto sprawdzić, zanim zaplanujesz sezon inwestycji u jednego dostawcy.',
    // TO CONFIRM — dane z produkcji. Pozycje z `TBC` nie są wyświetlane.
    capacity: [
      {
        value: 'TBC',
        unit: 'm² / miesiąc',
        label: 'Produkcja parkietu',
        detail: 'We wszystkich trzech formatach i obu klasach.',
      },
      {
        value: 'TBC',
        unit: 'm² / zmianę',
        label: 'Linia wykończeniowa',
        detail: 'Deski oszlifowane i wykończone na zmianę.',
      },
      {
        value: '3',
        unit: 'formaty',
        label: 'Deska, chevron, jodełka',
        detail: 'Wszystkie w jednej konstrukcji warstwowej 14 mm.',
      },
      {
        value: '2',
        unit: 'klasy',
        label: 'A-B i C',
        detail: 'Każda deska klasyfikowana przed zapakowaniem.',
      },
    ],
    capacityNote:
      'Każda deska jest klasyfikowana przed zapakowaniem, więc ponowne zamówienie w tej samej klasie daje tę samą podłogę.',
  },

  advantages: {
    eyebrow: 'Nasze atuty',
    title: 'Dlaczego europejscy klienci z nami pracują',
    lead: 'Wszystko poniżej to zobowiązania, z których jesteśmy rozliczani: jakość, konstrukcja, logistyka i cena.',
    items: [
      {
        icon: 'oak',
        title: 'Dąb europejski, ukraińska produkcja',
        body: 'Gęsty, wolno rosnący dąb o równym usłojeniu na warstwę użytkową — materiał, który nadaje podłodze wygląd i trwałość.',
      },
      {
        icon: 'shield',
        title: 'Stabilna konstrukcja warstwowa',
        body: 'Deska 14 mm z warstwą użytkową dębu 3,2 mm pracuje mniej niż lite drewno przy sezonowych zmianach wilgotności, a warstwa wierzchnia jest wystarczająco gruba do cyklinowania i odnowienia.',
      },
      {
        icon: 'layers',
        title: 'Trzy formaty, jedna konstrukcja',
        body: 'Deska, chevron i jodełka mają tę samą budowę, więc formaty można łączyć w jednym projekcie bez progu na styku.',
      },
      {
        icon: 'truck',
        title: 'Niezawodna logistyka',
        body: 'Terminowa dostawa w całej Europie pełnymi naczepami lub kontenerami, z pakowaniem i dokumentami eksportowymi przygotowanymi przed wysyłką.',
      },
      {
        icon: 'tag',
        title: 'Przejrzyste ceny',
        body: 'Opublikowana cena za metr kwadratowy dla każdego formatu, wymiaru i klasy — bezpośrednio od producenta, bez marży pośrednika.',
      },
      {
        icon: 'partners',
        title: 'Indywidualne podejście',
        body: 'Szerokości, długości, wykończenia i pakowanie dopasowane do Twojego projektu. Cenimy długoterminowe partnerstwo i traktujemy każde zamówienie jako jego część.',
      },
    ],
  },

  gallery: {
    eyebrow: 'Galeria',
    title: 'Nasz parkiet na zdjęciach i wideo',
    lead: 'Showroom, ułożone podłogi i nasza własna linia wykończeniowa — zdjęcia i krótkie nagrania z produkcji, a nie z banku zdjęć.',
    action: 'Zobacz wszystkie dwanaście kolorów chevronu',
  },

  exportSection: {
    eyebrow: 'Eksport i dostawa',
    title: 'Zbudowane pod europejskie łańcuchy dostaw',
    lead: 'Konkurencyjne ceny i terminowa dostawa w całej Europie, ze stabilnymi wolumenami, pod które można planować produkcję.',
    points: [
      {
        icon: 'truck',
        title: 'Dostawa po Europie',
        body: 'Konkurencyjne ceny i terminowa dostawa w całej Europie — transport drogowy do krajów UE, kontenery do dalszych przewozów morskich.',
      },
      {
        icon: 'stack',
        title: 'Stabilne dostawy',
        body: 'Stabilne wolumeny z własnej produkcji, z uzgodnionymi ilościami miesięcznymi dla klientów kontraktowych.',
      },
      {
        icon: 'globe',
        title: 'Współpraca międzynarodowa',
        body: 'Dokumenty, terminologia klasyfikacji i pakowanie przygotowane pod handel międzynarodowy, komunikacja po polsku, angielsku i niemiecku.',
      },
      {
        icon: 'partners',
        title: 'Długoterminowe partnerstwo',
        body: 'Stawiamy na długoterminowe relacje i gwarantujemy wysoką jakość produktu, profesjonalną obsługę i rzetelną realizację każdego zamówienia.',
      },
    ],
    panelTitle: 'Kierunki, w które wysyłamy',
    panelBody: 'Naczepy i kontenery w całej UE. Dostępne warunki dostawy: {terms}.',
    cta: 'Omów dostawę',
    countries: {
      PL: 'Polska',
      DE: 'Niemcy',
      CZ: 'Czechy',
      SK: 'Słowacja',
      AT: 'Austria',
      HU: 'Węgry',
      RO: 'Rumunia',
      IT: 'Włochy',
      NL: 'Holandia',
      BE: 'Belgia',
      FR: 'Francja',
      ES: 'Hiszpania',
      LT: 'Litwa',
      LV: 'Łotwa',
      EE: 'Estonia',
      DK: 'Dania',
    },
    originLabel: 'Produkcja',
    ringLabel: '{km} km',
    mapNote:
      'Okręgi to odległość w linii prostej od produkcji, a nie drogowa — pokazują zasięg, nie wycenę. Zapytaj o czas dostawy na konkretny adres, a potwierdzimy go.',
    loadsTitle: 'Co wchodzi w jeden załadunek',
    loadsLead:
      'Fracht liczony jest od załadunku, a nie od metra kwadratowego, więc najtańsze zamówienie to zwykle pełne.',
    // TO CONFIRM — liczba m² w ładunku zależy od formatu palet. Ukryte, dopóki `TBC`.
    loads: [
      {
        value: 'TBC',
        unit: 'm²',
        label: 'Pełna naczepa',
        detail: 'Standardowa firanka 13,6 m z kartonami na paletach — typowa dostawa drogowa w UE.',
      },
      {
        value: 'TBC',
        unit: 'm²',
        label: 'Kontener 40 stóp',
        detail: 'Do dalszego frachtu morskiego lub kierunków poza zasięgiem transportu drogowego.',
      },
      {
        // TO CONFIRM — decyzja handlowa, nie pomiar.
        value: 'TBC',
        unit: 'm²',
        label: 'Minimalne zamówienie',
        detail: 'Mniejsze wolumeny konsolidujemy z inną dostawą w tym samym kierunku.',
      },
    ],
    leadTimesTitle: 'Czasy dostawy i Incoterms',
    leadTimesLead:
      'Liczone od potwierdzonego zamówienia i ustalonych warunków płatności do rozładunku pod Twoim adresem.',
    // TO CONFIRM — zależne od trasy; ukryte do potwierdzenia przez logistykę.
    leadTimes: [
      { destination: 'Polska', days: 'TBC', mode: 'Drogowy, pełna naczepa' },
      { destination: 'Niemcy', days: 'TBC', mode: 'Drogowy, pełna naczepa' },
      { destination: 'Czechy / Słowacja', days: 'TBC', mode: 'Drogowy, pełna naczepa' },
      { destination: 'Włochy', days: 'TBC', mode: 'Drogowy, pełna naczepa' },
      { destination: 'Holandia / Belgia', days: 'TBC', mode: 'Drogowy, pełna naczepa' },
      { destination: 'Kierunki morskie', days: 'TBC', mode: 'Morski, kontener 40 stóp' },
    ],
    leadTimeColumns: { destination: 'Kierunek', days: 'W drodze', mode: 'Transport' },
    leadTimeNote:
      'Przejście graniczne i odprawa celna są uwzględnione w powyższych czasach. Dostępne warunki dostawy: EXW, FCA, CPT i DAP — DAP oznacza towar pod Twoją bramą z uregulowanymi należnościami.',
    casesTitle: 'Ostatnie dostawy',
    casesLead: 'Bez nazw klientów, ale prawdziwe: formaty, wolumeny i trasy, które realnie ładujemy.',
    // TO CONFIRM — uzupełnić z rejestru wysyłek. Ukryte dopóki `TBC`.
    cases: [
      { volume: 'TBC', spec: 'TBC', destination: 'TBC', terms: 'DAP', days: 'TBC' },
      { volume: 'TBC', spec: 'TBC', destination: 'TBC', terms: 'FCA', days: 'TBC' },
      { volume: 'TBC', spec: 'TBC', destination: 'TBC', terms: 'CPT', days: 'TBC' },
    ],
    caseLabels: {
      volume: 'Objętość',
      spec: 'Specyfikacja',
      destination: 'Kierunek',
      terms: 'Warunki',
      days: 'W drodze',
    },
  },

  faq: {
    eyebrow: 'Pytania kupujących',
    title: 'Klasy, wymiary, ceny i dostawa',
    lead: 'Odpowiedzi, których udzielamy przez telefon — na piśmie. Jeśli czegoś brakuje, zapytaj, dodamy.',
    items: [
      {
        question: 'Czym różnią się klasy A-B i C?',
        answer:
          'A-B (Select) to klasa spokojniejsza: jednolity kolor, małe zdrowe sęki i minimalny udział bielu. C (Rustic) to klasa żywa: wyraziste usłojenie, większe zdrowe sęki, wypełnione pęknięcia i biel są dopuszczalne. Obie to ta sama deska — 14 mm z warstwą użytkową dębu 3,2 mm — wyceniana osobno, więc wybierasz wygląd, a nie inny produkt.',
      },
      {
        question: 'Jakie formaty i wymiary produkujecie?',
        answer:
          'Deskę 125 × 600–1 400, 145 × 800–1 600 i 195 × 1 700–2 500 mm w różnych długościach; jodełkę francuską (chevron) i klasyczną o szerokości 125 mm z klepkami 500, 600 i 700 mm. Wszystkie formaty mają 14 mm grubości i warstwę użytkową dębu 3,2 mm.',
      },
      {
        question: 'Jaka jest konstrukcja deski?',
        answer:
          'To parkiet warstwowy: warstwa użytkowa z dębu europejskiego 3,2 mm na stabilnym podkładzie, łącznie 14 mm. Warstwa wierzchnia jest wystarczająco gruba do cyklinowania i odnowienia, a budowa warstwowa pracuje mniej niż lite drewno przy zmianach wilgotności.',
      },
      {
        question: 'Jak podajecie ceny?',
        answer: `Za metr kwadratowy, według formatu, wymiaru i klasy — od ${from}/m² za deskę 125 mm w klasie C do ${top}/m² za chevron A-B. Ostateczna kwota zależy od ilości, wykończenia i warunków dostawy i jest potwierdzana w ofercie.`,
      },
      {
        question: 'Czy produkujecie inne wymiary, wykończenia lub miksy klas?',
        answer:
          'Tak. Inne szerokości i długości, olej lub lakier, naturalne lub barwione wykończenia oraz miksy klas produkujemy na zamówienie — prześlij specyfikację, a potwierdzimy wykonalność i cenę, zanim się zobowiążesz.',
      },
      {
        question: 'Czy dostarczacie dane geolokalizacyjne EUDR i numer DDS?',
        answer:
          'Tak. Każda dostawa ma współrzędne działek pozyskania, gatunek, objętość i kraj pozyskania, dowód legalności pozyskania oraz numer oświadczenia DDS do Twojego zgłoszenia w UE. Uzgodnij z nami trasę importu, a podamy dokładny zestaw dokumentów przed zamówieniem.',
      },
      {
        question: 'Z jakimi Incoterms pracujecie?',
        answer:
          'EXW, FCA, CPT i DAP. DAP to typowy wybór klientów z UE, którzy chcą otrzymać towar pod bramę bez organizowania frachtu; FCA pasuje klientom z własnym przewoźnikiem.',
      },
      {
        question: 'Jak pakowany jest parkiet?',
        answer:
          'W kartony według formatu i klasy, na paletach, owinięte folią i oznakowane formatem, wymiarem, klasą i metrami kwadratowymi — tak samo w liście pakowej, aby przyjęcie towaru mogło sprawdzić dostawę względem faktury w kilka minut.',
      },
      {
        question: 'Czy wysyłacie próbki przed zamówieniem?',
        answer:
          'Tak. Wysyłamy próbki klasy i wykończenia przed potwierdzeniem zamówienia, abyś mógł porównać deskę z własnym standardem, zanim zdecydujesz się na ładunek.',
      },
      {
        question: 'Czy mogę zamówić przez WhatsApp?',
        answer:
          'Tak. Wyślij format, klasę, wymiar i ilość — albo po prostu zdjęcie rzutu pomieszczenia — a odpowiemy wyceną. Wybór na tej stronie sam wypełnia wiadomość.',
      },
      {
        question: 'W jakich językach pracujecie?',
        answer: 'Polski, angielski, niemiecki i ukraiński — w korespondencji i dokumentach.',
      },
      {
        question: 'Jakie jest minimalne zamówienie?',
        // TO CONFIRM — decyzja handlowa. Ukryte do czasu odpowiedzi.
        answer: 'TBC',
      },
      {
        question: 'Jaki jest czas dostawy do Niemiec lub Polski?',
        // TO CONFIRM — zob. exportSection.leadTimes. Ukryte do czasu odpowiedzi.
        answer: 'TBC',
      },
    ],
  },

  contact: {
    eyebrow: 'Zapytanie o wycenę',
    title: 'Powiedz, czego potrzebujesz',
    lead: 'Prześlij formaty, klasy i ilości. Jeśli jeszcze nie wiesz — opisz projekt, a my zaproponujemy najbardziej ekonomiczną specyfikację.',
    labels: {
      email: 'E-mail',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      production: 'Produkcja i eksport',
      hours: 'Godziny pracy',
      languages: 'Mówimy',
    },
    values: {
      address: 'Bronniki, ul. Bohdana Chmielnickiego, rejon rówieński, obwód rówieński, Ukraina',
      hours: 'Pn–Pt, 08:00–18:00 (EET)',
      languages: 'polski, angielski, niemiecki, ukraiński',
    },
    whatsappTitle: 'Szybciej przez WhatsApp',
    whatsappBody:
      'Wyślij format, klasę i ilość — albo po prostu zdjęcie rzutu pomieszczenia — a odpowiemy wyceną i dostępnością.',
    noteBefore: 'Wolisz e-mail? Napisz bezpośrednio na ',
    noteAfter: ' i dołącz specyfikację — odpowiadamy po polsku, angielsku lub niemiecku.',
  },

  form: {
    name: 'Imię i nazwisko *',
    namePlaceholder: 'Jan Kowalski',
    company: 'Firma',
    companyPlaceholder: 'Parkiet Sp. z o.o.',
    country: 'Kraj',
    countryPlaceholder: 'Polska',
    email: 'E-mail *',
    emailPlaceholder: 'zakupy@firma.pl',
    phone: 'Telefon',
    phonePlaceholder: '+48 000 000 000',
    product: 'Format',
    productPlaceholder: 'Wybierz format…',
    productMixed: 'Kilka formatów',
    grade: 'Klasa',
    gradeAny: 'Dowolna / doradźcie',
    dimensions: 'Wymiar (szer. × dł. × gr.)',
    dimensionsPlaceholder: '125 × 600–1 400 × 14/3,2 mm',
    volume: 'Ilość',
    volumePlaceholder: 'np. 250 m²',
    finish: 'Wykończenie',
    finishOptions: {
      any: 'Dowolne / doradźcie',
      unfinished: 'Surowe',
      oiled: 'Olejowane',
      lacquered: 'Lakierowane',
    },
    destination: 'Kierunek dostawy',
    destinationPlaceholder: 'Miasto lub port, np. Hamburg',
    incoterms: 'Warunki dostawy',
    incotermsAny: 'Jeszcze nieustalone',
    message: 'Wiadomość *',
    messagePlaceholder: 'Co jeszcze wpływa na wycenę — kolor, pakowanie, harmonogram…',
    submit: 'Wyślij zapytanie',
    sending: 'Wysyłanie…',
    required: 'Pola oznaczone * są obowiązkowe.',
    privacy: 'Twoich danych używamy wyłącznie do odpowiedzi na to zapytanie.',
    errors: {
      name: 'Podaj proszę swoje imię i nazwisko.',
      email: 'Wpisz poprawny adres e-mail.',
      message: 'Napisz proszę kilka słów o swojej potrzebie.',
    },
    sentTitle: 'Zapytanie przyjęte',
    sentBody:
      'Dziękujemy — nasz dział eksportu wróci z ofertą cenową i aktualną dostępnością.',
    mailTitle: 'Wiadomość gotowa do wysłania',
    mailBody:
      'Otworzyliśmy wypełnioną wiadomość w Twoim programie pocztowym. Jeśli nic się nie pojawiło — napisz do nas bezpośrednio na {email}.',
    sendAnother: 'Wyślij kolejne zapytanie',
    failed: 'Nie udało się wysłać formularza. Napisz proszę na {email}.',
    mailSubject: 'Zapytanie o wycenę — {product}',
    mailFields: {
      name: 'Imię i nazwisko',
      company: 'Firma',
      country: 'Kraj',
      email: 'E-mail',
      phone: 'Telefon',
      product: 'Format',
      grade: 'Klasa',
      dimensions: 'Wymiary',
      volume: 'Ilość',
      finish: 'Wykończenie',
      destination: 'Kierunek',
      incoterms: 'Warunki dostawy',
      notSpecified: 'Nie podano',
    },
  },

  productPage: {
    aboutTitle: 'O tym formacie',
    configureTitle: 'Wybierz klasę i wymiar',
    specsEyebrow: 'Parametry techniczne',
    specsTitle: 'Specyfikacja',
    specsLead:
      'Potwierdzane dla każdego zamówienia — prześlij wymagania, a dokładne wartości podamy w ofercie.',
    pricesEyebrow: 'Cennik',
    pricesTitle: 'Ceny według wymiaru i klasy',
    pricesLead: 'Prosto z naszego cennika, w euro za metr kwadratowy.',
    gradesEyebrow: 'Klasy',
    gradesTitle: 'A-B czy C: co się zmienia',
    gradesLead:
      'Ta sama deska w dwóch klasach. Klasa decyduje, jak spokojna lub żywa jest powierzchnia — i o cenie.',
    finishesEyebrow: 'Kolory',
    finishesTitle: 'Dwanaście kolorów produkcyjnych',
    finishesLead:
      'Każdy kolor nakładamy na tę samą dębową klepkę chevron, więc w jednym projekcie można łączyć odcienie bez zmiany dostawcy czy formatu.',
    inquiryEyebrow: 'Zapytanie',
    inquiryTitle: 'Zapytaj o wycenę: {product}',
    inquiryLead:
      'Podaj klasę, wymiar i ilość. Odpowiemy z dostępnością, ceną i czasem dostawy do Twojego kierunku.',
    relatedEyebrow: 'Produkujemy również',
    relatedTitle: 'Inne formaty',
    seePriceList: 'Zobacz pełny cennik',
  },

  footer: {
    products: 'Parkiet',
    company: 'Firma',
    exportOffice: 'Dział eksportu',
    claim: 'Dębowy parkiet warstwowy z Ukrainy dla rynku europejskiego.',
    rights: 'Wszelkie prawa zastrzeżone.',
  },

  notFound: {
    eyebrow: 'Błąd 404',
    title: 'Tę stronę odcięto',
    lead: 'Szukana strona nie istnieje. Cała nasza produkcja jest jednak na miejscu.',
    backHome: 'Na stronę główną',
    contactCta: 'Skontaktuj się z działem eksportu',
  },

  products: {
    'oak-chevron-parquet': {
      name: 'Parkiet dębowy jodełka francuska',
      shortName: 'Chevron',
      kicker: 'Jodełka francuska',
      category: 'Parkiet warstwowy',
      tagline: 'Klepki ze skośnymi końcami łączą się w ciągłe „V” — klasyczny francuski wzór.',
      shortDescription:
        'Warstwowy chevron dębowy o szerokości 125 mm, klepki 500, 600 i 700 mm, w klasach A-B i C i dwunastu kolorach.',
      description: [
        'Klepki chevronu mają skośnie cięte końce, więc wzór biegnie jako ciągłe „V” z prostą spoiną pośrodku — podłoga paryskich kamienic i najbardziej architektoniczny z naszych trzech formatów.',
        'Każda klepka ma 125 mm szerokości i 500, 600 lub 700 mm długości, na naszej konstrukcji warstwowej 14 mm z warstwą użytkową z dębu europejskiego 3,2 mm. Ta sama budowa co deska i jodełka klasyczna, więc formaty mogą się spotkać w progu bez uskoku.',
        'Dostępnych jest dwanaście kolorów produkcyjnych, od bielonych i szarobeżowych przez naturalny i miodowy dąb po orzech, czekoladę i ciemne espresso.',
      ],
      advantages: [
        'Skośne końce frezowane pod szczelne, powtarzalne łączenia',
        'Trzy długości klepki, by dopasować skalę wzoru do wnętrza',
        'Dwanaście kolorów produkcyjnych, indywidualne na zamówienie',
        'Ta sama konstrukcja 14 mm co deska i jodełka klasyczna',
      ],
      specs: [
        {
          group: 'Materiał',
          items: [
            { label: 'Gatunek', value: 'Dąb europejski' },
            { label: 'Wzór', value: 'Jodełka francuska (chevron)' },
            { label: 'Konstrukcja', value: 'Warstwowa, 14 mm z warstwą użytkową dębu 3,2 mm' },
            { label: 'Pochodzenie', value: 'Ukraina' },
          ],
        },
        {
          group: 'Format',
          items: [
            { label: 'Szerokość', value: '125 mm' },
            { label: 'Długości klepek', value: '500 / 600 / 700 mm' },
            { label: 'Klasy', value: 'A-B Select, C Rustic' },
            // TO CONFIRM — opcje wykończenia
            { label: 'Powierzchnia', value: 'Olejowana lub lakierowana, szczotkowana na zamówienie' },
          ],
        },
        {
          group: 'Dostawa',
          items: [
            { label: 'Opakowanie', value: 'Kartony na paletach, owinięte folią' },
            { label: 'Jednostka sprzedaży', value: 'Metr kwadratowy' },
            { label: 'Próbki', value: 'Próbki klasy i koloru przed potwierdzeniem zamówienia' },
            { label: 'Warunki', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
    },

    'oak-plank-flooring': {
      name: 'Deska dębowa warstwowa',
      shortName: 'Deska',
      kicker: 'Trzy szerokości',
      category: 'Deska warstwowa',
      tagline: 'Długie, spokojne deski 125, 145 i 195 mm — najbardziej uniwersalna podłoga dębowa.',
      shortDescription:
        'Warstwowa deska dębowa w trzech szerokościach i różnych długościach do 2 500 mm, w klasach A-B i C.',
      description: [
        'Deska pasuje niemal do każdego wnętrza: długie deski układane w przesuniętych rzędach, usłojenie wzdłuż pomieszczenia. Produkujemy trzy szerokości — 125, 145 i 195 mm — aby skala deski odpowiadała skali pokoju.',
        'Długości w każdej szerokości są różne — 600–1 400 mm przy 125, 800–1 600 mm przy 145 i 1 700–2 500 mm przy 195 mm — dzięki czemu łączenia nie układają się w linii, a podłoga wygląda jak naturalne drewno, a nie płytki.',
        'Każda deska to warstwowy dąb 14 mm z warstwą użytkową 3,2 mm, wykończony naturalnie lub barwiony na naszej własnej linii i klasyfikowany jako A-B lub C.',
      ],
      advantages: [
        'Trzy szerokości, od klasycznych 125 mm po szeroką deskę 195 mm',
        'Różne długości do 2 500 mm dla naturalnego układu',
        'Naturalne lub barwione wykończenie na własnej linii',
        'Ta sama konstrukcja 14 mm co chevron i jodełka klasyczna',
      ],
      specs: [
        {
          group: 'Materiał',
          items: [
            { label: 'Gatunek', value: 'Dąb europejski' },
            { label: 'Format', value: 'Deska, układ w przesuniętych rzędach' },
            { label: 'Konstrukcja', value: 'Warstwowa, 14 mm z warstwą użytkową dębu 3,2 mm' },
            { label: 'Pochodzenie', value: 'Ukraina' },
          ],
        },
        {
          group: 'Format',
          items: [
            { label: 'Szerokości', value: '125 / 145 / 195 mm' },
            { label: 'Długości', value: '600–1 400 / 800–1 600 / 1 700–2 500 mm' },
            { label: 'Klasy', value: 'A-B Select, C Rustic' },
            // TO CONFIRM — opcje wykończenia
            { label: 'Powierzchnia', value: 'Naturalna lub barwiona, olej lub lakier' },
          ],
        },
        {
          group: 'Dostawa',
          items: [
            { label: 'Opakowanie', value: 'Kartony na paletach, owinięte folią' },
            { label: 'Jednostka sprzedaży', value: 'Metr kwadratowy' },
            { label: 'Próbki', value: 'Próbki klasy i koloru przed potwierdzeniem zamówienia' },
            { label: 'Warunki', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
    },

    'oak-herringbone-parquet': {
      name: 'Parkiet dębowy jodełka klasyczna',
      shortName: 'Jodełka',
      kicker: 'Jodełka klasyczna',
      category: 'Parkiet warstwowy',
      tagline: 'Klepki z prostymi końcami układane w zygzak — klasyczny wzór jodełki.',
      shortDescription:
        'Warstwowa jodełka klasyczna z dębu o szerokości 125 mm, klepki 500, 600 i 700 mm, w klasach A-B i C.',
      description: [
        'Klepki jodełki mają proste końce: każda dochodzi do boku sąsiedniej, więc wzór biegnie schodkowym zygzakiem, a nie spotyka się w prostej spoinie. To klasyczna podłoga, która najlepiej ukrywa łączenia w często uczęszczanych pomieszczeniach.',
        'Klepki mają 125 mm szerokości i 500, 600 lub 700 mm długości, na naszej konstrukcji warstwowej 14 mm z warstwą użytkową z dębu europejskiego 3,2 mm — ta sama budowa co deska i chevron.',
        'Przy tym samym wymiarze i klasie jodełka klasyczna jest tańsza od chevronu — to najbardziej ekonomiczna droga do podłogi we wzór w naszej ofercie.',
      ],
      advantages: [
        'Klepki z prostymi końcami do tradycyjnego układu w zygzak',
        'Trzy długości klepki, by dopasować skalę wzoru do wnętrza',
        'Najbardziej ekonomiczna podłoga we wzór w ofercie',
        'Ta sama konstrukcja 14 mm co deska i chevron',
      ],
      specs: [
        {
          group: 'Materiał',
          items: [
            { label: 'Gatunek', value: 'Dąb europejski' },
            { label: 'Wzór', value: 'Jodełka klasyczna' },
            { label: 'Konstrukcja', value: 'Warstwowa, 14 mm z warstwą użytkową dębu 3,2 mm' },
            { label: 'Pochodzenie', value: 'Ukraina' },
          ],
        },
        {
          group: 'Format',
          items: [
            { label: 'Szerokość', value: '125 mm' },
            { label: 'Długości klepek', value: '500 / 600 / 700 mm' },
            { label: 'Klasy', value: 'A-B Select, C Rustic' },
            // TO CONFIRM — opcje wykończenia
            { label: 'Powierzchnia', value: 'Olejowana lub lakierowana, szczotkowana na zamówienie' },
          ],
        },
        {
          group: 'Dostawa',
          items: [
            { label: 'Opakowanie', value: 'Kartony na paletach, owinięte folią' },
            { label: 'Jednostka sprzedaży', value: 'Metr kwadratowy' },
            { label: 'Próbki', value: 'Próbki klasy i koloru przed potwierdzeniem zamówienia' },
            { label: 'Warunki', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
    },
  },

  photos: {
    showroom: {
      alt: 'Ściana showroomu z panelami parkietu dębowego w jodełkę francuską i klasyczną',
      caption: 'Showroom — chevron i jodełka',
    },
    interiorPlank: {
      alt: 'Szeroka deska dębowa w korytarzu, a w sypialni za nim chevron',
      caption: 'Deska i chevron po montażu',
    },
    chevronInterior: {
      alt: 'Naturalny dębowy chevron ułożony w holu pod schodami',
      caption: 'Chevron, dąb naturalny',
    },
    plankSelect: {
      alt: 'Jasne deski dębowe klasy A-B ułożone na palecie',
      caption: 'Deska — klasa A-B Select',
    },
    herringboneShowroom: {
      alt: 'Dwa panele dębowej jodełki klasycznej w showroomie',
      caption: 'Jodełka klasyczna — panele w showroomie',
    },
    plankFinishingLinePoster: {
      alt: 'Deski dębowe na wałkach linii wykończeniowej',
      caption: 'Deska na linii wykończeniowej',
    },
    plankShortBoardsPoster: {
      alt: 'Deski dębowe wychodzące z maszyny wykończeniowej',
      caption: 'Deski na wyjściu z linii',
    },
    chevronBlanksPoster: {
      alt: 'Ułożone półfabrykaty chevronu ze skośnymi końcami',
      caption: 'Półfabrykaty chevronu po profilowaniu',
    },
    plankTonedLinePoster: {
      alt: 'Szaro barwione deski dębowe na linii wałkowej',
      caption: 'Barwiona deska na linii',
    },
    parquet1: {
      alt: 'Parkiet dębowy chevron w odcieniu Smoked Cognac',
      caption: 'Parkiet — Smoked Cognac',
    },
    parquet2: {
      alt: 'Parkiet dębowy chevron w odcieniu Tobacco',
      caption: 'Parkiet — Tobacco',
    },
    parquet3: {
      alt: 'Parkiet dębowy chevron w odcieniu Grey Truffle',
      caption: 'Parkiet — Grey Truffle',
    },
    parquet4: {
      alt: 'Parkiet dębowy chevron w odcieniu Honey Oak',
      caption: 'Parkiet — Honey Oak',
    },
    parquet5: {
      alt: 'Parkiet dębowy chevron w odcieniu Dark Espresso',
      caption: 'Parkiet — Dark Espresso',
    },
    parquet6: {
      alt: 'Parkiet dębowy chevron w odcieniu Sand Greige',
      caption: 'Parkiet — Sand Greige',
    },
    parquet7: {
      alt: 'Parkiet dębowy chevron w odcieniu Silver Dune',
      caption: 'Parkiet — Silver Dune',
    },
    parquet8: {
      alt: 'Parkiet dębowy chevron w niebarwionym odcieniu Natural Oak',
      caption: 'Parkiet — Natural Oak',
    },
    parquet9: {
      alt: 'Parkiet dębowy chevron w bielonym odcieniu White Oiled',
      caption: 'Parkiet — White Oiled',
    },
    parquet10: {
      alt: 'Parkiet dębowy chevron w odcieniu Ash Grey',
      caption: 'Parkiet — Ash Grey',
    },
    parquet11: {
      alt: 'Parkiet dębowy chevron w odcieniu Walnut Shadow',
      caption: 'Parkiet — Walnut Shadow',
    },
    parquet12: {
      alt: 'Parkiet dębowy chevron w odcieniu Chocolate',
      caption: 'Parkiet — Chocolate',
    },
  },

  videos: {
    plankFinishingLine: {
      alt: 'Wideo: deski dębowe przesuwają się po linii wykończeniowej',
      caption: 'Deska na linii wykończeniowej',
    },
    plankShortBoards: {
      alt: 'Wideo: deski dębowe wychodzą z maszyny wykończeniowej',
      caption: 'Deski na wyjściu z linii',
    },
    chevronBlanks: {
      alt: 'Wideo: półfabrykaty chevronu ze skośnymi końcami po profilowaniu',
      caption: 'Półfabrykaty chevronu',
    },
    plankTonedLine: {
      alt: 'Wideo: szaro barwione deski dębowe na linii wałkowej',
      caption: 'Barwiona deska na linii',
    },
  },

  finishes: [
    { id: 'parquet1', name: 'Smoked Cognac', tone: 'Ciepły średni brąz' },
    { id: 'parquet2', name: 'Tobacco', tone: 'Złocisty brąz' },
    { id: 'parquet3', name: 'Grey Truffle', tone: 'Szarobrązowy' },
    { id: 'parquet4', name: 'Honey Oak', tone: 'Naturalny ciepły' },
    { id: 'parquet5', name: 'Dark Espresso', tone: 'Głęboki brąz' },
    { id: 'parquet6', name: 'Sand Greige', tone: 'Jasny neutralny' },
    { id: 'parquet7', name: 'Silver Dune', tone: 'Chłodny beż' },
    { id: 'parquet8', name: 'Natural Oak', tone: 'Niebarwiony dąb' },
    { id: 'parquet9', name: 'White Oiled', tone: 'Bielony' },
    { id: 'parquet10', name: 'Ash Grey', tone: 'Łagodna szarość' },
    { id: 'parquet11', name: 'Walnut Shadow', tone: 'Średnio ciemny brąz' },
    { id: 'parquet12', name: 'Chocolate', tone: 'Ciemne kakao' },
  ],
}
