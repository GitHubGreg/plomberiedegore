import { ServicePage } from '@/components/pages/ServicePage'
import { generateServiceMetadata } from '@/lib/metadata'

export default async function Service({ params: paramsPromise }) {
  const params = await paramsPromise
  return <ServicePage citySlug={params.city} serviceSlug={params.slug} />
}

export async function generateMetadata(props) {
  const params = await props.params
  return await generateServiceMetadata(params, false)
}
