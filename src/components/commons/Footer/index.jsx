import Link from 'next/link'

const Footer = ({ socials, currentLanguage }) => {
  const getSocialLink = (social) => {
    if (social.dynamicLink && social.dynamicLink[currentLanguage]) {
      return social.dynamicLink[currentLanguage]
    }
    return social.link
  }

  return (
    <footer className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
            {socials.map((social, index) => (
              <Link
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                href={getSocialLink(social)}
                className="group relative flex justify-center items-center w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-light-text/20 dark:border-dark-text/20 text-light-text dark:text-dark-text hover:border-firstAccent hover:text-firstAccent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-firstAccent/30"
                aria-label={social.name}
              >
                <div className="text-2xl md:text-3xl transition-transform group-hover:scale-110">
                  {social.icon}
                </div>
              </Link>
            ))}
          </div>
          <p className="text-sm text-light-text/60 dark:text-dark-text/60 font-sans">
            © {new Date().getFullYear()} Gabriel García Mercado.{' '}
            {currentLanguage === 'ESPAÑOL' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
