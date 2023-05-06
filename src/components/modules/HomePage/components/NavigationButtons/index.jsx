import { Button, Col, Row } from 'antd'
import Link from 'next/link'
import usePortfolioContext from '@lib/Context/PortfolioContext'

const NavigationButtons = () => {

  const { currentLanguage } = usePortfolioContext()

  return (
    <Row gutter={16} justify='center'>
      <Col>
        <Button>
          <Link href={'/about'}>
            {currentLanguage === 'ESPAÑOL' ? 'Acerca' : 'About'}
          </Link>
        </Button>
      </Col>
      <Col>
        <Button>
          <Link href={'/projects'}>
            {currentLanguage === 'ESPAÑOL' ? 'Trabajo' : 'Work'}
          </Link>
        </Button>
      </Col>
      <Col>
        <Button>
          <Link href={'/contact'}>
            {currentLanguage === 'ESPAÑOL' ? 'Contacto' : 'Contact'}
          </Link>
        </Button>
      </Col>
    </Row>
  )
}

export default NavigationButtons
