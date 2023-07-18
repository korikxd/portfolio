import { Select } from 'antd'
import { usePortfolioContext } from '@lib/Context/PortfolioContext'

import { LANGUAGES } from './constants'

const SelectLanguage = () => {

  const { currentLanguage, setCurrentLanguage } = usePortfolioContext()

  const handleLanguageSelection = (language) => setCurrentLanguage(language)

  return (
    <Select
      defaultValue={'ESPAÑOL'}
      value={currentLanguage}
      onChange={handleLanguageSelection}
      options={LANGUAGES}
    />
  )
}

export default SelectLanguage
