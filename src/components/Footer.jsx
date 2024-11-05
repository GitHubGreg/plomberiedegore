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

        {/* Contact Section */}
        <div className="border-t border-gray-200 py-12">
          <h2 className="mb-8 text-center text-xl font-semibold">
            {isEnglish ? 'Contact Us' : 'Nous Joindre'}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <a
                href={`tel:${PHONE.link}`}
                className="text-lg font-medium text-gray-900 hover:text-blue-600"
              >
                {PHONE.display}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <a
                href={`mailto:${EMAIL.link}`}
                className="text-lg font-medium text-gray-900 hover:text-blue-600"
              >
                {EMAIL.display}
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <a
                href={ADDRESS.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-lg font-medium text-gray-900 hover:text-blue-600"
              >
                {ADDRESS.display}
              </a>
            </div>
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
