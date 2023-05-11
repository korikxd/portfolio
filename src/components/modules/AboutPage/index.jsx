import { Col, Row } from 'antd'
import CustomLayout from '@core/CustomLayout'

import BiographyCard from './components/BiographyCard'
import ExperienceCard from './components/ExperienceCard'
import ProfilePictureCard from './components/ProfilePictureCard'
import SkillsCard from './components/SkillsCard'

const AboutPage = () => (
  <CustomLayout>
    <Row gutter={16} justify='center'>
      <Col span={4}>
        <ProfilePictureCard/>
      </Col>
      <Col>
        <BiographyCard/>
      </Col>
    </Row>
    <Row justify='center'>
      <Col span={10}>
        <SkillsCard/>
      </Col>
    </Row>
    <Row justify='center'>
      <Col span={10}>
        <ExperienceCard/>
      </Col>
    </Row>
  </CustomLayout>
)


export default AboutPage
