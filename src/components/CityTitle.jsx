'use client'

import Image from 'next/image'
import { Container } from '@/components/Container'
import logo from '@/images/logo.svg'
import { useLanguage } from '@/contexts/LanguageContext'
import { CITIES } from '@/lib/constants'

export function CityTitle({ citySlug = 'gore' }) {
  const { language } = useLanguage()
  const isEnglish = language === 'en'
  const city = CITIES.find((c) => c.slug === citySlug)?.id || 'Gore'
  const title = isEnglish ? `${city} Plumbing` : `Plomberie de ${city}`
  return (
    <div className="pt-12">
      <Container>
        <div className="flex items-center justify-center gap-4">
          <Image
            src={logo}
            alt="Logo"
            className="h-12 w-12"
            width={48}
            height={48}
            priority
          />
          <h1 className="text-4xl font-medium tracking-tight text-gray-900">
            {title}
          </h1>
        </div>
      </Container>
    </div>
  )
}
