'use client'

import { Hero } from '@/components/Hero'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'
import { Reviews } from '../Reviews'
import { Footer } from '../Footer'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Reviews />
      <CallToAction />
      <Footer />
    </main>
  )
}
