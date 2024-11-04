import { LanguageProvider } from '@/contexts/LanguageContext'
import { FontProvider } from '@/components/FontProvider'
import { siteContent } from '@/content/siteContent'

import '@/styles/tailwind.css'

export const metadata = {
  title: 'Plomberie de Gore',
  description: siteContent.fr.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <FontProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </FontProvider>
      </body>
    </html>
  )
}
