'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import { CITIES } from '@/lib/constants'

export function PageTitle() {
  const { t, language } = useLanguage()
  const params = useParams()
  const isEnglish = language === 'en'

  const citySlug = params?.city || 'gore'
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'

  // Construct home URL based on language and city, same as Header
  const homeUrl = isEnglish ? `/en/${citySlug}` : `/${citySlug}`

  return (
    <Container className="mb-16 mt-24">
      <Link href={homeUrl}>
        <h1 className="text-center text-4xl font-medium tracking-tight text-gray-900 transition-colors hover:text-gray-600">
          {isEnglish ? `${city} Plumbing` : `Plombier de ${city}`}
        </h1>
      </Link>
    </Container>
  )
}
