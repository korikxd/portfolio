import { useEffect, useState, useRef } from 'react'
import { useTheme } from 'next-themes'
import { IoMdMoon as MoonIcon } from 'react-icons/io'
import { IoSunnyOutline as SunIcon } from 'react-icons/io5'

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme, theme } = useTheme()
  const buttonRef = useRef(null)
  const previousThemeRef = useRef(theme)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (previousThemeRef.current !== theme && buttonRef.current) {
      buttonRef.current.classList.add('no-theme-transition')
      requestAnimationFrame(() => {
        buttonRef.current?.classList.remove('no-theme-transition')
      })
      previousThemeRef.current = theme
    }
  }, [theme])

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="h-10 w-10 rounded-lg p-2 flex items-center justify-center text-light-text dark:text-dark-text hover:bg-firstAccent/20 focus:outline-none focus:ring-2 focus:ring-firstAccent"
        disabled
      >
        <MoonIcon className="text-xl" />
      </button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      ref={buttonRef}
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-10 w-10 rounded-lg p-2 flex items-center justify-center text-light-text dark:text-dark-text hover:bg-firstAccent/20 focus:outline-none focus:ring-2 focus:ring-firstAccent"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <SunIcon className="text-xl transition-transform hover:rotate-180 duration-500" />
      ) : (
        <MoonIcon className="text-xl transition-transform hover:-rotate-12 duration-500" />
      )}
    </button>
  )
}

export default ThemeButton
