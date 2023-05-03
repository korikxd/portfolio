import { Col, Row } from 'antd'
import GoBackButton from "@components/GoBackButton"
import SocialCard from "@components/SocialMediaCard"

const CustomLayoutFooter = () => (
  <Row gutter={16}>
    <Col span={2}>
      <GoBackButton/>
    </Col>
    <Col span={22}>
      <SocialCard/>
    </Col>
  </Row>
)

export default CustomLayoutFooter
