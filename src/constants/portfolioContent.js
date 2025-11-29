import { SiGithub, SiLinkedin, SiInstagram, SiYoutube } from 'react-icons/si'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFileAlt } from 'react-icons/fa'

export const HOME_PAGE_TEXTS = {
  navigationButtons: [],
  socials: [
    { name: 'Email', link: 'mailto:gabriel.garmer01@gmail.com', icon: <AiOutlineMail />, color: '#6b7280' },
    { name: 'Instagram', link: 'https://instagram.com/korikxd', icon: <SiInstagram />, color: '#6b7280' },
    { name: 'Youtube', link: 'https://www.youtube.com/@korikxd', icon: <SiYoutube />, color: '#6b7280' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/gabgarmer/', icon: <SiLinkedin />, color: '#3b82f6' },
    { name: 'Github', link: 'https://github.com/korikxd', icon: <SiGithub />, color: '#6b7280' },
    {
      name: 'CV',
      link: 'https://drive.google.com/file/d/1nWw5geeoAl2U0hcHh6wJ2ML-oHXUYYaK/view',
      icon: <FaFileAlt />,
      color: '#6b7280',
      dynamicLink: {
        ESPAÑOL: 'https://drive.google.com/file/d/1nWw5geeoAl2U0hcHh6wJ2ML-oHXUYYaK/view',
        ENGLISH: 'https://drive.google.com/file/d/1BiZHer8Z6kwsHUTgAXmt3elE_4c3tZTs/view'
      }
    }
  ]
}

export const ABOUT_PAGE_TEXTS = {
  pageTitle: '',
  profilePicture: '/profile_picture.png',
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

export const PORTFOLIO_DEFAULT_VALUES = {
  language: 'ESPAÑOL',
  mobileMenu: false,
  content: {
    homePageText: HOME_PAGE_TEXTS,
    aboutPageText: ABOUT_PAGE_TEXTS,
    projectsPageText: PROJECTS_PAGE_TEXTS
  }
}
