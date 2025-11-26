import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import CustomLayout from '@components/commons/CustomLayout'
import { PortfolioProvider } from '@lib/Context/PortfolioContext'

require('@styles/globals.css')

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Head>
    <ThemeProvider attribute="class" themes={['light', 'dark']} enableSystem={false} defaultTheme="light">
      <PortfolioProvider>
        <CustomLayout>
          <Component {...pageProps} />
        </CustomLayout>
      </PortfolioProvider>
    </ThemeProvider>
  </>
)

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
