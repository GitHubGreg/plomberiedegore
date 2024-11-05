import { CITIES, SERVICES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { siteContent } from '@/content/siteContent'

export async function generateHomeMetadata(isEnglish) {
  const canonical = isEnglish
    ? 'https://www.plomberiedegore.com/en/gore'
    : 'https://www.plomberiedegore.com/gore'
  return {
    ...(await generateCityMetadata({ city: 'gore' }, isEnglish)),
    alternates: {
      canonical,
      languages: {
        en: 'https://www.plomberiedegore.com/en/gore',
        fr: 'https://www.plomberiedegore.com/gore',
      },
    },
  }
}

export async function generateCityMetadata(params, isEnglish) {
  const citySlug = params.city
  const city = CITIES.find((c) => c.slug === citySlug)

  if (!city) {
    notFound()
  }

  const canonical = isEnglish
    ? `https://www.plomberiedegore.com/en/${citySlug}`
    : `https://www.plomberiedegore.com/${citySlug}`

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
    alternates: {
      canonical,
      languages: {
        en: `https://www.plomberiedegore.com/en/${citySlug}`,
        fr: `https://www.plomberiedegore.com/${citySlug}`,
      },
    },
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

  const canonical = isEnglish
    ? `https://www.plomberiedegore.com/en/${citySlug}/${serviceSlug}`
    : `https://www.plomberiedegore.com/${citySlug}/${serviceSlug}`

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `https://www.plomberiedegore.com/en/${citySlug}/${serviceSlug}`,
        fr: `https://www.plomberiedegore.com/${citySlug}/${serviceSlug}`,
      },
    },
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
