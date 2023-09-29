/* eslint-disable react/no-unescaped-entities */
import "../StyledComponents/practicaQA.css";

function PracticasDeQA() {
  return (
    <section id="practica-qa" className="mb-7">
        
      <h2 className="titulo text-2xl">Practicas como QA Manual</h2>
      <div className="linea mt-2 mb-4"></div>

      <div className="grid grid-cols-3">
        <div className="w-auto h-64 mr-3 cardQA text-slate-300 grid grid-col-2 justify-center p-4 rounded-lg">
          <div className="col-span-2 text-lg font-bold capitalize rounded-md">
            Casos de Prueba
          </div>
          <div className="col-span-2 rounded-md">
            Using Lorem ipsum to focus attention on graphic elements in a
            webpage design proposal · One of the earliest examples of the Lorem
            ipsum placeholder text on 1960s advertising...
          </div>
          
        </div>
        <div className="w-auto h-64 mr-3 cardQA text-slate-300 grid grid-col-2 justify-center p-4 rounded-lg">
          <div className="col-span-2 text-lg font-bold capitalize rounded-md">
            Practicas con API's
          </div>
          <div className="col-span-2 rounded-md">
            Using Lorem ipsum to focus attention on graphic elements in a
            webpage design proposal · One of the earliest examples of the Lorem
            ipsum placeholder text on 1960s advertising...
          </div>
          
        </div>
        <div className="w-auto h-64 mr-3 cardQA text-slate-300 grid grid-col-2 justify-center p-4 rounded-lg">
          <div className="col-span-2 text-lg font-bold capitalize rounded-md">
            Uso de SQL
          </div>
          <div className="col-span-2 rounded-md">
            Using Lorem ipsum to focus attention on graphic elements in a
            webpage design proposal · One of the earliest examples of the Lorem
            ipsum placeholder text on 1960s advertising...
          </div>
        </div>
      </div>
    </section>
  );
}

export default PracticasDeQA;
