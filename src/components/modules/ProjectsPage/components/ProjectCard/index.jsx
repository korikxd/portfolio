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
        <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Ocultar contenido' : 'Mostrar contenido'}</button>
      )
    }

    return <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Hide content' : 'Show content'}</button>
  }

  return (
    <div className={`bg-lightBackground rounded-lg shadow border`}>
      <div
        className={`relative overflow-hidden h-56 rounded-t-lg`}
        style={{
          backgroundImage: `url(/${projectImage})`,
          backgroundPosition: 'center'
        }}
      >
        <div className={`left-0 top-0 h-16 w-16`}>
          {/* <-- Top left ribbon --> */}
          <div
            className={`absolute transform -rotate-45 text-center text-[#ffff] font-semibold py-1 left-[-35px] top-[32px] w-[170px]`}
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
          <h2 className={`mb-2`}>{projectName}</h2>
        </a>
        {/* <-- Project Description --> */}
        <p className={`mb-3`}>{showMore ? projectDescription : `${projectDescription.substring(0, 250)}...`}</p>
        {renderButton()}
        {/* <-- Project Stack --> */}
        <p>
          {projectTags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs text-[#fff] font-medium mr-2 px-2.5 py-0.5 rounded`}
              style={{ background: `${tag.color}` }}
            >
              {tag.name}
            </span>
          ))}
        </p>
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
