import usePortfolioContext from '@lib/Context/PortfolioContext'

import { EXPERIENCES_ENGLISH, EXPERIENCES_SPANISH } from './constants'

const ExperienceCard = () => {
  const { currentLanguage } = usePortfolioContext()

  const renderExperiences = () => {
    if (currentLanguage === 'ESPAÑOL') {
      return EXPERIENCES_SPANISH.map((work, index) => (
        <>
          <div className="grid-cols-[]">
            <p>{work.date}</p>
          </div>
          <div className="grid-cols-[]">
            <a href={work.link}>{work.title}</a>
            <p>{work.description}</p>
          </div>
        </>
      ))
    }
    return EXPERIENCES_ENGLISH.map((work, index) => (
      <>
        <div className="grid-cols-[]">
          <p>{work.date}</p>
        </div>
        <div className="grid-cols-[]">
          <a href={work.link}>{work.title}</a>
          <p>{work.description}</p>
        </div>
      </>
    ))
  }

  return <div className="grid">{renderExperiences()}</div>
}

export default ExperienceCard
