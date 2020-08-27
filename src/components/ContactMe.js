import React from 'react'
import './sass/ContactMe.sass'
import { IconFacebook, IconTwitter, IconGitHub } from '../icons'
import { useTranslation } from 'react-i18next'
const About = () => {
  const { t } = useTranslation()
  return (
    <div className='ContainerContactMe'>
      <div className='Contact_Me'>
        <h2>{t('ContactMe.Contact_me')}</h2>
      </div>
      <div className='Email'>
        <h2>ifranciscojara@gmail.com</h2>
      </div>
      <div className='SocialNetwork'>
        <div onClick={() => window.open('https://www.facebook.com/ivancraneo', '_blank')}>
          <IconFacebook />
        </div>
        <div onClick={() => window.open('https://twitter.com/Ivan83188012', '_blank')}>
          <IconTwitter />
        </div>
        <div onClick={() => window.open('https://github.com/IvanFranciscoJara', '_blank')}>
          <IconGitHub />
        </div>
      </div>
    </div>
  )
}

export default About
