import { CITIES, SERVICES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { siteContent } from '@/content/siteContent'

export async function generateHomeMetadata(isEnglish) {
  return generateCityMetadata({ city: 'gore' }, isEnglish)
}

export async function generateCityMetadata(params, isEnglish) {
  const citySlug = params.city
  const city = CITIES.find((c) => c.slug === citySlug)

  if (!city) {
    notFound()
  }

  const siteName = isEnglish ? `${city.id} Plumbing` : `Plomberie de ${city.id}`

  const title = isEnglish
    ? `${siteName} - ${siteContent.en.services.sectors.title}`
    : `${siteName} - ${siteContent.fr.services.sectors.title}`

  const content = isEnglish ? siteContent.en : siteContent.fr
  const description = content.cityDescriptions[city.id]

  const defaultImage = `/images/services/${SERVICES[0].slug}.jpg`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [defaultImage],
      siteName,
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

  const siteName = isEnglish ? `${city.id} Plumbing` : `Plomberie de ${city.id}`

  const serviceTitle = isEnglish
    ? siteContent.en.services[service.id].title
    : siteContent.fr.services[service.id].title

  const title = isEnglish
    ? `${serviceTitle} - ${siteName} - ${siteContent.en.services.sectors.title}`
    : `${serviceTitle} - ${siteName} - ${siteContent.fr.services.sectors.title}`

  const content = isEnglish ? siteContent.en : siteContent.fr
  const description = content.services[service.id].descriptions[city.id]

  const serviceImage = `/images/services/${service.slug}.jpg`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [serviceImage],
      siteName,
    },
    twitter: {
      card: 'summary_large_image',
      images: [serviceImage],
    },
  }
}
