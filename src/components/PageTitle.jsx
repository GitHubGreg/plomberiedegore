'use client'

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

  return (
    <Container className="mb-16 mt-24">
      <h1 className="text-center text-4xl font-medium tracking-tight text-gray-900">
        {isEnglish ? `${city} Plumbing` : `Plombier de ${city}`}
      </h1>
    </Container>
  )
}
