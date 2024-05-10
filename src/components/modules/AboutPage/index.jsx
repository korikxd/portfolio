import { useEffect } from 'react'

import { LANGUAGES } from 'constants/languages'

import ModuleBanner from '@components/commons/ModuleBanner'

import BiographyCard from './components/BiographyCard'
import ExperienceCard from './components/ExperienceCard'
import ProfilePictureCard from './components/ProfilePictureCard'
import SkillsCard from './components/SkillsCard'
import { ENGLISH_BIOGRAPHY_PARAGRAPHS, SPANISH_BIOGRAPHY_PARAGRAPHS } from './components/BiographyCard/constants'
import { LANGUAGES_ENGLISH, LANGUAGES_SPANISH, SKILLS_ENGLISH, SKILLS_SPANISH } from './components/SkillsCard/constants'
import { EXPERIENCES_ENGLISH, EXPERIENCES_SPANISH } from './components/ExperienceCard/constants'

const AboutPage = ({ userData, aboutData, setAboutData, language }) => {
  useEffect(() => {
    if (language !== LANGUAGES.spanish) {
      setAboutData({
        ...aboutData,
        biographyTexts: ENGLISH_BIOGRAPHY_PARAGRAPHS,
        skills: SKILLS_ENGLISH,
        languages: LANGUAGES_ENGLISH,
        experiences: EXPERIENCES_ENGLISH
      })
    } else {
      setAboutData({
        ...aboutData,
        biographyTexts: SPANISH_BIOGRAPHY_PARAGRAPHS,
        skills: SKILLS_SPANISH,
        languages: LANGUAGES_SPANISH,
        experiences: EXPERIENCES_SPANISH
      })
    }
  }, [language])

  return (
    <div className={`flex flex-col items-center gap-16`}>
      <ModuleBanner text={'About'} background={'red'} />
      <ProfilePictureCard profilePictureRoute={aboutData.profilePicture} />
      <BiographyCard biographyTexts={aboutData.biographyTexts} currentLanguage={language} />
      <SkillsCard skills={aboutData.skills} languages={aboutData.languages} />
      <ExperienceCard experiences={aboutData.experiences} />
    </div>
  )
}

export default AboutPage
