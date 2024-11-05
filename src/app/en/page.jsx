import { HomePage } from '@/components/pages/HomePage'
import { generateHomeMetadata } from '@/lib/metadata'

export const metadata = generateHomeMetadata(true)

export default function EnglishHome() {
  return <HomePage />
}
