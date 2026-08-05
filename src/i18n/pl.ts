import type { Dictionary } from './types'
import { brand } from '../data/contact'

/**
 * Polska wersja.
 *
 * Terminologia klasyfikacji i suszenia odpowiada pisemnej specyfikacji firmy
 * (sęk zdrowy, sęk czarny, biel, wrośnięta kora, rdzeń, zaparzenie, uszkodzenia
 * przez owady). Te pojęcia decydują o zakupie: błędnie przetłumaczona tolerancja
 * to spór handlowy — przed publikacją zweryfikować z native speakerem z branży.
 */
export const pl: Dictionary = {
  locale: 'pl',
  htmlLang: 'pl',
  label: 'Polski',
  short: 'PL',

  meta: {
    homeTitle: `${brand.name} — tarcica z Ukrainy na rynki europejskie`,
    homeDescription:
      'Ukraiński producent i eksporter tarcicy: deski dębowe obrzynane w klasach I–IV, drewno konstrukcyjne sosnowe i deska parkietowa z dębu. Stabilne duże wolumeny i dostawa w całej Europie.',
    notFoundTitle: `Nie znaleziono strony | ${brand.name}`,
    notFoundDescription: 'Szukana strona nie istnieje.',
  },

  nav: [
    { key: 'about', label: 'O firmie', href: '/#about' },
    { key: 'products', label: 'Produkty', href: '/#products' },
    { key: 'compliance', label: 'Dokumenty', href: '/#compliance' },
    { key: 'production', label: 'Produkcja', href: '/#production' },
    { key: 'gallery', label: 'Galeria', href: '/#gallery' },
    { key: 'export', label: 'Eksport', href: '/#export' },
    { key: 'faq', label: 'FAQ', href: '/#faq' },
    { key: 'contact', label: 'Kontakt', href: '/#contact' },
  ],

  common: {
    requestQuote: 'Zapytaj o wycenę',
    quoteShort: 'Wycena',
    viewProducts: 'Zobacz produkty',
    viewDetails: 'Szczegóły',
    viewProduct: 'Przejdź do produktu',
    onRequest: 'Na zapytanie',
    priceFrom: 'Cena od',
    pricing: 'Cena',
    quotedPerSpecification: 'Wycena według specyfikacji',
    gradeBased: 'Zależnie od klasy, EUR / m³',
    skipToContent: 'Przejdź do treści',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    language: 'Język',
    home: 'Strona główna',
    products: 'Produkty',
    perCubicMetre: '/ m³',
    priceUnit: 'EUR / m³',
    openImage: 'Otwórz zdjęcie',
    closeViewer: 'Zamknij przeglądarkę zdjęć',
    previousImage: 'Poprzednie zdjęcie',
    nextImage: 'Następne zdjęcie',
    viewFullSize: 'Zobacz w pełnym rozmiarze',
    mm: 'mm',
    logoSub: 'Tarcica z Ukrainy · Eksport',
  },

  hero: {
    eyebrow: 'Ukraina · Producent i eksporter',
    titleLead: 'Tarcica z Ukrainy',
    titleAccent: 'na rynki europejskie',
    lead: 'Produkujemy i eksportujemy tarcicę do krajów Europy: deski dębowe obrzynane klasyfikowane według pisemnej specyfikacji, drewno konstrukcyjne sosnowe i deskę parkietową z litego dębu. Kontrola jakości na każdym etapie, pakowanie i dokumenty gotowe do eksportu.',
    insetCaption: 'Deska dębowa obrzynana · klasa I · 30 mm',
    scrollLabel: 'Przejdź do sekcji dokumentów',
    imageAlt: 'Pakiety ukraińskiej tarcicy ułożone na placu eksportowym',
  },

  stats: [
    {
      value: '4',
      label: 'Klasy jakości',
      detail: 'Klasy I–IV oceniane według naszej pisemnej specyfikacji dla dębu.',
    },
    {
      value: '5',
      label: 'Standardowe przekroje dębu',
      detail: 'Szerokości od 80 do 230 mm, grubość 30 mm.',
    },
    {
      value: '12',
      label: 'Odcieni parkietu',
      detail: 'Parkiet dębowy chevron: od bielonego do ciemnego espresso.',
    },
    {
      value: 'UE',
      label: 'Obszar dostaw',
      detail: 'Regularne dostawy całopojazdowe i kontenerowe w całej Europie.',
    },
  ],

  about: {
    eyebrow: 'O firmie',
    title: 'Ukraiński producent nastawiony na europejskiego nabywcę',
    lead: 'Oferujemy szeroki asortyment produktów z drewna litego, wytwarzanych zgodnie z aktualnymi standardami jakości i wymaganiami rynków międzynarodowych — i kontrolujemy całą drogę od kłody do załadowanej naczepy.',
    action: 'Jak produkujemy',
    quote:
      '„Stawiamy na długoterminowe partnerstwo i gwarantujemy wysoką jakość produktu w każdym zamówieniu”.',
    highlights: [
      {
        title: 'Produkcja i eksport w jednych rękach',
        body: 'Specjalizujemy się w produkcji i eksporcie tarcicy do krajów Europy i obsługujemy całą drogę — od przyjęcia surowca do załadowanej naczepy. Oznacza to jeden punkt odpowiedzialności za zamówienie, a nie łańcuch pośredników.',
      },
      {
        title: 'Kontrola na każdym etapie',
        body: 'Każdy etap produkcji jest kontrolowany — od wyboru surowca przez przetarcie, suszenie i sortowanie do pakowania i dostawy. Każda partia jest sprawdzana względem pisemnej specyfikacji, zanim opuści zakład.',
      },
      {
        title: 'Gotowość eksportowa zgodna z wymogami UE',
        body: 'Wszystkie produkty przechodzą kontrolę jakości, spełniają wymagania europejskie i są przygotowane do eksportu: posortowane według klasy, spięte, oznakowane i udokumentowane, aby odprawa i rozładunek przebiegły bez niespodzianek.',
      },
    ],
    tags: ['Własna produkcja', 'Pisemne specyfikacje', 'Dokumenty eksportowe'],
  },

  catalog: {
    eyebrow: 'Katalog produktów',
    title: 'Trzy linie produktowe, jeden standard',
    lead: 'Deski dębowe obrzynane to nasz główny kierunek. Obok nich dostarczamy drewno konstrukcyjne sosnowe i deskę parkietową z litego dębu — wszystko produkujemy, sortujemy i pakujemy sami.',
    action: 'Zapytaj o pełny cennik',
    footnote:
      'Niestandardowe przekroje, długości i mieszanki klas wykonujemy na zamówienie — prześlij specyfikację, potwierdzimy możliwość i cenę.',
    cardLabels: {
      woodType: 'Gatunek',
      sizes: 'Dostępne wymiary',
      grade: 'Klasa',
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
    lead: 'Odkąd obowiązuje rozporządzenie UE w sprawie wylesiania, importer nie może wprowadzić drewna na rynek UE bez danych o pochodzeniu na poziomie działki i oświadczenia o due diligence. Ten pakiet przygotowujemy razem z dostawą, a nie po zapytaniu.',
    eudr: {
      badge: 'EUDR',
      title: 'Co otrzymujesz z każdą dostawą',
      body: 'Rozporządzenie (UE) 2023/1115 nakłada na importera obowiązek udowodnienia, że drewno nie jest powiązane z wylesianiem i zostało pozyskane legalnie. Te dowody musi dostarczyć dostawca, dlatego zbieramy je jako część zamówienia, a nie jako formalności na końcu.',
      points: [
        'Współrzędne geolokalizacyjne działek pozyskania dla danej partii',
        'Gatunek, objętość i kraj pozyskania dla każdego pakietu, zgodnie z listą pakową',
        'Dowód legalności pozyskania, możliwy do prześledzenia od kłody do pakietu',
        'Numer oświadczenia DDS do zgłoszenia w systemie EU TRACES',
      ],
      note: 'Prześlij specyfikację i kierunek — potwierdzimy dokładny zestaw dokumentów dla Twojej trasy importu jeszcze przed zamówieniem.',
    },
    documentsTitle: 'Zestaw dokumentów eksportowych',
    documents: [
      {
        icon: 'shield',
        title: 'Świadectwo fitosanitarne',
        body: 'Wydawane przez państwową inspekcję fitosanitarną dla każdej dostawy tarcicy opuszczającej Ukrainę.',
        status: 'Do każdej dostawy',
      },
      {
        icon: 'box',
        title: 'ISPM-15, obróbka termiczna',
        body: 'Oznakowanie opakowań drewnianych, przekładek i palet zabezpieczających ładunek.',
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
        body: 'Objętość, przekrój i klasa dla każdego pakietu, zgodnie z oznaczeniem na spinaczach, aby przyjęcie towaru mogło sprawdzić dostawę względem faktury.',
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
    title: 'Pięć kontrolowanych etapów, od kłody do załadunku',
    lead: 'Kontrolujemy każdy etap produkcji — od wyboru surowca do pakowania i dostawy. Na każdym etapie jest określona kontrola, zanim materiał pójdzie dalej.',
    steps: [
      {
        icon: 'oak',
        title: 'Wybór surowca',
        body: 'Kłody dobieramy według gatunku, średnicy i zdrowotności jeszcze przed trakiem. Materiał z wadami rdzenia, uszkodzeniami przez owady lub zaparzeniem odrzucamy na przyjęciu — tam usunięcie wady jest najtańsze.',
      },
      {
        icon: 'factory',
        title: 'Przetarcie i produkcja',
        body: 'Deski obrzynane cięte są w stałych przekrojach — grubość 30 mm, szerokość od 80 do 230 mm — z czystymi, równoległymi krawędziami i prostopadle uciętymi końcami. Przekroje sosnowe wykonujemy pod wymiary konkretnego projektu.',
      },
      {
        icon: 'shield',
        title: 'Suszenie i kontrola jakości',
        body: 'Deski układamy do kontrolowanego suszenia, a następnie sortujemy sztuka po sztuce według pisemnej specyfikacji: wielkość i rodzaj sęków, biel, wrośnięta kora, pęknięcia. Rdzeń, uszkodzenia przez owady, zaparzenie i pęknięcia czołowe nie są dopuszczalne w żadnej klasie.',
      },
      {
        icon: 'box',
        title: 'Pakowanie',
        body: 'Każdą klasę pakujemy oddzielnie w jednolite pakiety: spięte, z ochroną krawędzi i oznaczeniem wymiaru, klasy i objętości, aby magazyn odbiorcy sprawdził dostawę w kilka minut.',
      },
      {
        icon: 'truck',
        title: 'Eksport i dostawa',
        body: 'Ładujemy naczepy i kontenery z pełnym zestawem dokumentów eksportowych i informujemy o statusie od wysyłki do rozładunku w każdym miejscu Europy.',
      },
    ],
    callout: {
      title: 'Pisemne specyfikacje, nie obietnice ustne',
      body: 'Nasze zasady klasyfikacji dębu określają dokładnie, co dopuszcza każda klasa — wielkość i rodzaj sęków, biel, wrośnięta kora — oraz co nie jest dopuszczalne nigdy: rdzeń, zaparzenie, uszkodzenia przez owady, mikropęknięcia, pęknięcia czołowe i podwójny biel.',
      action: 'Zasady klasyfikacji',
    },
    capacityTitle: 'Moce produkcyjne',
    capacityLead:
      'Liczby, które warto sprawdzić, zanim zaplanujesz sezon produkcji u jednego dostawcy.',
    // TO CONFIRM — dane musi podać produkcja przed uruchomieniem.
    capacity: [
      {
        value: 'TBC',
        unit: 'm³ / miesiąc',
        label: 'Produkcja tarcicy dębowej',
        detail: 'Deski obrzynane 30 mm we wszystkich pięciu standardowych przekrojach.',
      },
      {
        value: 'TBC',
        unit: 'm³ / zmianę',
        label: 'Wydajność traka',
        detail: 'Od przyjęcia kłody do deski obrzynanej z uciętymi końcami.',
      },
      {
        value: 'TBC',
        unit: 'komór',
        label: 'Moce suszarnicze',
        detail: 'Liczba pracujących komór suszarniczych i objętość załadunku.',
      },
      {
        value: 'TBC',
        unit: 'm³ / załadunek',
        label: 'Wsad komory',
        detail: 'Objętość suszona w jednym cyklu — wyznacza wielkość partii o jednej wilgotności.',
      },
      {
        value: '5',
        unit: 'przekrojów',
        label: 'Standardowe przekroje dębu',
        detail: 'Szerokości 80, 115, 150, 170 i 230 mm — w stałej rotacji, nie na zamówienie.',
      },
      {
        value: '4',
        unit: 'klasy',
        label: 'Klasy jakości',
        detail: 'Klasy I–IV, ocena sztuka po sztuce według pisemnej specyfikacji.',
      },
    ],
    capacityNote:
      'Każda sztuka jest sortowana według pisemnej specyfikacji przed pakowaniem, dlatego ponowne zamówienie tej samej klasy daje w Twoim zakładzie tę samą wydajność.',
  },

  advantages: {
    eyebrow: 'Nasze atuty',
    title: 'Dlaczego europejscy nabywcy pracują z nami',
    lead: 'Wszystko poniżej to zobowiązania, z których jesteśmy rozliczani: jakość, wolumen, logistyka i cena.',
    items: [
      {
        icon: 'oak',
        title: 'Drewno o wolnym przyroście',
        body: 'Wolno rosnący ukraiński dąb i sosna o gęstej, równej strukturze — surowiec, który daje wytrzymałość i trwałość, za które nas wybierają.',
      },
      {
        icon: 'shield',
        title: 'Europejskie standardy jakości',
        body: 'Produkty wytwarzane są zgodnie z aktualnymi standardami jakości i wymaganiami rynków międzynarodowych oraz sortowane według udokumentowanej specyfikacji z określonymi tolerancjami.',
      },
      {
        icon: 'stack',
        title: 'Produkcja w dużych wolumenach',
        body: 'Stabilne duże wolumeny z powtarzalnym sortowaniem — możesz zaplanować sezon produkcji u nas, zamiast szukać przypadkowych partii.',
      },
      {
        icon: 'truck',
        title: 'Niezawodna logistyka',
        body: 'Terminowa dostawa w całej Europie naczepami lub kontenerami, z pakowaniem i dokumentami eksportowymi przygotowanymi przed wysyłką.',
      },
      {
        icon: 'tag',
        title: 'Konkurencyjne ceny',
        body: 'Ceny bezpośrednio od producenta z przejrzystym cennikiem według klas — bez marży pośrednika między tartakiem a Twoim magazynem.',
      },
      {
        icon: 'partners',
        title: 'Indywidualne podejście',
        body: 'Wymiary, klasy i pakowanie pod Twoją specyfikację. Stawiamy na długoterminowe partnerstwo i każde zamówienie traktujemy jako jego część.',
      },
    ],
  },

  gallery: {
    eyebrow: 'Galeria',
    title: 'Nasze drewno w stanie, w jakim jedzie do Ciebie',
    lead: 'Deski według klas, przekroje sosnowe na placu i dwanaście odcieni parkietu — zdjęcia z naszego placu i hali, a nie z banku zdjęć.',
    filterLabel: 'Filtruj galerię według kategorii',
    filters: {
      all: 'Wszystkie zdjęcia',
      oak: 'Deski dębowe',
      pine: 'Drewno sosnowe',
      parquet: 'Parkiet',
    },
    count: '{shown} z {total} zdjęć',
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
        body: 'Stabilne duże wolumeny z własnej produkcji, z uzgodnionymi wolumenami miesięcznymi dla klientów kontraktowych.',
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
    // TO CONFIRM — orientacyjna lista kierunków
    markets: [
      'Polska',
      'Niemcy',
      'Czechy',
      'Słowacja',
      'Austria',
      'Węgry',
      'Rumunia',
      'Włochy',
      'Holandia',
      'Belgia',
      'Francja',
      'Hiszpania',
      'Litwa',
      'Łotwa',
      'Estonia',
      'Dania',
    ],
    loadsTitle: 'Co wchodzi w jeden załadunek',
    loadsLead:
      'Fracht liczony jest od załadunku, a nie od metra sześciennego, więc najtańsze zamówienie to zwykle pełne.',
    loads: [
      {
        value: '22–24',
        unit: 'm³',
        label: 'Pełna naczepa',
        detail: 'Standardowa firanka 13,6 m ze spiętych pakietów — typowa dostawa drogowa w UE.',
      },
      {
        value: '25–28',
        unit: 'm³',
        label: 'Kontener 40 stóp',
        detail: 'Do dalszego frachtu morskiego lub kierunków poza zasięgiem transportu drogowego.',
      },
      {
        // TO CONFIRM — decyzja handlowa, nie pomiar.
        value: 'TBC',
        unit: 'm³',
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
    casesLead: 'Bez nazw klientów, ale prawdziwe: przekroje, wolumeny i trasy, które realnie ładujemy.',
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
    eyebrow: 'Pytania nabywców',
    title: 'Klasy, wolumeny, dokumenty i dostawa',
    lead: 'Odpowiedzi, których udzielamy przez telefon — na piśmie. Jeśli czegoś brakuje, zapytaj, dodamy.',
    items: [
      {
        question: 'Czym różnią się klasy I–IV?',
        answer:
          'Klasa wynika z tego, co deska może pokazywać, a granice są zapisane na piśmie. Klasa I dopuszcza sęki zdrowe do 3–5 mm i nic więcej; klasa II dodaje sęki zdrowe do 25–35 mm, sęki czarne do 15–25 mm i biel do 20–25 mm; klasa III rozszerza to do sęków zdrowych 35 mm na wąskich przekrojach i 70 mm przy szerokości 230 mm, plus wrośnięta kora; klasa IV, produkowana przy 230 mm, dopuszcza sęki zdrowe do 120 mm. Rdzeń, zaparzenie, uszkodzenia przez owady, mikropęknięcia, pęknięcia czołowe i podwójny biel nie są dopuszczalne w żadnej klasie.',
      },
      {
        question: 'Jakie przekroje i długości produkujecie?',
        answer:
          'Deski dębowe obrzynane cięte są przy stałej grubości 30 mm w pięciu szerokościach — 80, 115, 150, 170 i 230 mm — ze stałymi długościami dla każdego przekroju w zakresie 320–2 450 mm. Drewno konstrukcyjne sosnowe cięte jest według Twojej listy przekrojów, a nie stałego katalogu.',
      },
      {
        question: 'Czy wykonujecie niestandardowe przekroje lub mieszanki klas?',
        answer:
          'Tak. Niestandardowe przekroje, długości i mieszanki klas wykonujemy na zamówienie — prześlij specyfikację, a potwierdzimy możliwość i cenę, zanim się zobowiążesz.',
      },
      {
        question: 'Jaką wilgotność dostarczacie?',
        answer:
          'Suszenie komorowe lub na powietrzu, określane dla każdego zamówienia. Podaj docelową wilgotność i tolerancję, w której pracujesz — potwierdzimy ją w ofercie, ponieważ tryb suszenia wpływa i na cenę, i na wielkość partii, którą możemy utrzymać w jednej specyfikacji.',
      },
      {
        question: 'Czy dostarczacie dane geolokalizacyjne EUDR i numer DDS?',
        answer:
          'Tak. Z każdą dostawą przekazujemy współrzędne działek pozyskania, gatunek, objętość i kraj pozyskania dla pakietów, dowód legalności pozyskania oraz numer oświadczenia DDS potrzebny do zgłoszenia w UE. Ustal z nami trasę importu, a podamy dokładny zestaw dokumentów przed zamówieniem.',
      },
      {
        question: 'Z jakimi warunkami Incoterms pracujecie?',
        answer:
          'EXW, FCA, CPT i DAP. DAP zwykle wybierają nabywcy z UE, którzy chcą otrzymać towar na swoim placu bez organizowania frachtu; FCA pasuje tym, którzy mają własnego przewoźnika.',
      },
      {
        question: 'Jak drewno jest pakowane i oznaczane?',
        answer:
          'Każda klasa jest pakowana oddzielnie w jednolite, spięte pakiety z ochroną krawędzi, oznaczone przekrojem, klasą i objętością, i tak samo ujęte na liście pakowej — dzięki temu przyjęcie towaru sprawdza dostawę względem faktury w kilka minut, zamiast przekładać ją od nowa.',
      },
      {
        question: 'Jak ustalane są ceny i jak długo obowiązują?',
        answer:
          'Za metr sześcienny, według przekroju i klasy — nasz opublikowany cennik dębu zaczyna się od 700 €/m³ za klasę mieszaną 80 × 30 mm i sięga 2 650 €/m³ za klasę I przy 230 mm. Ostateczna kwota zależy od wolumenu, trybu suszenia i warunków dostawy i jest potwierdzana dla partii w ofercie.',
      },
      {
        question: 'Czy wysyłacie próbki przed zamówieniem?',
        answer:
          'Tak. Dla parkietu wysyłamy próbki odcieni przed potwierdzeniem zamówienia, a dla tarcicy możemy wysłać posortowane próbki desek, abyś porównał nasze sortowanie z własnym standardem przed zamówieniem załadunku.',
      },
      {
        question: 'W jakich językach pracujecie?',
        answer:
          'Polski, angielski, niemiecki i ukraiński — zarówno w korespondencji, jak i w dokumentach.',
      },
      {
        question: 'Jakie jest minimalne zamówienie?',
        // TO CONFIRM — decyzja handlowa. Ukryte do udzielenia odpowiedzi.
        answer: 'TBC',
      },
      {
        question: 'Jaki jest czas dostawy do Niemiec lub Polski?',
        // TO CONFIRM — zob. exportSection.leadTimes. Ukryte do udzielenia odpowiedzi.
        answer: 'TBC',
      },
    ],
  },

  contact: {
    eyebrow: 'Zapytanie o wycenę',
    title: 'Powiedz, czego potrzebujesz',
    lead: 'Prześlij przekroje, klasy i wolumeny. Jeśli jeszcze nie wiesz — opisz zastosowanie, a my zaproponujemy najbardziej ekonomiczną specyfikację.',
    labels: {
      email: 'E-mail',
      phone: 'Telefon',
      production: 'Produkcja i eksport',
      hours: 'Godziny pracy',
      languages: 'Mówimy',
    },
    values: {
      address: 'Obwód kijowski, Ukraina',
      hours: 'Pn–Pt, 08:00–18:00 (EET)',
      languages: 'polski, angielski, niemiecki, ukraiński',
    },
    noteBefore: 'Wolisz e-mail? Napisz bezpośrednio na ',
    noteAfter: ' i dołącz specyfikację — odpowiadamy po polsku, angielsku lub niemiecku.',
  },

  form: {
    name: 'Imię i nazwisko *',
    namePlaceholder: 'Jan Kowalski',
    company: 'Firma *',
    companyPlaceholder: 'Drewno Sp. z o.o.',
    country: 'Kraj',
    countryPlaceholder: 'Polska',
    email: 'E-mail *',
    emailPlaceholder: 'zakupy@firma.pl',
    phone: 'Telefon',
    phonePlaceholder: '+48 000 000 000',
    product: 'Produkt',
    productPlaceholder: 'Wybierz produkt…',
    productMixed: 'Kilka pozycji / mix',
    grade: 'Klasa',
    gradeAny: 'Dowolna / doradźcie',
    dimensions: 'Wymiary (gr. × szer. × dł.)',
    dimensionsPlaceholder: '30 × 230 × 2 050 mm',
    volume: 'Wolumen na miesiąc',
    volumePlaceholder: 'np. 40 m³',
    moisture: 'Wilgotność',
    moistureOptions: {
      any: 'Dowolna / doradźcie',
      kd: 'Suszona komorowo (KD)',
      ad: 'Suszona na powietrzu (AD)',
      fresh: 'Świeżo tarta',
    },
    destination: 'Kierunek dostawy',
    destinationPlaceholder: 'Miasto lub port, np. Hamburg',
    incoterms: 'Warunki dostawy',
    incotermsAny: 'Jeszcze nieustalone',
    message: 'Wiadomość *',
    messagePlaceholder: 'Co jeszcze wpływa na wycenę — tolerancje, pakowanie, harmonogram…',
    submit: 'Wyślij zapytanie',
    sending: 'Wysyłanie…',
    required: 'Pola oznaczone * są obowiązkowe.',
    privacy: 'Twoich danych używamy wyłącznie do odpowiedzi na to zapytanie.',
    errors: {
      name: 'Podaj proszę swoje imię i nazwisko.',
      company: 'Nazwa firmy pomoże nam dokładniej wycenić.',
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
      product: 'Produkt',
      grade: 'Klasa',
      dimensions: 'Wymiary',
      volume: 'Wolumen / miesiąc',
      moisture: 'Wilgotność',
      destination: 'Kierunek',
      incoterms: 'Warunki dostawy',
      notSpecified: 'Nie podano',
    },
  },

  productPage: {
    aboutTitle: 'O tym produkcie',
    specsEyebrow: 'Dane techniczne',
    specsTitle: 'Specyfikacja',
    specsLead:
      'Potwierdzana dla zamówienia — prześlij wymagania, a dokładne wartości zapiszemy w ofercie.',
    pricesEyebrow: 'Cennik',
    pricesTitle: 'Ceny według przekroju i klasy',
    pricesLead:
      'Nasz opublikowany cennik. Przekroje są stałe; długości w ramach każdego przekroju dostępne według wykazu.',
    gradesEyebrow: 'Klasyfikacja',
    gradesTitle: 'Co dopuszcza każda klasa',
    gradesLead:
      'Wprost z naszej pisemnej specyfikacji dla obrzynanej tarcicy dębowej. Tolerancje różnią się dla wąskich i szerokich przekrojów.',
    finishesEyebrow: 'Odcienie',
    finishesTitle: 'Dwanaście odcieni produkcyjnych',
    finishesLead:
      'Każdy odcień nakładamy na tę samą dębową lamelę chevron, więc w ramach projektu można łączyć tony bez zmiany dostawcy i formatu.',
    inquiryEyebrow: 'Zapytanie',
    inquiryTitle: 'Zapytanie o wycenę: {product}',
    inquiryLead:
      'Podaj potrzebne przekroje, klasy i wolumen. Odpowiadamy z dostępnością, ceną i czasem dostawy dla Twojego kierunku.',
    relatedEyebrow: 'Produkujemy również',
    relatedTitle: 'Inne linie produktowe',
    priceInformation: 'Informacja o cenie',
    seePriceList: 'Zobacz cennik',
    permitted: 'Dopuszczalne',
    notPermitted: 'Niedopuszczalne w żadnej klasie',
    availableLengths: 'Dostępne długości',
    priceColumn: 'Cena',
    gradeColumn: 'Klasa',
    gradeLabel: 'Klasa {code}',
    mixedGrade: 'Klasa mieszana',
    priceFootnote:
      'Ceny podane są za metr sześcienny i mają charakter orientacyjny: ostateczna kwota zależy od wolumenu, trybu suszenia i warunków dostawy i jest potwierdzana dla partii w ofercie handlowej.',
  },

  footer: {
    products: 'Produkty',
    company: 'Firma',
    exportOffice: 'Dział eksportu',
    claim: 'Tarcica z Ukrainy na rynek europejski.',
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
    'oak-edged-boards': {
      name: 'Deski dębowe obrzynane',
      kicker: 'Produkt główny',
      category: 'Tarcica obrzynana',
      species: 'Dąb europejski (Quercus robur)',
      tagline: 'Klasyfikowana tarcica dębowa w pięciu stałych przekrojach, cena według klasy.',
      shortDescription:
        'Nasz główny kierunek: deski dębowe obrzynane, znane z wytrzymałości, trwałości i naturalnego wyglądu — klasyfikowane od I do IV według pisemnej specyfikacji.',
      description: [
        'Deski dębowe obrzynane to podstawa naszej produkcji. Każda deska cięta jest przy stałej grubości 30 mm w jednej z pięciu szerokości — 80, 115, 150, 170 lub 230 mm — z równoległymi krawędziami, prostopadle uciętymi końcami i określonym zakresem długości dla każdego przekroju.',
        'Klasyfikacja nie jest kwestią opinii. Każda sztuka oceniana jest względem pisemnych tolerancji dla sęków zdrowych i czarnych, bieli, wrośniętej kory i pęknięć, a granice różnią się dla przekrojów wąskich (150/170 mm) i szerokich (230 mm). Rdzeń, uszkodzenia przez owady, zaparzenie, mikropęknięcia, pęknięcia czołowe i podwójny biel nie są dopuszczalne w żadnej klasie.',
        'Efektem jest produkt, który można kupować wielokrotnie z pewnością: ta sama klasa daje w Twoim zakładzie tę samą wydajność, partia po partii.',
      ],
      keyFacts: [
        { label: 'Grubość', value: '30 mm' },
        { label: 'Szerokości', value: '80 / 115 / 150 / 170 / 230 mm' },
        { label: 'Długości', value: '320 – 2 450 mm' },
        { label: 'Klasy', value: 'I, II, III, IV' },
      ],
      priceNote: 'Od 700 €/m³ (80 × 30 mm, klasa mieszana). Klasa I w 230 mm od 2 650 €/m³.',
      sizesSummary: '30 × 80–230 mm, długości 320–2 450 mm',
      gradesSummary: 'Klasy I–IV oraz pakiety klasy mieszanej',
      advantages: [
        'Pięć stałych przekrojów w ciągłej rotacji — powtórne zamówienia przychodzą identyczne',
        'Tolerancje klas udokumentowane na piśmie, a nie ustalane telefonicznie',
        'Cennik według klas, płacisz tylko za jakość, której potrzebujesz',
        'Pakowane i oznaczone według klas dla szybkiego przyjęcia towaru',
      ],
      specs: [
        {
          group: 'Materiał',
          items: [
            { label: 'Gatunek', value: 'Dąb europejski (Quercus robur)' },
            { label: 'Rodzaj produktu', value: 'Tarcica obrzynana, strugana na życzenie' },
            { label: 'Pochodzenie', value: 'Ukraina' },
            { label: 'Klasyfikacja', value: 'Klasy I–IV według specyfikacji zakładowej' },
          ],
        },
        {
          group: 'Wymiary',
          items: [
            { label: 'Grubość', value: '30 mm' },
            { label: 'Szerokości', value: '80, 115, 150, 170, 230 mm' },
            { label: 'Zakres długości', value: '320 – 2 450 mm, stałe długości dla przekroju' },
            { label: 'Krawędzie / końce', value: 'Obrzynane dwustronnie, końce ucięte prostopadle' },
          ],
        },
        {
          group: 'Dostawa',
          items: [
            // TO CONFIRM — tryb suszenia
            { label: 'Wilgotność', value: 'Suszona komorowo lub na powietrzu — podać w zapytaniu' },
            { label: 'Pakowanie', value: 'Spięte pakiety, sortowane według przekroju i klasy' },
            { label: 'Oznaczenie', value: 'Przekrój, klasa i objętość na pakiecie' },
            { label: 'Warunki', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
      gradeBands: [
        {
          widths: 'Szerokości 150 i 170 mm',
          grades: [
            { code: 'I', name: 'Klasa I', allowances: ['Sęki zdrowe do 3–5 mm'] },
            {
              code: 'II',
              name: 'Klasa II',
              allowances: [
                'Sęki zdrowe do 25 mm',
                'Sęki czarne do 15 mm, nie bliżej niż 10 mm od krawędzi',
                'Biel 20 mm, bez przejścia na jedną stronę',
              ],
            },
            {
              code: 'III',
              name: 'Klasa III',
              allowances: [
                'Sęki zdrowe do 35 mm',
                'Sęki czarne do 25 mm, nie bliżej niż 10 mm od krawędzi',
                'Wrośnięta kora do 3 × 50 mm',
                'Biel 35 mm na jednej stronie, 10 mm z przejściem na drugiej',
              ],
            },
          ],
        },
        {
          widths: 'Szerokość 230 mm',
          grades: [
            { code: 'I', name: 'Klasa I', allowances: ['Sęki zdrowe do 5 mm'] },
            {
              code: 'II',
              name: 'Klasa II',
              allowances: [
                'Sęki zdrowe 30–35 mm',
                'Sęki czarne do 25 mm, nie bliżej niż 10 mm od krawędzi',
                'Biel 25 mm, bez przejścia na jedną stronę',
                'Wrośnięta kora do 50 mm',
              ],
            },
            {
              code: 'III',
              name: 'Klasa III',
              allowances: [
                'Sęki zdrowe do 70 mm',
                'Sęki czarne do 40 mm, nie bliżej niż 10 mm od krawędzi',
                'Wrośnięta kora do 3 × 80 mm',
                'Biel 10 mm na stronie licowej, 30 mm na odwrotnej',
              ],
            },
            {
              code: 'IV',
              name: 'Klasa IV',
              allowances: [
                'Sęki zdrowe do 120 mm, nie bliżej niż 10 mm od krawędzi',
                'Wrośnięta kora do 5 × 100 mm',
                'Biel 20 mm na stronie licowej, bez ograniczeń na odwrotnej',
              ],
            },
          ],
        },
      ],
      notPermitted: [
        'Rdzeń',
        'Zaparzenie',
        'Uszkodzenia przez owady',
        'Mikropęknięcia',
        'Pęknięcia czołowe',
        'Podwójny biel',
      ],
    },

    'pine-construction-timber': {
      name: 'Drewno konstrukcyjne sosnowe',
      kicker: 'Duże wolumeny',
      category: 'Drewno konstrukcyjne',
      species: 'Sosna zwyczajna (Pinus sylvestris)',
      tagline: 'Deski, łaty i belki do budownictwa mieszkaniowego, komercyjnego i przemysłowego.',
      shortDescription:
        'Sosnowe materiały budowlane do budownictwa mieszkaniowego, komercyjnego i przemysłowego — cięte pod Twoje przekroje i dostarczane w dużych, powtarzalnych wolumenach.',
      description: [
        'Dostarczamy drewno sosnowe do budowy i wykończeń: deski obrzynane, łaty, krokwie i belki. Przekroje wykonujemy według Twojej specyfikacji, a nie wtłaczamy w stały katalog, co czyni sosnę naszą najbardziej elastyczną linią produktową.',
        'Sosna pracuje solidnie i zachowuje się przewidywalnie: jest lekka, łatwa do mocowania i cięcia na budowie, a po wysuszeniu stabilna. To naturalny wybór do konstrukcji szkieletowych, szalunków, dachów, stropów, opakowań i wykończeń wnętrz.',
        'Ponieważ sosna idzie w wolumenach, tu widać skalę naszej produkcji. Wiązki są jednolicie spinane i cięte na stałe długości, aby naczepa ładowała się w pełni — co obniża koszt frachtu na metr sześcienny.',
      ],
      keyFacts: [
        { label: 'Produkty', value: 'Deski, łaty, belki' },
        { label: 'Przekroje', value: 'Według specyfikacji' },
        { label: 'Długości', value: 'Do 6 000 mm' }, // TO CONFIRM
        { label: 'Dostawa', value: 'Pełne naczepy' },
      ],
      priceNote: 'Cena na zapytanie — wycena za metr sześcienny na podstawie Twojej listy przekrojów.',
      sizesSummary: 'Przekroje i długości na zamówienie',
      gradesSummary: 'Jakość konstrukcyjna, sortowanie na zapytanie',
      advantages: [
        'Przekroje cięte według Twojego rysunku, a nie stałego katalogu',
        'Stabilne duże wolumeny dla wieloetapowych projektów budowlanych',
        'Jednolite wiązki, które efektywnie się ładują i szybko rozładowują',
        'Odpowiednie do konstrukcji, szalunków, opakowań i wykończeń wnętrz',
      ],
      specs: [
        {
          group: 'Materiał',
          items: [
            { label: 'Gatunek', value: 'Sosna zwyczajna (Pinus sylvestris)' },
            { label: 'Rodzaj produktu', value: 'Deski obrzynane, łaty, belki' },
            { label: 'Pochodzenie', value: 'Ukraina' },
            {
              label: 'Zastosowania',
              value: 'Szkielet, dach, szalunki, wykończenia, opakowania',
            },
          ],
        },
        {
          // TO CONFIRM — zakresy orientacyjne, potwierdzić z produkcją
          group: 'Wymiary',
          items: [
            { label: 'Grubość deski', value: '25 – 50 mm' },
            { label: 'Szerokość deski', value: '100 – 200 mm' },
            { label: 'Przekroje belek', value: 'Od 50 × 50 do 150 × 150 mm' },
            { label: 'Długości', value: '3 000 – 6 000 mm' },
          ],
        },
        {
          group: 'Dostawa',
          items: [
            { label: 'Wilgotność', value: 'Świeżo tarta lub suszona — podać w zapytaniu' },
            { label: 'Pakowanie', value: 'Spięte wiązki, z ochroną krawędzi' },
            { label: 'Załadunek', value: 'Pełna naczepa lub kontener 40 stóp' },
            { label: 'Warunki', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
      gradeBands: [],
      notPermitted: [],
    },

    'oak-parquet-boards': {
      name: 'Deska parkietowa z drewna litego',
      kicker: '12 odcieni',
      category: 'Podłogi',
      species: 'Dąb europejski',
      tagline: 'Parkiet dębowy chevron, który łączy elegancki wygląd z długą żywotnością.',
      shortDescription:
        'Deska parkietowa z drewna litego łącząca elegancki wygląd, niezawodność i długą żywotność — dąb w formacie chevron w dwunastu odcieniach.',
      description: [
        'Nasz parkiet powstaje z tego samego dębu, który sami przecieramy i sortujemy, frezowanego w formacie chevron, aby gotowa podłoga czytała się jako jeden ciągły wzór, a nie pole osobnych desek.',
        'Produkujemy dwanaście odcieni: od bielonego i greige przez naturalny dąb i miodowy do orzecha, czekolady i ciemnego espresso. Ta sama lamela obsłuży więc jasne wnętrze skandynawskie i ciemne, formalne — bez zmiany dostawcy.',
        'W parkiecie dąb pokazuje, skąd ma swoją reputację: odporny na ruch, naprawialny, a nie jednorazowy, i po dekadzie wyglądający lepiej niż wiele podłóg pierwszego dnia.',
      ],
      keyFacts: [
        { label: 'Wzór', value: 'Chevron' },
        { label: 'Gatunek', value: 'Dąb europejski' },
        { label: 'Odcienie', value: '12 odcieni standardowych' },
        { label: 'Format', value: 'Według specyfikacji' },
      ],
      priceNote: 'Cena na zapytanie — wycena za metr kwadratowy według odcienia i formatu.',
      sizesSummary: 'Format chevron, wymiary według specyfikacji',
      gradesSummary: 'Klasy select i rustykalna, 12 odcieni',
      advantages: [
        'Dwanaście odcieni produkcyjnych od bielonego do ciemnego espresso',
        'Format chevron frezowany pod ciasne, powtarzalne styki',
        'Z naszego własnego sortowanego dębu — jeden dostawca od kłody do podłogi',
        'Odporny i naprawialny, zaprojektowany na długą żywotność',
      ],
      specs: [
        {
          group: 'Materiał',
          items: [
            { label: 'Gatunek', value: 'Dąb europejski' },
            { label: 'Wzór', value: 'Chevron (jodła francuska)' },
            { label: 'Odcienie', value: '12 odcieni standardowych, inne na zapytanie' },
            { label: 'Pochodzenie', value: 'Ukraina' },
          ],
        },
        {
          // TO CONFIRM — konstrukcja, grubość i warstwa użytkowa
          group: 'Format',
          items: [
            { label: 'Konstrukcja', value: 'Lita lub warstwowa — podać w zapytaniu' },
            { label: 'Grubość', value: 'Według specyfikacji' },
            { label: 'Szerokość / długość', value: 'Według specyfikacji' },
            { label: 'Powierzchnia', value: 'Olejowana lub lakierowana, szczotkowana na życzenie' },
          ],
        },
        {
          group: 'Dostawa',
          items: [
            { label: 'Pakowanie', value: 'Kartony na paletach, foliowane' },
            { label: 'Jednostka sprzedaży', value: 'Metr kwadratowy' },
            { label: 'Próbki', value: 'Próbki odcieni przed potwierdzeniem zamówienia' },
            { label: 'Warunki', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
      gradeBands: [],
      notPermitted: [],
    },
  },

  photos: {
    oakGradeA: {
      alt: 'Deski dębowe obrzynane klasy I o czystej, równej strukturze',
      caption: 'Deski dębowe obrzynane — klasa I',
    },
    oakGradeB: {
      alt: 'Deski dębowe obrzynane klasy II z małymi zdrowymi sękami',
      caption: 'Deski dębowe obrzynane — klasa II',
    },
    oakGradeC: {
      alt: 'Deski dębowe obrzynane klasy III z sękami i bielą',
      caption: 'Deski dębowe obrzynane — klasa III',
    },
    oakEdge: {
      alt: 'Detal krawędzi struganej deski dębowej o grubości 30 mm',
      caption: 'Detal krawędzi — dąb 30 mm',
    },
    machined: {
      alt: 'Obrobione deski dębowe i sosnowe ułożone przed pakowaniem',
      caption: 'Obrobione deski przed pakowaniem',
    },
    pinePacks: {
      alt: 'Spięte pakiety desek sosnowych ułożone na placu',
      caption: 'Pakiety desek sosnowych, gotowe do załadunku',
    },
    pineBundles: {
      alt: 'Łaty i deski sosnowe powiązane na eksport',
      caption: 'Powiązane przekroje sosnowe',
    },
    pineBeams: {
      alt: 'Belki i deski sosnowe ułożone w tartaku',
      caption: 'Belki sosnowe',
    },
    pineYard: {
      alt: 'Duże stosy drewna sosnowego na placu eksportowym',
      caption: 'Zapas na placu — drewno sosnowe',
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
