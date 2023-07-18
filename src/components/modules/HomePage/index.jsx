import { Col, Layout, Row } from 'antd'
import NavigationMenu from '@components/commons/NavigationMenu'

import Banner from './components/Banner'
import NavigationButtons from './components/NavigationButtons'
import SocialButtons from './components/SocialButtons'

const { Header, Content, Footer } = Layout

const HomePage = () => (
  <Layout>
    <Header>
      <NavigationMenu/>
    </Header>
    <Content>
      <Row>
        <Col span={24}>
          <Banner/>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <NavigationButtons/>
          <SocialButtons/>
        </Col>
      </Row>
    </Content>
    <Footer>
      © Gabriel García 2023
    </Footer>
  </Layout>
)

export default HomePage
