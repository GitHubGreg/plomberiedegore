import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function GoreLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
