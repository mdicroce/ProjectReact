import React from 'react'
import './App.css'
import { DataProvider } from './context/Context'
import { Routes } from './Routes'

function App (): JSX.Element {
  console.log(undefined != null)
  return (
    <DataProvider>
      <Routes/>

    </DataProvider>
  )
}

export default App
