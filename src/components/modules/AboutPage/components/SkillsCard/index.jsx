import { PiStarFourFill } from 'react-icons/pi'
import InfiniteSlider from './components/InfiniteSlider'

const SkillsCard = ({ skills, languages }) => {
  const renderSkills = () => {
    return (
      <div className="w-full">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 text-light-text dark:text-dark-text">
          {skills.title}
        </h3>
        <div className="relative m-auto overflow-hidden rounded-xl bg-light-background/50 dark:bg-dark-background/50 p-6 border border-light-text/10 dark:border-dark-text/10">
          <InfiniteSlider logos={skills.skillsList} />
        </div>
      </div>
    )
  }

  const renderLanguages = () => {
    return (
      <div className="w-full">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 text-light-text dark:text-dark-text">
          {languages.title}
        </h3>
        <div className="space-y-4">
          {languages.languagesList.map((language) => (
            <div key={language.key} className="bg-light-background dark:bg-dark-background rounded-lg p-4 border border-light-text/10 dark:border-dark-text/10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-light-text dark:text-dark-text">{language.label}</span>
                <span className="text-sm text-firstAccent font-medium">{language.value}/5</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <PiStarFourFill
                    key={star}
                    className={`text-lg ${star <= language.value ? 'text-firstAccent' : 'text-light-text/20 dark:text-dark-text/20'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
      <div>{renderSkills()}</div>
      <div>{renderLanguages()}</div>
    </div>
  )
}

export default SkillsCard
