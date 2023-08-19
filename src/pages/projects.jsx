import ProjectsPage from '@components/modules/ProjectsPage'
import usePortfolioContext from '@lib/Context/PortfolioContext'

const Projects = () => {
  const {
    portfolioContent: {
      content: { projectsPageText },
      language
    },
    setProjectsContent
  } = usePortfolioContext()

  return <ProjectsPage projectsData={projectsPageText} setProjectsData={setProjectsContent} language={language} />
}

export default Projects

export const getServerSideProps = async (context) => {
  return {
    props: {
      data: {}
    }
  }
}
