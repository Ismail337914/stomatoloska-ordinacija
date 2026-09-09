import { clinic, faqs } from '../data/clinic'

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: clinic.name,
  telephone: clinic.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: clinic.address.street,
    postalCode: clinic.address.postalCode,
    addressLocality: clinic.address.city,
    addressCountry: 'BA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: clinic.coordinates.latitude,
    longitude: clinic.coordinates.longitude,
  },
  areaServed: ['Stup', 'Ilidža', 'Sarajevo'],
  openingHoursSpecification: clinic.hours
    .filter((entry) => entry.day !== 'Nedjelja')
    .map((entry) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${entry.day}`,
      opens: entry.time.split('–')[0],
      closes: entry.time.split('–')[1],
    })),
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}
