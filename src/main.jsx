import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'

import NavBar from './Components/NavBar/NavBar'
import Presentacion from './Components/Presentacion/Presentacion.jsx'
import Skills from './Components/Skills/Skills'
import PracticasDeQA from './Components/PracticasDeQA/PracticaQA'
import ProyectoDeFrontend from './Components/ProyectoFrontend/ProyectoDeFrontend'
import Contacto from './Components/Contacto/Contacto'
import Footer from './Components/Footer/Footer'
import CasosDePrueba from './Components/CasosDePrueba/CasosDePrueba'
import TestDeApis from './Components/TestDeApis/TestDeApis'
import UtilizacionSQL from './Components/UtilizacionSQL/UtilizacionSQL'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <NavBar /> */}
    {/* <div className="mx-48 my-10">
      <Presentacion />
      <Skills />
      <PracticasDeQA />
      <ProyectoDeFrontend />
      <Contacto />
      <Footer />
    </div> */}
    {/* <CasosDePrueba/> */}
    {/* <TestDeApis/> */}
    <UtilizacionSQL/>
  </React.StrictMode>
)
