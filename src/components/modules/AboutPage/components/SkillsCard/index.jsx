import { TagCloud } from 'react-tagcloud'
import usePortfolioContext from '@lib/Context/PortfolioContext'

import { SKILLS_COLLECTION } from './constants'

const ExperienceCard = () => {
  const { currentLanguage } = usePortfolioContext()

  const renderTags = (tag, size, color) => (
    <span
      style={{
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        border: `2px solid ${color}`
      }}
    >
      {tag.value}
    </span>
  )

  return (
    <>
      <h1>{currentLanguage === 'ESPAÑOL' ? 'Habilidades' : 'Skills'}</h1>
      <div>
        {/* TODO: WORK IN PROGRESS */}
        {/* <TagCloud tags={SKILLS_COLLECTION} minSize={1} maxSize={5} renderer={renderTags}/> */}
      </div>
    </>
  )
}

export default ExperienceCard
