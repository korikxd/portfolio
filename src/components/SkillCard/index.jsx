import { Avatar, Card, Col, Radio, Row, Typography } from 'antd'
import { SKILL_CARDS } from './constants'

const { Title } = Typography

const SkillCard = () => {

  const renderCards = () => (
    SKILL_CARDS.map((card) => (
      <Card key={card.key}>
        <Title level={4}>{card.title}</Title>
        {
          card.skills.map((skill) => (
            <Row>
              <Col span={24}>
                <Avatar>A</Avatar>
                <Radio.Group value={skill.points}>
                  <Radio value={1} disabled></Radio>
                  <Radio value={2} disabled></Radio>
                  <Radio value={3} disabled></Radio>
                  <Radio value={4} disabled></Radio>
                  <Radio value={5} disabled></Radio>
                </Radio.Group>
              </Col>
            </Row>
          ))
        }
      </Card>
    ))
  )

  return (
    renderCards()
  )
}

export default SkillCard
