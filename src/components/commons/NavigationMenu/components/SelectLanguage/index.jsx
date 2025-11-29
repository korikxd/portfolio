import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { LANGUAGES } from './constants'

const SelectLanguage = ({ currentLanguage, setCurrentLanguage }) => {
  const { theme } = useTheme()
  const selectRef = useRef(null)
  const arrowRef = useRef(null)
  const previousThemeRef = useRef(theme)

  useEffect(() => {
    if (previousThemeRef.current !== theme) {
      if (selectRef.current) {
        selectRef.current.classList.add('no-theme-transition')
      }
      if (arrowRef.current) {
        arrowRef.current.classList.add('no-theme-transition')
      }

      requestAnimationFrame(() => {
        selectRef.current?.classList.remove('no-theme-transition')
        arrowRef.current?.classList.remove('no-theme-transition')
      })

      previousThemeRef.current = theme
    }
  }, [theme])

  return (
    <div className="relative inline-block">
      <select
        ref={selectRef}
        value={currentLanguage}
        id="languages"
        className="bg-light-background dark:bg-dark-background border border-light-text/20 dark:border-dark-text/20 text-light-text dark:text-dark-text text-sm rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-firstAccent cursor-pointer hover:border-firstAccent appearance-none"
        onChange={(e) => setCurrentLanguage(e.target.value)}
      >
        {LANGUAGES.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        ref={arrowRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
      >
        <svg
          className="w-4 h-4 text-light-text dark:text-dark-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
}

export default SelectLanguage
