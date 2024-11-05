import { HomePage } from '@/components/pages/HomePage'
import { generateHomeMetadata } from '@/lib/metadata'

export const metadata = generateHomeMetadata(false)

export default function Home() {
  return <HomePage />
}
