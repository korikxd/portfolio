import Link from 'next/link'

const NavigationButtons = ({ buttons }) => {
  //Ignores Home page
  const filteredRoutes = buttons.filter((pageLink, index) => index !== 0)

  return (
    <div className={`h-1/3 flex justify-center items-center`}>
      {filteredRoutes.map((pageLink, index) => (
        <Link href={pageLink.href} key={index}>
          <button
            className={`mx-8 p-[1.3em_3em] text-xs uppercase tracking-[2.5px] font-medium text-[#000] bg-[#fff] rounded-[45px] shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all cursor-pointer outline-none
            hover:translate-y-[-7px]
            active:translate-y-[-1px]
          `}
          >
            {pageLink.label}
          </button>
        </Link>
      ))}
    </div>
  )
}

export default NavigationButtons
