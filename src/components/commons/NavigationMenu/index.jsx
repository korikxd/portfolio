import Link from 'next/link'
import usePortfolioContext from '@lib/Context/PortfolioContext'
import { useRouter } from 'next/router'

import SelectLanguage from './components/SelectLanguage'
import ThemeButton from './components/ThemeButton'
import { PAGE_ROUTES } from 'constants/routes'

const NavigationMenu = () => {
  const {
    portfolioContent: { language },
    setLanguage
  } = usePortfolioContext()
  const router = useRouter()
  const currentRoute = router.pathname

  const homeItems = () => (
    <div className={`flex items-center text-base leading-5`}>
      <SelectLanguage currentLanguage={language} setCurrentLanguage={setLanguage} />
      <ThemeButton />
    </div>
  )

  const defaultItems = () => (
    <div className={`flex items-center text-base leading-5`}>
      <div className={`hidden sm:block`}>
        {PAGE_ROUTES.map((pageLink, index) => (
          <Link href={pageLink.href} key={index} className={`p-1 font-medium sm:p-4`}>
            {language === 'ESPAÑOL' ? pageLink.spanishText : pageLink.englishText}
          </Link>
        ))}
      </div>
      <SelectLanguage currentLanguage={language} setCurrentLanguage={setLanguage} />
      <ThemeButton />
    </div>
  )

  const itemsToRender = () => (currentRoute === '/' ? homeItems() : defaultItems())

  return itemsToRender()
}

export default NavigationMenu
