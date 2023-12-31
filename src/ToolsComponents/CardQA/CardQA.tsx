import React from "react";

import { Link } from "react-router-dom";
import BtnVerMas from "../BtnVerMas/BtnVerMas";

interface CardQAProps {
  nombre: string;
  descripcion: string;
  to: string;
}

function CardQA(props: CardQAProps) {
  return (
    <div className="max-w-sm">
      <Link to={props.to} className="mb-2 text-xl tracking-tight">{props.nombre}</Link>

      <div className="md:h-28">
        <p className="mb-3 text-normal text-gray-400">{props.descripcion}</p>
      </div>

      <Link to={props.to}>
        <BtnVerMas />
      </Link>

    </div>
  )
}

export default CardQA;
