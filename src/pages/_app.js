import { PortfolioProvider } from '@lib/Context/PortfolioContext'
import PropTypes from 'prop-types'

require('./../styles/base.less')

const MyApp = ({ Component, pageProps }) => (
  <PortfolioProvider>
    <Component {...pageProps}/>
  </PortfolioProvider>
)

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
