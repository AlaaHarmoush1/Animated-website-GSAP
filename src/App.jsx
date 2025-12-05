import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/layout/Navbar'
import Features from './components/Features/Features'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
    </main>
  )
}

export default App
