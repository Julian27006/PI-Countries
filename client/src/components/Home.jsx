import './styles/Home.css'
import React from "react";
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPaises,  filtradoPaises, filtradoPoblacion, filtradoAlfa, getActividad, filtradoActividad, FitroArea} from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import StyleHome from "./styles/Home.module.css"

export default function Home(){ 
    const dispatch = useDispatch();
    const paisesSeleccionados = useSelector((state)=> state.paises);
    const [currentPage, setcurrentPage] = useState(1); // lo inicio en uno para que siempre se inicie en la primera page
    const [paisesPerPage] = useState(9); //cards que se van a mostrar
    const [, setOrder] = useState('');
    const [, setAZ] = useState('');
    const ultimoPais = currentPage * paisesPerPage;  //indice del ultimo pais = a la pag actual en la que me encuetro * la cantidad de paises por pag
    const primerPais = ultimoPais - paisesPerPage; //indice del primer pais = al indice del ultimo pais - los paises por pag
    const paisesPageActual = paisesSeleccionados.slice(primerPais, ultimoPais);
    const nombreActividad = useSelector((state)=> state.actividad);
    const paginado = (NumeroPage)=>{setcurrentPage(NumeroPage)};
    const prueba = nombreActividad.map((e)=> e.name);
    const unicos = [...new Set(prueba)];
    
// usar font-family: 'Source Code Pro', monospace;
useEffect(()=>{
    dispatch(getPaises()); //me traigo la info de paises para usarla
},[dispatch]);

useEffect(()=>{
    dispatch(getActividad()); //me traigo las actividades para usarlas
},[dispatch]);

//reseteo Paises
function handleClick(ev){
    ev.preventDefault();
    dispatch(getPaises());
};
//los payload son los value de options
//e.target.value toma el valor cuando el usuario hace click

function handleFitroEstado(ev){
    dispatch(filtradoPaises(ev.target.value));
};

function handleFiltradoPoblacion(ev){ 
    ev.preventDefault();
    dispatch(filtradoPoblacion(ev.target.value));
    setcurrentPage(1);
    setOrder(`Ordenado ${ev.target.value}`);
};

function handleFitroArea(ev){
    ev.preventDefault()
    dispatch (FitroArea (ev.target.value));
    setcurrentPage(1);
    setOrder (`Ordenado ${ev.target.value}`);
};

function handleAlfa(ev){
    ev.preventDefault();
    dispatch(filtradoAlfa(ev.target.value));
    setcurrentPage(1);
    setAZ(`Ordenado ${ev.target.value}`);
};

function handleActividades(ev) {
    dispatch(filtradoActividad(ev.target.value));
};

return(
    <div className = 'container'>
        <div className = 'searchbar'>
    <SearchBar/> 
    <div className='ToLanding'>
    <Link to = '/'><button className={StyleHome.btnAdmin}>Landing</button></Link>       
    </div>
    <div className='ToActivities'>
    <Link to = '/activity'><button className={StyleHome.btnAdmin}>Crear Actividades</button></Link>
    </div>
    </div>
    <div className='ContenedorBotones'>
        { unicos.length === 0?
        <p className="CreateActivities">Crea actividades para filtrarlas</p>
    : <select className={StyleHome.btnAdmin} onChange = {ev => handleActividades(ev)}>
    {unicos.map((ev)=>(
    <option value ={ev} > {ev}</option>
    ))}
    </select>
    }
    <select  className={StyleHome.btnAdmin} onChange = {ev => handleFitroEstado(ev)} >
        <option value ='All'>Todos</option>
        <option value ='Asia'>Asia</option>
        <option value='Europe'>Europa</option>
        <option value='Africa'>Africa</option>
        <option value='Oceania'>Oceania</option>
        <option value='Antarctic'>Antarctic</option>
        <option value='Americas'>America</option>
    </select>

    <select className = {StyleHome.btnAdmin} onChange = {ev => handleFitroArea(ev)}>

        <option value = "ascendente"> Mayor Area</option>
        <option value = "desendente">Menor Area</option>

    </select>
    


    <select className={StyleHome.btnAdmin} onChange ={ev => handleFiltradoPoblacion(ev)}>
        <option value ='asendente'>Mayor Poblacion</option>
        <option value ='desendente'>Menor Poblacion</option>
    </select>
    <select className={StyleHome.btnAdmin} onChange ={ev => handleAlfa(ev)}>
    <option value ='asc'>A-Z</option>
    <option value ='des'>Z-A</option>
    </select>
    <button className={StyleHome.btnAdmin} onClick={ev=> {handleClick(ev)}}>Volver a cargar paises</button>
    </div>
    <br/>
    <div className = 'paginado'>
    <Paginado
    paisesPerPage = {paisesPerPage}
    paisesSeleccionados={paisesSeleccionados.length}
    paginado={paginado}>
    </Paginado></div> 
    {paisesPageActual?.map(el=>{ //aca seteo la informacion que se va a mostrar en mi home con el paginado
    return( //el key no tiene que ser id, pero por eso uso otro
    <div key={el.id} className = 'card'>
    <Link to= {'/home/' + el.id}> 
    <Card name={el.name} continente={el.continente} imagen={el.img} poblacion={el.poblacion}/>
    </Link>
    </div>
    )})};
    </div>
)};