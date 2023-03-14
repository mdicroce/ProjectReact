import React from 'react'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import './App.css'
import { Home } from './routes/home'
import { Detail } from './routes/Detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Home />)
  },
  {
    path: '/detail/:id',
    element: (<Detail />)
  }
])

export const Routes: React.FC = () => {
  return (
      <RouterProvider router={router} />
  )
}
