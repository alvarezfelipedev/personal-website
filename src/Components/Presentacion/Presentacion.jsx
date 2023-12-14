import './presentacion.css'

import VerCV from '../../ToolsComponents/VerCV/VerCV';
import fotoDePerfil from '../../assets/fotoDePerfil.webp';

function Presentacion() {
  return (
    <section id="presentacion" className='flex justify-center text-left'>
      <div className="mb-10 md:flex">
        <img className='foto-perfil' src={fotoDePerfil} alt="foto de perfil" />
        <div className='md:ml-5 md:mr-5'>
          <div className='mb-5'>
            <h1 className="nombre text-2xl font-semibold">Felipe Alvarez</h1>
            <div className='flex md:flex-row items-center'>
              <h2 className="subtitulo text-lg md:text-xl font-semibold">QA Tester | Front-End Developer</h2>
              <img className='ml-2 h-max' src="https://img.icons8.com/emoji/48/000000/man-technologyst.png" alt="man-technologyst" width="30" height="30" />
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className="titulo-pregunta color-text text-xl">¿Quién soy? ¿Que habilidades tengo?</h3>

            <p className='sobre-mi'>Soy una persona <strong className='font-medium'>apasionada por la tecnología</strong>, actualmente trabajando como <strong className='font-medium'>QA Tester</strong> y con habilidades de <strong className='font-medium'>Front-End Developer</strong>.
            </p>

            <p className='sobre-mi'>
              Esta combinación de roles me permite desarrollar aplicaciones más integrales y con un gran nivel de calidad.
            </p>

            <p className='sobre-mi'>
              Tengo <strong className='font-medium'>habilidades técnicas y creativas</strong>, me considero una persona trabajadora y responsable. He realizado proyectos personales para demostrar mis conocimientos.</p>
          </div>

          <VerCV />

        </div>

      </div>
    </section>
  )
}

export default Presentacion
