import ContactButton from './components/ContactButton'
import { useEffect } from 'react'
import { CONTACT_ENGLISH_TEXTS, CONTACT_SPANISH_TEXTS } from './constants'

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

  return (
    <div className={`text-center h-full`}>
      <h1>{contactData.mainTitle}</h1>
      <p>{contactData.paragraph}</p>
      <div className={`flex justify-center items-center`}>
        {contactData.contactButtons.map((button) => (
          <ContactButton key={button.key} href={button.href} text={button.label} icon={button.icon} />
        ))}
      </div>
    </div>
  )
}

export default ContactPage
