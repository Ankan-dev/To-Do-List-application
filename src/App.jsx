import React from 'react'
import Header from './Components/Header'
import Container from './Components/Container'
import './App.css'
function App() {
  return (
    <div className='flex items-center justify-center w-full h-[100vh] flex-col'>
      <Header/>
      <Container/>
    </div>
  )
}

export default App