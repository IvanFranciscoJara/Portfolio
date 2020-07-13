import React from 'react'
import './sass/Hero.sass'
import { IconIF } from '../icons'
const Hero = () => {
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
      <div className='Title'>
        <h2>
          What ever
          <span className='red'> idea </span>
          you have, <br />
          it will be a pleasure to
          <span className='blue'> code </span>
          to convert
          <span className='green'> into reality.</span>
        </h2>
      </div>
    </div>
  )
}

export default Hero
