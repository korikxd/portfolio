import { Select } from 'antd'
import { usePortfolioContext } from '@lib/Context/PortfolioContext'

import { LANGUAGES } from './constants'
import styles from './styles.module.less'

const SelectLanguage = () => {

  const { currentLanguage, setCurrentLanguage } = usePortfolioContext()

  const handleLanguageSelection = (language) => setCurrentLanguage(language)

  return (
    <Select
      className={styles.select_language}
      defaultValue={'ESPAÑOL'}
      value={currentLanguage}
      onChange={handleLanguageSelection}
      options={LANGUAGES}
    />
  )
}

export default SelectLanguage
