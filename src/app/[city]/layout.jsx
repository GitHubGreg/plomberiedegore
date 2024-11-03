import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CITIES } from '@/lib/constants'
import { notFound } from 'next/navigation'

export default function CityLayout({ children, params }) {
  const city = CITIES.find((c) => c.slug === params.city)

  if (!city) {
    notFound()
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
