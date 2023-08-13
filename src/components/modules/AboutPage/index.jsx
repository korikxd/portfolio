import BiographyCard from './components/BiographyCard'
import ExperienceCard from './components/ExperienceCard'
import ProfilePictureCard from './components/ProfilePictureCard'
import SkillsCard from './components/SkillsCard'

const AboutPage = () => (
  <div className={`flex flex-col items-center gap-16`}>
    <ProfilePictureCard />
    <BiographyCard />
    <SkillsCard />
    <ExperienceCard />
  </div>
)

export default AboutPage
