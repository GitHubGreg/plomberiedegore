'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { SERVICES, CITIES } from '@/lib/constants'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { useLanguage } from '@/contexts/LanguageContext'
import { getLocalizedPath } from '@/lib/utils'

export function Footer() {
  const { t, language } = useLanguage()
  const isEnglish = language === 'en'

  const params = useParams()
  const citySlug = params?.city || 'gore'
  const currentCity = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'
  const otherCities = CITIES.filter((city) => city.slug !== citySlug)

  // Use specific address for Gore, general city name for other cities
  const mapLocation =
    citySlug === 'gore'
      ? '6+Rue+Claudine,Gore,QC+J0V+1K0'
      : `${currentCity},QC,Canada`

  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex min-h-[400px] flex-row gap-y-12 pb-6 pt-16">
          {/* Left side - Services for current city */}
          <div className="mr-10 w-fit flex-none">
            <div className="mb-6 flex items-center text-gray-900">
              <div className="mr-4 text-left">
                <Link href={`/${citySlug}`} className="text-base font-semibold">
                  {currentCity}
                </Link>
              </div>
            </div>

            <nav className="flex flex-col gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={getLocalizedPath(
                    `${citySlug}/${service.slug}`,
                    language,
                  )}
                  className="inline-block w-fit text-sm text-gray-500 hover:text-gray-900"
                >
                  {t(`services.${service.id}.title`)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - Map */}
          <div className="h-[400px] flex-1 lg:h-auto">
            <iframe
              className="h-full w-full rounded-lg"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${mapLocation}`}
            ></iframe>
          </div>
        </div>

        {/* City Navigation */}
        <div className="border-t border-gray-200 py-8">
          <div className="mb-6 block text-center">
            <div className="text-base font-semibold">
              {t('otherCitiesWeServe')}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {otherCities.map((city) => (
              <Link
                key={city.id}
                href={getLocalizedPath(city.slug, language)}
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                {city.id}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-8">
          <p className="text-center text-sm text-gray-500">
            ©{new Date().getFullYear()} {t('title')}.{' '}
            {t('all_rights_reserved')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
