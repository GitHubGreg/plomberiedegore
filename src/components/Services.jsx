'use client'

import { useId } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Container } from '@/components/Container'
import { PHONE, SERVICES } from '@/lib/constants'
import { OtherServices } from '@/components/OtherServices'
import Link from 'next/link'
import { CITIES } from '@/lib/constants'
import { useParams } from 'next/navigation'
import { getLocalizedPath } from '@/lib/utils'
import { Button } from './Button'
import { BackgroundIllustration } from './BackgroundIllustration'

function ServiceSection({ service, image, isEven, citySlug }) {
  const { t, language } = useLanguage()
  const isEnglish = language === 'en'
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'
  const params = useParams()

  // Check if we're currently on this service's page
  const isCurrentService =
    params?.slug === SERVICES.find((s) => s.id === service)?.slug

  // Get the city-specific description
  const description =
    t(`services.${service}.descriptions.${citySlug}`) ||
    t(`services.${service}.description`)

  return (
    <section
      id={service}
      className="relative scroll-mt-24 overflow-hidden py-24"
    >
      <Container className="relative">
        <div className={`lg:grid lg:grid-cols-2 lg:gap-16`}>
          <div className={`relative z-10 ${isEven ? 'lg:order-2' : ''}`}>
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              {t(`services.${service}.title`)}{' '}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{description}</p>
            {isCurrentService ? (
              <Button
                href={`tel:${PHONE.link}`}
                className="mt-8"
                size="large"
                color="blueGradient"
              >
                {PHONE.display}
              </Button>
            ) : (
              <div className="mt-8">
                <Button
                  href={getLocalizedPath(
                    `${citySlug}/${SERVICES.find((s) => s.id === service).slug}`,
                    language,
                  )}
                  size="small"
                  color="blueGradient"
                  variant="solid"
                >
                  {isEnglish ? 'Learn more' : 'En savoir plus'}
                </Button>
              </div>
            )}
          </div>

          <div
            className={`relative mt-10 lg:mt-14 ${isEven ? 'lg:order-1' : ''}`}
          >
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[500px] w-[500px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:px-0 lg:pt-10 xl:-bottom-32">
              <div className="mx-auto flex max-w-[366px] items-center justify-center">
                <Image
                  src={image}
                  alt={t(`services.${service}.title`)}
                  width={800}
                  height={600}
                  className="relative z-10 mt-2 h-auto w-full rounded-2xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function Services({ serviceId = null, citySlug = 'gore' }) {
  return (
    <div className="relative">
      <div className="relative z-10 space-y-4">
        {SERVICES.filter(
          (service) => !serviceId || service.id === serviceId,
        ).map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service.id}
            image={`/images/services/${service.slug}.jpg`}
            isEven={index % 2 === 1}
            citySlug={citySlug}
          />
        ))}
      </div>
    </div>
  )
}
