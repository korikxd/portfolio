import { useEffect } from 'react'
import ProjectCard from './components/ProjectCard'
import { PROJECTS_ENGLISH, PROJECTS_SPANISH } from './constants'

const ProjectsPage = ({ projectsData, setProjectsData, language }) => {
  useEffect(() => {
    if (language !== 'ESPAÑOL') {
      setProjectsData({
        ...projectsData,
        pageTitle: PROJECTS_ENGLISH.pageTitle,
        projectsList: PROJECTS_ENGLISH.projectsList
      })
    } else {
      setProjectsData({
        ...projectsData,
        pageTitle: PROJECTS_SPANISH.pageTitle,
        projectsList: PROJECTS_SPANISH.projectsList
      })
    }
  }, [language])

  const renderAllProjects = () => (
    <div className={`grid grid-cols-3 gap-16 mt-4`}>
      {projectsData.projectsList.map((project, index) => (
        <ProjectCard
          key={index}
          projectImage={project.image}
          projectName={project.name}
          projectDescription={project.description}
          projectLink={project.link}
          projectTags={project.tags}
          projectStatus={project.status}
          language={language}
        />
      ))}
    </div>
  )

  return (
    <div className={`p-24 h-full`}>
      {/* TODO --> Fix text color */}
      <h1 className={`text- text-center`}>{projectsData.pageTitle}</h1>
      {renderAllProjects()}
    </div>
  )
}

export default ProjectsPage
