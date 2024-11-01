'use client'

import { useId } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Container } from '@/components/Container'

function BackgroundIllustration() {
  const gridSize = 20 // Number of squares in each row/column
  const squares = []

  // Generate grid of squares
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      squares.push(
        <rect
          key={`${i}-${j}`}
          x={i * 50}
          y={j * 50}
          width="40"
          height="40"
          className={`animate-flicker`}
          fill="#06b6d4"
          style={{
            animationDelay: `${(i + j) * 0.1}s`,
          }}
        />,
      )
    }
  }

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <svg
        viewBox={`0 0 ${gridSize * 50} ${gridSize * 50}`}
        className="h-full w-full opacity-[0.15]"
        preserveAspectRatio="xMidYMid slice"
      >
        {squares}
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
      <BackgroundIllustration />
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
