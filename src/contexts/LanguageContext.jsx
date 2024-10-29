'use client'

import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    features: 'Features',
    reviews: 'Reviews',
    pricing: 'Pricing',
    faqs: 'FAQs',
    login: 'Français',
    // Add other translations here
  },
  fr: {
    features: 'Fonctionnalités',
    reviews: 'Avis',
    pricing: 'Tarifs',
    faqs: 'FAQ',
    login: 'English',
    // Add other translations here
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr') // Default to French

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'fr' ? 'en' : 'fr'))
  }

  const t = (key) => translations[language][key]

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
