import { SERVICES, CITIES } from '@/lib/constants'
import { Services } from '@/components/Services'
import { CallToAction } from '@/components/CallToAction'
import { PageTitle } from '@/components/PageTitle'
import { OtherServices } from '@/components/OtherServices'
import { notFound } from 'next/navigation'

// Generate static params for all city/service combinations
export function generateStaticParams() {
  const params = []
  CITIES.forEach((city) => {
    SERVICES.forEach((service) => {
      params.push({
        city: city.slug,
        slug: service.slug,
      })
    })
  })
  return params
}

// Generate metadata for each page
export async function generateMetadata({ params }) {
  const city = CITIES.find((c) => c.slug === params.city)
  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!city || !service) return {}

  return {
    title: `${service.id} Services in ${city.id} | Plomberie de Gore`,
    description: `Professional ${service.id} services in ${city.id}, Quebec. Expert plumbing solutions for your needs.`,
  }
}

// Create the service page component
export default function ServicePage({ params }) {
  const city = CITIES.find((c) => c.slug === params.city)
  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!city || !service) {
    notFound()
  }

  return (
    <main>
      <div className="relative">
        <PageTitle />
        <Services serviceId={service.id} cityId={city.id} />
        <OtherServices />
        <CallToAction />
      </div>
    </main>
  )
}
