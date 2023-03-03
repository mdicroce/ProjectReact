import React, { useState } from 'react'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './App.css'
import { Home } from './routes/home'
import { Detail } from './routes/detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home anime="hola"/>
  },
  {
    path: '/detail/:id',
    element: <Detail anime='chau'/>
  }
])

function App (): JSX.Element {
  return (
    <RouterProvider router={router} />
  )
}

export default App
