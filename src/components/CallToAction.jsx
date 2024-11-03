'use client'

import { useParams } from 'next/navigation'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import { CITIES } from '@/lib/constants'

export function CallToAction() {
  const { t } = useLanguage()
  const params = useParams()
  const isEnglish = t('login') === 'Français'

  // Get city name from route params or default to Gore
  const citySlug = params?.city || 'gore'
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'

  return (
    <Container className="mt-24 sm:mt-32 md:mt-40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          {t('callToAction.title').replace('?', '')}{' '}
          {isEnglish ? `in ${city}?` : `à ${city}?`}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {t('callToAction.description')}
        </p>
        <div className="mt-8">
          <a
            href="tel:+14508219663"
            className="inline-flex items-center rounded-full bg-gray-900 px-8 py-4 text-lg font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            (450) 821-9663
          </a>
        </div>
      </div>
    </Container>
  )
}
