import React from 'react';
import './tareaMasRapida.css';
<link rel="stylesheet" href="tareaMasRapida.css" />
function tareaMasRapida({ nombre, duracion }) {
    return (
      <div>
        <p>Tarea más rápida completada: {nombre} {duracion}</p>
      </div>
    );
  }
  
  export default tareaMasRapida;