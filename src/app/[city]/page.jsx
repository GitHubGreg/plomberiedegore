import { CITIES } from '@/lib/constants'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { CallToAction } from '@/components/CallToAction'
import { notFound } from 'next/navigation'
import { Reviews } from '@/components/Reviews'
import { OtherServices } from '@/components/OtherServices'
import { cookies } from 'next/headers'

// Generate static params for all cities
export function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city.slug,
  }))
}

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const city = CITIES.find((c) => c.slug === params.city)
  if (!city) return {}

  // Get language from cookies the same way the client components do
  const cookieStore = cookies()
  const currentLanguage = cookieStore.get('language')?.value || 'fr'
  const isEnglish = currentLanguage === 'en'

  return {
    title: isEnglish
      ? `Plumbing Services in ${city.id}`
      : `Plomberie de ${city.id}`,
    description: isEnglish
      ? `Professional plumbing services in ${city.id}, Quebec. Expert solutions for all your plumbing needs.`
      : `Services de plomberie professionnels à ${city.id}, Québec. Solutions expertes pour tous vos besoins en plomberie.`,
  }
}

// Create the city homepage component
export default function CityPage({ params }) {
  const city = CITIES.find((c) => c.slug === params.city)
  if (!city) {
    notFound()
  }

  return (
    <main>
      <Hero citySlug={params.city} />
      <Services citySlug={params.city} />\
      <OtherServices />
      <CallToAction />
      <Reviews />
    </main>
  )
}
