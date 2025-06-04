import React from 'react';
import './tareaMasRapida.css';
<link rel="stylesheet" href="tareaMasRapida.css" />
function tareaMasRapida({ nombre, duracion }) {
    return (
      <div className="estadistica">
        <p className="estadistica-texto">Tarea más rápida completada: {nombre} {duracion}</p>
      </div>
    );
  }
  
  export default tareaMasRapida;