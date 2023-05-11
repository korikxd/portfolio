import { Card, Tag, Timeline } from 'antd'
import usePortfolioContext from '@lib/Context/PortfolioContext'

import {
  EXPERIENCES_ENGLISH,
  EXPERIENCES_SPANISH
} from './constants'

const ExperienceCard = () => {

  const { currentLanguage } = usePortfolioContext()

  const rightSection = (title, link, description, stack) => (
    <>
      <div>
        {link ? <a href={link} target='_blank' rel='noopener noreferrer'>{title}</a> : <p>{title}</p>}
        <p>{description}</p>
        <div>{stack.map((technology, index) => <Tag key={index}>{technology.name}</Tag>)}</div>
      </div>
    </>
  )

  const renderTimeLine = () => {
    if (currentLanguage === 'ESPAÑOL') {
      return (
        <Timeline mode='left'>
          {
            EXPERIENCES_SPANISH.map((job,index) => (
              <Timeline.Item key={index} label={job.date}>
                {rightSection(job.title, job.link, job.description, job.stack)}
              </Timeline.Item>
            ))
          }
        </Timeline>
      )
    }
    return (
      <Timeline mode='left'>
        {
          EXPERIENCES_ENGLISH.map((job,index) => (
            <Timeline.Item key={index} label={job.date}>
              {rightSection(job.title, job.link, job.description, job.stack)}
            </Timeline.Item>
          ))
        }
      </Timeline>
    )
  }

  return (
    <>
      <h1>{currentLanguage === 'ESPAÑOL' ? 'Experiencia Laboral' : 'Work Experience'}</h1>
      <Card>
        {renderTimeLine()}
      </Card>
    </>
  )
}

export default ExperienceCard
