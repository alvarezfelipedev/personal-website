import "./skills.css";

import Linea from "../../ToolsComponents/Linea/Linea";
import SkillCard from "../../ToolsComponents/CardSkill/SkillCard";
import react from "../../assets/Icons-SVG/react.svg";
import javascript from "../../assets/Icons-SVG/javascript.svg";
import tailwind from "../../assets/Icons-SVG/tailwindcss.svg";
import sass from "../../assets/Icons-SVG/sass.svg";
import figma from "../../assets/Icons-SVG/figma.svg";
import azure from "../../assets/Icons-SVG/azure.svg";

function Skills() {
  return (
    <section id="skills" className="mb-7 ">
      <h2 className="titulo">Skills</h2>
      <Linea />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:p-2  md:grid-cols-3">
        <SkillCard nombre="React" img={react} />
        <SkillCard nombre="JavaScript" img={javascript} />
        <SkillCard nombre="TailwindCSS" img={tailwind} />
        <SkillCard nombre="Sass" img={sass} />
        <SkillCard nombre="Figma" img={figma} />
        <SkillCard nombre="Azure DevOps" img={azure} />
      </div>
    </section>
  );
}

export default Skills;
