import { PiStarFour, PiStarFourFill } from 'react-icons/pi'
import { LANGUAGES } from './constants'

import usePortfolioContext from '@lib/Context/PortfolioContext'

const SkillsCard = () => {
  const { currentLanguage } = usePortfolioContext()

  const renderSkills = () => {
    return (
      <>
        <h3 className={`text-center`}>{currentLanguage === 'ESPAÑOL' ? 'HABILIDADES' : 'SKILLS'}</h3>
        <div></div>
      </>
    )
  }

  const renderLanguages = () => {
    return (
      <>
        <h3 className={`text-center`}>{currentLanguage === 'ESPAÑOL' ? 'IDIOMAS' : 'LANGUAGES'}</h3>
        {LANGUAGES.map((language) => (
          <text key={language.key} className={`flex flex-row gap-4`}>
            {language.label} {renderStars(language.value)}
          </text>
        ))}
      </>
    )
  }

  const renderStars = (value) => {
    const starsArray = [1, 2, 3, 4, 5]

    return (
      <div className={``}>
        {starsArray.map((star) =>
          value >= star ? <PiStarFourFill className={`inline-block`} /> : <PiStarFour className={`inline-block`} />
        )}
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-2 grid-flow-col-dense w-1/2 gap-8`}>
      <div className={``}>{renderSkills()}</div>
      <div className={``}>{renderLanguages()}</div>
    </div>
  )
}

export default SkillsCard
