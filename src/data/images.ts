/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * To customize for a new company: replace the URLs below.
 *
 * Recommended dimensions per slot:
 *   hero.background       — 1400×800+ (wide, dark works best with overlay text)
 *   services.*            — 900×600 (landscape, subject-focused)
 *   gallery[]             — 800×800 (square crop)
 *   cta.banner            — 600×420 (portrait/square, shown in right column)
 *   cta.midSection        — 1400×600 (wide, used as background with dark overlay)
 *   about.hero            — 600×750 (portrait, team or company)
 *   about.teamMember      — 300×300 (square, headshot)
 *   whyChooseUs           — 600×auto (portrait or landscape, detail shot)
 *   ideaToResult          — 600×auto (landscape, process/progress shot)
 *   portfolio[]           — 800×600 (landscape, finished project photos)
 *   servicePages.*        — see individual slots below
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  hero: {
    background: ImageSlot;
  };
  services: {
    nybyggnation?: ImageSlot;
    smahusbyggnation?: ImageSlot;
    renovering?: ImageSlot;
    ombyggnation?: ImageSlot;
    totalentreprenad?: ImageSlot;
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
  servicePages: {
    markarbete: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    dranering: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    betong: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
  };
}

const images: SiteImages = {
  logo: {
    url: '/logo-white.png',
    alt: 'WSH Bygg',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'WSH Bygg',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'WSH Bygg hantverk och byggentreprenad',
    },
  },

  services: {
    nybyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Nybyggnation av villor och fritidshus i Hälsingland',
    },
    smahusbyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Nybyggnation av villor och fritidshus i Hälsingland',
    },
    renovering: {
      url: '/service-renovering.webp',
      alt: 'Renovering och hantverk i Alfta och Bollnäs',
    },
    ombyggnation: {
      url: '/service-ombyggnation.webp',
      alt: 'Ombyggnation, takbyte och tillbyggnad i Ovanåker',
    },
    totalentreprenad: {
      url: '/service-totalentreprenad.webp',
      alt: 'Totalentreprenad och samordnade byggprojekt',
    },
  },

  gallery: [
    { url: '/gallery-wsh-1.webp', alt: 'WSH Bygg golvrenovering och bjälklagsisolering' },
    { url: '/gallery-wsh-2.webp', alt: 'WSH Bygg grundarbete och makadamläggning' },
    { url: '/gallery-wsh-3.webp', alt: 'WSH Bygg altan och källarentré på klassisk villa' },
    { url: '/gallery-wsh-4.webp', alt: 'WSH Bygg armering och formsättning för gjutning' },
    { url: '/gallery-wsh-5.webp', alt: 'WSH Bygg nybyggt attefallshus med glaspartier' },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'WSH Bygg projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'Byggarbetsplats',
    },
  },

  about: {
    hero: {
      url: '/logo-dark.png',
      alt: 'WSH Bygg logotyp',
    },
    teamMember: {
      url: '/logo-white.png',
      alt: 'Teammedlem',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant hantverk i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från idé till färdigt resultat',
  },

  portfolio: [
    {
      image: { url: '/gallery-wsh-1.webp', alt: 'WSH Bygg golvrenovering' },
      title: 'Golvbjälklag & Renovering',
      category: 'Renovering',
    },
    {
      image: { url: '/gallery-wsh-2.webp', alt: 'WSH Bygg grundarbete' },
      title: 'Grund & Markarbete',
      category: 'Grundarbete',
    },
    {
      image: { url: '/gallery-wsh-3.webp', alt: 'WSH Bygg altan och entré' },
      title: 'Altan & Källarentré',
      category: 'Tillbyggnad',
    },
    {
      image: { url: '/gallery-wsh-4.webp', alt: 'WSH Bygg gjutning och armering' },
      title: 'Betonggjutning & Formning',
      category: 'Gjutning',
    },
    {
      image: { url: '/gallery-wsh-5.webp', alt: 'WSH Bygg attefallshus' },
      title: 'Nybyggt Attefallshus',
      category: 'Nybyggnation',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-markarbete.webp',
        alt: 'Markarbete och schaktning',
      },
      section1: {
        url: '/service-markarbete.webp',
        alt: 'Förberedelse för tomtplanering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Grävmaskin på arbetsplats',
      },
    },
    dranering: {
      hero: {
        url: '/service-dranering.webp',
        alt: 'Dränering av husgrund',
      },
      section1: {
        url: '/service-dranering.webp',
        alt: 'Montering av Isodrän fuktskydd',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbete med dräneringsslangar',
      },
    },
    betong: {
      hero: {
        url: '/service-betong.webp',
        alt: 'Gjutning av betongplatta',
      },
      section1: {
        url: '/service-betong.webp',
        alt: 'Stenläggning och armering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdig betonggrund',
      },
    },
  },
};

export default images;
