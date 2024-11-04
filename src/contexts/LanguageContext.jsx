'use client'

import { createContext, useContext, useState } from 'react'
import { siteContent } from '@/content/siteContent'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('fr')

  const toggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'))
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = siteContent[currentLanguage]
    for (const k of keys) {
      value = value[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
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
