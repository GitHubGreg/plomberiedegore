'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import { SERVICES, CITIES } from '@/lib/constants'
import { getLocalizedPath } from '@/lib/utils'
import { Button } from './Button'

export function OtherServices() {
  const { t, language } = useLanguage()
  const params = useParams()
  const isEnglish = language === 'en'

  const citySlug = params?.city || 'gore'
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'
  const currentService = SERVICES.find((s) => s.slug === params.slug)

  const otherServices = SERVICES.filter(
    (service) => service.id !== currentService?.id,
  ).map((service) => ({
    id: service.id,
    title: t(`services.${service.id}.title`),
    slug: service.slug,
  }))

  return (
    <Container className="mb-24">
      <h2 className="text-2xl font-medium tracking-tight text-gray-900">
        {isEnglish
          ? `Other plumbing services in ${city}`
          : `Autres services de plomberie à ${city}`}
      </h2>
      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-4">
        {otherServices.map((service) => (
          <Button
            key={service.id}
            href={getLocalizedPath(`${citySlug}/${service.slug}`, language)}
            size="small"
            color="white"
            variant="outline"
          >
            {service.title}
          </Button>
        ))}
      </div>
    </Container>
  )
}
