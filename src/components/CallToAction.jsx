'use client'

import { useId } from 'react'
import { useParams } from 'next/navigation'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import { CITIES, PHONE } from '@/lib/constants'
import { Button } from './Button'
import { BackgroundIllustration } from './BackgroundIllustration'

export function CallToAction() {
  const { t, language } = useLanguage()
  const params = useParams()
  const isEnglish = language === 'en'

  const citySlug = params?.city || 'gore'
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'

  return (
    <section
      id="call-to-action"
      className="relative overflow-hidden bg-gradient-to-br from-[#0C5788] to-[#001847] py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <BackgroundIllustration className="h-[1026px] w-[1026px]" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            {t('callToAction.title').replace('?', '')}{' '}
            {isEnglish ? `in ${city}?` : `à ${city}?`}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {t('callToAction.description')}
          </p>
          <Button
            className="mt-8"
            href={`tel:${PHONE.link}`}
            size="large"
            color="white"
            variant="outline"
          >
            {PHONE.display}
          </Button>
        </div>
      </Container>
    </section>
  )
}
