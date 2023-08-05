import Banner from './components/Banner'
import NavigationButtons from './components/NavigationButtons'
import SocialButtons from './components/SocialButtons'

const HomePage = () => {
  return (
    <div className="h-full">
      <Banner />
      <NavigationButtons />
      <SocialButtons />
    </div>
  )
}

export default HomePage
