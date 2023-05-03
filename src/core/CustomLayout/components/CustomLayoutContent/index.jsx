import CharacterCard from '@components/CharacterCard'
import ProjectCarousel from '@components/ProjectCarousel'
import SectionTitle from '@components/SectionTitle'
import SkillCard from '@components/SkillCard'

const CustomLayoutContent = () => (
  <>
    <CharacterCard/>
    <SectionTitle title={'SKILLS'}/>
    <SkillCard/>
    <SectionTitle title={'PROJECTS'}/>
    <ProjectCarousel/>
  </>
)

export default CustomLayoutContent
