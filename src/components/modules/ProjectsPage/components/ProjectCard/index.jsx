import PropTypes from 'prop-types'

const ProjectCard = ({ projectImage, projectName, projectDescription, projectLink, projectTags, projectStatus }) => (
  <div className={`bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
    <div className={`relative overflow-hidden h-56 rounded-t-lg`} style={{ backgroundImage: `url(/${projectImage})` }}>
      <div className={`left-0 top-0 h-16 w-16`}>
        <div
          className={`absolute transform -rotate-45 text-center text-[#ffff] font-semibold py-1 left-[-35px] top-[32px] w-[170px]`}
          style={{ backgroundColor: `${projectStatus.color}` }}
        >
          {projectStatus.label}
        </div>
      </div>
    </div>
    <div className={`p-5`}>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>{projectName}</h5>
      </a>
      <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400`}>{projectDescription}</p>
      <p>
        {projectTags.map((tag, index) => (
          <span
            key={index}
            className={`bg-[${tag.color}] text-[${tag.color}] text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
          >
            {tag}
          </span>
        ))}
      </p>
    </div>
  </div>
)

export default ProjectCard

ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectLink: PropTypes.string,
  projectTags: PropTypes.array,
  projectStatus: PropTypes.object
}
