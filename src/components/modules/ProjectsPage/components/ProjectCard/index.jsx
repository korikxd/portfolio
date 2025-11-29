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

  const getStatusColor = () => {
    const statusColors = {
      green: 'bg-green-600',
      red: 'bg-red-600'
    }
    return statusColors[projectStatus.color] || 'bg-gray'
  }

  return (
    <div className="group relative bg-light-background dark:bg-dark-background rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-light-text/10 dark:border-dark-text/10 hover:border-firstAccent/50">
      <div
        className="relative overflow-hidden h-64 bg-gradient-to-br from-firstAccent/20 to-orange-400/20"
        style={{
          backgroundImage: `url(/${projectImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4 z-10">
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg ${getStatusColor()} opacity-100`}
          >
            {projectStatus.label}
          </div>
        </div>
        {projectLink && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-firstAccent text-white rounded-lg font-semibold hover:bg-orange-500 transition-colors shadow-lg"
            >
              {language === 'ESPAÑOL' ? 'Ver Proyecto →' : 'View Project →'}
            </a>
          </div>
        )}
      </div>
      <div className="p-6">
        <a
          href={projectLink ? projectLink : null}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-3"
        >
          <h3 className="text-2xl font-display font-bold text-firstAccent hover:text-orange-500 transition-colors">
            {projectName}
          </h3>
        </a>
        <p
          className={`mb-4 text-light-text dark:text-dark-text text-sm leading-relaxed ${
            !showMore ? 'line-clamp-3' : ''
          }`}
        >
          {showMore ? projectDescription : `${projectDescription.substring(0, 200)}...`}
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
          className="mb-4 text-sm font-medium text-firstAccent hover:text-orange-500 transition-colors cursor-pointer"
          type="button"
        >
          {showMore
            ? language === 'ESPAÑOL'
              ? 'Ocultar contenido'
              : 'Hide content'
            : language === 'ESPAÑOL'
            ? 'Mostrar más'
            : 'Show more'}
        </button>
        <div className="flex flex-wrap gap-2">
          {projectTags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-firstAccent to-orange-400 shadow-sm"
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
