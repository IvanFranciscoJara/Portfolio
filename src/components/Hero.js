import React from 'react'
import './sass/Hero.sass'
import { IconIF, IconEngland, IconSpain } from '../icons'
import { useTranslation } from 'react-i18next'
const Hero = ({ setLang }) => {
  const { t, i18n } = useTranslation()
  console.log(t('Language'))
  const ChangeLanguage = () => {
    if (t('Language') === 'es') {
      i18n.changeLanguage('en')
      setLang('en')
    } else {
      i18n.changeLanguage('es')
      setLang('es')
    }
  }

  return (
    <div className='ContainerHero'>
      <div className='Logo'>
        <div className='Logo__Square'>
          <div className='Cuadrado'></div>
          <IconIF />
        </div>
        <div className='Logo__Name'>
          <h1>Ivan</h1>
          <h1>Francisco</h1>
        </div>
      </div>
      <div className='Language' onClick={ChangeLanguage}>
        {t('Language') === 'es' ? <IconSpain /> : <IconEngland />}
      </div>
      <div className='Text'>
        <h2>{t('Hero.Desarrollador_full_stack')}</h2>
        <h4>{t('Hero.Description')}</h4>
        <div className='download_resume' onClick={() => window.open(t('Hero.Link'))}>
          <h6>{t('Hero.DescargaResumen')}</h6>
          <div className='Linea'></div>
        </div>
      </div>
      <img src='https://imageneslibres.s3.amazonaws.com/ImagenesPortafolio/Me.png' alt='Profile Image' />
      {/* <div className='Title'>
        <h2>          
          What ever
          <span className='red'> idea </span>
          you have, <br />
          it will be a pleasure to
          <span className='blue'> code </span>
          to convert
          <span className='green'> into reality.</span>
        </h2>
      </div> */}
    </div>
  )
}

export default Hero
