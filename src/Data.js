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
      { Type: 'BackEnd', Content: ['C#', 'ASP.NET', 'Sql Server', 'HTML'] },
      { Type: 'Arquitecture', Content: ['IIS'] },
      { Type: 'Others', Content: ['IIS'] }
    ],
    Photos: [
      {
        Url: 'Edu_Dashboard.png',
        Description: 'Dashboard to show some metric from day to diferents users'
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
        Description: 'There is option to sale school uniforms'
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
    MainImage: 'Edu_Dashboard.png',
    Tecnologies: ['React', 'Express', 'Graphql', 'Rest API', 'Sql Server'],
    TecnologiesDetail: [
      { Type: 'FrontEnd', Content: ['HTML', 'Sass', 'Javascript', 'React.js', 'Rdlc Reports', 'Razor'] },
      { Type: 'BackEnd', Content: ['Express.js', 'Graphql and Rest API', 'Sql Server'] },
      { Type: 'Arquitecture', Content: ['IIS'] },
      { Type: 'Others', Content: ['WebPack', 'JsonWebToken'] }
    ],
    Photos: [
      {
        Url: 'Edu_Dashboard.png',
        Description: 'Dashboard to show some metric from day to diferents users'
      },
      {
        Url: 'Edu_Teachers.png',
        Description: 'This view is to choose and modify teachers information, there is also a similar view for students'
      }
    ],
    NextProject: 'ClickChat',
    PreviousProject: 'Educorp'
  },
  {
    Title: 'ClickChat',
    Time: '2020 - now',
    Descriptions: [
      'This aplication was build with the intention to give users a way to send message privatly with out registratión or data store',
      'You can message, files, photos and audios also can create private chat groups'
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
    MainImage: 'Edu_Dashboard.png',
    Tecnologies: ['React', 'Express', 'Rest API', 'Socket IO', 'Sql Server', 'AWS'],
    TecnologiesDetail: [
      { Type: 'FrontEnd', Content: ['HTML', 'Sass', 'Javascript', 'React.js', 'Rdlc Reports', 'Razor'] },
      { Type: 'BackEnd', Content: ['Express.js', 'Graphql and Rest API', 'Sql Server'] },
      { Type: 'Arquitecture', Content: ['AWS Amplify', 'AWS Elastic Beanstack'] },
      { Type: 'Others', Content: ['WebPack', 'GitHub', 'CI/CD'] }
    ],
    Photos: [
      {
        Url: 'Edu_Dashboard.png',
        Description: 'Dashboard to show some metric from day to diferents users'
      },
      {
        Url: 'Edu_Teachers.png',
        Description: 'This view is to choose and modify teachers information, there is also a similar view for students'
      }
    ],
    PreviousProject: 'Virtual Classroom'
  }
]

export default Projects
