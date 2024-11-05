'use client'

import { Hero } from '@/components/Hero'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'
import { Reviews } from '../Reviews'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Reviews />
      <CallToAction />
    </main>
  )
}
