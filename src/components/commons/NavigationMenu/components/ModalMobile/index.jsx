import Link from 'next/link'

import SelectLanguage from '../SelectLanguage'
import ThemeButton from '../ThemeButton'

import { PAGE_ROUTES } from 'constants/routes'

const ModalMobile = ({ language, setLanguage, handleMobileMenu }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 md:hidden">
      <div className="bg-black/50 backdrop-blur-sm absolute inset-0" onClick={handleMobileMenu}></div>
      <div className="p-6 rounded-2xl shadow-2xl max-w-sm w-full mx-4 relative bg-light-background dark:bg-dark-background border border-light-text/10 dark:border-dark-text/10">
        <button
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-firstAccent/20 transition-colors"
          onClick={handleMobileMenu}
        >
          <svg
            className="w-6 h-6 text-light-text dark:text-dark-text"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="space-y-4 mt-8">
          {PAGE_ROUTES.map((pageLink, index) => (
            <li key={index}>
              <Link
                href={pageLink.href}
                className="block py-3 px-4 rounded-lg font-display text-light-text dark:text-dark-text hover:bg-firstAccent/20 hover:text-firstAccent transition-all"
                onClick={handleMobileMenu}
              >
                {language === 'ESPAÑOL' ? pageLink.spanishText : pageLink.englishText}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-light-text/10 dark:border-dark-text/10">
            <div className="flex items-center justify-between gap-4">
              <SelectLanguage currentLanguage={language} setCurrentLanguage={setLanguage} />
              <ThemeButton />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ModalMobile
