import { LanguageProvider } from '@/contexts/LanguageContext'
import { FontProvider } from '@/components/FontProvider'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'

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
