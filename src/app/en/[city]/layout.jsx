import { CITIES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { generateCityMetadata } from '@/lib/metadata'

export default function EnglishCityLayout({ children, params }) {
  const city = CITIES.find((c) => c.slug === params.city)

  if (!city) {
    notFound()
  }

  return children
}

export async function generateMetadata(props) {
  return generateCityMetadata(props.params, true)
}

// ... rest of the file stays the same
