import "./proyectoFrontend.css";

import BadgeAstro from "../../ToolsComponents/BadgeAstro/BadgeAstro";
import BadgeFirebase from "../../ToolsComponents/BadgeFirebase/BadgeFirebase"
import BadgeBootstrap from "../../ToolsComponents/BadgeBootstrap/BadgeBootstrap";
import BadgeCSS from "../../ToolsComponents/BadgeCSS/BadgeCSS";
import BadgeHTML from "../../ToolsComponents/BadgeHTML/BadgeHTML";
import BadgeReact from "../../ToolsComponents/BadgeReact/BadgeReact";
import BadgeTailwind from "../../ToolsComponents/BadgeTailwind/BadgeTailwind";
import BadgeSass from "../../ToolsComponents/BadgeSass/BadgeSass";
import Linea from "../../ToolsComponents/Linea/Linea";

function ProyectoDeFrontend() {
  return (
    <section id="proyecto-front-end" className="mb-16">
      <h2 className="text-2xl font-medium">Proyectos de Desarrollo Frontend</h2>
      <Linea />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-y-12 p-2">
        <div className="cardProyecto border shadow-lg border-gray-800  ">
          <a href="https://ecommerce-alvarez-felipe.vercel.app/" target="_blank" rel="noreferrer">
            <img
              src="https://i.ibb.co/D9xtbJ5/e-commerce.webp"
              alt="Portada del Sitio Web del e-commerce"
            />
          </a>
          <div className="p-5">
            <a href="https://ecommerce-alvarez-felipe.vercel.app/" target="_blank" rel="noreferrer">
              <h5 className="mb-2 text-xl tracking-tight dark:text-white">
                Adidas Lite
              </h5>
            </a>

            <div>
              <BadgeReact />
              <BadgeFirebase />
              <BadgeBootstrap />
              <BadgeCSS />
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400 h-32">
              Permite ver todos los productos disponibles, filtrar por tipo, acceder al detalle de cada uno, mostrando una descripción, junto con su valor y stock disponible, posibilitando agregarlo al carrito y realizar un pedido.
            </p>

            <div>
              <div className="flex justify-between mt-5">
                <a href="https://ecommerce-alvarez-felipe.vercel.app/" target="_blank" rel="noreferrer">
                  <button className="btn flex items-center">
                    <span className="hover-underline-animation">Despliegue</span>
                  </button>
                </a>

                <a href="https://www.figma.com/file/X8OY6GL6l6VXISqrZU1Wcf/Dise%C3%B1o-para-Ecommerce?type=design&node-id=18-162&mode=design"
                  target="_blank" rel="noreferrer">
                  <button className="btn flex items-center">
                    <span className="hover-underline-animation">Maquetado</span>

                  </button>
                </a>

                <a href="https://github.com/alvarezfelipedev/ecommerce-alvarez"
                  target="_blank" rel="noreferrer">
                  <button className="btn flex items-center">
                    <span className="hover-underline-animation">Repositorio</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="cardProyecto border shadow-lg border-gray-800">
          <a href="https://inmobiliariamyc.netlify.app/" target="_blank" rel="noreferrer">
            <img
              src="https://i.ibb.co/nDNg23N/inmobiliaria-MC.webp"
              alt="Portada del Sitio Web de la Inmobiliaria"
            />
          </a>
          <div className="p-5">
            <a href="https://inmobiliariamyc.netlify.app/" target="_blank" rel="noreferrer">
              <h5 className="mb-2 text-xl tracking-tight dark:text-white">
                M&C Inmobiliaria
              </h5>
            </a>

            <div>
              <BadgeHTML />
              <BadgeBootstrap />
              <BadgeSass />
              <BadgeCSS />
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400 h-32">
              Muestra los hogares en venta disponibles de forma rápida, ubicación del local, sobre personal y formas de ponerse en contacto.
              Se realizó en Figma la maquetación, donde se incluyó la estructura, tipografías, imágenes y colores.
            </p>

            <div className="flex justify-between mt-5">
              <a href="https://inmobiliariamyc.netlify.app/" target="_blank" rel="noreferrer">
                <button className="btn flex items-center">
                  <span className="hover-underline-animation">Despliegue</span>
                </button>
              </a>

              <a href="https://www.figma.com/file/NnoQX26vZaqmAtqmYnhDgR/Maquetaci%C3%B3n-Inmobiliaria-M%26C?type=design&node-id=1-2&mode=design"
                target="_blank" rel="noreferrer">
                <button className="btn flex items-center">
                  <span className="hover-underline-animation">Maquetado</span>
                </button>
              </a>

              <a href="https://github.com/alvarezfelipedev/inmobiliaria-alvarez"
                target="_blank" rel="noreferrer">
                <button className="btn flex items-center">
                  <span className="hover-underline-animation">Repositorio</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cardProyecto border shadow-lg border-gray-800">
          <a href="#">
            <img
              src="https://i.ibb.co/s2hmN4s/seguri-Prop.webp"
              alt="Portada del Sitio Web de Seguri Pro"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl tracking-tight dark:text-white">
                Seguri Pro Servicios
              </h5>
            </a>

            <div>
              <BadgeAstro />
              <BadgeTailwind />
              <BadgeCSS />
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              Diseñado para una empresa de Seguridad Informática que quiere mostrar los servicios que ofrece, conocer más sobre su empresa y las devoluciones de sus clientes.
            </p>

            <div className="flex justify-between mt-5">
              <a href="" target="_blank" rel="noreferrer">
                <button className="btn flex items-center">
                  <span className="hover-underline-animation">Despliegue</span>
                </button>
              </a>

              <a href="https://github.com/alvarezfelipedev/astro-seguriPro"
                target="_blank" rel="noreferrer">
                <button className="btn flex items-center">
                  <span className="hover-underline-animation">Repositorio</span>
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProyectoDeFrontend;
