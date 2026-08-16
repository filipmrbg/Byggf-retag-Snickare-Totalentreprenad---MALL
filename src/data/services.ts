export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'smahusbyggnation',
    title: 'Småhusbyggnation',
    shortDescription: 'Vi bygger kundanpassade småhus, villor och fritidshus från grund till nyckelfärdigt hem med högsta precision och yrkesstolthet.',
    heroText: 'Förverkliga ditt drömboende. Professionell småhusbyggnation i Uppland med omnejd med trygghet och kvalitet i varje moment.',
    detailedDescription: `Att bygga ett nytt småhus är ett av livets största och mest spännande projekt. Hos JH Huskvalitet AB hjälper vi dig att förverkliga ditt drömboende, oavsett om det gäller en modern villa, ett klassiskt trähus eller ett funktionellt fritidshus.

Vi hanterar hela byggprocessen med noggrannhet och struktur. Från markförberedelser och grundläggning till stomresning, isolering, fasad och inredningssnickeri. Med vår breda kompetens och kvalitetsmedvetenhet kan du känna dig helt trygg genom hela bygget.`,
    heroImage: '/service-smahusbyggnation.webp',
    image: '/service-smahusbyggnation.webp',
    href: '/tjanster#smahusbyggnation',
    tag: 'Nybyggnation',
    badge: 'Kundanpassat',
    highlights: [
      'Kundanpassad arkitektur och smarta planlösningar',
      'Erfarna snickare och certifierade hantverkare',
      'Energieffektiva och hållbara materialval',
      'Tydlig tidsplan och fasta avtal',
    ],
    sections: [
      {
        heading: 'Från första idé till nyckelfärdigt hus',
        text: 'Ett framgångsrikt husbygge börjar med noggrann planering och tydlig kommunikation. Vi anpassar byggprocessen efter dina unika behov, tomtens förutsättningar och gällande byggregler.',
        bullets: [
          'Projektering och bygglov: Stöd och rådgivning inför byggstart',
          'Grundläggning och stomme: Gediget hantverk med lång hållbarhet',
          'Interiör och finish: Omsorgsfullt snickeri och moderna installationer',
          'Slutbesiktning: Trygg överlämning av ditt nya hem',
        ],
      },
      {
        heading: 'Hållbara material och energieffektiv konstruktion',
        text: 'Vi bygger för framtiden med moderna isoleringstekniker, hållbara träslag och energieffektiva fönster och dörrar. Det säkerställer låga driftkostnader och ett behagligt inomhusklimat året runt.',
      },
    ],
    faq: [
      {
        question: 'Hur lång tid tar det att bygga ett småhus?',
        answer: 'Tidsplanen varierar beroende på husets storlek och konstruktion, men vanligtvis tar byggnationen mellan 6 och 12 månader från godkänt bygglov till färdigställande.',
      },
      {
        question: 'Kan vi anpassa planlösningen efter våra egna önskemål?',
        answer: 'Ja, absolut! Vi arbetar nära dig för att skräddarsy planlösning, materialval och detaljer så att huset passar er livsstil perfekt.',
      },
    ],
  },
  {
    slug: 'renovering',
    title: 'Renovering',
    shortDescription: 'Varsamma och omfattande renoveringar av hus, lägenheter, kök och badrum som höjer standarden och trivseln i ditt hem.',
    heroText: 'Ge ditt hem nytt liv med professionell renovering i Uppland med omnejd. Hög kvalitet, hållbara material och omsorgsfullt hantverk.',
    detailedDescription: `Oavsett om du vill förnya en äldre fastighet, renovera köket, byta ytskikt eller genomföra en helrenovering av villan levererar vi lösningar med precision och finess.

Vi kombinerar moderna byggtekniker med respekt för husets ursprungliga karaktär. Vårt erfarna team ser till att renoveringen blir både funktionell, stilren och långsiktigt hållbar. Dessutom hjälper vi dig att nyttja ROT avdraget direkt på fakturan.`,
    heroImage: '/service-renovering.webp',
    image: '/service-renovering.webp',
    href: '/tjanster#renovering',
    tag: 'Invändigt & Utvändigt',
    badge: 'ROT avdrag',
    highlights: [
      'Totalrenovering och delrenovering av villor och lägenheter',
      'Kök, badrum och interiöra uppgraderingar',
      'Fasadrenovering, tak och fönsterbyten',
      'Möjlighet till ROT avdrag med 30% på arbetskostnaden',
    ],
    sections: [
      {
        heading: 'Skräddarsydd renovering med personligt engagemang',
        text: 'Vi lyssnar på dina idéer och presenterar smarta lösningar för material, färger och funktion. Vårt mål är att renoveringen ska ske smidigt med minimal påverkan på din vardag.',
        bullets: [
          'Köksrenovering: Montering av kök, bänkskivor och integrerade lösningar',
          'Badrumsrenovering: Tätskikt och kakling enligt gällande branschregler',
          'Golv och Ytskikt: Parkett, målning, lister och finsnickeri',
          'Fasad och Tak: Skyddande renovering som tål det nordiska klimatet',
        ],
      },
    ],
    faq: [
      {
        question: 'Hur fungerar ROT avdraget vid renovering?',
        answer: 'Som privatperson kan du dra av 30% av arbetskostnaden upp till 50 000 kr per person och år. Vi administrerar hela avdraget direkt mot Skatteverket på din faktura.',
      },
      {
        question: 'Kan man bo kvar i huset under renoveringstiden?',
        answer: 'I de flesta fall går det alldeles utmärkt. Vi planerar arbetet noggrant och håller arbetsytorna dammavskärmade och städade.',
      },
    ],
  },
  {
    slug: 'ombyggnation',
    title: 'Ombyggnation',
    shortDescription: 'Förändra planlösningen, öppna upp ytor eller expandera boendet med tillbyggnader, vinkelutbyggnader och taklyft.',
    heroText: 'Anpassa ditt boende efter nya behov. Vi utför ombyggnationer och tillbyggnader med precision och hållbarhet i Uppland.',
    detailedDescription: `När behoven förändras är en ombyggnation eller tillbyggnad det perfekta sättet att få mer yta och en bättre planlösning utan att behöva flytta.

JH Huskvalitet AB hanterar allt från att riva bärande väggar och öppna upp för öppna spisar till att bygga till extra sovrum, vinkelutbyggnader, takkupor och isolerade uterum. Vi ser till att den nya delen integreras harmoniskt med den befintliga byggnaden.`,
    heroImage: '/service-ombyggnation.webp',
    image: '/service-ombyggnation.webp',
    href: '/tjanster#ombyggnation',
    tag: 'Tillbyggnad & Ytor',
    badge: 'Flexibelt',
    highlights: [
      'Väggändringar och optimering av planlösning',
      'Tillbyggnader, uterum och taklyft',
      'Strukturella förstärkningar och avväxlingar',
      'Harmonisk integration med befintlig arkitektur',
    ],
    sections: [
      {
        heading: 'Fler kvadratmeter och smartare rumsflöden',
        text: 'En genomtänkt ombyggnation ökar inte bara livskvaliteten utan höjer även fastighetens marknadsvärde avsevärt. Vi ser till att alla bärande konstruktioner dimensioneras korrekt.',
        bullets: [
          'Tillbyggnad villa: Extra boyta, master bedroom eller större vardagsrum',
          'Uterum och Glaspartier: Förläng säsongen med isolerade partier',
          'Avväxling av bärande vägg: Skapa öppna, ljusa och moderna ytor',
          'Vindsombyggnad och Taklyft: Utnyttja husets dolda potential',
        ],
      },
    ],
    faq: [
      {
        question: 'Krävs det bygglov för en ombyggnation eller tillbyggnad?',
        answer: 'Tillbyggnader upp till 15 kvm (Attefall) kan ofta utföras med enbart anmälan till kommunen, medan större tillbyggnader eller fasadändringar oftast kräver bygglov. Vi hjälper dig med underlag och ritningar.',
      },
    ],
  },
  {
    slug: 'totalentreprenad',
    title: 'Totalentreprenad',
    shortDescription: 'En enda kontaktperson och ett samlat ansvar från idé, projektering och bygglov till nyckelfärdigt resultat.',
    heroText: 'Bekymmersfritt byggande med en helhetsansvarig partner. Vi leder och samordnar alla yrkesgrupper genom hela projektet.',
    detailedDescription: `Med totalentreprenad från JH Huskvalitet AB slipper du samordna olika entreprenörer och hantera krångliga överlämningar.

Vi tar helhetsansvaret för tidsplan, budget, underentreprenörer (el, VVS, måleri, plattsättning m.fl.) och slutbesiktning. Du får en trygg kontaktpunkt och full insyn i varje steg fram till godkänd slutbesiktning.`,
    heroImage: '/service-totalentreprenad.webp',
    image: '/service-totalentreprenad.webp',
    href: '/tjanster#totalentreprenad',
    tag: 'Helhetslösning',
    badge: '100% Trygghet',
    highlights: [
      'En ansvarig kontaktperson genom hela bygget',
      'Komplett samordning av snickare, elektriker, VVS och målare',
      'Tydlig budget, fasta avtal och garanterad tidsplan',
      'Full trygghet och ansvarsförsäkring',
    ],
    sections: [
      {
        heading: 'Tryggt, strukturerat och transparent',
        text: 'Totalentreprenad är den säkraste formen av byggprojekt för dig som beställare. Vi bär ansvaret för både projektering och utförande, vilket minimerar risker och säkerställer ett enhetligt resultat av högsta kvalitet.',
        bullets: [
          'Projektledning: Löpande avstämningar och full koll på tidsplan',
          'Kvalitetssäkrade yrkesgrupper: Certifierade elektriker och behöriga VVS montörer',
          'Dokumentation och Egenkontroller: Komplett underlag vid slutbesiktning',
          'Garanti och Försäkring: Fullt skydd för din investering',
        ],
      },
    ],
    faq: [
      {
        question: 'Vad är fördelen med totalentreprenad jämfört med delad entreprenad?',
        answer: 'Med totalentreprenad har du endast ett juridiskt och praktiskt avtal. Det eliminerar risken för att entreprenörer skyller på varandra vid förseningar eller fel, och sparar dig massor av tid och stress.',
      },
      {
        question: 'Hur håller ni koll på budgeten?',
        answer: 'Vi arbetar med tydliga och detaljerade offerter där alla moment specificeras i förväg. Eventuella ändringsarbeten stäms alltid av skriftligen innan de utförs.',
      },
    ],
  },
];

export default services;
