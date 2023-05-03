import { Card, Col, Row, Tooltip } from 'antd'
import Image from 'next/image'

import { SOCIAL_MEDIA } from './constants'

const SocialMediaCard = () => {

  const iconsToRender = () => (
    <Card>
      <Row>
        <Col span={6}>
          <Tooltip title='Linkedin'>
            <a target='_blank' rel='noreferrer' href={SOCIAL_MEDIA[0].link}>
              <Image alt={SOCIAL_MEDIA[0].name} width={30} height={20} src={'./SocialMediaIcons/linkedin.svg'}/>
            </a>
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title='Github'>
            <a target='_blank' rel='noreferrer' href={SOCIAL_MEDIA[1].link}>
              <Image alt={SOCIAL_MEDIA[1].name} width={30} height={20} src={'./SocialMediaIcons/github.svg'}/>
            </a>
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title='Youtube'>
            <a target='_blank' rel='noreferrer' href={SOCIAL_MEDIA[2].link}>
              <Image alt={SOCIAL_MEDIA[2].name} width={30} height={20} src={'./SocialMediaIcons/youtube.svg'}/>
            </a>
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title='Resume'>
            <a target='_blank' rel='noreferrer' href={SOCIAL_MEDIA[3].link}>
              <Image alt={SOCIAL_MEDIA[3].name} width={30} height={20} src={'./SocialMediaIcons/resume.svg'}/>
            </a>
          </Tooltip>
        </Col>
      </Row>
    </Card>
  )

  return (
    iconsToRender()
  )
}

export default SocialMediaCard
