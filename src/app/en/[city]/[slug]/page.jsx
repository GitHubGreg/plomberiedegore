import { ServicePage } from '@/components/pages/ServicePage'

export default function EnglishService({ params }) {
  return <ServicePage citySlug={params.city} serviceSlug={params.slug} />
}
