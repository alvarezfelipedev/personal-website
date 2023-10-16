/* eslint-disable react/no-unescaped-entities */
import "./practicaQA.css";

import BtnVerMas from "../../ToolsComponents/BtnVerMas/BtnVerMas";
import Linea from "../../ToolsComponents/Linea/Linea";

import { Link } from "react-router-dom";

function PracticasDeQA() {
  return (
    <section id="practica-qa" className="mb-10">

      <h2 className="titulo text-2xl font-medium">Practicas como QA Manual</h2>
      <Linea />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-y-12 p-2">
        <div className="max-w-sm">

          <Link to={'/casosdeprueba'} className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">Casos de Prueba</Link>

          <div className="h-28">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">En esta sección, encontrarás pruebas que están diseñada para validar distintos aspectos y escenarios, garantizando un rendimiento confiable y consistente en cada proyecto.</p>
          </div>

          <Link to={'/casosdeprueba'}>
            <BtnVerMas />
          </Link>

        </div>

        <div className="max-w-sm">
          <Link to={'/testdeapis'} className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">Test de API's</Link>

          <div className="h-28">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Esta sección ofrece una visión de mi habilidad en el manejo de código para Postman. Utilizando principalmente el método GET.</p>
          </div>

          <Link to={'/testdeapis'}>
            <BtnVerMas />
          </Link>

        </div>

        <div className="max-w-sm">

          <Link to={'/usodesql'} className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">Uso de SQL</Link>

          <div className="h-28">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">En esta sección, muesto mi manejo en el lenguaje SQL a través de una serie de ejercicios prácticos. Cada ejercicio aborda diferentes aspectos de la consulta a la bases de datos.</p>
          </div>

          <Link to={'/usodesql'}>
            <BtnVerMas />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default PracticasDeQA;
