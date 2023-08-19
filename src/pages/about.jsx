import AboutPage from '@components/modules/AboutPage'
import usePortfolioContext from '@lib/Context/PortfolioContext'

const About = () => {
  const {
    portfolioContent: {
      content: { aboutPageText },
      language
    },
    setAboutContent
  } = usePortfolioContext()

  return <AboutPage aboutData={aboutPageText} setAboutData={setAboutContent} language={language} />
}

export default About

export const getServerSideProps = async (context) => {
  return {
    props: {
      data: {}
    }
  }
}
