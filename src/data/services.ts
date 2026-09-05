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

Vi kombinerar moderna byggtekniker med respekt för husets ursprungliga själ och karaktär, och ser till att renoveringen blir både funktionell, snygg och långsiktigt hållbar. Självklart hjälper vi dig att nyttja ROT-avdraget med 30 % direkt på fakturan.`,
    heroImage: '/service-renovering.webp',
    image: '/service-renovering.webp',
    href: '/tjanster#renovering',
    tag: 'Renovering',
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
          'Altaner: Bygge av trädäck och inglasade partier',
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
    slug: 'tillbyggnad',
    title: 'Tillbyggnad',
    shortDescription: 'Behöver du mer boyta eller nya rum? Vi utför kundanpassade tillbyggnader och utbyggnader med perfekt passform för ditt hus.',
    heroText: 'Väx i ditt nuvarande hem. Vi utför gedigna tillbyggnader med högsta kvalitet i Hälsingland.',
    detailedDescription: `När familjen växer eller behoven ändras är en tillbyggnad det smartaste sättet att få mer yta utan att behöva flytta.

WSH Bygg hanterar allt från att bygga ut villan med nya sovrum eller rymligt vardagsrum till att bygga isolerade uterum och förstärka bärande konstruktioner. Vi ser till att den nya delen smälter in harmoniskt med husets befintliga arkitektur och uppfyller alla krav på isolering och hållbarhet.`,
    heroImage: '/service-ombyggnation.webp',
    image: '/service-ombyggnation.webp',
    href: '/tjanster#tillbyggnad',
    tag: 'Tillbyggnad',
    badge: 'Flexibla lösningar',
    highlights: [
      'Tillbyggnad av villa, fritidshus och gård',
      'Utökad boyta och genomtänkt rumsindelning',
      'Öppna upp planlösningar och avväxling av bärande väggar',
      'Verandor, uterum och generösa sällskapsytor',
    ],
    sections: [
      {
        heading: 'Fler kvadratmeter och stabil konstruktion',
        text: 'En genomtänkt tillbyggnad ökar både livskvaliteten och fastighetens marknadsvärde. Vi säkerställer att grundläggning och stomme dimensioneras med högsta bärighet och hållbarhet.',
        bullets: [
          'Husutbyggnad: Extra boyta, master bedroom eller större sällskapsytor',
          'Uterum & Verandor: Rejäla tillbyggnader anpassade för åretruntbruk',
          'Konstruktion: Dimensionering av stomme, balkar och bärande väggar',
          'Ytskikt: Komplett inredning med golv, panel och listverk',
        ],
      },
    ],
    faq: [
      {
        question: 'Krävs det bygglov för en tillbyggnad?',
        answer: 'Tillbyggnader upp till 15 kvm (Attefall) kräver ofta endast anmälan, medan större tillbyggnader kräver bygglov. Vi hjälper gärna till med ritningar och underlag inför din ansökan.',
      },
    ],
  },
  {
    slug: 'takbyte',
    title: 'Takbyte',
    shortDescription: 'Kompletta takbyten med tegel, betongpannor eller plåt som ger ditt hus ett säkert, tätt och hållbart klimatskal året om.',
    heroText: 'Säkra och slitstarka tak i Alfta, Edsbyn, Bollnäs och Hälsingland. Komplett takläggning med garanti.',
    detailedDescription: `Ett välmående tak är husets viktigaste skydd mot väder och vind. Vi på WSH Bygg utför kompletta takbyten för villor, fritidshus och fastigheter i hela Hälsingland.

Vi byter råspont, underlagspapp, läkt och lägger nya betongpannor, tegelpannor eller plåt. Vi ser även över taksäkerhet, vindskivor, hängrännor och tilläggsisolering för ett energieffektivt och tryggt hem.`,
    heroImage: '/portfolio-roofing.webp',
    image: '/portfolio-roofing.webp',
    href: '/tjanster#takbyte',
    tag: 'Takbyte',
    badge: 'Tätt & Tryggt',
    highlights: [
      'Komplett takbyte med tegel, betongpannor eller plåt',
      'Byte av råspont, underlagspapp och bärläkt',
      'Montering av taksäkerhet, hängrännor och stuprör',
      'ROT-avdrag med 30% direkt på fakturan',
    ],
    sections: [
      {
        heading: 'Trygga takbyten utförda enligt branschstandard',
        text: 'Ett takbyte är en av de mest värdehöjande investeringarna du kan göra på ditt hus. Vi genomför en grundlig besiktning av undertaket och säkerställer att ventilation och isolering fungerar optimalt.',
        bullets: [
          'Undertak: Kontroll och byte av rötskadad råspont och ny slitstark underlagspapp',
          'Takbeklädnad: Nya pannor eller plåttak anpassade för Hälsinglands snörika vintrar',
          'Plåtarbeten: Vindskiveplåt, ränndalar och skorstensbeslag',
          'Säkerhet: Snörasskydd, taksteg och takbryggor',
        ],
      },
    ],
    faq: [
      {
        question: 'Hur ofta behöver man byta tak?',
        answer: 'Ett tegeltak eller betongpannetak håller vanligtvis mellan 30 och 50 år, men underlagspappen under pannorna kan behöva bytas efter 25–35 år för att garantera full fuktsäkerhet.',
      },
      {
        question: 'Hur lång tid tar ett normalt takbyte?',
        answer: 'Ett normalstort villatak tar vanligtvis 1–2 veckor att byta helt, beroende på väderlek och undertakets skick.',
      },
    ],
  },
  {
    slug: 'gjutning',
    title: 'Gjutningar',
    shortDescription: 'Professionella betonggjutningar för husgrunder, garageplattor, stödmurar och maskinhallar med laserprecision och högsta hållfasthet.',
    heroText: 'Stabila husgrunder och tåliga betonggjutningar i Alfta, Edsbyn, Bollnäs och hela Hälsingland.',
    detailedDescription: `En gedigen och välutförd gjutning är grunden för varje lyckat byggprojekt. Hos WSH Bygg har vi stor erfarenhet och specialistkunskap inom alla typer av betonggjutningar och grundläggningsarbeten.

