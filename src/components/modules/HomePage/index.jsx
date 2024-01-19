import { useEffect } from 'react'
import Banner from './components/Banner'
import NavigationButtons from './components/NavigationButtons'
import SocialButtons from './components/SocialButtons'
import { ENGLISH_TEXTS, SPANISH_TEXTS } from './components/NavigationButtons/constants'

const HomePage = ({ homeData, setHomeData, language }) => {
  useEffect(() => {
    if (language !== 'ESPAÑOL') {
      setHomeData({ ...homeData, navigationButtons: ENGLISH_TEXTS })
    } else {
      setHomeData({ ...homeData, navigationButtons: SPANISH_TEXTS })
    }
  }, [language])

  return (
    <div className={`h-full`}>
      <Banner />
      <NavigationButtons buttons={homeData.navigationButtons} />
      <SocialButtons socials={homeData.socials} />
    </div>
  )
}

export default HomePage
