'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Container } from '@/components/Container'

function ServiceSection({ title, description, dark = false }) {
  return (
    <section className={`py-20 sm:py-32 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className={`text-3xl font-medium tracking-tight ${
              dark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-6 text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}
          >
            {description}
          </p>
        </div>
      </Container>
    </section>
  )
}

export function Services() {
  const { t } = useLanguage()

  const serviceKeys = [
    'plumbing',
    'newConstruction',
    'renovation',
    'excavation',
    'drainCleaning',
    'emergency',
    'pumps',
    'wells',
    'sectors',
  ]

  return (
    <>
      {serviceKeys.map((key, index) => (
        <ServiceSection
          key={key}
          title={t(`services.${key}.title`)}
          description={t(`services.${key}.description`)}
          dark={index % 2 === 0}
        />
      ))}
    </>
  )
}