Vi utför allt från gjutning av isolerade betongplattor på mark för villor, fritidshus och garage till gjutning av plintgrunder, stödmurar, trappor och maskinhallsplattor. Vi tar hand om hela kedjan: markförberedelse, schakt och bärlager, professionell formsättning, cellplastisolering, golvvärmeläggning, armering och själva gjutningen med maskinell glättning för ett spikrakt och slitstarkt resultat.`,
    heroImage: '/service-betong.webp',
    image: '/service-betong.webp',
    href: '/tjanster#gjutning',
    tag: 'Gjutningar',
    badge: 'Hög bärighet',
    highlights: [
      'Gjutning av betongplatta på mark för villa, garage och fritidshus',
      'Noggrann formsättning, armering och cellplastisolering',
      'Laserprecision och professionell glättning för perfekt jämn yta',
      'Stödmurar, trappor, maskinhallsplattor och plintgrunder',
    ],
    sections: [
      {
        heading: 'Starka och tåliga betongplattor med millimeterprecision',
        text: 'En gjuten betongplatta måste dimensioneras och utföras med största noggrannhet för att klara markens laster och nordiska klimatförhållanden med frost och tjäle. Vi använder modern mätutrustning och kvalitetsbetong för att säkerställa maximal livslängd och stabilitet.',
        bullets: [
          'Platta på mark: Komplett gjuten betongplatta med isolering, fuktspärr och armeringsnät',
          'Garage & Verkstad: Förstärkta betonggolv anpassade för tunga fordon och maskiner',
          'Formsättning & Armering: Skräddarsydd formning för trappor, fundament, socklar och stödmurar',
          'Vattenburen golvvärme: Montering och provtryckning av golvvärmeslingor före gjutning',
        ],
      },
      {
        heading: 'Lokal betongexpertis med modern utrustning',
        text: 'Vi arbetar med beprövade metoder och moderna maskiner för formsättning, vibrering och glättning. Oavsett om det gäller ett mindre attefallshus eller en stor maskinhall levererar vi ett hantverk du kan lita på.',
      },
    ],
    faq: [
      {
        question: 'Hur lång tid tar det innan man kan bygga vidare på en gjuten betongplatta?',
        answer: 'Plattan går normalt att beträda redan efter 1–2 dygn. Stomresning och träarbeten kan vanligtvis påbörjas efter cirka 1–2 veckor beroende på årstid och temperatur, medan betongens fulla härdning fortsätter under byggtiden.',
      },
      {
        question: 'Utför ni gjutningar för både privatpersoner och företag?',
        answer: 'Ja, vi gjuter för villor, fritidshus och garage åt privatpersoner samt maskinhallar, verkstäder och kommersiella lokaler åt företag.',
      },
    ],
  },
  {
    slug: 'garage',
    title: 'Garage',
    shortDescription: 'Nybyggnation av isolerade och oisolerade garage, carportar och förråd – från stabil gjuten platta till färdig byggnad.',
    heroText: 'Kundanpassade garage och carportar i Alfta, Edsbyn, Bollnäs och Hälsingland. Från grund till färdigt tak.',
    detailedDescription: `Ett välbyggt garage skyddar dina fordon, skapar suveräna förvaringsytor och höjer värdet på din fastighet.

Hos WSH Bygg bygger vi allt från praktiska carportar och enkla kallgarage till fullt isolerade dubbelgarage med verkstadsdel, motordrivna garageportar och förråd. Vi hanterar hela bygget: från markförberedelse och gjutning av armerad betongplatta till stomresning, takläggning, fasadpanel och fönster- och portmontering.`,
    heroImage: '/service-garage.webp',
    image: '/service-garage.webp',
    href: '/tjanster#garage',
    tag: 'Garage',
    badge: 'Kundanpassat',
    highlights: [
      'Gjuten och isolerad garageplatta dimensionerad för fordon',
      'Stomresning, fasadbeklädnad och takläggning',
      'Isolerade varmgarage eller funktionella kallgarage och carportar',
      'Montering av garageportar, dörrar och fönster',
    ],
    sections: [
      {
        heading: 'Från grund till nyckelfärdigt garage',
        text: 'Vi anpassar garagets utformning, taklutning och fasadpanel så att det matchar ditt befintliga bostadshus perfekt.',
        bullets: [
          'Platta på mark: Förstärkt betongplatta med fuktspärr och eventuell golvbrunn/ränna',
          'Stomme & Tak: Tålig träkonstruktion med god takbärighet för snölaster',
          'Port & Tillgänglighet: Professionell montering av moderna takskjutsportar',
          'El & Förvaring: Förberedelse för laddbox, belysning och verkstadsinredning',
        ],
      },
    ],
    faq: [
      {
        question: 'Krävs det bygglov för att bygga garage?',
        answer: 'Ett fristående garage upp till 30 kvm kan ofta byggas som Attefallsbyggnad med endast startbesked/anmälan, medan större garage kräver sedvanligt bygglov. Vi hjälper gärna till med underlag inför din anmälan.',
      },
      {
        question: 'Bygger ni både isolerade och oisolerade garage?',
        answer: 'Ja, vi bygger allt från oisolerade kallgarage och carportar till fullt vinterisolerade varmgarage med golvvärme och verkstadsdel.',
      },
    ],
  },
];

export default services;
