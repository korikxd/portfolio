import Link from 'next/link'
import { SOCIAL_LINKS } from './constants'

const SocialButtons = () => {
  const renderButtons = () => (
    <div className="h-1/3 flex justify-center items-center">
      {SOCIAL_LINKS.map((social, index) => (
        <button className="mx-8" key={index}>
          <Link target="_blank" rel="noopener noreferrer" href={social.link}>
            {social.icon}
          </Link>
        </button>
      ))}
    </div>
  )

  return renderButtons()
}

export default SocialButtons
