import { CITIES, SERVICES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { siteContent } from '@/content/siteContent'

export async function generateCityMetadata(params, isEnglish) {
  const citySlug = await params.city
  const city = CITIES.find((c) => c.slug === citySlug)

  if (!city) {
    notFound()
  }

  const title = isEnglish
    ? `${city.id} Plumbing - ${siteContent.en.services.sectors.title}`
    : `Plomberie de ${city.id} - ${siteContent.fr.services.sectors.title}`

  return {
    title,
  }
}

export async function generateServiceMetadata(params, isEnglish) {
  const citySlug = await params.city
  const serviceSlug = await params.slug

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

  return {
    title,
  }
}
