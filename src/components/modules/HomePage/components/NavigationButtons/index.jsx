import Link from 'next/link'
import usePortfolioContext from '@lib/Context/PortfolioContext'
import { PAGE_ROUTES } from 'constants/routes'

const NavigationButtons = () => {
  const { currentLanguage } = usePortfolioContext()

  //Ignores Home page
  const filteredRoutes = PAGE_ROUTES.filter((pageLink, index) => index !== 0)

  return (
    <div className="">
      {filteredRoutes.map((pageLink) => (
        <button
          className={`p-[1.3em_3em] text-xs uppercase tracking-[2.5px] font-medium text-[#000] bg-[#fff] rounded-[45px] shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all cursor-pointer outline-none
          hover:translate-y-[-7px]
          active:translate-y-[-1px]
        `}
        >
          <Link href={pageLink.href}>
            {currentLanguage === 'ESPAÑOL' ? pageLink.spanishText : pageLink.englishText}
          </Link>
        </button>
      ))}
    </div>
  )
}

export default NavigationButtons
