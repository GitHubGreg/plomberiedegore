'use client'

import { useId } from 'react'
import { useParams } from 'next/navigation'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import { CITIES } from '@/lib/constants'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function CallToAction() {
  const { t } = useLanguage()
  const params = useParams()
  const isEnglish = t('login') === 'Français'

  const citySlug = params?.city || 'gore'
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'

  return (
    <section
      id="call-to-action"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
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
          <div className="mt-8">
            <a
              href="tel:+14508219663"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400/80"
            >
              (450) 821-9663
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
