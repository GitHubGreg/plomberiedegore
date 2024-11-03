'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { SERVICES } from '@/lib/constants'

export function NavLinks() {
  const { t } = useLanguage()
  const params = useParams()

  // If we're on a city route, use that city's slug, otherwise default to 'gore'
  const citySlug = params?.city || 'gore'

  return (
    <>
      {SERVICES.map((service) => (
        <Link
          key={service.id}
          href={`/${citySlug}/${service.slug}`}
          className="text-sm leading-6 text-gray-700 hover:text-gray-900"
        >
          {t(`services.${service.id}.title`)}
        </Link>
      ))}
    </>
  )
}
