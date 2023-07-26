import BiographyCard from './components/BiographyCard'
import ExperienceCard from './components/ExperienceCard'
import ProfilePictureCard from './components/ProfilePictureCard'
import SkillsCard from './components/SkillsCard'

const AboutPage = () => (
  <div className="flex flex-col justify-center">
    <div className="">
      <ProfilePictureCard />
    </div>
    <div className="">
      <BiographyCard />
    </div>
    <div className="">
      <SkillsCard />
    </div>
    <div className="">
      <ExperienceCard />
    </div>
  </div>
)

export default AboutPage
