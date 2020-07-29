import React, { useState, useReducer } from 'react'
import './sass/MyProjects.sass'
import { IconIF } from '../icons'
import Project from './Project'
import JsonProject from '../Data'

const EstadoInicial = {
  ShowModal: false,
  Data: JsonProject[0]
}
const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'open':
      return { ShowModal: true, Data: action.Data }
    case 'close':
      console.log('close', state)
      return { ...state, ShowModal: false }
    case 'otherProject':
      let Index = JsonProject.findIndex(Project => Project.Title === action.ProjectName)
      return { Data: JsonProject[Index], ShowModal: true }
  }
}

const MyProjects = () => {
  console.log(JsonProject)
  const [state, dispatch] = useReducer(reducer, EstadoInicial)

  const ShowModal = ProjectData => {
    dispatch({ type: 'open', Data: ProjectData })
  }
  const Cerrar = () => {
    dispatch({ type: 'close' })
  }
  const OtherProject = ProjectName => {
    dispatch({ type: 'otherProject', ProjectName: ProjectName })
    document.querySelector('.ProjectTitle').scrollIntoView({ behavior: 'smooth', block: 'end' })
  }
  console.log(state, 'new:D')
  return (
    <div className='ContainerMyProjects'>
      <div className='TitleOne'>
        <div className='Title'>
          <h2 className='TitleBackground'>
            My <br /> Projects
          </h2>
        </div>
      </div>
      <Project Show={state.ShowModal} Data={state.Data} Actions={{ Cerrar, OtherProject }} />
      {JsonProject.map(Project => (
        <div className='Project' key={Project.Title}>
          <div className='Project__Info'>
            <div className='Project__Info__Title'>
              <h2 className='Name'>{Project.Title}</h2>
              <h2 className='Time'>{Project.Time}</h2>
            </div>
            <div className='Project__Info__Description'>
              {Project.Descriptions.map(Description => (
                <p key={Description}>{Description}</p>
              ))}
            </div>
            {/* <div className='Project__Info__Features'>
              {Project.Features.map(Feature => (
                <p key={Feature.Type}>
                  <span>{Feature.Type}: </span>
                  {Feature.Feature}
                </p>
              ))}
            </div> */}
            <div className='Project__Info__Tecnologies'>
              {Project.Tecnologies.map(Tec => (
                <p key={Tec}>{Tec}</p>
              ))}
            </div>
          </div>
          <div className='Project__Image' onClick={() => ShowModal(Project)}>
            <button className=''>View More</button>
            <img src={`https://imageneslibres.s3.amazonaws.com/ImagenesPortafolio/${Project.MainImage}`}></img>
            {/* <img id={`Imagen${Index}`} src={`https://imageneslibres.s3.amazonaws.com/${Photo.Url}`}></img> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyProjects
