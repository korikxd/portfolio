import { ArrowUpOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const GoBackButton = () => {

  const scrollToTopOfPage = () => (
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  )

  const renderButton = () => (
    <Button
      icon={<ArrowUpOutlined/>}
      onClick={scrollToTopOfPage}
    />
  )

  return (
    renderButton()
  )
}

export default GoBackButton
