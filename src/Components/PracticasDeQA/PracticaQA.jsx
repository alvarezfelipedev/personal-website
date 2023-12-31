import CardQA from "../../ToolsComponents/CardQA/CardQA";
import Linea from "../../ToolsComponents/Linea/Linea";


function PracticasDeQA() {
  return (
    <section id="practica-qa" className="mb-10">

      <h2 className="titulo">Practicas como QA Manual</h2>
      <Linea />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-y-12 md:p-2 my-4">
        
        <CardQA nombre="Casos de Prueba" descripcion="En esta sección, encontrarás pruebas que están diseñadas para validar distintos aspectos y escenarios, garantizando un rendimiento confiable en el sitio web." to={'/casosdeprueba'}/>

        <CardQA nombre="Test de API's" descripcion="Esta sección ofrece una visión de mi habilidad en el manejo de código para Postman. Utilizando principalmente el método GET." to={'/testdeapis'} />

        <CardQA nombre="Uso de SQL" descripcion="En esta sección, muestro mi manejo en el lenguaje SQL a través de una serie de ejercicios prácticos. Cada ejercicio aborda diferentes aspectos de la consulta a la base de datos." to={'/usodesql'} />

      </div>
    </section>
  );
}

export default PracticasDeQA;
