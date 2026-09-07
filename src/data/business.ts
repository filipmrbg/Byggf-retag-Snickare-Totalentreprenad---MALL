export const business = {
  name: 'WSH Bygg',
  legalName: 'WSH Bygg',
  alternateName: 'WSH Bygg Alfta',
  founder: 'Robin Ehn',
  founderTitle: 'Snickare',
  url: 'https://wshbygg.se',
  email: 'wshbygg@gmail.com',
  phone: '070-652 99 36',
  phoneTel: '0706529936',
  address: {
    locality: 'Alfta',
    region: 'Hälsingland',
    country: 'SE',
  },
  geo: {
    latitude: 61.3583,
    longitude: 16.0667,
  },
  areasServed: ['Alfta', 'Ovanåkers kommun', 'Edsbyn', 'Bollnäs', 'Hälsingland'],
  socialLinks: {
    instagram: 'https://www.instagram.com/wsh.bygg/',
    facebook: 'https://www.facebook.com/profile.php?id=61550844801002',
  },
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '16:00',
  },
  rating: {
    value: 4.9,
    bestRating: 5,
    ratingCount: 48,
  },
  priceRange: '$$',
  logoUrl: 'https://wshbygg.se/logo.png',
  imageUrl: 'https://wshbygg.se/logo.png',
} as const;

export default business;
