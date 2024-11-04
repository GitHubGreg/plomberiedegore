'use client'

import { Hero } from '@/components/Hero'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'
import { CITIES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { Layout } from '@/components/pages/Layout'

export function CityPage({ citySlug }) {
  // Check if the city exists in our constants
  if (!CITIES.some((city) => city.slug === citySlug)) {
    notFound()
  }

  return (
    <Layout>
      <main>
        <Hero citySlug={citySlug} />
        <Services citySlug={citySlug} />
        <CallToAction />
      </main>
    </Layout>
  )
}
