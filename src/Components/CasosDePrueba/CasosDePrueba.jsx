function CasosDePrueba() {
    return (
        <section className="mx-48 my-10">
            <div className="">
                <h1 className="text-4xl font-semibold mb-2">Ejemplos de Casos de Prueba</h1>
                <h2 className="text-lg">Armado de Casos de Prueba para la página: <a href="https://commitquality.com/add-product"><u className="text-cyan-400 hover:text-cyan-500">https://commitquality.com/add-product</u></a></h2>

                <div className="my-8">
                    <h3 className="text-2xl mb-1 text-cyan-400"><u>Primer caso de prueba:</u></h3>
                    <p className="my-2"><strong className="font-medium">Precondiciones:</strong> Acceso a la página web en funcionamiento.</p>
                    <p className="my-2"><strong className="font-medium">Identificador:</strong> 01</p>
                    <p className="my-2"><strong className="font-medium">Descripcion:</strong> Comprobar que el campo Name, Price y Date Stocked una vez completados se agreguen correctamente a la categoría Products.</p>
                    <p className="mt-2"><strong className="font-medium">Pasos:</strong></p>
                    <ol className="ml-8">
                        <li>1. Hacer click en el input “Name”</li>
                        <li>2. Colocar nombre de un producto.</li>
                        <li>3. Hacer click en el input “Price”</li>
                        <li>4. Colocar precio numerico.</li>
                        <li>5. Hacer click en el input “Date Stocked”</li>
                        <li>6. Colocar una fecha válida.</li>
                        <li>7. Hacer click en el botón de “Submit” y que se cargue en: https://commitquality.com/
                        </li>
                    </ol>
                    <p className="mt-2"><strong className="font-medium">Datos de Test:</strong></p>
                    <ol className="ml-8">
                        <li>Name: Arroz</li>
                        <li>Price: 12</li>
                        <li>Date Stocked: 05/06/2023</li>
                    </ol>
                    <p className="my-2"><strong className="font-medium">Resultados esperados:</strong> Que se agregue correctamente en: https://commitquality.com/ los datos enviados.</p>
                    <p className="my-2"><strong className="font-medium">Resultados obtenidos:</strong> Se agregó correctamente en la Categoría de Products con los datos enviados por los inputs.</p>
                    <p className="my-2"><strong className="font-medium">PASS/FAIL</strong> PASS</p>
                    <p className="my-2"><strong className="font-medium">Incidentes:</strong> No hubo ningún inconveniente.</p>
                </div>
            </div>

            <div className="my-8">
                <h3 className="text-2xl mb-1 text-cyan-400"><u>Segundo caso de prueba:</u></h3>
                <p className="my-2"><strong className="font-medium">Precondiciones:</strong> Acceso a la página web y datos a completar en los campos “Name” y “Price” validos y en “Date Stocked” dato invalido.</p>
                <p className="my-2"><strong className="font-medium">Identificador:</strong> 02</p>
                <p className="my-2"><strong className="font-medium">Descripcion:</strong> Comprobar que no se agreguen productos con fechas de stock inválidas.</p>
                <p className="mt-2"><strong className="font-medium">Pasos:</strong></p>
                <ol className="ml-8">
                    <li>1. Hacer click en el input “Name”</li>
                    <li>2. Colocar nombre de un producto.</li>
                    <li>3. Hacer click en el input “Price”</li>
                    <li>4. Colocar precio numerico</li>
                    <li>5. Hacer click en el input “Date Stocked”</li>
                    <li>6. Colocar una fecha válida.</li>
                    <li>7. Hacer click en el botón de “Submit” y que se cargue en: https://commitquality.com/
                    </li>
                </ol>
                <p className="mt-2"><strong className="font-medium">Datos de Test:</strong></p>
                <ol className="ml-8">
                    <li>Name: Polenta</li>
                    <li>Price: 10</li>
                    <li>Date Stocked: 22/08/2024</li>
                </ol>
                <p className="my-2"><strong className="font-medium">Resultados esperados:</strong> Que cuando se coloque una fecha inválida en el campo “Date Stocked” y posteriormente se intente agregar en la Categoría Products, no se permita. Que salte una alerta con el error.</p>
                <p className="my-2"><strong className="font-medium">Resultados obtenidos:</strong> No permitió que se agreguen productos con fechas inválidas y saltó una alerta.</p>
                <p className="my-2"><strong className="font-medium">PASS/FAIL</strong> PASS</p>
                <p className="my-2"><strong className="font-medium">Incidentes:</strong> Ninguno.</p>
            </div>

            <div className="my-8">
                <h3 className="text-2xl mb-1 text-cyan-400"><u>Tercer caso de prueba:</u></h3>
                <p className="my-2"><strong className="font-medium">Precondiciones:</strong> Acceso a la página web en funcionamiento y datos a completar en cada uno de los inputs.</p>
                <p className="my-2"><strong className="font-medium">Identificador:</strong> 03</p>
                <p className="my-2"><strong className="font-medium">Descripcion:</strong> Verificar que en el input price solamente se permita escribir valores numéricos.</p>
                <p className="mt-2"><strong className="font-medium">Pasos:</strong></p>
                <ol className="ml-8">
                    <li>1. Hacer click en el input “Name”</li>
                    <li>2. Colocar nombre de un producto.</li>
                    <li>3. Hacer click en el input “Price”</li>
                    <li>4. Colocar precio invalido</li>
                    <li>5. Hacer click en el input “Date Stocked”</li>
                    <li>6. Colocar una fecha válida.</li>
                    <li>7. Hacer click en el botón de “Submit” y que se cargue en: https://commitquality.com/
                    </li>
                </ol>
                <p className="mt-2"><strong className="font-medium">Datos de Test:</strong></p>
                <ol className="ml-8">
                    <li>Name: Fideos</li>
                    <li>Price: con tuco/</li>
                    <li>Date Stocked: 10/04/2023</li>
                </ol>
                <p className="my-2"><strong className="font-medium">Resultados esperados:</strong> Comprobar que en el input Price solamente permita escribir valores numéricos.</p>
                <p className="my-2"><strong className="font-medium">Resultados obtenidos:</strong>  No permite escribir valores que no sean numéricos.</p>
                <p className="my-2"><strong className="font-medium">PASS/FAIL</strong> PASS</p>
                <p className="my-2"><strong className="font-medium">Incidentes:</strong> Ninguno.</p>
            </div>
        </section>
    )
}

export default CasosDePrueba;