'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import { SERVICES, CITIES } from '@/lib/constants'

export function OtherServices() {
  const { t } = useLanguage()
  const params = useParams()
  const isEnglish = t('login') === 'Français'

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
    <Container className="mt-24 sm:mt-32">
      <h2 className="text-center text-2xl font-medium tracking-tight text-gray-900 lg:text-left">
        {isEnglish
          ? `Other plumbing services in ${city}`
          : `Autres services de plomberie à ${city}`}
      </h2>
      <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-4 gap-y-4 lg:mx-0 lg:justify-start">
        {otherServices.map((service) => (
          <Link
            key={service.id}
            href={`/${citySlug}/${service.slug}`}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {service.title} {isEnglish ? `in ${city}` : `à ${city}`}
          </Link>
        ))}
      </div>
    </Container>
  )
}