import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

const roles = [
  'Front End Developer',
  'Full Stack Developer',
  'Mobile Developer',
  '(Aspiring) Game Developer'
]

const Banner = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const { theme } = useTheme()
  const textRef = useRef(null)
  const previousThemeRef = useRef(theme)

  useEffect(() => {
    if (previousThemeRef.current !== theme && textRef.current) {
      textRef.current.classList.add('no-theme-transition')
      requestAnimationFrame(() => {
        textRef.current?.classList.remove('no-theme-transition')
      })
      previousThemeRef.current = theme
    }
  }, [theme])

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let timeout

    if (!isDeleting && displayText === currentRole) {
      // Pausa antes de empezar a borrar
      timeout = setTimeout(() => {
        setIsDeleting(true)
        setTypingSpeed(50)
      }, 2000)
    } else if (isDeleting && displayText === '') {
      // Cambiar al siguiente rol
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      setTypingSpeed(100)
    } else if (!isDeleting) {
      // Escribiendo
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
      }, typingSpeed)
    } else {
      // Borrando
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed])

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-center bg-gradient-to-r from-firstAccent via-orange-400 to-firstAccent bg-clip-text text-transparent animate-gradient">
        Gabriel García Mercado
      </h1>
      <div className="h-16 md:h-20 flex items-center justify-center">
        <p
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-light-text dark:text-dark-text flex items-center"
        >
          <span className="inline-block min-w-[1ch]">{displayText}</span>
          <span className="inline-block w-1 h-6 md:h-8 lg:h-10 bg-light-text dark:bg-dark-text ml-2 animate-pulse self-center"></span>
        </p>
      </div>
    </div>
  )
}

export default Banner
