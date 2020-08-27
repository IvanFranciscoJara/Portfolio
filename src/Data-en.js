let Projects = [
  {
    Title: 'Educorp',
    Time: '2017',
    Descriptions: [
      'This is a large-scale software for schools in Perú that helps in many areas.',
      'Accounting - Payments - Academic Management - Student Assistance - Issuance of vouchers - Payroll Management - etc'
    ],
    Role: 'Frontend, backend, database',
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
      { Type: 'Deployment', Content: ['IIS'] }
    ],
    Photos: [
      {
        Url: 'Edu_Dashboard.png',
        Description: 'Dashboard to show some metric from the day to diferents users'
      },
      {
        Url: 'Edu_Teachers.png',
        Description:
          'This screen is to choose and modify teachers information, there is also a similar screen for students'
      },
      {
        Url: 'Edu_Time.png',
        Description: 'This is the screen to change time of entrance from a teacher'
      },
      {
        Url: 'Edu_Uniforms.png',
        Description: 'In this screen, the school also can sell uniforms to students'
      },
      {
        Url: 'Edu_Report.png',
        Description: 'The voucher that gives to someone when making a payment in the school'
      }
    ],
    NextProject: 'Virtual Classroom'
  },
  {
    Title: 'Virtual Classroom',
    Time: '2019',
    Descriptions: [
      'This project was build to let schools give virtual classes to their students',
      'Videos, documents, evaluations, notice'
    ],
    Role: 'Frontend, backend, database',
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
      { Type: 'Deployment', Content: ['IIS', 'AWS S3', ' AWS CloudFront'] },
      { Type: 'Others', Content: ['WebPack', 'JsonWebToken'] }
    ],
    Photos: [
      {
        Url: 'VirtClas_Notification.png',
        Description: 'Screen to show notifications to students'
      },
      {
        Url: 'VirtClas_ListClass.png',
        Description: 'This screen show the classes that are avaiable to the students'
      },
      {
        Url: 'VirtClas_Class.png',
        Description: 'Class from a student -> videos and files'
      },
      {
        Url: 'VirtClas_Exam.png',
        Description: 'This is an example of evaluation, the student need to upload photos with their answers'
      }
    ],
    NextProject: 'Itago',
    PreviousProject: 'Educorp'
  },
  {
    Title: 'Itago',
    Time: '2020',
    Descriptions: [
      'Progressive Web Aplication to create chat rooms without registration',
      'users can delete all their messages from the chatrooms.'
    ],
    Role: 'Frontend, backend, database',
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
      { Type: 'Deployment', Content: ['AWS Amplify', 'AWS Elastic Beanstack'] },
      { Type: 'Others', Content: ['WebPack', 'GitHub', 'CI/CD'] }
    ],
    Photos: [
      {
        Url: 'Hello_Fondo.png',
        Description: 'First screens from the application'
      }
    ],
    PreviousProject: 'Virtual Classroom'
  }
]

export default Projects
