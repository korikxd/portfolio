import { Layout } from 'antd'

import NavigationMenu from '@components/commons/NavigationMenu'

const { Header, Content } = Layout

const CustomLayout = ({children}) => (
  <Layout>
    <Header>
      <NavigationMenu/>
    </Header>
    <Content>
      {children}
    </Content>
  </Layout>
)

export default CustomLayout
