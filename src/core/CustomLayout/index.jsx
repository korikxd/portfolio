import { Layout } from 'antd'

import NavigationMenu from '@components/commons/NavigationMenu'
import styles from './styles.module.less'

const { Header, Content } = Layout

const CustomLayout = ({children}) => (
  <Layout>
    <Header className={styles.header}>
      <NavigationMenu/>
    </Header>
    <Content>
      {children}
    </Content>
  </Layout>
)

export default CustomLayout
