'use client'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export function FontProvider({ children }) {
  return <div className={`${inter.variable} font-sans`}>{children}</div>
}
