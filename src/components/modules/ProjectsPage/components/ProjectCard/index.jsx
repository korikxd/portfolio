import PropTypes from 'prop-types'
import { useState } from 'react'

const ProjectCard = ({
  projectImage,
  projectName,
  projectDescription,
  projectLink,
  projectTags,
  projectStatus,
  language
}) => {
  const [showMore, setShowMore] = useState(false)

  const renderButton = () => {
    if (language === 'ESPAÑOL') {
      return (
        <button className={`dark:text-dark-background text-light-background`} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Ocultar contenido' : 'Mostrar contenido'}
        </button>
      )
    }

    return <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Hide content' : 'Show content'}</button>
  }

  return (
    <div className={`dark:bg-light-background bg-dark-background rounded-lg shadow border`}>
      <div
        className={`relative overflow-hidden h-56 rounded-t-lg`}
        style={{
          backgroundImage: `url(/${projectImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className={`left-0 top-0 h-16 w-16`}>
          {/* <-- Top left ribbon --> */}
          <div
            className={`absolute transform -rotate-45 text-center font-semibold py-1 left-[-35px] top-[32px] w-[170px]`}
            style={{
              backgroundColor: `${projectStatus.color}`
            }}
          >
            {projectStatus.label}
          </div>
        </div>
      </div>
      <div className={`p-5`}>
        {/* <-- Project Title --> */}
        <a href={projectLink ? projectLink : null} target="_blank" rel="noopener noreferrer">
          <h2 className={`mb-2 text-firstAccent`}>{projectName}</h2>
        </a>
        {/* <-- Project Description --> */}
        <p className={`mb-3 dark:text-dark-background text-light-background`}>
          {showMore ? projectDescription : `${projectDescription.substring(0, 250)}...`}
        </p>
        {renderButton()}
        {/* <-- Project Stack --> */}
        <div className={`flex flex-wrap max-w-full overflow-hidden`}>
          {projectTags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-white`}
              style={{ background: `${tag.color}` }}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectLink: PropTypes.string,
  projectTags: PropTypes.array,
  projectStatus: PropTypes.object
}
