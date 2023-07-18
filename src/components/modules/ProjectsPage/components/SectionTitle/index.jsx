import PropTypes from 'prop-types'

const SectionTitle = ({ sectionTitle }) => (
  <button disabled>
    <span>{sectionTitle}</span>
  </button>
)

export default SectionTitle

SectionTitle.propTypes = {
  sectionTitle: PropTypes.string
}
