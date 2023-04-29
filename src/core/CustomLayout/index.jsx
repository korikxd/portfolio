import { Layout } from 'antd'

import CustomLayoutContent from './components/CustomLayoutContent'
import CustomLayoutFooter from './components/CustomLayoutFooter'
import CustomLayoutHeader from './components/CustomLayoutHeader'

const { Header, Content, Footer } = Layout

const CustomLayout = () => (
    <Layout>
      <Header>
        <CustomLayoutHeader/>
      </Header>
      <Content>
        <CustomLayoutContent/>
      </Content>
      <Footer>
        <CustomLayoutFooter/>
      </Footer>
    </Layout>
  )

export default CustomLayout
