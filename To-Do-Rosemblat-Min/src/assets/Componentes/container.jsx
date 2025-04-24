import React from 'react';
import Filtros from './filtros.jsx';
import InputContainer from './inputContainer.jsx';
import './container.css';
import ListaTareas from './ListaTareas.jsx';
import TareaMasRapida from './tareaMasRapida.jsx'
<link rel="stylesheet" href="container.css" />
function Container()
{
    return(
        <div className="container">
            <h1>Lista de Tareas</h1>
            <InputContainer/>
            <Filtros/>
            <ListaTareas/>
            <button id="limpiarCompletadas">Eliminar Completadas</button>
            <TareaMasRapida/>
        </div>
        )
}

export default Container;
