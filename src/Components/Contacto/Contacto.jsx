import "./contacto.css"

import github from "../../assets/Icons-SVG/github.svg"
import gmail from "../../assets/Icons-SVG/gmail.svg"
import linkedin from "../../assets/Icons-SVG/linkedin.svg"

function Contacto() {
  return (
    <section id="contacto" className="flex flex-row justify-center mb-10 md:mr-10">

      <a target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=n.felialvarez@gmail.com" rel="noreferrer">
        <button className="Btn mx-3">
          <span className="svgContainer">
            <img width="30" height="30" src={gmail} alt="Logo de Gmail, hipervinculo hacia un formulario de contacto mediante Gmail" />
          </span>
        </button>
      </a>

      <a target="_blank" href="https://www.linkedin.com/in/alvarezfelipe/" rel="noreferrer">
        <button className="Btn mx-3">
          <span className="svgContainer">
            <img width="35" height="35" src={linkedin} alt="Logo de LinkedIn, hipervinculo hacia mi perfil de LinkedIn" />
          </span>
        </button>
      </a>
      
      <a target="_blank" href="https://github.com/alvarezfelipedev" rel="noreferrer">
        <button className="Btn mx-3">
          <span className="svgContainer">
            <img width="30" height="30" src={github} alt="Logo de GitHub, hipervinculo hacia mi perfil de GitHub" />
          </span>
        </button>
      </a>
    </section>
  )
}

export default Contacto