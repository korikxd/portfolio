import { Avatar, Card, Col, Form, Input, Row } from 'antd'
import SectionTitle from '@components/SectionTitle'

import styles from './styles.module.less'

const CharacterCard = () => {

  const renderCharacterPicture = () => (
    <Avatar>A</Avatar>
  )

  const renderInfoSection = () => (
    <>
      <SectionTitle title={'INFO'}/>
      <Form.Item label='Character Name:'>
        <Input className={styles.input}/>
      </Form.Item>
      <Form.Item label='Profession:'>
        <Input className={styles.input}/>
      </Form.Item>
      <Form.Item label='About:'>
        <Input className={styles.input_about}/>
      </Form.Item>
    </>
  )

  const renderContactSection = () => (
    <>
      <SectionTitle title={'CONTACT'}/>
      <Form.Item label='Phone Number:'>
        <Input className={styles.input}/>
      </Form.Item>
      <Form.Item label='Email:'>
        <Input className={styles.input}/>
      </Form.Item>
    </>
  )

  const renderCard = () => (
    <Card>
      <Form disabled>
        <Row gutter={16}>
          <Col span={6}>
            {renderCharacterPicture()}
          </Col>
          <Col span={9}>
            {renderInfoSection()}
          </Col>
          <Col span={9}>
            {renderContactSection()}
          </Col>
        </Row>
      </Form>
    </Card>
  )

  return (
    renderCard()
  )
}

export default CharacterCard
