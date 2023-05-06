import Link from 'next/link'
import usePortfolioContext from '@lib/Context/PortfolioContext'
import { useRouter } from 'next/router'

import SelectLanguage from './components/SelectLanguage'
import ThemeButton from './components/ThemeButton'

import styles from './styles.module.less'

const NavigationMenu = () => {

  const { currentLanguage } = usePortfolioContext()
  const router = useRouter()
  const currentRoute = router.pathname

  const homeItems = () => (
    null
  )

  const defaultItems = () => (
    <div className={styles.menu_container}>
      <div>
        <Link href={'/'} className={styles.nav_item}>
          {currentLanguage === 'ESPAÑOL' ? 'Inicio' : 'Home'}
        </Link>
        <Link href={'/about'} className={styles.nav_item}>
          {currentLanguage === 'ESPAÑOL' ? 'Acerca' : 'About'}
        </Link>
        <Link href={'/projects'} className={styles.nav_item}>
          {currentLanguage === 'ESPAÑOL' ? 'Proyectos' : 'Projects'}
        </Link>
        <Link href={'/contact'} className={styles.nav_item}>
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
