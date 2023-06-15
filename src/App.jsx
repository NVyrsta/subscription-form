import React from 'react'
import './App.scss'
import './fonts/stylesheet.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Decor from './components/Decor/Decor'

function App () {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Decor/>
    </div>
  )
}

export default App
