'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SERVICES, CITIES } from '@/lib/constants'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
  let t = (text) => text // Default fallback if context fails
  try {
    const context = useLanguage()
    if (context && context.t) {
      t = context.t
    }
  } catch (error) {
    console.warn('Language context not available:', error)
  }

  const isEnglish = t('login') === 'Français'

  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex min-h-[400px] flex-col gap-y-12 pb-6 pt-16 lg:flex-row lg:py-16">
          {/* Left side - Services */}
          <div className="flex-none lg:w-64">
            <div className="mb-6 flex items-center text-gray-900">
              <div className="mr-4 text-left">
                <p className="text-base font-semibold">{t('title')}</p>
              </div>
            </div>

            <nav className="flex flex-col gap-4">
              {CITIES.map((city) => (
                <div key={city.id} className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {city.id}
                  </h3>
                  <nav className="mt-3 flex flex-col gap-2">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={`/${city.slug}/${service.slug}`}
                        className="text-sm text-gray-700 hover:text-gray-900"
                      >
                        {t(`services.${service.id}.title`)}{' '}
                        {isEnglish ? `in ${city.id}` : `à ${city.id}`}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </nav>
          </div>

          {/* Right side - Map */}
          <div className="h-[400px] lg:h-auto lg:flex-1">
            <iframe
              className="h-full w-full rounded-lg"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=6+Rue+Claudine,Gore,QC+J0V+1K0`}
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center border-t border-gray-200 pb-12 pt-8">
          <p className="text-center text-sm text-gray-500">
            ©{new Date().getFullYear()} {t('title')}.{' '}
            {t('all_rights_reserved')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
