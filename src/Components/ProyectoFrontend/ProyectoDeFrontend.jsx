import "./proyectoFrontend.css";

import BadgeFirebase from "../../ToolsComponents/BadgeFirebase/BadgeFirebase"
import BadgeBootstrap from "../../ToolsComponents/BadgeBootstrap/BadgeBootstrap";
import BadgeCSS from "../../ToolsComponents/BadgeCSS/BadgeCSS";
import BadgeHTML from "../../ToolsComponents/BadgeHTML/BadgeHTML";
import BadgeReact from "../../ToolsComponents/BadgeReact/BadgeReact";
import BadgeSass from "../../ToolsComponents/BadgeSass/BadgeSass";
import Linea from "../../ToolsComponents/Linea/Linea";

function ProyectoDeFrontend() {
  return (
    <section id="proyecto-front-end" className="mb-16">
      <h2 className="titulo">Proyectos de Desarrollo Front-End</h2>
      <Linea />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))] gap-y-12 md:p-2 my-4">
        <div className="cardProyecto border shadow-lg border-gray-800">
          <a href="https://ecommerce-alvarez-felipe.vercel.app/" target="_blank" rel="noreferrer">
            <img
              src="https://i.ibb.co/D9xtbJ5/e-commerce.webp"
              alt="Portada del Sitio Web del e-commerce" width="600" height="400"
            />
          </a>
          <div className="p-5">

            <div className="">
              <BadgeReact />
              <BadgeFirebase />
              <BadgeBootstrap />
              <BadgeCSS />
            </div>

            <a href="https://ecommerce-alvarez-felipe.vercel.app/" target="_blank" rel="noreferrer">
              <h3 className="text-xl tracking-tight mb-1">
                Adidas Lite
              </h3>
            </a>

            <div className="md:mb-10">
              <p className="">
                Permite ver todos los productos disponibles, filtrar por tipo, acceder al detalle de cada uno, mostrando una descripción, junto con su valor y stock disponible, posibilitando agregarlo al carrito y realizar un pedido.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <div className="flex justify-between md:grid md:grid-cols-3 ">
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
              alt="Portada del Sitio Web de la Inmobiliaria" width="600" height="400"
            />
          </a>
          <div className="p-5">

            <div className="">
              <BadgeHTML />
              <BadgeBootstrap />
              <BadgeSass />
              <BadgeCSS />
            </div>

            <a href="https://inmobiliariamyc.netlify.app/" target="_blank" rel="noreferrer">
              <h3 className="text-xl tracking-tight mb-1">
                M&C Inmobiliaria
              </h3>
            </a>


            <p className="">
              Muestra los inmuebles en venta disponibles de forma rápida, ubicación de la inmobiliaria, sobre el personal y las opciones para ponerse en contacto.
              Se realizó en Figma la maquetación, donde se incluyó la estructura, tipografías, imágenes y colores.
            </p>


              <div className="flex justify-between mt-5 md:grid md:grid-cols-3">
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

      </div>
    </section>
  );
}

export default ProyectoDeFrontend;
