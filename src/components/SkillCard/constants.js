const frontendIconsRoute = './SkillsIcons/Frontend'
const backendIconsRoute = './SkillsIcons/Backend'
const toolsIconsRoute = './SkillsIcons/Tools'

const FRONTEND_SKILLS = [
   { name: 'Nextjs', icon: `${frontendIconsRoute}/nextjs.svg`, points: 4 },
   { name: 'Reactjs', icon: `${frontendIconsRoute}/reactjs.svg`, points: 4 },
   { name: 'Apollo', icon: `${frontendIconsRoute}/apollo.svg`, points: 2 },
   { name: 'Html5', icon: `${frontendIconsRoute}/html5.svg`, points: 3 },
   { name: 'Css3', icon: `${frontendIconsRoute}/css3.svg`, points: 3 },
]

const BACKEND_SKILLS = [
   { name: 'Nestjs', icon: `${backendIconsRoute}/nestjs.svg`, points: 3 },
   { name: 'Nodejs', icon: `${backendIconsRoute}/nodejs.svg`, points: 3 },
   { name: 'Postgresql', icon: `${backendIconsRoute}/postgresql.svg`, points: 3 },
   { name: 'Mysql', icon: `${backendIconsRoute}/mysql.svg`, points: 3 },
]

const TOOLS_SKILLS = [
   { name: 'Agile', icon: `${toolsIconsRoute}/agile.svg`, points: 3 },
   { name: 'Git', icon: `${toolsIconsRoute}/git.svg`, points: 3 },
   { name: 'Notion', icon: `${toolsIconsRoute}/notion.svg`, points: 4 },
   { name: 'Jira', icon: `${toolsIconsRoute}/jira.svg`, points: 4 },
]

export const SKILL_CARDS = [
   { key: 'front', title: 'Frontend', skills: FRONTEND_SKILLS },
   { key: 'back', title: 'Backend', skills: BACKEND_SKILLS},
   { key: 'tools', title: 'Tools', skills: TOOLS_SKILLS },
]
