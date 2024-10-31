import { CallToAction } from '@/components/CallToAction'
import { Hero } from '@/components/Hero'
import { Reviews } from '@/components/Reviews'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Reviews />
      <CallToAction />
    </>
  )
}
