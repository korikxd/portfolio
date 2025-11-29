import { useEffect } from 'react'
import SectionBanner from '@components/commons/SectionBanner'
import BiographyCard from './components/BiographyCard'
import ExperienceCard from './components/ExperienceCard'
import ProfilePictureCard from './components/ProfilePictureCard'
import SkillsCard from './components/SkillsCard'

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
    <div className="min-h-screen">
      <SectionBanner title={aboutData.pageTitle} image="/banner.png" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
        {/* Profile Picture and Biography */}
        <div className="flex flex-col items-center gap-12">
          <ProfilePictureCard profilePictureRoute={aboutData.profilePicture} />
          <BiographyCard biographyTexts={aboutData.biographyTexts} currentLanguage={language} />
        </div>

        {/* Skills and Languages */}
        <SkillsCard skills={aboutData.skills} languages={aboutData.languages} />

        {/* Experience Timeline */}
        <ExperienceCard experiences={aboutData.experiences} />
      </div>
    </div>
  )
}

export default AboutPage
