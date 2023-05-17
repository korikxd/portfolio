import PropTypes from 'prop-types'

import styles from './styles.module.less'

const ProjectCard = ({projectImage, projectName, projectDescription, projectLink}) => (
  <div className={styles.card_container} style={{background: `url(${projectImage})`}}>
    <a className={styles.card_overlay} href={projectLink} target='_blank' rel='noopener noreferrer'>
      <div>
        <p className={styles.project_title}>{projectName}</p>
      </div>
      <div>
        <p className={styles.project_description}>{projectDescription}</p>
      </div>
    </a>
  </div>
)

export default ProjectCard

ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectLink: PropTypes.string
}
