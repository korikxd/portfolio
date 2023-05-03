import { Card, Col, Radio, Row, Typography } from 'antd'
import Image from 'next/image'
import { SKILL_CARDS } from './constants'

import styles from './styles.module.less'

const { Title } = Typography

const SkillCard = () => {

  const handleCards = () => (
    SKILL_CARDS.map((card, index) => (
      <Col key={index} span={4} className={styles.column}>
        <Card className={styles.card}>
          <Row>
            <Col>
              <Title level={3}>{card.title}</Title>
            </Col>
          </Row>
          {
            card.skills.map((skill) => (
              <Row key={index}>
                <Col span={6}>
                  <Image alt={skill.name} src={skill.icon} width={25} height={25}/>
                  <p>{skill.name}</p>
                </Col>
                <Col span={18}>
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
      </Col>
    ))
  )

  const renderCards = () => (
    <Row gutter={16} justify='center'>
      {handleCards()}
    </Row>
  )

  return (
    renderCards()
  )
}

export default SkillCard
