import Link from 'next/link'

import SelectLanguage from '../SelectLanguage'
import ThemeButton from '../ThemeButton'

import { PAGE_ROUTES } from 'constants/routes'

const ModalMobile = ({ language, setLanguage, handleMobileMenu }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-opacity-70 bg-black absolute inset-0"></div>
      {/* TODO Verify color */}
      <div className="p-4 rounded-lg shadow-md max-w-md relative">
        <button className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800" onClick={handleMobileMenu}>
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
                className={`block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}
                aria-current="page"
              >
                {language === 'ESPAÑOL' ? pageLink.spanishText : pageLink.englishText}
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
