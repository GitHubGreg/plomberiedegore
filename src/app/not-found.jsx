'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { siteContent } from '@/content/siteContent'
import { useLanguage } from '@/contexts/LanguageContext'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const { language, toggleLanguage } = useLanguage()
  const pathname = usePathname()
  const content = siteContent[language].notFound

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
    <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
      <p className="text-sm font-semibold text-gray-900">404</p>
      <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-900">
        {content.title}
      </h1>
      <p className="mt-2 text-lg text-gray-600">{content.message}</p>
      <Button href="/" variant="outline" className="mt-8">
        {content.button}
      </Button>
    </Container>
  )
}
