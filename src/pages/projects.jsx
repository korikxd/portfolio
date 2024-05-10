import ProjectsPage from '@components/modules/ProjectsPage'
import usePortfolioContext from '@lib/Context/PortfolioContext'
import { API_URL, PORT } from 'constants/environments'

export const getServerSideProps = async () => {
  //const res = await fetch(`${API_URL}:${PORT}/projects`)
  //const projects = await res.json()

  return {
    props: {}
  }
}

const Projects = ({ projects }) => {
  const {
    portfolioContent: {
      content: { projectsPageText },
      language
    },
    setProjectsContent
  } = usePortfolioContext()

  return (
    <ProjectsPage
      projects={[]}
      projectsData={projectsPageText}
      setProjectsData={setProjectsContent}
      language={language}
    />
  )
}

export default Projects
