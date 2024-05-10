import Link from 'next/link'

import SelectLanguage from '../SelectLanguage'
import ThemeButton from '../ThemeButton'

import { PAGE_ROUTES } from 'constants/routes'
import { LANGUAGES } from 'constants/languages'

const ModalMobile = ({ language, setLanguage, handleMobileMenu }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-opacity-70 bg-dark-background absolute inset-0"></div>
      <div className="p-4 rounded-lg shadow-md max-w-md relative bg-firstAccent">
        <button className="absolute top-2 right-2 p-2" onClick={handleMobileMenu}>
          <svg
            className="w-6 h-6"
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
        <ul>
          {PAGE_ROUTES.map((pageLink, index) => (
            <li key={index}>
              <Link
                href={pageLink.href}
                className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0`}
                aria-current="page"
              >
                {language === LANGUAGES.spanish ? pageLink.spanishText : pageLink.englishText}
              </Link>
            </li>
          ))}
          <SelectLanguage currentLanguage={language} setCurrentLanguage={setLanguage} />
          <div className="flex justify-center">
            <ThemeButton />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default ModalMobile
