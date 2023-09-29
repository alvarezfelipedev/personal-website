import "../StyledComponents/skills.css";

import react from "../assets/Icons-SVG/react.svg";
import javacript from "../assets/Icons-SVG/javascript.svg";
import tailwind from "../assets/Icons-SVG/tailwindcss.svg";
import figma from "../assets/Icons-SVG/figma.svg";
import sql from "../assets/Icons-SVG/sql.svg";
import azure from "../assets/Icons-SVG/azure.svg";

function Skills() {
  return (
    <section id="skills" className="mb-7">
      <h2 className="titulo text-2xl">Skills</h2>
      <div className="linea mt-2 mb-2"></div>
      ARREGLAS MARGENES
      <div className="grid grid-cols-3">
        <div className="card">
          <div className="mr-2">
            <img width="30" height="30" src={react} alt="Logo de React" />
          </div>
          <div className="titulo-lenguaje">React</div>
        </div>
        <div className="card">
          <div className="mr-2">
            <img width="30" height="30" src={javacript} alt="Logo de JavaScript"
            />
          </div>
          <div className="titulo-lenguaje">JavaScript</div>
        </div>
        <div className="card">
          <div className="mr-2">
            <img width="30" height="30" src={tailwind} alt="Logo de Github" />
          </div>
          <div className="titulo-lenguaje">Tailwind CSS</div>
        </div>
        <div className="card">
          <div className="mr-2">
            <img width="30" height="30" src={figma} alt="Logo de Figma" />
          </div>
          <div className="titulo-lenguaje">Figma</div>
        </div>
        <div className="card">
          <div className="mr-2">
            <img width="30" height="30" src={sql} alt="Logo de SQL" />
          </div>
          <div className="titulo-lenguaje">SQL</div>
        </div>
        <div className="card">
          <div className="mr-2">
            <img width="30" height="30" src={azure} alt="Logo de Azure" />
          </div>
          <div className="titulo-lenguaje">Azure DevOps</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
