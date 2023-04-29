import { Avatar, Card, Col, Form, Input, Row } from 'antd'

const CharacterCard = () => {

  const renderCharacterPicture = () => (
    <Avatar>A</Avatar>
  )

  const renderInfoSection = () => (
    <>
      <Form.Item label='Character Name:'>
        <Input/>
      </Form.Item>
      <Form.Item label='Profession:'>
        <Input/>
      </Form.Item>
      <Form.Item label='About:'>
        <Input/>
      </Form.Item>
    </>
  )

  const renderContactSection = () => (
    <>
      <Form.Item label='Phone Number:'>
        <Input/>
      </Form.Item>
      <Form.Item label='Email:'>
        <Input/>
      </Form.Item>
    </>
  )

  return (
    <Card>
      <Row>
        <Col span={6}>
          {renderCharacterPicture()}
        </Col>
        <Form disabled>
          <Col span={9}>
            {renderInfoSection()}
          </Col>
          <Col span={9}>
            {renderContactSection()}
          </Col>
        </Form>
      </Row>
    </Card>
    )
  }

export default CharacterCard
