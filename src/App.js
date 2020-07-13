import React from 'react'
import './App.sass'
import Hero from './components/Hero'
import About from './components/About'
import MyProjects from './components/MyProjects'
import ContactMe from './components/ContactMe'
// import './components/ContactMe'

const App = props => {
  return (
    <div className='ContainerApp'>
      <div className='Section'>
        <Hero />
      </div>
      <div className='Section'>
        <About />
      </div>
      <div className='Section'>
        <MyProjects />
      </div>
      <div className='Section'>
        <ContactMe />
      </div>
    </div>
  )
}

export default App
