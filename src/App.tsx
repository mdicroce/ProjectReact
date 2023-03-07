import React from 'react'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './App.css'
import { Home } from './routes/home'
import { Detail } from './routes/detail'
import type { AnimeDetails } from './routes/detail'
import type { DataItem } from './routes/home'
import data from './mock/data.json'
import details from './mock/details.json'

const parceData = (): DataItem[] => {
  return data.data.Page.media
}

const parceDetails = (): AnimeDetails => {
  return details.data.Media
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home anime={ parceData() } />
  },
  {
    path: '/detail/:id',
    element: <Detail anime={ parceDetails() } />
  }
])

function App (): JSX.Element {
  return (
    <RouterProvider router={router} />
  )
}

export default App
