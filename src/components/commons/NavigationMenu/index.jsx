import { useCallback, useEffect } from 'react'
import Link from 'next/link'
import { PAGE_ROUTES } from 'constants/routes'
import { useRouter } from 'next/router'

import usePortfolioContext from '@lib/Context/PortfolioContext'

import ModalMobile from './components/ModalMobile'
import SelectLanguage from './components/SelectLanguage'
import ThemeButton from './components/ThemeButton'

const NavigationMenu = () => {
  const {
    portfolioContent: { language, mobileMenu },
    setMobileMenu,
    setLanguage
  } = usePortfolioContext()
  const router = useRouter()
  const currentRoute = router.pathname

  const hideModal = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  useEffect(() => {
    router.events.on('routeChangeStart', hideModal)

    return () => router.events.off('routeChangeStart', hideModal)
  }, [hideModal, router.events])

  const handleMobileMenu = () => setMobileMenu(!mobileMenu)

  const defaultItems = () => (
    <ul className="hidden md:flex font-medium flex-row space-x-6 items-center">
      {PAGE_ROUTES.map((pageLink, index) => {
        const isActive = currentRoute === pageLink.href
        return (
          <li key={index}>
            <Link
              href={pageLink.href}
              className={`relative block py-2 px-4 rounded-lg transition-all duration-300 font-display group ${
                isActive
                  ? 'text-firstAccent font-semibold'
                  : 'text-light-text dark:text-dark-text hover:text-firstAccent'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {language === 'ESPAÑOL' ? pageLink.spanishText : pageLink.englishText}
              {(isActive || (!isActive)) && (
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-firstAccent rounded-full transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                ></span>
              )}
            </Link>
          </li>
        )
      })}
      <li className="flex items-center gap-3 ml-4">
        <SelectLanguage currentLanguage={language} setCurrentLanguage={setLanguage} />
        <ThemeButton />
      </li>
    </ul>
  )

  const itemsToRender = () => (
    <nav className="relative z-50 backdrop-blur-md bg-light-background/80 dark:bg-dark-background/80 shadow-sm">
      <div className="flex items-center justify-end gap-3 px-4 md:px-8 py-4">
        <div className="flex items-center gap-4">
          <button
            data-collapse-toggle="navbar-default"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-light-text dark:text-dark-text hover:bg-firstAccent/20 focus:outline-none focus:ring-2 focus:ring-firstAccent transition-colors"
            type="button"
            aria-controls="navbar-default"
            aria-expanded={mobileMenu ? 'true' : 'false'}
            onClick={handleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="md:flex items-center justify-center">{defaultItems()}</div>
        </div>
        {mobileMenu && (
          <ModalMobile language={language} setLanguage={setLanguage} handleMobileMenu={handleMobileMenu} />
        )}
      </div>
    </nav>
  )

  return itemsToRender()
}

export default NavigationMenu
