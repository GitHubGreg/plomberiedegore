'use client'
import { BackgroundIllustration } from '@/components/BackgroundIllustration'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { siteContent } from '@/content/siteContent'
import { useLanguage } from '@/contexts/LanguageContext'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const { language, toggleLanguage } = useLanguage()
  const pathname = usePathname()
  const content = siteContent[language].notFound

  return (
    <div>
      <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
        <BackgroundIllustration className="absolute inset-0 z-0 h-full w-full" />
        <div className="relative z-10">
          <p className="text-sm font-semibold text-gray-900">404</p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-900">
            {content.title}
          </h1>
          <p className="mt-2 text-lg text-gray-600">{content.message}</p>
          <Button href="/" variant="outline" className="mt-8">
            {content.button}
          </Button>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
