import './presentacion.css'

import VerCV from '../../ToolsComponents/VerCV/VerCV';
import fotoDePerfil from '../../assets/fotoDePerfil.webp';

function Presentacion() {
  return (
    <section id="presentacion" className='flex justify-center text-left'>
      <div className="mb-10 md:flex">
        <img className='ml-1 mt-10 mb-5 foto-perfil' src={fotoDePerfil} alt="foto de perfil" />
        <div className='md:ml-5 md:mr-5'>

          <div className='mb-5'>
            <h1 className="nombre text-2xl">Felipe Alvarez</h1>
            <div className='flex md:flex-row items-center'>
              <h2 className="subtitulo text-xl">QA Tester Manual | Front-End Developer </h2>
              <img width="30" height="30" className='md:ml-2 h-max' src="https://img.icons8.com/emoji/48/000000/man-technologyst.png" alt="man-technologyst" />
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className="titulo-pregunta color-text text-xl">¿Quién soy? ¿Cuáles son mis intereses?</h3>

            <p className='sobre-mi'>Soy una persona <strong className='font-medium'>apasionada por la tecnología</strong>, actualmente trabajando como <strong className='font-medium'>QA Tester</strong> y con habilidades de <strong className='font-medium'>Front-End Developer</strong>.
            </p>

            <p className='sobre-mi'>
              Esta combinación de roles me permite desarrollar aplicaciones más integrales y con un gran nivel de calidad.
            </p>

            <p className='sobre-mi'>
              Tengo <strong className='font-medium'>habilidades técnicas y creativas</strong>, me considero una persona trabajadora y responsable. He realizado proyectos personales para demostrar mis conocimientos en la parte de testing y de desarrollo.</p>
          </div>

          <VerCV />

        </div>

      </div>
    </section>
  )
}

export default Presentacion
