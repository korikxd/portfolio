import ContactButton from './components/ContactButton'
import { useEffect } from 'react'
import { CONTACT_ENGLISH_TEXTS, CONTACT_SPANISH_TEXTS, CV_ENGLISH, CV_SPANISH } from './constants'

const ContactPage = ({ contactData, setContactData, language }) => {
  useEffect(() => {
    if (language !== 'ESPAÑOL') {
      setContactData({
        ...contactData,
        mainTitle: CONTACT_ENGLISH_TEXTS.title,
        paragraph: CONTACT_ENGLISH_TEXTS.paragraph
      })
    } else {
      setContactData({
        ...contactData,
        mainTitle: CONTACT_SPANISH_TEXTS.title,
        paragraph: CONTACT_SPANISH_TEXTS.paragraph
      })
    }
  }, [language])

  const renderResumeButton = () => (
    <ContactButton
      key={language === 'ESPAÑOL' ? CV_SPANISH.key : CV_ENGLISH.key}
      href={language === 'ESPAÑOL' ? CV_SPANISH.href : CV_ENGLISH.href}
      text={language === 'ESPAÑOL' ? CV_SPANISH.label : CV_ENGLISH.label}
      icon={CV_SPANISH.icon}
    />
  )

  return (
    <div className={`text-center h-full`}>
      <h1 className={`text-primaryOrange`}>{contactData.mainTitle}</h1>
      <p className={`my-8`}>{contactData.paragraph}</p>
      <div className={`flex justify-center items-center gap-6`}>
        {contactData.contactButtons.map((button) => (
          <ContactButton key={button.key} href={button.href} text={button.label} icon={button.icon} />
        ))}
        {renderResumeButton()}
      </div>
    </div>
  )
}

export default ContactPage
