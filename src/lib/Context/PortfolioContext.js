import { createContext, useContext, useState } from 'react'

//Create context object
export const PortfolioContext = createContext()

//Export provider
export const PortfolioProvider = ({ children }) => {
   const [currentTheme, setCurrentTheme] = useState('light')
   const [currentLanguage, setCurrentLanguage] = useState('ESPAÑOL')

   return (
      <PortfolioContext.Provider
         value={{
            currentLanguage,
            setCurrentLanguage,
            currentTheme,
            setCurrentTheme
         }}
      >
         {children}
      </PortfolioContext.Provider>
   )
}

export function usePortfolioContext() {
   const context = useContext(PortfolioContext)

   if (!context) {
      console.log('Error deploying app context')
   }

   return context
}

export default usePortfolioContext
