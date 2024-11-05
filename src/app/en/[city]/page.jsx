import { CityPage } from '@/components/pages/CityPage'

export default async function EnglishCity({ params: paramsPromise }) {
  const params = await paramsPromise
  return <CityPage citySlug={params.city} />
}
