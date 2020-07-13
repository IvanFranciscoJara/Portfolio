import React from 'react'
import './sass/ContactMe.sass'
import { IconFacebook, IconTwitter, IconGitHub } from '../icons'
const About = () => {
  return (
    <div className='ContainerContactMe'>
      <div className='Title'>
        <h2 className='TitleBackground'>Contact me</h2>
      </div>
      <div className='Email'>
        <h2>ifranciscojara@gmail.com</h2>
      </div>
      <div className='SocialNetwork'>
        <div>
          <IconFacebook />
        </div>
        <div>
          <IconTwitter />
        </div>
        <div>
          <IconGitHub />
        </div>
      </div>
    </div>
  )
}

export default About
