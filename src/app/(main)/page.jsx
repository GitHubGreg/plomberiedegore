import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { CallToAction } from '@/components/CallToAction'
import { Reviews } from '@/components/Reviews'
import { Pricing } from '@/components/Pricing'
import { Faqs } from '@/components/Faqs'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs />
    </>
  )
}
