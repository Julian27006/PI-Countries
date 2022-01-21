import React from 'react';
import {Link} from 'react-router-dom';
import './styles/LandingPage.css'
import StyleHome from "./styles/Home.module.css"

export default function landingPage(){
    return(
        <div className = 'Body'>
            <div className = 'aa'>
                <h1 className = 'Welcome'>PI Paises</h1>
                    <div className = 'Boton'>
                    <Link to = '/home'>
                        <button className={StyleHome.btnAdmin}>Ingresar</button>
                    </Link>
                    </div>
                <div className = 'Presentacion'>
                <h3 className = 'TextoPresentacion'>Página desarrollada por Julian Perez</h3>
                </div>
            </div>
        </div>
    );
};