import { ArrowUpOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import styles from './styles.module.less'

const GoBackButton = () => {

  const scrollToTopOfPage = () => (
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  )

  const renderButton = () => (
    <Button
      icon={<ArrowUpOutlined/>}
      onClick={scrollToTopOfPage}
      className={styles.button}
    />
  )

  return (
    renderButton()
  )
}

export default GoBackButton
