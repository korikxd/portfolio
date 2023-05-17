import { Col, Row } from 'antd'
import CustomLayout from '@core/CustomLayout'
import usePortfolioContext from '@lib/Context/PortfolioContext'

import { ALL_PROJECTS, HORIZONTAL_GUTTER, VERTICAL_GUTTER } from './constants'
import ProjectCard from './components/ProjectCard'
import SectionTitle from './components/SectionTitle'

const ProjectsPage = () => {

  const { currentLanguage } = usePortfolioContext()

  const renderAllProjects = (projects) => (
    <>
      <SectionTitle sectionTitle={currentLanguage === 'ESPAÑOL' ? 'COLECCIÓN' : 'HISTORIC'}/>
      <Row gutter={[HORIZONTAL_GUTTER , VERTICAL_GUTTER]}>
      {projects.map((project, index) => (
        <Col key={index} span={6}>
          <ProjectCard
            projectImage={project.image}
            projectName={project.name}
            projectDescription={project.description}
            projectLink={project.link}
          />
        </Col>
      ))}
      </Row>
    </>
  )

  return (
    <CustomLayout>
      <Row justify='center'>
        <Col>
          <h1>{currentLanguage === 'ESPAÑOL' ? 'PROYECTOS' : 'PROJECTS'}</h1>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={24}>
          {renderAllProjects(ALL_PROJECTS)}
        </Col>
      </Row>
    </CustomLayout>
  )
}

export default ProjectsPage
