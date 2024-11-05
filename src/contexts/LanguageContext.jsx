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
    try {
      const keys = key.split('.')
      let value = siteContent[language]

      for (const k of keys) {
        if (!value || typeof value !== 'object') {
          console.warn(`Translation path broken at: ${k} for key: ${key}`)
          return key
        }
        // Handle both regular properties and those with dashes
        value = value[k]
      }

      // If we got undefined or the value is an object (not a string/number), return the key
      if (value === undefined || typeof value === 'object') {
        console.warn(`No translation found for: ${key}`)
        return key
      }

      return value
    } catch (error) {
      console.warn(`Error getting translation for: ${key}`, error)
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
