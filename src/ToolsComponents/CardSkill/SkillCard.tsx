import React from "react";

import "./skillCard.css"

interface SkillCardProps{
    nombre: string,
    img: string
}

function SkillCard(props: SkillCardProps) {
    return (
        <div className="card">
            <div className="mr-2 ">
                <img width="35" height="35" src={props.img} alt={`Imagen del logo de ${props.nombre}`} />
            </div>
            <div className="titulo-lenguaje">{props.nombre}</div>
        </div>
    )
}

export default SkillCard;
