import { Col, Layout, Row } from 'antd'
import NavigationMenu from '@components/commons/NavigationMenu'

import Banner from './components/Banner'
import NavigationButtons from './components/NavigationButtons'
import SocialButtons from './components/SocialButtons'
import styles from './styles.module.less'

const { Header, Content, Footer } = Layout

const HomePage = () => (
  <Layout className={styles.home_layout_container}>
    <Header className={styles.header}>
      <NavigationMenu/>
    </Header>
    <Content className={styles.home_content_container}>
      <Row>
        <Col span={24} className={styles.home_menu_banner_container}>
          <Banner/>
        </Col>
      </Row>
      <Row>
        <Col span={24} className={styles.home_navbuttons_socialbuttons_container}>
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
