'use client'

import { Hero } from '@/components/Hero'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <CallToAction />
    </main>
  )
}
