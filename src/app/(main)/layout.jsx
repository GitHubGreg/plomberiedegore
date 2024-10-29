import { Layout } from '@/components/Layout'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <Layout>{children}</Layout>
    </LanguageProvider>
  )
}
