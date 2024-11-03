'use client'

import Image from 'next/image'
import Link from 'next/link'

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

  const services = [
    'plumbing',
    'newConstruction',
    'renovation',
    'excavation',
    'drainCleaning',
    'emergency',
    'pumps',
    'wells',
  ]

  const isEnglish = t('login') === 'Français'

  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-start lg:py-16">
          {/* Left side - Services */}
          <div>
            <nav className="flex flex-col gap-4">
              {services.map((service) => (
                <Link
                  key={service}
                  href={`/#${service}`}
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  {t(`services.${service}.title`)}{' '}
                  {isEnglish ? 'in Gore' : 'à Gore'}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - Title and Map */}
          <div className="flex flex-col items-end">
            <div className="mb-6 flex items-center text-gray-900">
              <div className="mr-4 text-right">
                <p className="text-base font-semibold">Pocket</p>
                <p className="mt-1 text-sm">Plomberie de Gore</p>
              </div>
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
            </div>

            <div className="mb-6 h-[300px] w-full max-w-[400px] overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=6+Rue+Claudine,Gore,QC+J0V+1K0`}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label={isEnglish ? 'Email address' : 'Adresse courriel'}
              placeholder={isEnglish ? 'Email address' : 'Adresse courriel'}
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">
                {isEnglish
                  ? 'Join our newsletter'
                  : 'Rejoignez notre infolettre'}
              </span>
              <span className="lg:hidden">
                {isEnglish ? 'Join newsletter' : 'Rejoindre'}
              </span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            {t('copyright')} {new Date().getFullYear()}.{' '}
            {t('all_rights_reserved')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
