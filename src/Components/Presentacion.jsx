
import '../StyledComponents/presentacion.css'
import fotoDePerfil from '../assets/fotoDePerfil.webp';

function Presentacion() {
  return (
    <section id="presentacion">
      <div className="mb-8 flex items-center">
        <img className='foto-perfil mt-32' src={fotoDePerfil} alt="foto de perfil" />
        <div className='ml-5 mr-5'>

          <div className='mb-12'>
            <h1 className="titulo text-4xl font-bold mb-5">Felipe Alvarez</h1>
            <div className='flex flex-row'>
              <h2 className="subtitulo text-xl">QA Tester Manual | Front-End Developer</h2>
              <img width="30" height="30" className='ml-2' src="https://img.icons8.com/emoji/48/000000/man-technologyst.png" alt="man-technologyst" />
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className="titulo-pregunta color-text">¿Quién soy? ¿Cuáles son mis intereses?</h3>

            <p className='sobre-mi'>Soy una persona <b className='font-b'>apasionada por la tecnología y la educación</b>, actualmente como <b className='font-b'>QA Tester</b>, mi área de interés se centra en el mundo del Testing y del control de calidad de sitios web.
              <p className='sobre-mi'>
                Mi dedicación a garantizar que cada proyecto alcance un nivel de calidad único y sobresaliente es lo que impulsa mi trabajo diario como QA Manual.
              </p>

              <p className='sobre-mi'>
                Tengo <b className='font-b'>habilidades técnicas y creativas</b>, y me considero una persona trabajadora y responsable. He realizado proyectos personales para demostrar mis conocimientos en la parte de Testing y de desarrollador, recientemente termine un curso de QA Manual.</p>
            </p>
          </div>

          <button className="button mt-2">
            <a target='_blank' href="https://drive.google.com/file/d/1ve9uWf0xxV9sknao_cQ0G4Q1qPWJKMbN/view?usp=sharing" rel="noreferrer">
              <span className="button-content">Ver CV</span>
            </a>
          </button>

        </div>

      </div>
    </section>
  )
}

export default Presentacion
