import { PiStarFour, PiStarFourFill } from 'react-icons/pi'

const SkillsCard = ({ skills, languages }) => {
  const renderSkills = () => {
    return (
      <>
        <h3 className={`text-center`}>{skills.title}</h3>
        <div></div>
      </>
    )
  }

  const renderLanguages = () => {
    return (
      <>
        <h3 className={`text-center`}>{languages.title}</h3>
        {languages.languagesList.map((language) => (
          <span key={language.key} className={`flex flex-row gap-4`}>
            {language.label} {renderStars(language.value)}
          </span>
        ))}
      </>
    )
  }

  const renderStars = (value) => {
    const starsArray = [1, 2, 3, 4, 5]

    return (
      <div className={``}>
        {starsArray.map((star, index) =>
          value >= star ? (
            <PiStarFourFill className={`inline-block`} key={index} />
          ) : (
            <PiStarFour className={`inline-block`} key={index} />
          )
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
