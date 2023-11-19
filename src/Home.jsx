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
            <div className="mx-2 md:mx-48 ">
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