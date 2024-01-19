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

  const renderHomeItems = () => (
    <>
      <SelectLanguage currentLanguage={language} setCurrentLanguage={setLanguage} />
      <ThemeButton />
    </>
  )

  const defaultItems = () => (
    <ul
      className={`font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ${'hidden md:flex'}`}
    >
      {PAGE_ROUTES.map((pageLink, index) => (
        <li className={``} key={index}>
          <Link
            href={pageLink.href}
            className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}
            aria-current="page"
          >
            {language === 'ESPAÑOL' ? pageLink.spanishText : pageLink.englishText}
          </Link>
        </li>
      ))}
      <SelectLanguage currentLanguage={language} setCurrentLanguage={setLanguage} />
      <ThemeButton />
    </ul>
  )

  const itemsToRender = () => (
    <nav>
      <div className={`max-w-screen-xl flex flex-wrap items-center gap-3 mx-auto p-4`}>
        {currentRoute !== '/' && (
          <>
            <button
              data-collapse-toggle="navbar-default"
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
              type="button"
              aria-controls="navbar-default"
              aria-expanded={mobileMenu ? 'true' : 'false'}
              onClick={handleMobileMenu}
            >
              <svg
                className={`w-5 h-5`}
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
            {mobileMenu && (
              <ModalMobile language={language} setLanguage={setLanguage} handleMobileMenu={handleMobileMenu} />
            )}
          </>
        )}
        <div className={`md:flex items-center justify-center ${mobileMenu ? 'hidden' : 'block'} `}>
          {currentRoute === '/' ? renderHomeItems() : defaultItems()}
        </div>
      </div>
    </nav>
  )

  return itemsToRender()
}

export default NavigationMenu
