import React from 'react'
import ReactDOM from 'react-dom/client'

import './StyledComponents/main.css'

import NavBar from './Components/NavBar'
import Presentacion from './Components/Presentacion.jsx'
import Skills from './Components/Skills'
import PracticasDeQA from './Components/PracticasDeQA'
import ProyectoDeFrontend from './Components/ProyectoDeFrontend'
// import Herramientas from './Components/Herramientas'
import Contacto from './Components/Contacto'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <div className="mx-40 my-5">
      <Presentacion />
      <Skills />
      <PracticasDeQA />
      <ProyectoDeFrontend />
      {/* <Herramientas /> */}
      <Contacto />
      <Footer />
    </div>
  </React.StrictMode>
)
