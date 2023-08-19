import { LANGUAGES } from './constants'

const SelectLanguage = ({ currentLanguage, setCurrentLanguage }) => {
  const handleLanguageSelection = (language) => setCurrentLanguage(language)

  return (
    <select
      defaultValue={currentLanguage}
      id="languages"
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
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
