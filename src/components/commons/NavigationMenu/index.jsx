import Link from 'next/link'
import usePortfolioContext from '@lib/Context/PortfolioContext'
import { useRouter } from 'next/router'

import SelectLanguage from './components/SelectLanguage'
import ThemeButton from './components/ThemeButton'


const NavigationMenu = () => {

  const { currentLanguage } = usePortfolioContext()
  const router = useRouter()
  const currentRoute = router.pathname

  const homeItems = () => (
    null
  )

  const defaultItems = () => (
    <div>
      <div>
        <Link href={'/'}>
          {currentLanguage === 'ESPAÑOL' ? 'Inicio' : 'Home'}
        </Link>
        <Link href={'/about'}>
          {currentLanguage === 'ESPAÑOL' ? 'Acerca' : 'About'}
        </Link>
        <Link href={'/projects'}>
          {currentLanguage === 'ESPAÑOL' ? 'Proyectos' : 'Projects'}
        </Link>
        <Link href={'/contact'}>
          {currentLanguage === 'ESPAÑOL' ? 'Contacto' : 'Contact'}
        </Link>
        {/* <SelectLanguage/> */}
        {/* <ThemeButton/> */}
      </div>
    </div>
  )

  const itemsToRender = () => currentRoute === '/' ? homeItems() : defaultItems()

  return (
    itemsToRender()
  )
}

export default NavigationMenu
