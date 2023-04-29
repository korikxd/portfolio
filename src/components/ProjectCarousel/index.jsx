import { Button, Card, Col, Row, Tag, Typography } from 'antd'
import { PROJECTS } from './constants'

const { Title } = Typography

const ProjectCarousel = () => {

  const renderProject = () => (
    PROJECTS.map((project) => (
      <Card key={project.key}>
        <Row gutter={8}>
          <Col span={12}>
            {/* INSERT IMAGE HERE */}
          </Col>
          <Col span={12}>
            <Title level={4}>{project.title}</Title>
            {project.tags.map((projectTag) => (
              <Tag key={projectTag.key} color={projectTag.color}>{projectTag.tag}</Tag>
            ))}
            <p>{project.description}</p>
            <Button>Visit website</Button>
            <Button>Source code</Button>
          </Col>
        </Row>
      </Card>
    ))
  )

  return (
    renderProject()
  )
}

export default ProjectCarousel
