import { SiYoutube, SiGithub, SiLinkedin } from 'react-icons/si'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { HiDocumentText } from 'react-icons/hi'

export const HOME_PAGE_TEXTS = {
  navigationButtons: [],
  socials: [
    { name: 'Github', link: 'https://github.com/korikxd', icon: <SiGithub /> },
    { name: 'Youtube', link: 'https://www.youtube.com/@korikxd', icon: <SiYoutube /> },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/gabriel-garc%C3%ADa-mercado/', icon: <SiLinkedin /> }
  ]
}

export const ABOUT_PAGE_TEXTS = {
  profilePicture: '/profile_picture.png',
  biographyTexts: {},
  skills: {
    title: '',
    skillsList: []
  },
  languages: {
    title: '',
    languagesList: []
  },
  experiences: {
    title: '',
    jobs: []
  }
}

export const PROJECTS_PAGE_TEXTS = {
  pageTitle: '',
  projectsList: []
}

export const CONTACT_PAGE_TEXTS = {
  mainTitle: '',
  paragraph: '',
  contactButtons: [
    {
      key: 'linkedin',
      label: 'Linkedin',
      icon: <AiFillLinkedin />,
      href: 'https://www.linkedin.com/in/gabriel-garc%C3%ADa-mercado/'
    },
    { key: 'email', label: 'Email', icon: <AiOutlineMail />, href: 'mailto:gabriel.garmer01@gmail.com' },
    { key: 'resume', label: 'Resume', icon: <HiDocumentText />, href: '' }
  ]
}

export const PORTFOLIO_DEFAULT_VALUES = {
  language: 'ESPAÑOL',
  content: {
    homePageText: HOME_PAGE_TEXTS,
    aboutPageText: ABOUT_PAGE_TEXTS,
    projectsPageText: PROJECTS_PAGE_TEXTS,
    contactPageText: CONTACT_PAGE_TEXTS
  }
}
