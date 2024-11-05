'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
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
  const { t, language, toggleLanguage } = useLanguage()
  const pathname = usePathname()
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

  const handleLanguageToggle = () => {
    toggleLanguage()
  }

  const getLanguageToggleHref = () => {
    if (language === 'fr') {
      // Going to English
      return `/en${pathname}`
    } else {
      // Going to French
      if (pathname === '/en' || pathname === '/en/') {
        return '/'
      }
      return pathname.replace(/^\/en\//, '/')
    }
  }

  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex min-h-[400px] flex-col gap-y-12 pb-6 pt-16 md:flex-row">
          {/* Left side - Services for current city */}
          <div className="w-full md:mr-10 md:w-[190px] md:flex-none">
            <div className="mb-6 flex justify-center text-gray-900 md:justify-end">
              <h2 className="text-base font-semibold">
                <Link href={`/${citySlug}`} className="">
                  {isEnglish
                    ? `Plumbing services in ${currentCity}`
                    : `Services de plomberie à ${currentCity}`}
                </Link>
              </h2>
            </div>

            <nav className="flex flex-col items-center gap-4 md:items-start">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={getLocalizedPath(
                    `${citySlug}/${service.slug}`,
                    language,
                  )}
                  className="inline-block w-fit text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  {t(`services.${service.id}.title`)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center - Map */}
          <div className="h-[400px] w-full flex-1 md:h-auto">
            <iframe
              className="h-[400px] w-full rounded-lg md:h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${mapLocation}`}
            ></iframe>
          </div>

          {/* Right side - Other Cities */}
          <div className="w-full md:ml-10 md:w-[190px] md:flex-none">
            <div className="mb-6 flex justify-center text-gray-900 md:justify-end">
              <h2 className="text-base font-semibold">
                {t('otherCitiesWeServe')}
              </h2>
            </div>

            <nav className="flex flex-col items-center gap-4 md:items-end">
              {otherCities.map((city) => (
                <Link
                  key={city.id}
                  href={getLocalizedPath(city.slug, language)}
                  className="w-fit text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  {city.id}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>

      {/* Contact Section */}
      <div className="mt-6">
        <Container>
          <div className="pb-4 pt-5">
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
        <div className="mt-8 pb-2">
          <p className="text-center text-xs text-gray-400">
            ©{new Date().getFullYear()}{' '}
            <Link
              href={'/'}
              className="underline transition-colors hover:text-gray-900 hover:no-underline"
            >
              {t('title')}
            </Link>
            . {t('all_rights_reserved')}{' '}
            <Link
              href={getLanguageToggleHref()}
              onClick={handleLanguageToggle}
              className="underline hover:text-gray-900 hover:no-underline"
            >
              {t('otherLanguage')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
