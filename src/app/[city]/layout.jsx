import { CITIES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { generateCityMetadata } from '@/lib/metadata'

export default async function CityLayout({ children, params: paramsPromise }) {
  const params = await paramsPromise
  const city = CITIES.find((c) => c.slug === params.city)

  if (!city) {
    notFound()
  }

  return children
}

export async function generateMetadata(props) {
  const params = await props.params
  return await generateCityMetadata(params, false)
}
