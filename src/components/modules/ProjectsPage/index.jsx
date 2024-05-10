import { useEffect } from 'react'

import ModuleBanner from '@components/commons/ModuleBanner'

import { PROJECTS_ENGLISH, PROJECTS_SPANISH } from './constants'
import { LANGUAGES } from 'constants/languages'
import ProjectCard from './components/ProjectCard'

const ProjectsPage = ({ projects, projectsData, setProjectsData, language }) => {
  useEffect(() => {
    if (language !== LANGUAGES.spanish) {
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
    <div className={`grid grid-cols-3 gap-16 mt-4 p-16`}>
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
    <div className={`flex flex-col items-center gap-16`}>
      <ModuleBanner text={'Projects'} background={'red'} />
      {renderAllProjects()}
    </div>
  )
}

export default ProjectsPage
