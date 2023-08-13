import usePortfolioContext from '@lib/Context/PortfolioContext'
import { HiMiniArrowUpRight } from 'react-icons/hi2'

import { EXPERIENCES_ENGLISH, EXPERIENCES_SPANISH } from './constants'

const ExperienceCard = () => {
  const { currentLanguage } = usePortfolioContext()

  const renderExperiences = () => {
    let key = currentLanguage === 'ESPAÑOL' ? EXPERIENCES_SPANISH : EXPERIENCES_ENGLISH
    return (
      <div className={`relative col-span-12 px-4 space-y-6 sm:col-span-9`}>
        <div
          className={`col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-primary`}
        >
          {key.map((work, index) => (
            <div
              key={index}
              className={`flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary`}
            >
              <h3 className="text-xl font-semibold">
                <a href={work.link}>
                  {work.title} <HiMiniArrowUpRight className={`w-[1px]`} />{' '}
                </a>
              </h3>
              <time className="text-xs uppercase dark:text-gray-400">{work.date}</time>
              <p className="mt-3">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={``}>
      <h1>{currentLanguage === 'ESPAÑOL' ? 'Experiencia Laboral' : 'Work Experience'}</h1>
      {renderExperiences()}
    </div>
  )
}

export default ExperienceCard
