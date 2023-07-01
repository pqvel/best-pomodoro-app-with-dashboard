import { Routes, Route } from 'react-router-dom'
import TimerPage from '../pages/TimerPage'
import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

useEffect(() => {
  document.documentElement.setAttribute("data-theme", "dark")
}, [])

  return (
    <>
      <TimerPage/>
    </>
  )
}

export default App
