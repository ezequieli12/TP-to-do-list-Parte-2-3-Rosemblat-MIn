import React from 'react';
import Filtros from './filtros.jsx';
import InputContainer from './inputContainer.jsx';
import './container.css';
import ListaTareas from './ListaTareas.jsx';
<link rel="stylesheet" href="container.css" />
function Container()
{
    return(
        <div class="container">
            <h1>Lista de Tareas</h1>
            <InputContainer/>
            <Filtros/>
            <ul id="listaTareas"></ul>
            <button id="limpiarCompletadas">Eliminar Completadas</button>
            <p id="tareaMasRapida"></p>
            <ListaTareas/>
        </div>
        )
}

export default Container;
