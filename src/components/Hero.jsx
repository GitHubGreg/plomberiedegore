'use client'

import { useId } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'
import { SERVICES, CITIES, PHONE } from '@/lib/constants'
import { getLocalizedPath } from '@/lib/utils'
import { Button } from './Button'
import { BackgroundIllustration } from './BackgroundIllustration'

export function Hero({ citySlug = 'gore' }) {
  const { t, language } = useLanguage()
  const isEnglish = language === 'en'
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'

  const description = t(`cityDescriptions.${citySlug}`)

  const finalDescription =
    description === `cityDescriptions.${citySlug}`
      ? t('description')
      : description

  const services = SERVICES.map((service) => ({
    id: service.id,
    title: t(`services.${service.id}.title`),
  }))

  return (
    <div className="overflow-hidden py-20 sm:py-32">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              {isEnglish ? `${city} Plumbing` : `Plomberie de ${city}`}
            </h1>
            <p className="mt-6 text-lg text-gray-600">{finalDescription}</p>
            <Button
              href={`tel:${PHONE.link}`}
              className="mt-8"
              size="large"
              color="blueGradient"
            >
              {PHONE.display}
            </Button>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:px-0 lg:pt-10 xl:-bottom-32">
              <div className="mx-auto flex max-w-[366px] items-center justify-center">
                <Image
                  src="/images/logo.svg"
                  alt={isEnglish ? `${city} Plumbing` : `Plomberie de ${city}`}
                  width={200}
                  height={200}
                  className="animate-float mt-8 h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <h2 className="text-2xl font-medium tracking-tight text-gray-900">
              {t('services.sectors.title')}
            </h2>
            <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-4 gap-y-4 lg:mx-0 lg:justify-start">
              {services.map((service) => (
                <Button
                  key={service.id}
                  href={getLocalizedPath(
                    `${citySlug}/${SERVICES.find((s) => s.id === service.id).slug}`,
                    language,
                  )}
                  size="small"
                  color="white"
                  variant="outline"
                >
                  {service.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
