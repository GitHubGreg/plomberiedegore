import { SERVICES } from '@/lib/constants'
import { Services } from '@/components/Services'
import { CallToAction } from '@/components/CallToAction'

// Generate static params for all service slugs
export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}

  return {
    title: `${service.id} Services in Gore | Plomberie de Gore`,
    description: `Professional ${service.id} services in Gore, Quebec. Expert plumbing solutions for your needs.`,
  }
}

// Create the service page component
export default function ServicePage({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return null

  return (
    <main>
      <div className="relative">
        <Services serviceId={service.id} />
        <CallToAction />
      </div>
    </main>
  )
}
