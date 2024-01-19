import HomePage from '@components/modules/HomePage'
import usePortfolioContext from '@lib/Context/PortfolioContext'

const Home = () => {
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

export const getServerSideProps = async (context) => {
  return {
    props: {
      data: {}
    }
  }
}
