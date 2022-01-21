import React from 'react';
import StyleHome from "./styles/Home.module.css"

export default function Paginado({paisesPerPage, paisesSeleccionados, paginado}){
    const NumeroPage =[];

    for (let e = 1; e <= Math.ceil(paisesSeleccionados/paisesPerPage); e++) { //Math.ceil redondea todos mis paises sobre los paises que necesito por pag
        NumeroPage.push(e);
    };
    return(
        <nav>
            <ul className= 'paginado'>
                {NumeroPage &&
                NumeroPage.map(N =>(
                <button key = {N}  className={StyleHome.btnAdmin} onClick={()=> paginado(N)}>{N}</button>
                ))};
            </ul>
        </nav>
    );
};