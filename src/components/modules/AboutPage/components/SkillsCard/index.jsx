import { Card } from 'antd'
import { TagCloud } from 'react-tagcloud'
import usePortfolioContext from '@lib/Context/PortfolioContext'

import { SKILLS_COLLECTION } from './constants'
import styles from './styles.module.less'

const ExperienceCard = () => {

  const { currentLanguage } = usePortfolioContext()

  const renderTags = (tag, size, color) => (
    <span
      className={styles.tag}
      style={{
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        border: `2px solid ${color}`,
      }}
    >
      {tag.value}
    </span>
  )

  return (
    <>
      <h1>{currentLanguage === 'ESPAÑOL' ? 'Habilidades' : 'Skills'}</h1>
      <Card>
        <TagCloud tags={SKILLS_COLLECTION} minSize={1} maxSize={5} renderer={renderTags}/>
      </Card>
    </>
  )
}

export default ExperienceCard
