import "./proyectoFrontend.css";

import BadgeAstro from "../../ToolsComponents/BadgeAstro/BadgeAstro";
import BadgeBootstrap from "../../ToolsComponents/BadgeBootstrap/BadgeBootstrap";
import BadgeCSS from "../../ToolsComponents/BadgeCSS/BadgeCSS";
import BadgeHTML from "../../ToolsComponents/BadgeHTML/BadgeHTML";
import BadgeReact from "../../ToolsComponents/BadgeReact/BadgeReact";
import BadgeTailwind from "../../ToolsComponents/BadgeTailwind/BadgeTailwind";
import BadgeSass from "../../ToolsComponents/BadgeSass/BadgeSass"
import BtnDeploy from "../../ToolsComponents/BtnDeploy";
import BtnRepositorio from "../../ToolsComponents/BtnRepositorio";
import Linea from "../../ToolsComponents/Linea/Linea";

function ProyectoDeFrontend() {
  return (
    <section id="proyecto-front-end" className="mb-16">
      <h2 className="text-2xl font-medium">Proyectos de Desarrollo Frontend</h2>
      <Linea />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-y-10 p-2">
        <div className="cardProyecto w-96 h-auto border shadow-lg border-gray-700  ">
          <a href="#">
            <img
              src="https://i.ibb.co/D9xtbJ5/e-commerce.webp"
              alt="Portada del Sitio Web del e-commerce"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl tracking-tight text-white">
                Sitio Web para E-commerce
              </h5>
            </a>

            <div>
              <BadgeReact />
              <BadgeBootstrap />
              <BadgeCSS />
            </div>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Diseñado para vendedor de indumentaria deportiva.
            </p>

            <div>
              <div className="flex justify-between mt-5">
                <BtnDeploy />
                <BtnRepositorio />
              </div>
            </div>

          </div>
        </div>

        <div className="cardProyecto w-96 h-auto border shadow-lg border-gray-700">
          <a href="#">
            <img
              src="https://i.ibb.co/nDNg23N/inmobiliaria-MC.webp"
              alt="Portada del Sitio Web de la Inmobiliaria"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl tracking-tight text-white">
                Sitio Web para Inmoboliaria
              </h5>
            </a>

            <div>
              <BadgeHTML />
              <BadgeBootstrap />
              <BadgeSass />
              <BadgeCSS />
            </div>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Permite conocer los hogares en venta de forma sensilla.
            </p>

            <div className="flex justify-between mt-5">
              <BtnDeploy />
              <BtnRepositorio />
            </div>

          </div>
        </div>

        <div className="cardProyecto w-96 h-auto border shadow-lg border-gray-700">
          <a href="#">
            <img
              src="https://i.ibb.co/s2hmN4s/seguri-Prop.webp"
              alt="Portada del Sitio Web de Seguri Pro"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl tracking-tight text-white">
                Sitio Web para Seguri Pro
              </h5>
            </a>

            <div>
              <BadgeAstro />
              <BadgeTailwind />
              <BadgeCSS />
            </div>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Diseñado para una empresa de Seguridad Informática.
            </p>

            <div className="flex justify-between mt-5">
              <BtnDeploy />
              <BtnRepositorio />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProyectoDeFrontend;
