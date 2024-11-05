import { ServicePage } from '@/components/pages/ServicePage'
import { generateServiceMetadata } from '@/lib/metadata'

export default function EnglishService({ params }) {
  return <ServicePage citySlug={params.city} serviceSlug={params.slug} />
}

export async function generateMetadata(props) {
  return generateServiceMetadata(props.params, true)
}
