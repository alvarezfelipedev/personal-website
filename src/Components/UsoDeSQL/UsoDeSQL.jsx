/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

import NavBarPage from "../NavBarPage/NavBarPage";
import "./usoDeSQl.css"

import hljs from "highlight.js";
import "highlight.js/styles/devibeans.css";


function UtilizacionSQL() {
    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return (
        <>
            <NavBarPage />
            <main id="#" className="mx-48 my-10">
                <h2 className="text-4xl font-semibold mb-2">Uso de SQL</h2>
                <div className="my-8">
                    <p className="my-4 text-xl"><u>Consigna:</u></p>

                    <p className="my-4">1. En nuestra aplicación, necesitamos crear una tabla de historial de compras en SQL. A continuación, se presenta la estructura de la tabla llamada "historial" con las siguientes columnas: "nrocliente", "apellidocliente", "nombrecliente", "idcompra", "fecha", "monto" y "nrosucursal". La columna "nrocliente" se asignará como clave primaria, y la columna "nrosucursal" será una clave foránea que hará referencia a la columna "idsucursal" de una tabla existente de sucursales.</p>
                    <p>Para probar la tabla, puedes ejecutar una consulta SQL que agrupe los datos por "nrocliente" y muestre los campos "nrocliente" y "monto". La consulta debe ordenar los resultados en orden descendente según el campo "monto".</p>

                    <p className="my-4 text-xl"><u>Resolución:</u></p>

                    <pre>
                        <code className="language-javascript code mt-2">
                            {`CREATE TABLE historial (
    nrocliente INTEGER PRIMARY KEY AUTOINCREMENT,
    apellidocliente VARCHAR(50),
    nombrecliente VARCHAR(50),
    idcompra INT,
    fecha DATE,
    monto DECIMAL(10, 2),
    nrosucursal INT,
    FOREIGN KEY (nrosucursal) REFERENCES sucursales(idsucursal)
);

INSERT INTO historial (nrocliente, apellidocliente, nombrecliente, idcompra, fecha, monto, nrosucursal)
VALUES
(1, 'Pérez', 'Juan', 1, '2023-07-21', 100.00, 1),
(2, 'Gómez', 'María', 2, '2023-07-22', 200.00, 2),
(3, 'Rodríguez', 'Pedro', 3, '2023-07-23', 300.00, 3),
(4, 'García', 'Ana', 4, '2023-07-24', 400.00, 4),
(5, 'Martínez', 'Luis', 5, '2023-07-25', 500.00, 5);
(6, 'Pérez', 'Juan', 101, '2023-07-17', 150.50, 1);
(7, 'Pérez', 'Juan', 102, '2023-07-18', 200.00, 2);
(8, 'Gómez', 'María', 103, '2023-07-19', 75.25, 1);
(9, 'López', 'Carlos', 104, '2023-07-20', 300.90, 3);
(10, 'Pérez', 'Juan', 105, '2023-07-21', 50.75, 2);
(11, 'Gómez', 'María', 106, '2023-07-21', 120.00, 1);
(12, 'López', 'Carlos', 107, '2023-07-21', 180.50, 3);


// Muestra de los campos "nrocliente" y "monto", en orden descendente
SELECT nrocliente, monto
FROM historial
ORDER BY monto DESC;
          `}
                        </code>
                    </pre>
                </div>

                <div className="my-8">
                    <p className="my-4 text-xl"><u>Consigna:</u></p>

                    <p className="my-2">2. Mediante la siguiente tabla de SQL. Averigua:</p>
                    <ol className="ml-8">
                        <li className="my-1">a. Qué cantidad de empleados hay?</li>
                        <li className="my-1">b. Seleccionar los empleados cuyo apellido sea Smith o Johnson.</li>
                        <li className="my-1">c. Seleccionar los empleados cuyo managerid sea NULL.</li>
                        <li className="my-1">d. Informar el número total de empleados y sumar los salarios agrupados por departamento.</li>
                        <li className="my-1">e. Ordenar el Query anterior por sumatoria de salarios ascendente.</li>
                        <li className="my-1">f. Seleccionar nombre, apellido, teléfono y nombre de departamento al que pertenecen los empleados.</li>
                    </ol>

                    <pre>
                        <code className="language-javascript code mt-2">
                            {`CREATE TABLE Employees (
id INT NOT NULL AUTO_INCREMENT,
fname VARCHAR(35) NOT NULL,
lname VARCHAR(35) NOT NULL,
phoneNumber VARCHAR(11),
managerId INT,
departmentId INT NOT NULL,Salary INT NOT NULL,
hireDate DATETIME NOT NULL,
PRIMARY KEY(Id),
FOREIGN KEY (managerId) REFERENCES Employees(Id),
FOREIGN KEY (departmentId) REFERENCES Departments(Id)
);
INSERT INTO Employees
(id, fname, lname, phoneNumber, managerId, departmentId, salary, hireDate)
VALUES
(1, 'James', 'Smith', 1234567890, NULL, 1, 1000, '01-01-2002'),
(2, 'John', 'Johnson', 2468101214, '1', 1, 400, '23-03-2005'),
(3, 'Michael', 'Williams', 1357911131, '1', 2, 600, '12-05-2009'),
(4, 'Johnathon', 'Smith', 1212121212, '2', 1, 500, '24-07-2016');
          `}
                        </code>
                    </pre>

                    <p className="mt-6 text-xl"><u>Resolución:</u></p>

                    <div className="my-4">
                        <p>1. Cantidad de empleados:</p>
                        <pre>
                            <code className="language-javascript code mt-2">
                                {`SELECT COUNT(*) AS CantidadEmpleados
FROM Employees;`}
                            </code>
                        </pre>
                    </div>
                    <div className="my-4">
                        <p>2. Empleados con apellidos "Smith" o "Johnson":</p>
                        <pre>
                            <code className="language-javascript code mt-2">
                                {`SELECT *
FROM Employees
WHERE lname IN ('Smith', 'Johnson');`}
                            </code>
                        </pre>
                    </div>
                    <div className="my-4">
                        <p>3. Empleados cuyo ManagerId sea NULL:</p>
                        <pre>
                            <code className="language-javascript code mt-2">
                                {`SELECT *
FROM Employees
WHERE managerId IS NULL;`}
                            </code>
                        </pre>
                    </div>
                    <div className="my-4">
                        <p>4. Número total de empleados y sumarización de salarios agrupados por departamento:</p>
                        <pre>
                            <code className="language-javascript code mt-2">
                                {`SELECT COUNT(*) AS CantidadEmpleados, departmentId, SUM(Salary) AS SumaSalarios
FROM Employees
GROUP BY departmentId;`}
                            </code>
                        </pre>
                    </div>
                    <div className="my-4">
                        <p>5. Ordenar la consulta anterior por sumatoria de salarios ascendente:</p>
                        <pre>
                            <code className="language-javascript code mt-2">
                                {`SELECT COUNT(*) AS CantidadEmpleados, departmentId, SUM(Salary) AS SumaSalarios
FROM Employees
GROUP BY departmentId
ORDER BY sumaSalarios ASC;`}
                            </code>
                        </pre>
                    </div>
                    <div className="my-4">
                        <p>6. Nombre, apellido, teléfono y nombre del departamento de los empleados:</p>
                        <pre>
                            <code className="language-javascript code mt-2">
                                {`SELECT e.fname AS Nombre, e.lname AS Apellido, e.phoneNumber AS Telefono, d.name AS Departamento
FROM Employees e
JOIN Departments d ON e.departmentId = d.Id;`}
                            </code>
                        </pre>
                    </div>

                </div>

            </main>
        </>
    )
}

export default UtilizacionSQL;