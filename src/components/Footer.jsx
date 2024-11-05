'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { SERVICES, CITIES, PHONE, EMAIL, ADDRESS } from '@/lib/constants'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { useLanguage } from '@/contexts/LanguageContext'
import { getLocalizedPath } from '@/lib/utils'
import { ContactLink } from '@/components/ContactLink'

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
        <div className="flex min-h-[400px] flex-col gap-y-12 pb-6 pt-16 lg:flex-row">
          {/* Left side - Services for current city */}
          <div className="w-full lg:mr-10 lg:w-[190px] lg:flex-none">
            <div className="mb-6 flex items-center text-gray-900">
              <div className="mr-4 text-left">
                <Link href={`/${citySlug}`} className="text-base font-semibold">
                  {isEnglish
                    ? `Plumbing services in ${currentCity}`
                    : `Services de plomberie à ${currentCity}`}
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

          {/* Center - Map */}
          <div className="h-[400px] w-full flex-1 lg:h-auto">
            <iframe
              className="h-full w-full rounded-lg"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${mapLocation}`}
            ></iframe>
          </div>

          {/* Right side - Other Cities */}
          <div className="w-full lg:ml-20 lg:w-fit lg:flex-none lg:border-l lg:border-gray-200 lg:pl-8">
            <div className="mb-6 flex items-center text-gray-900">
              <div className="mr-4 text-left">
                <h2 className="text-base font-semibold">
                  {t('otherCitiesWeServe')}
                </h2>
              </div>
            </div>

            <nav className="flex flex-col gap-4">
              {otherCities.map((city) => (
                <Link
                  key={city.id}
                  href={getLocalizedPath(city.slug, language)}
                  className="inline-block w-fit text-sm text-gray-500 hover:text-gray-900"
                >
                  {city.id}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>

      {/* Contact Section */}
      <div className="mt-12 border-b border-t border-gray-200">
        <div className="bg-gray-100">
          <Container>
            <div className="py-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <ContactLink type="phone" href={`tel:${PHONE.link}`}>
                  {PHONE.display}
                </ContactLink>

                <ContactLink type="email" href={`mailto:${EMAIL.link}`}>
                  {EMAIL.display}
                </ContactLink>

                <ContactLink type="address" href={ADDRESS.link} external>
                  {ADDRESS.display}
                </ContactLink>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Copyright */}
      <Container>
        <div className="pb-2 pt-12">
          <p className="text-center text-sm text-gray-500">
            ©{new Date().getFullYear()} {t('title')}.{' '}
            {t('all_rights_reserved')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
