import { CITIES, SERVICES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { siteContent } from '@/content/siteContent'

export function generateCityMetadata(params, isEnglish) {
  const citySlug = params.city
  const city = CITIES.find((c) => c.slug === citySlug)

  if (!city) {
    notFound()
  }

  const title = isEnglish ? `${city.id} Plumbing` : `Plomberie de ${city.id}`

  return {
    title,
  }
}

export function generateServiceMetadata(params, isEnglish) {
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
    ? `${serviceTitle} - ${city.id} Plumbing`
    : `${serviceTitle} - Plomberie de ${city.id}`

  return {
    title,
  }
}
