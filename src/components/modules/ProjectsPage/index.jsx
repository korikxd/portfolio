import usePortfolioContext from '@lib/Context/PortfolioContext'

import { ALL_PROJECTS } from './constants'
import ProjectCard from './components/ProjectCard'

const ProjectsPage = () => {
  const { currentLanguage } = usePortfolioContext()

  const renderAllProjects = () => (
    <div className={`grid grid-cols-3 gap-16`}>
      {ALL_PROJECTS.map((project, index) => (
        <ProjectCard
          key={index}
          projectImage={project.image}
          projectName={project.name}
          projectDescription={project.description}
          projectLink={project.link}
          projectTags={project.tags}
          projectStatus={project.status}
        />
      ))}
    </div>
  )

  return (
    <div className={`p-24`}>
      <h1>{currentLanguage === 'ESPAÑOL' ? 'PROYECTOS' : 'PROJECTS'}</h1>
      {renderAllProjects()}
    </div>
  )
}

export default ProjectsPage
