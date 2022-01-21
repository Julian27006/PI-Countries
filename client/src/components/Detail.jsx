import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import './styles/Detail.css'

export default function Detail(props) {
    const dispatch =  useDispatch();

useEffect(()=>{
    dispatch(getDetail(props.match.params.id)); //AUMENTAR TITULOS DE PAISES CENTRAR PAGINA
},[dispatch, props.match.params.id]);

const Pais = useSelector((state)=> state.detail); //Mi estado con la informacion de los paises




    return(
        <>
         <div className="DivVolver">
            <Link to='/home'><button className="ButtonVolver">Volver</button></Link>
        </div>
        <div className='ContenedorDetalle'>
            {
                Pais.Activities?
                <div className="detalle">
                <h1>{Pais.name}</h1>
                <img src = {Pais.img} alt='Imagen no encontrada' width='250px' height='175px' margin='3px'/>
                <h2>ID: {Pais.id}</h2>
                <h2>Continente: {Pais.continente}</h2>
                <h3 className='capital' alt='Capital no encontrada'>Capital: {Pais.capital || 'Capital no encontrada'}</h3>
                <h4 alt='Subregion no encontrada'>Subregion: {Pais.subregion}</h4>
                <h5>Area Km2: {Pais.area}</h5>
                <h5>Poblacion: {Pais.poblacion}</h5>

            {

            Pais?.Activities === undefined || Pais?.Activities?.length === 0 ? <div className='ContenedorActividad'>
                    <h1 className='NoActivity'>NO HAY ACTIVIDADES </h1>
                    <div className="DivActividad">
                    <Link to = '/activity'>
                        <button className="ButtonActividades">Crear Actividades</button>
                    </Link>
                    </div>
                    </div> : 
                    
                    Pais?.Activities.map((activity) => (
                    <div className='actividad' >
                            <h6 className='datos'>Actividad: {activity.name} </h6>
                            <h6 className='datos'>Dificultad: {activity.dificultad} </h6>
                            <h6 className='datos'>Temporada: {activity.temporada} </h6>
                            <h6 className='datos'>Duracion: {activity.duracion}</h6>
                    </div>
                    ))
                    
                    }

            </div> : <p>No encontramos los detalles perdon:c</p>
            }
            </div> 
        </>
    )


};