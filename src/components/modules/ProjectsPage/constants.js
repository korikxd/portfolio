const TECHNOLOGIES_TAGS = [
  { name: 'Flutter', color: 'blue' },
  { name: 'Dart', color: 'lightBlue' },
  { name: 'Vercel', color: 'black' },
  { name: 'React.js', color: 'gray' },
  { name: 'Next.js', color: 'black' },
  { name: 'Antd', color: 'lightBlue' },
  { name: 'Apollo', color: 'purple' },
  { name: 'Nest.js', color: 'red' },
  { name: 'Node.js', color: 'green' },
  { name: 'PostgreSQL', color: 'lightBlue' }
]

const SPANISH_RIBBONS = [
  { key: 'active', label: 'Activo', color: 'green' },
  { key: 'ceased', label: 'Finalizado', color: 'red' }
]

const ENGLISH_RIBBONS = [
  { key: 'active', label: 'Active', color: 'green' },
  { key: 'ceased', label: 'Ceased', color: 'red' }
]

export const PROJECTS_SPANISH = {
  pageTitle: 'PROYECTOS',
  projectsList: [
    {
      image: 'starken_logo.jpg',
      name: 'StarkenCL',
      description: `Desarrollo de una plataforma web integral para Starken, líder en logística en Chile, optimizando la gestión de envíos nacionales e internacionales. La solución centraliza el seguimiento en tiempo real de paquetes, la creación de envíos y la consulta de servicios, mejorando la eficiencia operativa y la experiencia del usuario.`,
      link: 'https://starken.cl/',
      tags: [TECHNOLOGIES_TAGS[3], TECHNOLOGIES_TAGS[5], TECHNOLOGIES_TAGS[7], TECHNOLOGIES_TAGS[8]],
      status: SPANISH_RIBBONS[0]
    },
    {
      image: 'transferb2b_logo.png',
      name: 'Transfer B2B',
      description: `Plataforma web encargada de simplificar el proceso de transferencia de vehículos. Ya sea para comprar, vender o regalar (transferir) un vehículo. Los usuarios pueden introducir los datos del vehículo, cargar los documentos necesarios e iniciar el proceso de transferencia dentro de la aplicación.
         La aplicación ofrece una guía paso a paso que garantiza el cumplimiento de todos los requisitos legales y administrativos.
      `,
      link: 'https://transfer.i-car.cl/',
      tags: [
        TECHNOLOGIES_TAGS[2],
        TECHNOLOGIES_TAGS[4],
        TECHNOLOGIES_TAGS[5],
        TECHNOLOGIES_TAGS[6],
        TECHNOLOGIES_TAGS[7]
      ],
      status: SPANISH_RIBBONS[1]
    },
    {
      image: 'prendas_logo.png',
      name: 'Prendas',
      description: `Plataforma web encargada de gestionar el proceso de prendado de un vehículo en Chile.
      Simplifica las tareas administrativas que deben de realizar los ejecutivos durante todo el proceso, las cuales consisten en subir la documentación correspondiente y
      hacer seguimiento al estado de las solicitudes.`,
      link: 'https://prendas.i-car.cl/',
      tags: [
        TECHNOLOGIES_TAGS[2],
        TECHNOLOGIES_TAGS[4],
        TECHNOLOGIES_TAGS[5],
        TECHNOLOGIES_TAGS[7],
        TECHNOLOGIES_TAGS[9]
      ],
      status: SPANISH_RIBBONS[1]
    },
    {
      image: 'haip_logo.png',
      name: 'Haip',
      description: `Aplicación móvil encargada de actuar como intermediaria entre influencers de diversos nichos y marcas que buscan mejorar su presencia digital.
      Los influencers pueden mostrar su trabajo y conectar con marcas que se ajusten a su estilo de contenidos. Mientras que las marcas pueden buscar e identificar fácilmente a los influencers en función de criterios específicos, negociar alianzas
      y realizar un seguimiento del rendimiento de la campaña, todo dentro de la aplicación.`,
      link: '',
      tags: [TECHNOLOGIES_TAGS[0], TECHNOLOGIES_TAGS[1], TECHNOLOGIES_TAGS[8]],
      status: SPANISH_RIBBONS[1]
    }
  ]
}

export const PROJECTS_ENGLISH = {
  pageTitle: 'PROJECTS',
  projectsList: [
    {
      image: 'starken_logo.jpg',
      name: 'StarkenCL',
      description: `Development of a comprehensive web platform for Starken, a logistics leader in Chile, optimizing the management of national and international shipments. The solution centralizes real-time package tracking, shipment creation, and service inquiries, improving operational efficiency and user experience.`,
      link: 'https://starken.cl/',
      tags: [TECHNOLOGIES_TAGS[3], TECHNOLOGIES_TAGS[5], TECHNOLOGIES_TAGS[7], TECHNOLOGIES_TAGS[8]],
      status: ENGLISH_RIBBONS[0]
    },
    {
      image: 'transferb2b_logo.png',
      name: 'Transfer B2B',
      description: `Web platform designed to simplify the process of vehicle transfer. Whether you're buying, selling or gifting (transfering) a vehicle.
      Users can surely input vehicle details, upload required documents and initiate the transfer process within the app.
      The app provides a step-by-step guidance, ensuring all legal and administrative requirements are met.`,
      link: 'https://transfer.i-car.cl/',
      tags: [
        TECHNOLOGIES_TAGS[2],
        TECHNOLOGIES_TAGS[4],
        TECHNOLOGIES_TAGS[5],
        TECHNOLOGIES_TAGS[6],
        TECHNOLOGIES_TAGS[7]
      ],
      status: ENGLISH_RIBBONS[1]
    },
    {
      image: 'prendas_logo.png',
      name: 'Prendas',
      description: `Web platform designed to streamline the process of vehicle pledging in Chile.
      Simplifying the administrative tasks involved in the process, such as uploading neccessary documentation and track the status of the vehicle pledge`,
      link: 'https://prendas.i-car.cl/',
      tags: [
        TECHNOLOGIES_TAGS[2],
        TECHNOLOGIES_TAGS[4],
        TECHNOLOGIES_TAGS[5],
        TECHNOLOGIES_TAGS[7],
        TECHNOLOGIES_TAGS[9]
      ],
      status: ENGLISH_RIBBONS[1]
    },
    {
      image: 'haip_logo.png',
      name: 'Haip',
      description: `A mobile app that acts as a seamless bridge between influencers from various niches and brands looking to enhance their digital presence.
      Influencers can showcase their work and connect with brands that align with their content style. Brands, on the other hand, can easily search and identify influencers based on specific criteria, negotiate partnerships
      and track campaign performance all within the app.`,
      link: '',
      tags: [TECHNOLOGIES_TAGS[0], TECHNOLOGIES_TAGS[1], TECHNOLOGIES_TAGS[8]],
      status: ENGLISH_RIBBONS[1]
    }
  ]
}
