import { IoMdMoon as MoonIcon } from 'react-icons/io'
import { IoSunnyOutline as SunIcon } from 'react-icons/io5'
import usePortfolioContext from '@lib/Context/PortfolioContext'

const ThemeButton = () => {

  const { currentTheme, setCurrentTheme } = usePortfolioContext()
  const changeTheme = (theme) => theme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')

  return (
    <button
      type='button'
      onClick={() => changeTheme(currentTheme)}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
      >
        {currentTheme === 'light' ? <SunIcon/> : <MoonIcon/>}
      </svg>
    </button>
  )
}

export default ThemeButton
