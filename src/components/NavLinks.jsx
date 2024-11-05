'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { SERVICES } from '@/lib/constants'
import { getLocalizedPath } from '@/lib/utils'

export function NavLinks() {
  const { t, language } = useLanguage()
  const params = useParams()

  // If we're on a city route, use that city's slug, otherwise default to 'gore'
  const citySlug = params?.city || 'gore'

  // Check if we're currently on this service's page
  const isCurrentService = (serviceSlug) => params?.slug === serviceSlug

  return (
    <>
      {SERVICES.map((service) => {
        const isActive = isCurrentService(service.slug)
        return (
          <Link
            key={service.id}
            href={getLocalizedPath(`${citySlug}/${service.slug}`, language)}
            className={`flex items-center justify-center rounded-lg bg-gray-100 px-2 py-2 text-center text-sm font-normal text-gray-900 transition-colors lg:text-xs xl:text-sm ${
              isActive ? 'bg-gray-200' : 'hover:bg-gray-200'
            }`}
          >
            {t(`services.${service.id}.title`)}
          </Link>
        )
      })}
    </>
  )
}
