import { SiGithub, SiLinkedin } from 'react-icons/si'
import { LANGUAGES } from './languages'

export const HOME_PAGE_TEXTS = {
  navigationButtons: [],
  socials: [
    { name: 'Github', link: 'https://github.com/korikxd', icon: <SiGithub />, color: '#6b7280' },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/gabgarmer/',
      icon: <SiLinkedin />,
      color: '#3b82f6'
    }
  ]
}

export const ABOUT_PAGE_TEXTS = {
  profilePicture: '/profile_picture.jpeg',
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

export const PORTFOLIO_DEFAULT_VALUES = {
  language: LANGUAGES.spanish,
  mobileMenu: false,
  content: {
    homePageText: HOME_PAGE_TEXTS,
    aboutPageText: ABOUT_PAGE_TEXTS,
    projectsPageText: PROJECTS_PAGE_TEXTS
  }
}
