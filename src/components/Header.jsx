'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter, usePathname, useParams } from 'next/navigation'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { useLanguage } from '@/contexts/LanguageContext'
import { PHONE } from '@/lib/constants'
import { getLocalizedPath } from '@/lib/utils'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(props) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    />
  )
}

export function Header() {
  const { t, toggleLanguage, language } = useLanguage()
  const pathname = usePathname()
  const params = useParams()
  const isEnglish = language === 'en'

  // Get current city from URL params, default to 'gore'
  const citySlug = params?.city || 'gore'

  // Construct home URL based on language and city
  const homeUrl = isEnglish ? `/en/${citySlug}` : `/${citySlug}`

  const handleLanguageToggle = () => {
    toggleLanguage()
  }

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href={homeUrl} aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-2 xl:gap-5">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center lg:gap-2 xl:gap-5">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="flex flex-col space-y-4">
                            <NavLinks />
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Link
                              href={getLocalizedPath(
                                pathname,
                                language === 'en' ? 'fr' : 'en',
                              )}
                              onClick={handleLanguageToggle}
                              className="inline-flex justify-center rounded-lg border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                            >
                              {t('otherLanguage')}
                            </Link>
                            <Button
                              href={`tel:${PHONE.link}`}
                              className="text-sm lg:text-xs xl:text-sm"
                            >
                              {PHONE.display}
                            </Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Link
              href={getLocalizedPath(pathname, language === 'en' ? 'fr' : 'en')}
              onClick={handleLanguageToggle}
              className="hidden justify-center rounded-lg border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 lg:inline-flex lg:text-xs xl:text-sm"
            >
              {t('otherLanguage')}
            </Link>
            <Button
              href={`tel:${PHONE.link}`}
              className="hidden text-sm hover:bg-gray-600 lg:block lg:text-xs xl:text-sm"
            >
              {PHONE.display}
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
