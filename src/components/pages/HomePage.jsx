'use client'

import { Hero } from '@/components/Hero'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'
import { Layout } from '@/components/pages/Layout'

export function HomePage() {
  return (
    <Layout>
      <main>
        <Hero />
        <Services />
        <CallToAction />
      </main>
    </Layout>
  )
}
