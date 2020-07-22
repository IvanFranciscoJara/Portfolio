let Projects = [
  {
    Title: 'Educorp',
    Time: '2017 - now',
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
    MainImage: 'Edu_Dashboard.png',
    Tecnologies: ['ASP.NET', 'Javascript', 'Boostrap', 'C#', 'Rdlc Reports', 'Sql Server'],
    TecnologiesDetail: [
      { Type: 'FrontEnd', Content: ['HTML', 'CSS', 'Javascript', 'Boostrap', 'Rdlc Reports', 'Razor'] },
      { Type: 'BackEnd', Content: ['C#', 'ASP.NET', 'Sql Server'] },
      { Type: 'Arquitecture', Content: ['IIS'] }
      // { Type: 'Others', Content: ['IIS'] }
    ],
    Photos: [
      {
        Url: 'Edu_Dashboard.png',
        Description: 'Dashboard to show some metric from the day to diferents users'
      },
      {
        Url: 'Edu_Teachers.png',
        Description: 'This view is to choose and modify teachers information, there is also a similar view for students'
      },
      {
        Url: 'Edu_Time.png',
        Description: 'This is the view to change time of entrance from a teacher'
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
    Time: '2019 - now',
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
    MainImage: 'VirtClas_Notification.png',
    Tecnologies: ['React', 'Express', 'Graphql', 'Rest API', 'Sql Server'],
    TecnologiesDetail: [
      { Type: 'FrontEnd', Content: ['React', 'React Router', 'HTML', 'Sass', 'Javascript'] },
      { Type: 'BackEnd', Content: ['Express.js', 'Graphql and Rest API', 'Sql Server'] },
      { Type: 'Arquitecture', Content: ['IIS', 'AWS S3', ' AWS CloudFront'] },
      { Type: 'Others', Content: ['WebPack', 'JsonWebToken'] }
    ],
    Photos: [
      {
        Url: 'VirtClas_Notification.png',
        Description: 'View to show notifications to students'
      },
      {
        Url: 'VirtClas_ListClass.png',
        Description: 'This view show the classes that are avaiable to the students'
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
    NextProject: 'HELLÖ',
    PreviousProject: 'Educorp'
  },
  {
    Title: 'HELLÖ',
    Time: '2020 - now',
    Descriptions: [
      'This aplication was build with the intention to give users a way to send message with out registratión or data store',
      'send message, files and photos '
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
      // {
      //   Type: 'Users',
      //   Feature: '10 - 30 unique users daily'
      // }
    ],
    MainImage: 'Hello_Intro.png',
    Tecnologies: ['React', 'Express', 'Rest API', 'Socket IO', 'Sql Server', 'AWS'],
    TecnologiesDetail: [
      { Type: 'FrontEnd', Content: ['React', 'Socket IO', 'HTML', 'Sass', 'Javascript'] },
      { Type: 'BackEnd', Content: ['Express.js', 'Socket IO', 'Rest API', 'Mongo DB'] },
      { Type: 'Arquitecture', Content: ['AWS Amplify', 'AWS Elastic Beanstack'] },
      { Type: 'Others', Content: ['WebPack', 'GitHub', 'CI/CD'] }
    ],
    Photos: [
      {
        Url: 'Hello_Intro.png',
        Description: 'First screens from the application'
      }
    ],
    PreviousProject: 'Virtual Classroom'
  }
]

export default Projects
