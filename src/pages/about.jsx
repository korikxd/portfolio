import AboutPage from '@components/modules/AboutPage'
import usePortfolioContext from '@lib/Context/PortfolioContext'
import { API_URL, PORT } from 'constants/environments'

export const getServerSideProps = async () => {
  //const res = await fetch(`${API_URL}:${PORT}/users`)
  //const userData = await res.json()

  return {
    props: {
      //userData
    }
  }
}

const About = ({ userData }) => {
  const {
    portfolioContent: {
      content: { aboutPageText },
      language
    },
    setAboutContent
  } = usePortfolioContext()

  return <AboutPage userData={[]} aboutData={aboutPageText} setAboutData={setAboutContent} language={language} />
}

export default About
