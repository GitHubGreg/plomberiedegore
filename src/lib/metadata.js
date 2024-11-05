import { CITIES, SERVICES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { siteContent } from '@/content/siteContent'

export async function generateCityMetadata(params, isEnglish) {
  const citySlug = params.city
  const city = CITIES.find((c) => c.slug === citySlug)

  if (!city) {
    notFound()
  }

  const title = isEnglish
    ? `${city.id} Plumbing - ${siteContent.en.services.sectors.title}`
    : `Plomberie de ${city.id} - ${siteContent.fr.services.sectors.title}`

  const content = isEnglish ? siteContent.en : siteContent.fr
  const description = content.cityDescriptions[city.id]

  // Use the first service's image for city pages
  const defaultImage = `/images/services/${SERVICES[0].slug}.jpg`

  return {
    title,
    description,
    openGraph: {
      images: [defaultImage],
    },
    twitter: {
      card: 'summary_large_image',
      images: [defaultImage],
    },
  }
}

export async function generateServiceMetadata(params, isEnglish) {
  const citySlug = params.city
  const serviceSlug = params.slug

  const city = CITIES.find((c) => c.slug === citySlug)
  const service = SERVICES.find((s) => s.slug === serviceSlug)

  if (!city || !service) {
    notFound()
  }

  const serviceTitle = isEnglish
    ? siteContent.en.services[service.id].title
    : siteContent.fr.services[service.id].title

  const title = isEnglish
    ? `${serviceTitle} - ${city.id} Plumbing - ${siteContent.en.services.sectors.title}`
    : `${serviceTitle} - Plomberie de ${city.id} - ${siteContent.fr.services.sectors.title}`

  const content = isEnglish ? siteContent.en : siteContent.fr
  const description = content.services[service.id].descriptions[city.id]

  // Use the specific service's image
  const serviceImage = `/images/services/${service.slug}.jpg`

  return {
    title,
    description,
    openGraph: {
      images: [serviceImage],
    },
    twitter: {
      card: 'summary_large_image',
      images: [serviceImage],
    },
  }
}
