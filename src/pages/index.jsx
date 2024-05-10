import HomePage from '@components/modules/HomePage'
import usePortfolioContext from '@lib/Context/PortfolioContext'
import { API_URL, PORT } from 'constants/environments'

export const getServerSideProps = async () => {
  //const resUser = await fetch(`${API_URL}:${PORT}/users`)
  //const resExperiences = await fetch(`${API_URL}:${PORT}/experiences`)
  //const userData = resUser.json()
  //const experiences = resExperiences.json()

  return {
    props: {}
  }
}

const Home = ({ userData, experiences }) => {
  const {
    portfolioContent: {
      content: { homePageText },
      language
    },
    setHomeContent
  } = usePortfolioContext()

  return <HomePage homeData={homePageText} setHomeData={setHomeContent} language={language} />
}

export default Home
