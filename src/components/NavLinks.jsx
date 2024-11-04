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
          className="flex items-center justify-center rounded-lg bg-gray-200 px-2 py-2 text-center text-sm font-normal text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 lg:text-xs xl:text-sm"
        >
          {t(`services.${service.id}.title`)}
        </Link>
      ))}
    </>
  )
}
