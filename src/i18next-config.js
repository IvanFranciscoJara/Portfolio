import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'en',
  nonExplicitWhitelist: false,
  debug: true,
  resources: {
    en: {
      translation: {
        Language: 'en',
        Hero: {
          Desarrollador_full_stack: 'Full-stack developer',
          Description:
            '5 years of experience building fast and reliable softwares, the last 3 years using web tecnologies.',
          DescargaResumen: 'Download my resume 3.47Mb',
          Link: 'https://imageneslibres.s3.amazonaws.com/ImagenesPortafolio/IvanFrancisco-en.pdf'
        },
        ContactMe: {
          Contact_me: 'Contact me'
        },
        MyProjects: {
          View_More: 'View More',
          Live_Preview: 'View Project'
        },
        Project: {
          Role: 'Role: ',
          Previous_project: 'Previous project',
          Next_project: 'Next project'
        }
      }
    },
    es: {
      translation: {
        Language: 'es',
        Hero: {
          Desarrollador_full_stack: 'Desarrollador Full-stack',
          Description: '5 años construyendo softwares rapidos y confiables, los ultimos 3 años usando tecnologias web.',
          DescargaResumen: 'Descargar mi curriculum 3.47Mb',
          Link: 'https://imageneslibres.s3.amazonaws.com/ImagenesPortafolio/IvanFrancisco-es.pdf'
        },
        ContactMe: {
          Contact_me: 'Contactame'
        },
        MyProjects: {
          View_More: 'Ver mas',
          Live_Preview: 'Ver proyecto'
        },
        Project: {
          Role: 'Rol: ',
          Previous_project: 'Project Anterior',
          Next_project: 'Siguiente Proyecto'
        }
      }
    }
  }
})
