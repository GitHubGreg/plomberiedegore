'use client'

import { Hero } from '@/components/Hero'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'
import { CITIES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { Reviews } from '../Reviews'

export function CityPage({ citySlug }) {
  // Check if the city exists in our constants
  if (!CITIES.some((city) => city.slug === citySlug)) {
    notFound()
  }

  return (
    <main>
      <Hero citySlug={citySlug} />
      <Services citySlug={citySlug} />
      <Reviews />
      <CallToAction />
    </main>
  )
}
