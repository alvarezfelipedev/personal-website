import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './main.css'

import Home from './Home'
import CasosDePrueba from './Components/CasosDePrueba/CasosDePrueba'
import TestDeApis from './Components/TestDeApis/TestDeApis'
import UsoDeSQL from './Components/UsoDeSQL/UsoDeSQL'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/casosdeprueba',
    element: <CasosDePrueba />
  },
  {
    path: '/testdeapis',
    element: <TestDeApis />
  },
  {
    path: '/usodesql',
    element: <UsoDeSQL />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
