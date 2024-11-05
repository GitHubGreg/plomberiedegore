import { LanguageProvider } from '@/contexts/LanguageContext'
import { FontProvider } from '@/components/FontProvider'
import { Layout } from '@/components/Layout'
import { siteContent } from '@/content/siteContent'
import '@/styles/tailwind.css'

export const metadata = {
  title: 'Plomberie de Gore',
  description: siteContent.fr.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <FontProvider>
          <LanguageProvider>
            <Layout>{children}</Layout>
          </LanguageProvider>
        </FontProvider>
      </body>
    </html>
  )
}
