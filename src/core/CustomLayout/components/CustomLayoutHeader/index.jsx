import { Col, Row } from 'antd'
import SelectLanguage from '@components/SelectLanguage'
import ThemeButton from '@components/ThemeButton'

const CustomLayoutHeader = () => (
  <Row gutter={8} justify='end'>
    <Col>
      <SelectLanguage/>
    </Col>
    <Col>
      <ThemeButton/>
    </Col>
  </Row>
)

export default CustomLayoutHeader
