import PropTypes from 'prop-types'

import styles from './styles.module.less'

const SectionTitle = ({ sectionTitle }) => (
  <button className={styles.container} disabled>
    <span>{sectionTitle}</span>
  </button>
)

export default SectionTitle

SectionTitle.propTypes = {
  sectionTitle: PropTypes.string
}
