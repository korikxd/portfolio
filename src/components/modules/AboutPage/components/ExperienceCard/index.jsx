import { HiMiniArrowUpRight } from 'react-icons/hi2'
import { HiCalendar } from 'react-icons/hi2'

const ExperienceCard = ({ experiences }) => {
  const renderExperiences = () => (
    <div className="relative">
      <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-firstAccent via-orange-400 to-firstAccent opacity-60"></div>

      <div className="space-y-4">
        {experiences.jobs.map((work, index) => (
          <div key={index} className="relative flex gap-4">
            <div className="relative z-10 flex-shrink-0 w-6 md:w-8 flex items-center justify-center">
              <div className="absolute left-3 md:left-4 -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-firstAccent to-orange-400 flex items-center justify-center shadow-md border-2 border-light-background dark:border-dark-background">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
              </div>
            </div>

            <div className="flex-1 pb-4">
              <div className="bg-light-background dark:bg-dark-background rounded-lg p-4 md:p-5 shadow-md border border-light-text/10 dark:border-dark-text/10 hover:shadow-lg transition-all duration-300 hover:border-firstAccent/50 hover:scale-[1.01]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {work.link ? (
                      <h3 className="text-lg md:text-xl font-display font-bold text-firstAccent hover:text-orange-500 transition-colors mb-1">
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 group"
                        >
                          <span className="truncate">{work.title}</span>
                          <HiMiniArrowUpRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </h3>
                    ) : (
                      <h3 className="text-lg md:text-xl font-display font-bold text-firstAccent mb-1">{work.title}</h3>
                    )}
                    <p className="text-sm md:text-base font-semibold text-light-text dark:text-dark-text mb-2">{work.role}</p>
                    <div className="flex items-center gap-1.5 text-xs md:text-sm text-light-text/70 dark:text-dark-text/70">
                      <HiCalendar className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                      <span>{work.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 md:mb-10 text-light-text dark:text-dark-text">
        {experiences.title}
      </h2>
      {renderExperiences()}
    </div>
  )
}

export default ExperienceCard
