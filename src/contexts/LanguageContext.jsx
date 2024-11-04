'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { siteContent } from '@/content/siteContent'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const pathname = usePathname()
  const [language, setLanguage] = useState('fr')

  useEffect(() => {
    // Set initial language based on URL
    const isEnglishRoute = pathname.startsWith('/en')
    setLanguage(isEnglishRoute ? 'en' : 'fr')
  }, [pathname])

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = siteContent[language]
    for (const k of keys) {
      value = value[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
