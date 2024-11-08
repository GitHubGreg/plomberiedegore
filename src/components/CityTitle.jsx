'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import { CITIES } from '@/lib/constants'

export function CityTitle({ citySlug = 'gore' }) {
  const { language } = useLanguage()
  const isEnglish = language === 'en'
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'
  const title = isEnglish ? `${city} Plumbing` : `Plomberie de ${city}`

  // Construct home URL based on language and city, same as Header and PageTitle
  const homeUrl = isEnglish ? `/en/${citySlug}` : `/${citySlug}`

  return (
    <div className="pt-12">
      <Container>
        <div className="flex items-center justify-start gap-4 transition-all lg:justify-center">
          <Link href={homeUrl}>
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 transition-all hover:text-gray-600">
              {title}
            </h1>
          </Link>
        </div>
      </Container>
    </div>
  )
}
