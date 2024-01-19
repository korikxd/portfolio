import { LANGUAGES } from './constants'

const SelectLanguage = ({ currentLanguage, setCurrentLanguage }) => {
  const handleLanguageSelection = (language) => setCurrentLanguage(language)

  return (
    <select
      defaultValue={currentLanguage}
      id="languages"
      className={`bg-light-background border border-light-text text-light-text text-sm rounded-lg block p-2.5 dark:bg-dark-background dark:border-dark-text dark:text-dark-text`}
      onChange={(e) => handleLanguageSelection(e.target.value)}
    >
      {LANGUAGES.map((option) => (
        <option key={option.key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SelectLanguage
