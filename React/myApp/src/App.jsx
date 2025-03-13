import { useState } from 'react'
import useToggle from './usetoggle'
import './App.css'

function App() {
  

  const [isOn,toggle]=useToggle()

  return (
    <>
     <button onClick={toggle}   style={{backgroundColor:isOn?'green':'red'}} >{isOn?'On':'Off'}</button>

    </>
  )
}

export default App
