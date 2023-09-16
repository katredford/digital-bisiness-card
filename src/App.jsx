import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Image from './components/Image'
import Info from './components/Info'
import Contact from './components/Contact'
function App() {


  return (
    <>
      <div className='center'>
      <div className="app">
        <Header />
        <Image />
        <Info />
        <Contact />
        </div>
      </div>
      
    </>
  )
}

export default App
