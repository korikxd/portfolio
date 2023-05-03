import { Button, Tooltip } from 'antd'
import { EyeOutlined } from '@ant-design/icons'

const ThemeButton = () => {

  const textToRender = () => {
    return 'Set dark theme'
  }

  return (
    <Tooltip title={textToRender()}>
      <Button
        shape='circle'
        icon={<EyeOutlined/>}
      />
    </Tooltip>
  )
}

export default ThemeButton
