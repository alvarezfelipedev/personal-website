/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

import NavBarPage from "../NavBarPage/NavBarPage";
import "./testDeApis.css";

import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";

function TestDeApis() {
    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return (
    <>
        <NavBarPage />
        <main id="#" className="mx-3 md:mx-48">
            <h2 className="text-3xl font-semibold mb-2">Test de API's</h2>
            <div className="my-8">
                <p className="my-4 text-xl">1.</p>
                <p className="text-lg my-4">API: <a href="https://digidates.de/api/v1/week?date=2023-04-13" target="_blank" rel="noreferrer"><u className="text-cyan-400 hover:text-cyan-500">https://digidates.de/api/v1/week?date=2023-04-13</u></a></p>
                <p className="my-4">MÉTODO UTILIZADO: GET</p>
                <p>TEST:</p>
                <pre>
                    <code className="language-javascript code mt-2">
                        {`pm.test("Corresponde a la semana 35", function(){
    const responseJson = pm.response.json();
    const paramsString = request.url.split('?')[1];

    let week = responseJson.week;
    let fecha = paramsString.substring(5,15);
    let semanaEsperada = 35;
    console.log("La fecha es: " + fecha);

    if(week == semanaEsperada)
        console.log("Corresponde a la semana "  + semanaEsperada);
     else 
        console.log("No corresponde a la semana " + semanaEsperada);
        pm.expect(responseJson.week).to.eql(semanaEsperada);
})
          `}
                    </code>
                </pre>
                <p className="mt-2">Este código verifica si el atributo <b className="font-medium">week</b> en la respuesta de la API corresponde a la semana 35 y muestra en la consola si corresponde o no. Si el valor del atributo <b className="font-medium">week</b> no es 35, la prueba fallará y mostrará un mensaje de error.</p>
            </div>

            <div className="my-8">
                <h3 className="my-4 text-xl">2.</h3>
                <p className="text-lg my-4">API: <a href="https://digidates.de/api/v1/checkdate?date=2020-02-30"><u className="text-cyan-400 hover:text-cyan-500">https://digidates.de/api/v1/checkdate?date=2020-02-30</u></a></p>
                <p className="my-4">MÉTODO UTILIZADO: GET</p>
                <p>TEST:</p>
                <pre>
                    <code className="language-javascript code mt-2">
                        {`const cheaquearFecha = pm.test("CHEQUEAR QUE 2020-02-30 sea FALSO", function () {
 const responseJson = pm.response.json();
 const paramsString = request.url.split('?')[1];
 console.log("El parametro es: "+ paramsString);
 
 let checkdate = responseJson.checkdate
 const fecha = paramsString.substring(5,15)

 if (checkdate == false)
   console.log("La fecha: " + fecha + " es: " + checkdate)
   else {
       console.log("La fecha: " + fecha + " es: " + checkdate )
        pm.expect(checkdate).to.be.false;
    }
})

pm.test("Tiempo de respuesta < 1600", function () {
 let tiempoDeRespuesta = cheaquearFecha.response.responseTime
 let tiempoEsperado = 1600;

 if(tiempoDeRespuesta < tiempoEsperado){
    console.log("El tiempo de respuesta es menor a 1,6 segundos.")
 } else{
     console.log("El tiempo de respuesta no es menor a 1,6 segundos.");
     pm.expect(tiempoDeRespuesta).to.be.below(tiempoEsperado);
 }
})
          `}
                    </code>
                </pre>
                <p className="mt-2">Lo que evaluamos con esta prueba, es verificar si el tiempo de respuesta de la consulta es menor a 1600 milisegundos.</p>
                <p>El tiempo de respuesta puede variar, no es un número fijo.</p>
            </div>

            <div className="my-8">
                <p className="my-4 text-xl">3.</p>
                <p className="text-lg my-4">API: <a href="https://digidates.de/api/v1/checkdate?date=2020-02-30"><u className="text-cyan-400 hover:text-cyan-500">https://digidates.de/api/v1/checkdate?date=2020-02-30</u></a></p>
                <p className="my-4">MÉTODO UTILIZADO: GET</p>
                <p>TEST:</p>
                <pre>
                    <code className="language-javascript code mt-2">
                        {`pm.test("CHEQUEAR QUE 2020-02-30 sea FALSO", function () {
 const responseJson = pm.response.json();
 const paramsString = request.url.split('?')[1];
 console.log("El parametro es: "+ paramsString);
 
 let checkdate = responseJson.checkdate
 const fecha = paramsString.substring(5,15)

 if (checkdate == false)
   console.log("La fecha: " + fecha + " es: " + checkdate)
   else {
       console.log("La fecha: " + fecha + " es: " + checkdate )
        pm.expect(checkdate).to.be.false;
    }
})
          `}
                    </code>
                </pre>
                <p className="mt-2">Esta prueba verifica si la respuesta de la API contiene el valor de <b className="font-medium">checkdate</b> igual a <b className="font-medium">false</b> y muestra en la consola si la fecha extraída de los parámetros es falsa o no. Si <b className="font-medium">checkdate</b> no es <b className="font-medium">false</b>, la prueba fallará.</p>
                <p>Como se ve abajo, la prueba pasa ✅</p>
            </div>

            <div className="my-8">
                <p className="my-4 text-xl">4.</p>
                <p className="text-lg my-4">API: <a href="https://datosabiertos-usig-apis.buenosaires.gob.ar/datos_utiles?calle=libertad&altura=936"><u className="text-cyan-400 hover:text-cyan-500">https://datosabiertos-usig-apis.buenosaires.gob.ar/datos_utiles?calle=libertad&altura=936</u></a></p>
                <p className="my-4">MÉTODO UTILIZADO: GET</p>
                <p>TEST:</p>
                <pre>
                    <code className="language-javascript code mt-2">
                        {`pm.test("CHEQUEAR QUE EL BARIO SEA RETIRO", function () {
 const responseJson = pm.response.json();
 const paramsString = request.url.split('?')[1];
 console.log("El parametro es:"+ paramsString);

 let comuna = responseJson.comuna;
 let barrio = responseJson.barrio
 const barrioEsperado = "Retiro";
 console.log("La comuna es:" + comuna)

 if (barrio == "Retiro")
   console.log("El barrio es Retiro!")
   else 
			console.log("El barrio no es Retiro :(")
			pm.expect(responseJson.barrio).to.eql(barrioEsperado);
})
          `}
                    </code>
                </pre>
                <p className="mt-2">Esta prueba verifica si el atributo <b className="font-medium">barrio</b> en la respuesta de la API es igual a <b className="font-medium">Retiro</b> y muestra en la consola si el barrio es "Retiro" o no. Si el barrio no es "Retiro", la prueba fallará y mostrará un mensaje de error.</p>
                <p>En este caso, el resultado es correcto, por lo tanto, la prueba pasa ✅</p>
            </div>
        </main>
    </>
    )
}

export default TestDeApis;