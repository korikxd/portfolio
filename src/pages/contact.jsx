import ContactPage from '@components/modules/ContactPage'
import usePortfolioContext from '@lib/Context/PortfolioContext'

const Contact = () => {
  const {
    portfolioContent: {
      content: { contactPageText },
      language
    },
    setContactContent
  } = usePortfolioContext()

  return <ContactPage contactData={contactPageText} setContactData={setContactContent} language={language} />
}

export default Contact

export const getServerSideProps = async (context) => {
  return {
    props: {
      data: {}
    }
  }
}
