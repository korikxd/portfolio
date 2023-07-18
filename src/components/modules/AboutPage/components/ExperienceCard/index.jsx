import { Card, Tag, Timeline } from 'antd'
import usePortfolioContext from '@lib/Context/PortfolioContext'

import {
  EXPERIENCES_ENGLISH,
  EXPERIENCES_SPANISH
} from './constants'

const ExperienceCard = () => {

  const { currentLanguage } = usePortfolioContext()

  const timelineChildrenItem = (props) => {
    const { title, link, description, stack } = props
    return (
      <div>
        <a href={link !== '' ? link : null}>{title}</a>
        <p>{description}</p>
        <div>
          {stack.map((technologie, index) => <Tag key={index}>{technologie.name}</Tag>)}
        </div>
      </div>
    )
  }

  const spanishItems = [
    {
      label: EXPERIENCES_SPANISH[0].date,
      children: timelineChildrenItem(EXPERIENCES_SPANISH[0])
    },
    {
      label: EXPERIENCES_SPANISH[1].date,
      children: timelineChildrenItem(EXPERIENCES_SPANISH[1])
    },
    {
      label: EXPERIENCES_SPANISH[2].date,
      children: timelineChildrenItem(EXPERIENCES_SPANISH[2])
    }
  ]

  const englishItems = [
    {
      label: EXPERIENCES_ENGLISH[0].date,
      children: timelineChildrenItem(EXPERIENCES_ENGLISH[0])
    },
    {
      label: EXPERIENCES_ENGLISH[1].date,
      children: timelineChildrenItem(EXPERIENCES_ENGLISH[1])
    },
    {
      label: EXPERIENCES_ENGLISH[2].date,
      children: timelineChildrenItem(EXPERIENCES_ENGLISH[2])
    }
  ]

  return (
    <>
      <h1>{currentLanguage === 'ESPAÑOL' ? 'Experiencia Laboral' : 'Work Experience'}</h1>
      <Card>
        <Timeline mode='left' items={currentLanguage === 'ESPAÑOL' ? spanishItems : englishItems}/>
      </Card>
    </>
  )
}

export default ExperienceCard
