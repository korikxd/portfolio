import { Divider, Typography } from 'antd'

const { Title } = Typography
import styles from './styles.module.less'

const SectionTitle = ({title}) => (
  <Divider>
    <Title level={2} className={styles.title}>{title}</Title>
  </Divider>
)

export default SectionTitle
