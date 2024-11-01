'use client'

import { useId } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Container } from '@/components/Container'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M250 250m-200 0a200 200 0 1 0 400 0a200 200 0 1 0 -400 0"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M250 50A200 200 0 0 1 250 450"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="250"
            y1="50"
            x2="250"
            y2="450"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M250 250m-150 0a150 150 0 1 0 300 0a150 150 0 1 0 -300 0"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M250 100A150 150 0 0 1 250 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="250"
            y1="100"
            x2="250"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function ServiceSection({ service, image, isEven }) {
  const { t } = useLanguage()

  return (
    <section
      id={service}
      className="relative scroll-mt-24 overflow-hidden py-24"
    >
      <Container className="relative">
        <div className={`lg:grid lg:grid-cols-2 lg:gap-16`}>
          <div className={`relative z-10 ${isEven ? 'lg:order-2' : ''}`}>
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              {t(`services.${service}.title`)}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t(`services.${service}.description`)}
            </p>
          </div>

          <div
            className={`relative mt-10 lg:mt-0 ${isEven ? 'lg:order-1' : ''}`}
          >
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[500px] w-[500px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:px-0 lg:pt-10 xl:-bottom-32">
              <div className="mx-auto flex max-w-[366px] items-center justify-center">
                <Image
                  src={image}
                  alt={t(`services.${service}.title`)}
                  width={800}
                  height={600}
                  className="relative z-10 h-auto w-full rounded-2xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function Services() {
  const services = [
    { id: 'plumbing', image: '/images/services/plumbing.jpg' },
    { id: 'newConstruction', image: '/images/services/new-construction.jpg' },
    { id: 'renovation', image: '/images/services/renovation.jpg' },
    { id: 'excavation', image: '/images/services/excavation.jpg' },
    { id: 'drainCleaning', image: '/images/services/drain-cleaning.jpg' },
    { id: 'emergency', image: '/images/services/emergency-plumbing.jpg' },
    { id: 'pumps', image: '/images/services/water-pump.jpg' },
    { id: 'wells', image: '/images/services/water-well.jpg' },
  ]

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 space-y-4">
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service.id}
            image={service.image}
            isEven={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  )
}
