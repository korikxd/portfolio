import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Tag, Typography } from 'antd'
import { useState } from 'react'

import { PROJECTS } from './constants'
import styles from './styles.module.less'

const { Title } = Typography

const ProjectCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const length = PROJECTS.length

  const renderProject = () => (
    PROJECTS.map((project, index) => {
      if (currentCard === index) {
        return (
          <Card
            key={index}
            className={index === currentCard ? styles.slide.active : styles.slide}
          >
            <Row gutter={16}>
              <Col span={12}>
              </Col>
              <Col span={12}>
                <Title level={4}>{project.title}</Title>
                {project.tags.map((projectTag) => (
                  <Tag key={projectTag.key} color={projectTag.color}>{projectTag.tag}</Tag>
                ))}
                <p>{project.description}</p>
                <Row gutter={8}>
                  <Col><Button>Visit website</Button></Col>
                  <Col><Button>Source code</Button></Col>
                </Row>
              </Col>
            </Row>
          </Card>
        )
      }
      return null
    })
  )

  const showPrevious = () => (setCurrentCard(currentCard === 0 ? length -1 : currentCard - 1))

  const showNext = () => (setCurrentCard(currentCard === length - 1 ? 0 : currentCard + 1))

  const Carousel = () => (
    <>
      <Button
        className={styles.left_arrow}
        shape='circle'
        icon={<ArrowLeftOutlined/>}
        onClick={showPrevious}
      />
        {renderProject()}
      <Button
        className={styles.right_arrow}
        shape='circle'
        icon={<ArrowRightOutlined/>}
        onClick={showNext}
      />
    </>
  )

  return (
    <Row justify='center'>
      <Col className={styles.wrapper} span={10}>
        <Carousel/>
      </Col>
    </Row>
  )
}

export default ProjectCarousel
