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

    try {
      for (const k of keys) {
        // Handle keys with dashes by using bracket notation
        if (k.includes('-')) {
          value = value[k]
        } else {
          value = value[k]
        }

        // If value is undefined at any point, return the original key
        if (value === undefined) {
          return key
        }
      }
      return value
    } catch (error) {
      // If any error occurs, return the original key
      console.warn(`Translation key not found: ${key}`)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
