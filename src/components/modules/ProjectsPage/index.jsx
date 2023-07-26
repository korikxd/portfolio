import usePortfolioContext from '@lib/Context/PortfolioContext'

import { ALL_PROJECTS } from './constants'
import ProjectCard from './components/ProjectCard'
import SectionTitle from './components/SectionTitle'

const ProjectsPage = () => {
  const { currentLanguage } = usePortfolioContext()

  const renderAllProjects = (projects) => (
    <>
      <SectionTitle sectionTitle={currentLanguage === 'ESPAÑOL' ? 'COLECCIÓN' : 'HISTORIC'} />
      <div>
        {projects.map((project, index) => (
          <div>
            <ProjectCard
              projectImage={project.image}
              projectName={project.name}
              projectDescription={project.description}
              projectLink={project.link}
            />
          </div>
        ))}
      </div>
    </>
  )

  return (
    <>
      <div>
        <div>
          <h1>{currentLanguage === 'ESPAÑOL' ? 'PROYECTOS' : 'PROJECTS'}</h1>
        </div>
      </div>
      <div>
        <div>{renderAllProjects(ALL_PROJECTS)}</div>
      </div>
    </>
  )
}

export default ProjectsPage
