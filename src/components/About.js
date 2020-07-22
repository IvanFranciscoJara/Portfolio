import React from 'react'
import './sass/About.sass'
import { IconIF } from '../icons'
const About = () => {
  return (
    <div className='ContainerAbout'>
      <div className='TitleOne'>
        <div className='Title'>
          <h2 className='TitleBackground'>
            About <br /> me
          </h2>
        </div>
      </div>
      {/* <div className='Title'>
        <h2>About me</h2>
      </div> */}
      <div className='Text'>
        <h2>
          I’m a full-stack developer with over 5 years of experience building fast and reliable softwares, the last 3
          years using web tecnologies.
        </h2>
      </div>
      <img src='../imagenes/Me.png' />
    </div>
  )
}

export default About
