import React from 'react';
import './inputContainer.css';
<link rel="stylesheet" href="inputContainer.css" />

function inputContainer()
{
    return(
        <div class="inputContainer"> 
            <input type="text" id="entradaTarea" placeholder="Agregar una nueva tarea"/>
            <button id="botonAgregarTarea">Agregar</button>
        </div>
    )
}

export default inputContainer;