import { HiMiniArrowUpRight } from 'react-icons/hi2'

const ExperienceCard = ({ experiences }) => {
  const renderExperiences = () => (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-max gap-16 px-4 py-16 relative items-start">
        {/* Línea horizontal de conexión */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-firstAccent z-0"></div>
        {experiences.jobs.map((work, index) => (
          <div key={index} className="relative flex flex-col items-center min-w-[220px]">
            {/* Fecha arriba del punto */}
            <span className="mb-4 text-sm font-medium text-center">{work.date}</span>
            {/* Punto de la línea de tiempo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-firstAccent border-4 border-firstAccent rounded-full z-10"></div>
            {/* Espacio para el círculo */}
            <div className="h-7"></div>
            {/* Contenido debajo del punto */}
            <div className="flex flex-col items-center mt-4">
              {work.link ? (
                <p className="font-medium text-base text-center">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-firstAccent transition-colors duration-200 flex items-center gap-1"
                  >
                    {work.title}
                    <HiMiniArrowUpRight className="inline-block w-4 h-4" />
                  </a>
                </p>
              ) : (
                <p className="font-medium text-base text-center">{work.title}</p>
              )}
              <p className="text-sm text-center mt-1 text-light-text/80 dark:text-dark-text/80">{work.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-8">{experiences.title}</h2>
      {renderExperiences()}
    </div>
  )
}

export default ExperienceCard
