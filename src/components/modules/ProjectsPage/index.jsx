import { useEffect } from 'react'
import SectionBanner from '@components/commons/SectionBanner'
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
    <div className="min-h-screen">
      <SectionBanner title={projectsData.pageTitle} image="/banner.png" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {renderAllProjects()}
      </div>
    </div>
  )
}

export default ProjectsPage
