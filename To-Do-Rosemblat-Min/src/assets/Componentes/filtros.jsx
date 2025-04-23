import React from 'react';
import './filtros.css';
<link rel="stylesheet" href="filtros.css" />

function filtros()
{
    return(
        <div>
            <button id="mostrarTodas">Todas</button>
            <button id="mostrarPendientes">Pendientes</button>
            <button id="mostrarCompletadas">Completadas</button>
        </div>
    )
}

export default filtros;