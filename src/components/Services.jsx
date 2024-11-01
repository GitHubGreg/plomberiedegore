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
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
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
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:px-0 lg:pt-10 xl:-bottom-32">
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
    <div className="space-y-4">
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service.id}
          image={service.image}
          isEven={index % 2 === 1}
        />
      ))}
    </div>
  )
}
