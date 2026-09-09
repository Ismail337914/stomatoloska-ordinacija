export const clinic = {
  name: 'Stomatološka Ordinacija Dr. Aida H. Kaljanac',
  doctor: 'Dr. Aida H. Kaljanac',
  phone: '+387 62 408 887',
  phoneDisplay: '062 408 887',
  address: {
    street: 'Stupska bb',
    postalCode: '71210',
    city: 'Ilidža',
    country: 'Bosna i Hercegovina',
  },
  locationLabel: 'Stup · Ilidža · Sarajevo',
  rating: 4.9,
  reviewCount: 181,
  coordinates: { latitude: 43.8407425, longitude: 18.3262514 },
  hours: [
    { day: 'Ponedjeljak', shortDay: 'Pon', time: '12:00–20:00' },
    { day: 'Utorak', shortDay: 'Uto', time: '12:00–20:00' },
    { day: 'Srijeda', shortDay: 'Sri', time: '12:00–20:00' },
    { day: 'Četvrtak', shortDay: 'Čet', time: '12:00–20:00' },
    { day: 'Petak', shortDay: 'Pet', time: '12:00–20:00' },
    { day: 'Subota', shortDay: 'Sub', time: '10:00–14:00' },
    { day: 'Nedjelja', shortDay: 'Ned', time: 'Zatvoreno' },
  ],
  image: {
    src: '/images/aida/clinic-interior.webp',
    alt: 'Stomatološka ordinacija Dr. Aida H. Kaljanac na Stupu u Sarajevu',
  },
} as const

export const services = [
  {
    title: 'Polivalentna stomatologija',
    description: 'Širok pristup stomatološkoj njezi prilagođen potrebama pacijenta.',
  },
] as const

export const faqs = [
  {
    question: 'Gdje se nalazi stomatološka ordinacija Dr. Aida H. Kaljanac?',
    answer: 'Ordinacija se nalazi u Stupskoj bb, 71210 Ilidža, Sarajevo.',
  },
  {
    question: 'Kako mogu kontaktirati ordinaciju?',
    answer: 'Za informacije i dogovor termina možete pozvati 062 408 887.',
  },
  {
    question: 'Gdje mogu pronaći stomatologa na Stupu?',
    answer: 'Stomatološka ordinacija Dr. Aida H. Kaljanac nalazi se na Stupu, na području Ilidže u Sarajevu.',
  },
  {
    question: 'Koje stomatološke usluge pruža ordinacija?',
    answer: 'Ordinacija je registrovana za pružanje polivalentnih stomatoloških usluga. Za informacije o konkretnim uslugama i terminima kontaktirajte ordinaciju.',
  },
  {
    question: 'Kada ordinacija radi?',
    answer: 'Ordinacija radi ponedjeljkom do petka od 12:00 do 20:00 i subotom od 10:00 do 14:00. Nedjeljom je zatvorena.',
  },
] as const

export const googleBusinessUrl = ''
export const canonicalUrl = import.meta.env.VITE_CANONICAL_URL || ''
