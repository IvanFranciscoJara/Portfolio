import React, { useState } from 'react'
import './sass/Project.sass'
import { IconClose } from '../icons'
import { useTranslation } from 'react-i18next'

// import { title } from 'process'
// const util = require('util')
const Project_Educorp = ({ Show, Data, Actions }) => {
  const { t } = useTranslation()
  // const [imagenActual, setImagenActual] = useState(0)

  const Cerrar = () => {
    Actions.Cerrar()
  }

  const OtherProject = ProjectName => {
    Actions.OtherProject(ProjectName)
  }

  // console.log(util.inspect(Data))
  return (
    <React.Fragment>
      <div className={`DarkBackground ${Show && 'Show'}`} onClick={Cerrar}></div>
      <div className={`ContainerProject ${Show && 'Show'}`}>
        <div className='CloseProject' onClick={Cerrar}>
          <IconClose />
        </div>
        <div className='ProjectTitle'>
          <h2 className='Name'>{Data.Title}</h2>
          <h2 className='Time'>{Data.Time}</h2>
        </div>
        <div className='Role'>
          <h3>
            <span>{t('Project.Role')}</span>
            {Data.Role}
          </h3>
        </div>
        <div className='Tecnologies'>
          {Data.TecnologiesDetail.map(Tec => (
            <div className='Type' key={Tec}>
              <h4>{Tec.Type}</h4>
              {Tec.Content.map(Cont => (
                <p key={Cont}>{Cont}</p>
              ))}
            </div>
          ))}
        </div>
        <div className='Carrousel'>
          {Data.Photos.map((Photo, Index) => (
            <div className='Carrousel__Item' key={Index}>
              <p>{Photo.Description}</p>
              {/* <img id={`Imagen${Index}`} src={`../imagenes/MyProjects/${Photo.Url}`}></img> */}
              <img
                id={`Imagen${Index}`}
                src={`https://imageneslibres.s3.amazonaws.com/ImagenesPortafolio/${Photo.Url}`}
                alt='Project main image'
              ></img>
            </div>
          ))}
        </div>
        <div className='NextProject'>
          {Data.PreviousProject && (
            <button onClick={() => OtherProject(Data.PreviousProject)}>
              {t('Project.Previous_project')} - {Data.PreviousProject}
            </button>
          )}
          {Data.NextProject && (
            <button onClick={() => OtherProject(Data.NextProject)}>
              {t('Project.Next_project')} - {Data.NextProject}
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project_Educorp
