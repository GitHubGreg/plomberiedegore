import { CITIES } from '@/lib/constants'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { CallToAction } from '@/components/CallToAction'
import { notFound } from 'next/navigation'

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

  return {
    title: `Plomberie de Gore | Services in ${city.id}`,
    description: `Professional plumbing services in ${city.id}, Quebec. Expert solutions for all your plumbing needs.`,
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
      <Services citySlug={params.city} />
      <CallToAction />
    </main>
  )
}
