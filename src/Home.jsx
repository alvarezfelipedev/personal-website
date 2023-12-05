import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import PracticasDeQA from "./Components/PracticasDeQA/PracticaQA";
import Presentacion from "./Components/Presentacion/Presentacion";
import ProyectoDeFrontend from "./Components/ProyectoFrontend/ProyectoDeFrontend";
import Skills from "./Components/Skills/Skills";

function Home() {
    return (
        <>
            <NavBar />
            <div className="mx-2 md:mx-10 lg:mx-24 xl:mx-48 2xl:mx-56 ">
                <Presentacion />
                <Skills />
                <PracticasDeQA />
                <ProyectoDeFrontend />
                <Contacto />
                <Footer />
            </div>
        </>
    )
}

export default Home;