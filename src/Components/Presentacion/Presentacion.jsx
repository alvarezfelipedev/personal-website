import './presentacion.css'

import VerCV from '../../ToolsComponents/VerCV/VerCV';
import fotoDePerfil from '../../assets/fotoDePerfil.webp';

function Presentacion() {
  return (
    <section id="presentacion">
      <div className="mb-10 flex items-center">
        <img className='foto-perfil mt-20' src={fotoDePerfil} alt="foto de perfil" />
        <div className='ml-5 mr-5'>

          <div className='mb-6'>
            <h1 className="titulo text-4xl font-bold mb-2">Felipe Alvarez</h1>
            <div className='flex flex-row'>
              <h2 className="subtitulo text-xl">QA Tester Manual | Front-End Developer</h2>
              <img width="30" height="30" className='ml-2' src="https://img.icons8.com/emoji/48/000000/man-technologyst.png" alt="man-technologyst" />
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className="titulo-pregunta color-text">¿Quién soy? ¿Cuáles son mis intereses?</h3>

            <p className='sobre-mi'>Soy una persona <b className='font-b'>apasionada por la tecnología</b>, actualmente trabajando como <b className='font-b'>QA Tester Manual</b> y con habilidades de <b className='font-b'>Frontend Developer</b>.
            </p>
            
            <p className='sobre-mi'>
              Esta combinación de roles me permite desarrollar aplicaciones más integrales y con un gran nivel de calidad.
            </p>

            <p className='sobre-mi'>
              Tengo <b className='font-b'>habilidades técnicas y creativas</b>, me considero una persona trabajadora y responsable. He realizado proyectos personales para demostrar mis conocimientos en la parte de Testing y de desarrollador.</p>
          </div>

          <VerCV />

        </div>

      </div>
    </section>
  )
}

export default Presentacion
