import { PORTFOLIO_DEFAULT_VALUES } from 'constants/portfolioContent'
import { createContext, useContext, useState } from 'react'

//Create context object
export const PortfolioContext = createContext()

//Export provider
export const PortfolioProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('ESPAÑOL')
  const [portfolioContent, setPortfolioContent] = useState(PORTFOLIO_DEFAULT_VALUES)

  return (
    <PortfolioContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        portfolioContent,
        setPortfolioContent
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
