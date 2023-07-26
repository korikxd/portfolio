import { PortfolioProvider } from '@lib/Context/PortfolioContext'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'
import CustomLayout from '@components/commons/CustomLayout'

require('./../styles/globals.css')

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class" defaultTheme={'light'}>
    <PortfolioProvider>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </PortfolioProvider>
  </ThemeProvider>
)

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
