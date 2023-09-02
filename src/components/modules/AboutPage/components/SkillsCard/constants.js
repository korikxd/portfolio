import {
  SiFlutter,
  SiDart,
  SiNotion,
  SiJira,
  SiInsomnia,
  SiPostman,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiApollographql,
  SiVercel,
  SiBootstrap,
  SiAntdesign
} from 'react-icons/si'
import { FaJava, FaGitlab, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { DiScrum, DiMysql } from 'react-icons/di'
import { BsGit, BsGithub } from 'react-icons/bs'

export const SKILLS_COLLECTION = [
  { key: 'Flutter', icon: <SiFlutter width={24} height={24} className={``} /> },
  { key: 'Dart', icon: <SiDart width={24} height={24} className={``} /> },
  { key: 'Java', icon: <FaJava width={24} height={24} className={``} /> },
  { key: 'Git', icon: <BsGit width={24} height={24} className={``} /> },
  { key: 'Github', icon: <BsGithub width={24} height={24} className={``} /> },
  { key: 'Gitlab', icon: <FaGitlab width={24} height={24} className={``} /> },
  { key: 'Agile', icon: <DiScrum width={24} height={24} className={``} /> },
  { key: 'Notion', icon: <SiNotion width={24} height={24} className={``} /> },
  { key: 'Jira', icon: <SiJira width={24} height={24} className={``} /> },
  { key: 'Insomnia', icon: <SiInsomnia width={24} height={24} className={``} /> },
  { key: 'Postman', icon: <SiPostman width={24} height={24} className={``} /> },
  { key: 'HTML5', icon: <FaHtml5 width={24} height={24} className={``} /> },
  { key: 'CSS3', icon: <SiCss3 width={24} height={24} className={``} /> },
  { key: 'Javascript', icon: <SiJavascript width={24} height={24} className={``} /> },
  { key: 'Typescript', icon: <SiTypescript width={24} height={24} className={``} /> },
  { key: 'Reactjs', icon: <SiReact width={24} height={24} className={``} /> },
  { key: 'Nextjs', icon: <SiNextdotjs width={24} height={24} className={``} /> },
  { key: 'Vercel', icon: <SiVercel width={24} height={24} className={``} /> },
  { key: 'Antd', icon: <SiAntdesign width={24} height={24} className={``} /> },
  { key: 'Bootstrap', icon: <SiBootstrap width={24} height={24} className={``} /> },
  { key: 'Apollo', icon: <SiApollographql width={24} height={24} className={``} /> },
  { key: 'MySQL', icon: <DiMysql width={24} height={24} className={``} /> },
  { key: 'PostgreSQL', icon: <SiPostgresql width={24} height={24} className={``} /> },
  { key: 'Nodejs', icon: <FaNodeJs width={24} height={24} className={``} /> },
  { key: 'Nestjs', icon: <SiNestjs width={24} height={24} className={``} /> }
]
//SPANISH TEXTS

export const SKILLS_SPANISH = {
  title: 'HABILIDADES',
  skillsList: SKILLS_COLLECTION
}

export const LANGUAGES_SPANISH = {
  title: 'IDIOMAS',
  languagesList: [
    { key: 'spanish', label: 'Español', value: 5 },
    { key: 'english', label: 'Inglés', value: 4 }
  ]
}

//ENGLISH TEXTS

export const SKILLS_ENGLISH = {
  title: 'SKILLS',
  skillsList: SKILLS_COLLECTION
}

export const LANGUAGES_ENGLISH = {
  title: 'LANGUAGES',
  languagesList: [
    { key: 'spanish', label: 'Spanish', value: 5 },
    { key: 'english', label: 'English', value: 4 }
  ]
}
