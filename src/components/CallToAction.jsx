'use client'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'

export function CallToAction() {
  const { t } = useLanguage()

  return (
    <section
      id="contact-us"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {t('callToAction.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {t('callToAction.description')}
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="tel:+14508219663"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              (450) 821-9663
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
