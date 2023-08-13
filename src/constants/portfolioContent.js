export const HOME_PAGE_TEXTS = {
  navigationButtons: {},
  socials: {}
}

export const ABOUT_PAGE_TEXTS = {
  biographyTexts: {
    firstParagraph: `Hola!. Me llamo Gabriel García, soy un Ingeniero en Informática residente en Chile.`,
    secondParagraph: `Me encanta desarrollar nuevos productos desde principio a fin, impartiendo buenas prácticas y aprendiendo cada día nuevas cosas.`,
    thirdParagraph: `En mis tiempos libres me gusta jugar videojuegos, escuchar música, compartir con amigos y mi familia.`,
    memeQuoute: `"No pases un cambio a producción un día viernes."`
  },
  skills: {
    title: 'Habilidades',
    skillsList: [
      { value: 'Flutter', count: 5 },
      { value: 'Dart', count: 45 },
      { value: 'Java', count: 15 },
      { value: 'Git', count: 66 },
      { value: 'Github', count: 66 },
      { value: 'Gitlab', count: 66 },
      { value: 'Agile', count: 100 },
      { value: 'Notion', count: 30 },
      { value: 'Jira', count: 60 },
      { value: 'Insomnia', count: 50 },
      { value: 'Postman', count: 50 },
      { value: 'HTML5', count: 50 },
      { value: 'CSS3', count: 50 },
      { value: 'Javascript', count: 70 },
      { value: 'Typescript', count: 35 },
      { value: 'Reactjs', count: 80 },
      { value: 'Nextjs', count: 90 },
      { value: 'Vercel', count: 50 },
      { value: 'Antd', count: 100 },
      { value: 'Bootstrap', count: 60 },
      { value: 'Apollo', count: 30 },
      { value: 'MySQL', count: 50 },
      { value: 'PostgreSQL', count: 50 },
      { value: 'Nodejs', count: 30 },
      { value: 'Nestjs', count: 40 }
    ]
  },
  experiences: {
    title: 'Experiencia Laboral',
    jobs: [
      {
        date: 'Diciembre 2022 - Presente',
        title: 'Frontend Web Developer - Jumpitt Labs S.P.A',
        link: 'https://www.jumpitt.com/',
        description: `Desarrollo del portal de Transfer B2B para la empresa iCar, una plataforma web encargada de digitalizar el proceso de transferencia de un vehículo motorizado en Chile.`
        //stack: [TECHNOLOGIES_TAGS[2], ' • ', TECHNOLOGIES_TAGS[4], ' • ', TECHNOLOGIES_TAGS[5], ' • ', TECHNOLOGIES_TAGS[6]]
      },
      {
        date: 'Diciembre 2022 - Presente',
        title: 'Frontend Web Developer - Jumpitt Labs S.P.A',
        link: 'https://www.jumpitt.com/',
        description: `Plataforma web encargada de centralizar la gestión del ciclo de vida para la constitución de una prenda de vehículo.`
        //stack: [TECHNOLOGIES_TAGS[2], TECHNOLOGIES_TAGS[4], TECHNOLOGIES_TAGS[5]]
      },
      {
        date: 'Abril 2021 - Agosto 2021',
        title: 'Junior Mobile Engineer - Haip S.P.A',
        link: null,
        description: `Participé en el desarrollo de la aplicación mobile de la empresa misma utilizando Flutter y en el mantenimiento de la plataforma web.`
        //stack: [TECHNOLOGIES_TAGS[0], TECHNOLOGIES_TAGS[1], TECHNOLOGIES_TAGS[3], TECHNOLOGIES_TAGS[5]]
      }
    ]
  }
}

export const PROJECTS_PAGE_TEXTS = {}

export const CONTACT_PAGE_TEXTS = {}

export const PORTFOLIO_DEFAULT_VALUES = {
  portfolio: {
    language: 'ESPAÑOL',
    content: {
      homePageText: HOME_PAGE_TEXTS,
      aboutPageText: ABOUT_PAGE_TEXTS,
      projectsPageText: PROJECTS_PAGE_TEXTS,
      contactPageText: CONTACT_PAGE_TEXTS
    }
  }
}
