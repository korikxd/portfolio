import { useEffect } from 'react'
import SectionBanner from '@components/commons/SectionBanner'
import ContainerCard from './components/ContainerCard';

// import BiographyCard from './components/BiographyCard'
// import ExperienceCard from './components/ExperienceCard'
// import ProfilePictureCard from './components/ProfilePictureCard'
// import SkillsCard from './components/SkillsCard'

import { LANGUAGES_ENGLISH, LANGUAGES_SPANISH, SKILLS_ENGLISH, SKILLS_SPANISH } from './components/SkillsCard/constants'
import { EXPERIENCES_ENGLISH, EXPERIENCES_SPANISH } from './components/ExperienceCard/constants'
import { ABOUT_PAGE_TITLE_SPANISH, ABOUT_PAGE_TITLE_ENGLISH } from './constants'

const AboutPage = ({ aboutData, setAboutData, language }) => {
  useEffect(() => {
    if (language !== 'ESPAÑOL') {
      setAboutData({
        ...aboutData,
        pageTitle: ABOUT_PAGE_TITLE_ENGLISH,
        skills: SKILLS_ENGLISH,
        languages: LANGUAGES_ENGLISH,
        experiences: EXPERIENCES_ENGLISH
      })
    } else {
      setAboutData({
        ...aboutData,
        pageTitle: ABOUT_PAGE_TITLE_SPANISH,
        skills: SKILLS_SPANISH,
        languages: LANGUAGES_SPANISH,
        experiences: EXPERIENCES_SPANISH
      })
    }
  }, [language])

  return (
    <div className={`flex flex-col items-center gap-16`}>
      <SectionBanner title={aboutData.pageTitle} image={''}/>
      <ContainerCard/>
      {/* <ProfilePictureCard profilePictureRoute={aboutData.profilePicture} /> */}
      {/* <BiographyCard biographyTexts={aboutData.biographyTexts} currentLanguage={language} /> */}
      {/* <SkillsCard skills={aboutData.skills} languages={aboutData.languages} /> */}
      {/* <ExperienceCard experiences={aboutData.experiences} /> */}
    </div>
  )
}

export default AboutPage
