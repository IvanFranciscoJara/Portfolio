import React, { useState } from 'react'
import './sass/Project.sass'
import { IconClose } from '../icons'
// import { title } from 'process'
// const util = require('util')
const Project_Educorp = ({ Show, Data, Actions }) => {
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
            <span>Role: </span>
            {Data.Role}
          </h3>
        </div>
        <div className='Tecnologies'>
          {Data.Tecnologies.map(Tec => (
            <p key={Tec}>{Tec}</p>
          ))}
        </div>
        <div className='Carrousel'>
          {Data.Photos.map((Photo, Index) => (
            <div className='Carrousel__Item' key={Index}>
              <p>{Photo.Description}</p>
              <img id={`Imagen${Index}`} src={`../imagenes/MyProjects/${Photo.Url}`}></img>
            </div>
          ))}
        </div>
        <div className='NextProject'>
          {Data.PreviousProject && (
            <button onClick={() => OtherProject(Data.PreviousProject)}>
              Previous Project - {Data.PreviousProject}
            </button>
          )}
          {Data.NextProject && (
            <button onClick={() => OtherProject(Data.NextProject)}>Next Project - {Data.NextProject} </button>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project_Educorp
