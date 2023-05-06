import { PortfolioProvider } from '@lib/Context/PortfolioContext'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'

require('./../styles/base.less')

const MyApp = ({ Component, pageProps }) => (
   <ThemeProvider attribute='class' defaultTheme={'light'}>
      <PortfolioProvider>
         <Component {...pageProps}/>
      </PortfolioProvider>
   </ThemeProvider>
)

export default MyApp


MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
