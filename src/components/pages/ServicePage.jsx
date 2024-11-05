'use client'

import { Hero } from '@/components/Hero'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'
import { OtherServices } from '@/components/OtherServices'
import { CITIES, SERVICES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { CityTitle } from '../CityTitle'

export function ServicePage({ citySlug, serviceSlug }) {
  const { language } = useLanguage()
  const isEnglish = language === 'en'

  // Check if both city and service exist
  if (
    !CITIES.some((city) => city.slug === citySlug) ||
    !SERVICES.some((service) => service.slug === serviceSlug)
  ) {
    notFound()
  }

  const service = SERVICES.find((s) => s.slug === serviceSlug)
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'

  return (
    <main>
      <CityTitle citySlug={citySlug} />
      <Services serviceId={service.id} citySlug={citySlug} />
      <OtherServices />
      <CallToAction />
    </main>
  )
}
