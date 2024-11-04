import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { siteContent } from '@/content/siteContent'

import '@/styles/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plomberie de Gore',
  description: siteContent.fr.description,
}

export default function EnglishLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
