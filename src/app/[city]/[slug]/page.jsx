import { ServicePage } from '@/components/pages/ServicePage'
import { generateServiceMetadata } from '@/lib/metadata'

export default async function Service({ params }) {
  const citySlug = await params.city
  const serviceSlug = await params.slug
  return <ServicePage citySlug={citySlug} serviceSlug={serviceSlug} />
}

export async function generateMetadata(props) {
  return await generateServiceMetadata(props.params, false)
}
