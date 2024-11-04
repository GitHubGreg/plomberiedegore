import { redirect } from 'next/navigation'
import { Hero } from '@/components/Hero'
import { CallToAction } from '@/components/CallToAction'
import { Header } from '@/components/Header'
import { Services } from '@/components/Services'

export default function EnglishHome() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CallToAction />
      </main>
    </>
  )
}
