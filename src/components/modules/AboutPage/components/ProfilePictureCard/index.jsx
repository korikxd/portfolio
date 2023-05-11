import { Avatar, Card } from 'antd'

import styles from './styles.module.less'

const ProfilePictureCard = () => (
  <Card size='large'>
    <Avatar className={styles.profile_picture} shape='circle' src='/profile_picture.png'/>
  </Card>
)

export default ProfilePictureCard
