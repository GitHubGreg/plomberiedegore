'use client'

import { useParams } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { SERVICES } from '@/lib/constants'
import { getLocalizedPath } from '@/lib/utils'
import { Button } from './Button'

export function NavLinks({ onClick }) {
  const { t, language } = useLanguage()
  const params = useParams()

  // If we're on a city route, use that city's slug, otherwise default to 'gore'
  const citySlug = params?.city || 'gore'

  // Check if we're currently on this service's page
  const isCurrentService = (serviceSlug) => {
    const isActive = params?.slug === serviceSlug
    return isActive
  }

  return (
    <>
      {SERVICES.map((service) => (
        <Button
          key={service.id}
          href={getLocalizedPath(`${citySlug}/${service.slug}`, language)}
          size="responsive"
          color="white"
          variant="outline"
          isActive={isCurrentService(service.slug)}
          onClick={onClick}
        >
          {t(`services.${service.id}.title`)}
        </Button>
      ))}
    </>
  )
}
