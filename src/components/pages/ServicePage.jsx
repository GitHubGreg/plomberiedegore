'use client'

import { Hero } from '@/components/Hero'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'
import { OtherServices } from '@/components/OtherServices'
import { CITIES, SERVICES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { Layout } from '@/components/pages/Layout'

export function ServicePage({ citySlug, serviceSlug }) {
  // Check if both city and service exist
  if (
    !CITIES.some((city) => city.slug === citySlug) ||
    !SERVICES.some((service) => service.slug === serviceSlug)
  ) {
    notFound()
  }

  const service = SERVICES.find((s) => s.slug === serviceSlug)

  return (
    <Layout>
      <main>
        <Hero citySlug={citySlug} />
        <Services serviceId={service.id} citySlug={citySlug} />
        <OtherServices />
        <CallToAction />
      </main>
    </Layout>
  )
}
