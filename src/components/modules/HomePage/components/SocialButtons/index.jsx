import Link from 'next/link'
import { SOCIAL_LINKS } from './constants'

const SocialButtons = () => {
  const renderButtons = () => (
    <div className="">
      {SOCIAL_LINKS.map((social, index) => (
        <button className="">
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
