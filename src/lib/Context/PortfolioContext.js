import { createContext, useContext, useState } from 'react'
import { PORTFOLIO_DEFAULT_VALUES } from 'constants/portfolioContent'
import PropTypes from 'prop-types'

//Create context object
export const PortfolioContext = createContext()

//Export provider
export const PortfolioProvider = ({ children }) => {
  const [portfolioContent, setPortfolioContent] = useState(PORTFOLIO_DEFAULT_VALUES)

  const setMobileMenu = (value) => {
    setPortfolioContent({
      ...portfolioContent,
      mobileMenu: value
    })
  }

  const setLanguage = (value) => {
    setPortfolioContent({
      ...portfolioContent,
      language: value
    })
  }

  const setHomeContent = (value) => {
    setPortfolioContent({
      ...portfolioContent,
      content: {
        ...portfolioContent.content,
        homePageText: {
          ...portfolioContent.content.homePageText,
          ...value
        }
      }
    })
  }

  const setAboutContent = (value) => {
    setPortfolioContent({
      ...portfolioContent,
      content: {
        ...portfolioContent.content,
        aboutPageText: {
          ...portfolioContent.content.aboutPageText,
          ...value
        }
      }
    })
  }

  const setProjectsContent = (value) => {
    setPortfolioContent({
      ...portfolioContent,
      content: {
        ...portfolioContent.content,
        projectsPageText: {
          ...portfolioContent.content.projectsPageText,
          ...value
        }
      }
    })
  }

  return (
    <PortfolioContext.Provider
      value={{
        portfolioContent,
        setPortfolioContent,
        setMobileMenu,
        setLanguage,
        setHomeContent,
        setAboutContent,
        setProjectsContent
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolioContext() {
  const context = useContext(PortfolioContext)

  if (!context) {
    console.error('Error deploying app context')
  }

  return context
}

export default usePortfolioContext

PortfolioProvider.propTypes = {
  children: PropTypes.any
}
