import React from 'react';
import './filtros.css';

function Filtros({ filtroActual, onCambiarFiltro, onEliminarCompletadas }) {
  return (
    <div className="filtros">
      <button 
        className={`filtro-boton ${filtroActual === 'todas' ? 'activo' : ''}`}
        onClick={() => onCambiarFiltro('todas')}
      >
        Todas
      </button>
      <button 
        className={`filtro-boton ${filtroActual === 'completadas' ? 'activo' : ''}`}
        onClick={() => onCambiarFiltro('completadas')}
      >
        Completadas
      </button>
      <button 
        className={`filtro-boton ${filtroActual === 'pendientes' ? 'activo' : ''}`}
        onClick={() => onCambiarFiltro('pendientes')}
      >
        Pendientes
      </button>
      <button 
        className="filtro-boton-limpiar"
        onClick={onEliminarCompletadas}
      >
        Eliminar Completadas
      </button>
    </div>
  );
}

export default Filtros;