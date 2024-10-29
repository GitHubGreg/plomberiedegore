'use client'

import { createContext, useContext, useState } from 'react'
import { siteContent } from '@/content/siteContent'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr') // Default to French

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'fr' ? 'en' : 'fr'))
  }

  const t = (key) => {
    // Split the key by dots to handle nested objects
    const keys = key.split('.')
    let value = siteContent[language]

    // Traverse the nested objects
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation missing for key: ${key}`)
        return key
      }
    }

    return value
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
