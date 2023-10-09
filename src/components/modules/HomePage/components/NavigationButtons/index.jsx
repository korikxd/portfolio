import Link from 'next/link'

const NavigationButtons = ({ buttons }) => {
  //Ignores Home page
  const filteredRoutes = buttons.filter((pageLink, index) => index !== 0)

  return (
    <div className={`h-1/3 flex flex-wrap justify-center items-center gap-4 md:gap-8`}>
      {filteredRoutes.map((pageLink, index) => (
        <Link href={pageLink.href} key={index}>
          <button
            type="button"
            className={`dark:bg-firstAccent bg-secondAccent group relative h-14 w-64 overflow-hidden rounded-lg shadow md:flex-1`}
          >
            <div
              className={`absolute inset-0 w-3 dark:bg-secondAccent bg-firstAccent transition-all duration-[500ms] ease-out group-hover:w-full group-hover:opacity-25`}
            ></div>
            <span className={`text-lg font-bold`}>{pageLink.label}</span>
            <span className={`hidden group-hover:block`}>{pageLink.description}</span>
          </button>
        </Link>
      ))}
    </div>
  )
}

export default NavigationButtons
