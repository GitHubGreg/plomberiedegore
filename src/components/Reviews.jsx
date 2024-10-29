'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Container } from '@/components/Container'

const reviewsContent = {
  fr: [
    {
      title: 'Service rapide et professionnel',
      body: "Une fuite d'eau urgente à 23h, ils sont venus en 30 minutes. Travail impeccable et prix raisonnable. Je recommande fortement!",
      author: 'Marcel T.',
      rating: 5,
    },
    {
      title: 'Excellente équipe',
      body: 'Ils ont refait toute la plomberie de ma salle de bain. Propre, efficace et dans les temps. Vraiment satisfait du résultat.',
      author: 'Sylvie B.',
      rating: 5,
    },
    {
      title: 'Travail de qualité',
      body: "Mon drain était complètement bouché, ils ont utilisé une caméra pour trouver le problème et l'ont réglé rapidement. Très professionnel!",
      author: 'Jean-Pierre L.',
      rating: 5,
    },
    {
      title: 'Service fiable',
      body: 'Deuxième fois que je fais appel à eux pour des réparations. Toujours ponctuels et efficaces. Prix honnêtes.',
      author: 'Françoise M.',
      rating: 5,
    },
    {
      title: 'Experts en plomberie',
      body: "Installation complète pour ma nouvelle maison. Tout a été fait selon les normes et ils ont même donné des conseils utiles pour l'entretien.",
      author: 'Robert D.',
      rating: 5,
    },
    {
      title: "Service d'urgence excellent",
      body: "Un dégât d'eau en pleine nuit, ils sont venus tout de suite. Très rassurant d'avoir une équipe aussi compétente!",
      author: 'Louise P.',
      rating: 5,
    },
    {
      title: 'Recommandé à 100%',
      body: 'Remplacement de chauffe-eau fait proprement et rapidement. Excellent service client et suivi.',
      author: 'Michel G.',
      rating: 5,
    },
    {
      title: 'Très satisfait',
      body: "Installation d'une pompe de puisard. Travail soigné et bien expliqué. Je recommande!",
      author: 'Pierre C.',
      rating: 5,
    },
    {
      title: 'Service exceptionnel',
      body: 'Rénovation complète de salle de bain. Équipe professionnelle et travail de qualité. Très content du résultat!',
      author: 'André B.',
      rating: 5,
    },
    {
      title: 'Excellent travail',
      body: "Problème de pression d'eau réglé rapidement. Service courtois et professionnel. Prix raisonnable.",
      author: 'Marie-Claude R.',
      rating: 5,
    },
  ],
  en: [
    {
      title: 'Fast and professional service',
      body: 'Emergency water leak at 11 PM, they came within 30 minutes. Impeccable work and reasonable price. Highly recommend!',
      author: 'Marcel T.',
      rating: 5,
    },
    {
      title: 'Excellent team',
      body: 'They redid all the plumbing in my bathroom. Clean, efficient and on time. Really satisfied with the result.',
      author: 'Sylvie B.',
      rating: 5,
    },
    {
      title: 'Quality work',
      body: 'My drain was completely blocked, they used a camera to find the problem and fixed it quickly. Very professional!',
      author: 'Jean-Pierre L.',
      rating: 5,
    },
    {
      title: 'Reliable service',
      body: 'Second time using them for repairs. Always punctual and efficient. Honest pricing.',
      author: 'Françoise M.',
      rating: 5,
    },
    {
      title: 'Plumbing experts',
      body: 'Complete installation for my new house. Everything was done to code and they even gave useful maintenance tips.',
      author: 'Robert D.',
      rating: 5,
    },
    {
      title: 'Excellent emergency service',
      body: 'Had a water damage in the middle of the night, they came right away. Very reassuring to have such a competent team!',
      author: 'Louise P.',
      rating: 5,
    },
    {
      title: '100% Recommended',
      body: 'Water heater replacement done cleanly and quickly. Excellent customer service and follow-up.',
      author: 'Michel G.',
      rating: 5,
    },
    {
      title: 'Very satisfied',
      body: 'Sump pump installation. Careful work and well explained. I recommend!',
      author: 'Pierre C.',
      rating: 5,
    },
    {
      title: 'Exceptional service',
      body: 'Complete bathroom renovation. Professional team and quality work. Very happy with the result!',
      author: 'André B.',
      rating: 5,
    },
    {
      title: 'Excellent work',
      body: 'Water pressure problem fixed quickly. Courteous and professional service. Reasonable price.',
      author: 'Marie-Claude R.',
      rating: 5,
    },
  ],
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  const { language } = useLanguage()
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let reviews = language === 'en' ? reviewsContent.en : reviewsContent.fr
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  const { t } = useLanguage()

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-gray-50 pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          {t('reviews')}
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          {t('reviewsSubtitle')}
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
