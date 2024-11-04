'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
