import PropTypes from 'prop-types'

const ProjectCard = ({projectImage, projectName, projectDescription, projectLink}) => (
  <div style={{background: `url(${projectImage})`}}>
    <a href={projectLink} target='_blank' rel='noopener noreferrer'>
      <div>
        <p>{projectName}</p>
      </div>
      <div>
        <p>{projectDescription}</p>
      </div>
    </a>
  </div>
)

export default ProjectCard

ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectLink: PropTypes.string
}
