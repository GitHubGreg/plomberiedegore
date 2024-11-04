import { CityPage } from '@/components/pages/CityPage'

export default function EnglishCity({ params }) {
  return <CityPage citySlug={params.city} />
}
