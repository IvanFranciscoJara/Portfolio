import React, { useState, useReducer, useEffect } from 'react'
import './sass/MyProjects.sass'
import { IconIF } from '../icons'
import Project from './Project'
import JsonProject_en from '../Data-en'
import JsonProject_es from '../Data-es'
import { useTranslation } from 'react-i18next'

const EstadoInicial = {
  ShowModal: false,
  // Data: JsonProject[0]
  Data: { Descriptions: [], Features: [], TecnologiesDetail: [], Photos: [] }
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
      let Index = (t('Language') === 'en' ? JsonProject_en : JsonProject_es).findIndex(
        Project => Project.Title === action.ProjectName
      )
      if (Index === -1) {
        return state
      } else {
        return { Data: (t('Language') === 'en' ? JsonProject_en : JsonProject_es)[Index], ShowModal: true }
      }
    // case 'changeJSON':
    //   return { Data: action.JsonProject[0], ShowModal: false }
  }
}

const MyProjects = ({ lan }) => {
  const { t } = useTranslation()
  // console.log(JsonProject)
  const [state, dispatch] = useReducer(reducer, EstadoInicial)
  const [JsonProject, setJsonProject] = useState([])
  // useEffect(() => {
  //   console.log(t('Language'))
  //   if (t('Language') === 'en') {
  //     setJsonProject(JsonProject_en)
  //   } else {
  //     setJsonProject(JsonProject_es)
  //   }
  //   dispatch({ type: 'otherProject', ProjectName: 'Educorp', JsonProject })
  // }, [lan])

  const ShowModal = ProjectData => {
    dispatch({ type: 'open', Data: ProjectData })
  }
  const Cerrar = () => {
    dispatch({ type: 'close' })
  }
  const OtherProject = ProjectName => {
    dispatch({ type: 'otherProject', ProjectName: ProjectName, JsonProject })
    document.querySelector('.ProjectTitle').scrollIntoView({ behavior: 'smooth', block: 'end' })
  }
  console.log(state, 'new:D')
  console.log(t('ProjectsData'))

  let JsonDataProjects = t('Language') === 'en' ? JsonProject_en : JsonProject_es
  return (
    <div className='ContainerMyProjects'>
      {/* <div className='TitleOne'>
        <div className='Title'>
          <h2 className='TitleBackground'>
            My <br /> Projects
          </h2>
        </div>
      </div> */}
      <Project Show={state.ShowModal} Data={state.Data} Actions={{ Cerrar, OtherProject }} />
      {JsonDataProjects.map(Project => {
        return (
          <div className={`Project ${Project.Title}`} key={Project.Title}>
            <div className='Project__Info'>
              <div className='Project__Info__Title'>
                <h2 className='Name'>{Project.Title}</h2>
              </div>
              <div className='Project__Info__Description'>
                {Project.Descriptions.map(Description => (
                  <p key={Description}>{Description}</p>
                ))}
              </div>
              <button className='ViewMore' onClick={() => ShowModal(Project)}>
                {t('MyProjects.View_More')}
              </button>
              {typeof Project.LivePreview != 'undefined' && (
                <button className='ViewMore' onClick={() => window.open(Project.LivePreview, '_blank')}>
                  {t('MyProjects.Live_Preview')}
                </button>
              )}
              {/* <div className='Project__Info__Tecnologies'>
              {Project.Tecnologies.map(Tec => (
                <p key={Tec}>{Tec}</p>
              ))}
            </div> */}
            </div>
            <div className='Project__Image'>
              <img
                src={`https://imageneslibres.s3.amazonaws.com/ImagenesPortafolio/${Project.MainImage}`}
                alt='Project image'
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MyProjects
