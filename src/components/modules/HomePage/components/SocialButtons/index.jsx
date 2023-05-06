import { Button, Col, Row } from 'antd'
import Link from 'next/link'
import { SOCIAL_LINKS } from './constants'

import styles from './styles.module.less'

const SocialButtons = () => {

  const renderButtons = () => (
    <Row gutter={8} justify='center' className={styles.socialbuttons_container}>
      {
        SOCIAL_LINKS.map((social, index) => (
          <Col key={index}>
            <Button shape='circle'>
              <Link target='_blank' rel='noopener noreferrer' href={social.link}>{social.icon}</Link>
            </Button>
          </Col>
        ))
      }
    </Row>
  )

  return (
    renderButtons()
  )
}


export default SocialButtons