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
    slug: 'nybyggnation',
    title: 'Nybyggnation',
    shortDescription: 'Vi bygger kundanpassade villor, fritidshus och attefallshus från grundläggning till inflyttningsklart hem med gedigen precision.',
    heroText: 'Förverkliga ditt drömboende i Hälsingland. Trygg och professionell nybyggnation från grund till färdigt tak.',
    detailedDescription: `Att bygga nytt är ett av livets största och roligaste projekt. Hos WSH Bygg hjälper vi dig hela vägen från idé till nyckelfärdigt resultat – oavsett om du planerar en modern villa, ett klassiskt hälsingehus eller ett funktionellt fritidshus.

Vi tar hand om hela byggkedjan: från markförberedelser, gjutning av stabil betongplatta och stomresning till takläggning, fasad och inredningssnickeri. Med vår breda yrkeserfarenhet och lokala förankring i Alfta, Edsbyn och Bollnäs kan du känna dig helt trygg genom hela bygget.`,
    heroImage: '/service-smahusbyggnation.webp',
    image: '/service-smahusbyggnation.webp',
    href: '/tjanster#nybyggnation',
    tag: 'Nybyggnation',
    badge: 'Kundanpassat',
    highlights: [
      'Kundanpassad konstruktion och stabila husgrunder',
      'Erfarna och certifierade hantverkare',
      'Hållbara material anpassade för nordiskt klimat',
      'Tydlig tidsplan och fasta avtal utan överraskningar',
    ],
    sections: [
      {
        heading: 'Från grundläggning till nyckelfärdigt hem',
        text: 'Ett hållbart husbygge börjar från grunden. Vi planerar varje moment med noggrannhet och anpassar byggprocessen efter tomtens unika förutsättningar och dina specifika önskemål.',
        bullets: [
          'Grund och gjutning: Armerad betongplatta och stabil grundläggning',
          'Stomresning och takbyte: Tätt och energieffektivt klimatskal',
          'Interiör och snickeri: Golvläggning, lister och finsnickeri',
          'Slutbesiktning: Trygg och godkänd överlämning',
        ],
      },
      {
        heading: 'Hållbara material och energieffektiv konstruktion',
        text: 'Vi bygger med beprövade metoder och material av hög kvalitet som klarar Hälsinglands klimat året om, med god isolering och lång livslängd.',
      },
    ],
    faq: [
      {
        question: 'Hur lång tid tar en nybyggnation?',
        answer: 'Tidsplanen varierar beroende på husets storlek och konstruktion, men vanligtvis tar byggnationen mellan 4 och 9 månader från färdig grund till inflyttning.',
      },
      {
        question: 'Kan ni hjälpa till med både grund och snickeri?',
        answer: 'Ja! Vi är specialiserade på både grund & gjutning och träkonstruktion/snickeri, vilket ger dig en sammanhållen process.',
      },
    ],
  },
  {
    slug: 'renovering',
    title: 'Renovering',
    shortDescription: 'Varsamma och gedigna renoveringar av hus, kök, badrum, fasader och golvbjälklag som höjer både standard och trivsel.',
    heroText: 'Ge ditt hus nytt liv med professionell renovering i Alfta, Edsbyn, Bollnäs och Hälsingland.',
    detailedDescription: `Oavsett om det gäller att renovera ett äldre trähus, byta ut golvbjälklag, fräscha upp ytskikten eller genomföra en helrenovering av villan levererar vi hantverk med precision.

Vi kombinerar moderna byggtekniker med respekt för husets ursprungliga själ och karaktär. Vårt erfarna team ser till att renoveringen blir både funktionell, snygg och långsiktigt hållbar. Självklart hjälper vi dig att nyttja ROT-avdraget med 30 % direkt på fakturan.`,
    heroImage: '/service-renovering.webp',
    image: '/service-renovering.webp',
    href: '/tjanster#renovering',
    tag: 'Invändigt & Utvändigt',
    badge: 'ROT avdrag',
    highlights: [
      'Totalrenovering och delrenovering av villor och gårdar',
      'Golvbyten, bjälklagsrenovering och isolering',
      'Fasadrenovering, fönsterbyten och snickerier',
      'ROT-avdrag med 30% på arbetskostnaden dras direkt',
    ],
    sections: [
      {
        heading: 'Skräddarsydd renovering med personligt engagemang',
        text: 'Vi lyssnar på dina idéer och föreslår praktiska och estetiska lösningar. Vårt mål är att renoveringen ska ske smidigt och med minsta möjliga påverkan på din vardag.',
        bullets: [
          'Golv & Bjälklag: Riktning, isolering och nytt trägolv eller parkett',
          'Fasad & Tak: Nya paneler, tilläggsisolering och komplett takbyte',
          'Interiör: Montering av kök, lister och innerväggar',
          'Altaner & Uterum: Bygge av trädäck och inglasade partier',
        ],
      },
    ],
    faq: [
      {
        question: 'Hur fungerar ROT-avdraget vid renovering?',
        answer: 'Som privatperson kan du dra av 30% av arbetskostnaden upp till 50 000 kr per person och år. Vi administrerar hela avdraget direkt mot Skatteverket på din faktura.',
      },
      {
        question: 'Kan man bo kvar under renoveringstiden?',
        answer: 'I de allra flesta fall går det alldeles utmärkt. Vi planerar arbetet etappvis och håller arbetsytorna dammavskärmade och städade.',
      },
    ],
  },
  {
    slug: 'ombyggnation',
    title: 'Om- & Tillbyggnad',
    shortDescription: 'Behöver du mer boyta eller ny planlösning? Vi utför tillbyggnader, taklyft, takbyten och utbyggnader med perfekt passform.',
    heroText: 'Väx i ditt nuvarande hem. Vi utför om- och tillbyggnader samt takbyten med högsta kvalitet i Hälsingland.',
    detailedDescription: `När familjen växer eller behoven ändras är en tillbyggnad eller ombyggnation det smartaste sättet att få mer yta utan att behöva flytta.

WSH Bygg hanterar allt från att bygga ut villan med nya sovrum eller rymligt vardagsrum till att byta tak, bygga isolerade uterum, förstärka bärande konstruktioner eller ändra planlösningen. Vi ser till att den nya delen smälter in harmoniskt med husets befintliga arkitektur.`,
    heroImage: '/service-ombyggnation.webp',
    image: '/service-ombyggnation.webp',
    href: '/tjanster#ombyggnation',
    tag: 'Tillbyggnad & Takbyte',
    badge: 'Flexibla lösningar',
    highlights: [
      'Tillbyggnad av villa, fritidshus och garage',
      'Kompletta takbyten med betongpannor, plåt eller tegel',
      'Öppna upp planlösningar och avväxling av bärande väggar',
      'Uterum, verandor och trädäck',
    ],
    sections: [
      {
        heading: 'Fler kvadratmeter och stabil konstruktion',
        text: 'En genomtänkt tillbyggnad ökar både livskvaliteten och fastighetens marknadsvärde. Vi säkerställer att grundläggning och stomme dimensioneras med högsta bärighet och hållbarhet.',
        bullets: [
          'Husutbyggnad: Extra boyta, master bedroom eller större sällskapsytor',
          'Takbyte: Komplett byte av råspont, papp, läkt och takpannor',
          'Altaner & Verandor: Rejäla trädäck anpassade för tomtens nivåer',
          'Garage & Carport: Isolerade eller oisolerade byggnader på gjuten platta',
        ],
      },
    ],
    faq: [
      {
        question: 'Krävs det bygglov för en tillbyggnad?',
        answer: 'Tillbyggnader upp till 15 kvm (Attefall) kräver ofta endast anmälan, medan större tillbyggnader eller fasadändringar kräver bygglov. Vi hjälper gärna till med ritningar och underlag inför din ansökan.',
      },
    ],
  },
  {
    slug: 'totalentreprenad',
    title: 'Totalentreprenad & Grund',
    shortDescription: 'Ett samlat ansvar från schaktning och gjutning till färdigställt bygge – en kontaktperson och full trygghet genom hela projektet.',
    heroText: 'Bekymmersfritt byggande med en helhetsansvarig partner i Alfta, Edsbyn, Bollnäs och Hälsingland.',
    detailedDescription: `Med totalentreprenad från WSH Bygg slipper du krånglet med att samordna olika hantverkare och entreprenörer.

Vi tar det samlade ansvaret för hela byggnationen: från grund- och markarbeten med gjuten betongplatta till snickeri, tak, el, VVS och målning. Du har en och samma kontaktperson genom hela processen med full koll på budget, tidsplan och kvalitet fram till godkänd slutbesiktning.`,
    heroImage: '/service-totalentreprenad.webp',
    image: '/service-totalentreprenad.webp',
    href: '/tjanster#totalentreprenad',
    tag: 'Helhetslösning',
    badge: '100% Trygghet',
    highlights: [
      'En ansvarig kontaktperson genom hela bygget',
      'Specialistkunskap inom grundläggning & betonggjutning',
      'Komplett samordning av alla hantverksgrupper',
      'Tydlig budget, fasta avtal och full ansvarsförsäkring',
    ],
    sections: [
      {
        heading: 'Tryggt, strukturerat och transparent',
        text: 'Totalentreprenad är det smidigaste och säkraste valet för dig som beställare. Vi bär ansvaret för utförande och samordning så att du kan fokusera på det roliga.',
        bullets: [
          'Projektledning: Regelbunden avstämning och tydlig tidsplan',
          'Grund & Gjutning: Professionell formsättning, armering och gjuten platta',
          'Kvalitetssäkrade samarbeten: Certifierade elektriker och behöriga VVS-montörer',
          'Garanti & Dokumentation: Fullständiga egenkontroller och garantier',
        ],
      },
    ],
    faq: [
      {
        question: 'Vad är fördelen med totalentreprenad?',
        answer: 'Med totalentreprenad har du ett enda avtal och en enda ansvarig partner. Det minimerar risker för missförstånd eller förseningar och gör projektet betydligt smidigare för dig.',
      },
      {
        question: 'Hur sätter ni upp offerten?',
        answer: 'Vi lämnar en specificerad och transparent offert där alla moment ingår så att du vet exakt vad som ingår utan oväntade tillägg.',
      },
    ],
  },
];

export default services;
