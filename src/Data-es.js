let Projects = [
  {
    Title: 'ERP Educorp',
    Time: '2017',
    Descriptions: [
      'Software ERP para colegios en Perù que maneja procesos de diferentes areas.',
      'Contabilidad - Pagos - Coordinación Academica - Asistencia de estudiantes - Entrega de recibos - Planilla Basica - etc'
    ],
    Role: 'Frontend, backend, base de datos',
    Features: [
      {
        Type: 'Size',
        Feature: '47 views'
      },
      {
        Type: 'State',
        Feature: 'On Production'
      },
      {
        Type: 'Users',
        Feature: '40 - 50 unique users daily'
      }
    ],
    MainImage: 'Edu_Fondo.png',
    Tecnologies: ['ASP.NET', 'Javascript', 'Boostrap', 'C#', 'Rdlc Reports', 'Sql Server'],
    TecnologiesDetail: [
      { Type: 'FrontEnd', Content: ['HTML', 'CSS', 'Javascript', 'Boostrap', 'Rdlc Reports', 'Razor'] },
      { Type: 'BackEnd', Content: ['Sql Server', 'C#', 'ASP.NET'] },
      { Type: 'Despliegue', Content: ['IIS'] }
    ],
    Photos: [
      {
        Url: 'Edu_Dashboard.png',
        Description: 'Dashboard para mostrar metricas del colegio para los usuarios'
      },
      {
        Url: 'Edu_Teachers.png',
        Description:
          'Esta ventana es para modificar datos de los profesores, existe una ventana similar para estudiantes'
      },
      {
        Url: 'Edu_Time.png',
        Description: 'Esta ventana es para cambiar la hora de entrada del profesor al colegio'
      },
      {
        Url: 'Edu_Uniforms.png',
        Description: 'En esta ventana el colegio puede administrar las ventas de uniformes a sus alumnos'
      },
      {
        Url: 'Edu_Report.png',
        Description: 'Este voucher se entrega cuando algun alumno realiza algun pago en el colegio'
      }
    ],
    NextProject: 'Aula Virtual'
  },
  {
    Title: 'Aula Virtual',
    Time: '2019',
    Descriptions: [
      'Este proyecto ayuda a los colegios a poder brindar material de clases virtuales a sus alumnos',
      'Videos, archivos, evaluaciones, comunicados'
    ],
    Role: 'Frontend, backend, base de datos',
    Features: [
      {
        Type: 'Size',
        Feature: '20 pages'
      },
      {
        Type: 'State',
        Feature: 'On Production'
      },
      {
        Type: 'Users',
        Feature: '4500 - 5000 unique users daily'
      }
    ],
    MainImage: 'VirtClas_Fondo.png',
    Tecnologies: ['React', 'Express', 'Graphql', 'Rest API', 'Sql Server'],
    TecnologiesDetail: [
      { Type: 'FrontEnd', Content: ['React', 'React Router', 'HTML', 'Sass', 'Javascript'] },
      { Type: 'BackEnd', Content: ['Sql Server', 'Express.js', 'Graphql and Rest API'] },
      { Type: 'Despliegue', Content: ['IIS', 'AWS S3', ' AWS CloudFront'] },
      { Type: 'Others', Content: ['WebPack', 'JsonWebToken'] }
    ],
    Photos: [
      {
        Url: 'VirtClas_Notification.png',
        Description: 'Ventana de notificaciones para alumnos'
      },
      {
        Url: 'VirtClas_ListClass.png',
        Description: 'Esta ventana es para mostrar las clases disponibles a los estudiantes'
      },
      {
        Url: 'VirtClas_Class.png',
        Description: 'La clase de un alumno - videos y archivos'
      },
      {
        Url: 'VirtClas_Exam.png',
        Description: 'Esta es la ventana de evaluaciones, el alumno debe subir fotos con sus respuestas'
      }
    ],
    NextProject: 'Itago',
    PreviousProject: 'Educorp'
  },
  {
    Title: 'Itago',
    Time: '2020',
    Descriptions: [
      'Aplicación web progresiva que permite a los usuarios crear salas de chat sin registro',
      'los usuarios pueden eliminar todos sus mensajes de la sala de chat.'
    ],
    Role: 'Frontend, backend, base de datos',
    Features: [
      {
        Type: 'Size',
        Feature: '2 pages'
      },
      {
        Type: 'State',
        Feature: 'On Production'
      }
    ],
    LivePreview: 'https://www.itago.net',
    MainImage: 'Hello_Fondo.png',
    Tecnologies: ['React', 'Express', 'Rest API', 'Socket IO', 'Sql Server', 'AWS'],
    TecnologiesDetail: [
      { Type: 'FrontEnd', Content: ['React', 'Socket IO', 'HTML', 'Sass', 'Javascript'] },
      { Type: 'BackEnd', Content: ['Mongo DB', 'Express.js', 'Socket IO', 'Rest API'] },
      { Type: 'Despliegue', Content: ['AWS Amplify', 'AWS Elastic Beanstack'] },
      { Type: 'Others', Content: ['WebPack', 'GitHub', 'CI/CD'] }
    ],
    Photos: [
      {
        Url: 'Hello_Fondo.png',
        Description: 'Ventanas de la aplicación'
      }
    ],
    PreviousProject: 'Aula Virtual'
  }
]

export default Projects
