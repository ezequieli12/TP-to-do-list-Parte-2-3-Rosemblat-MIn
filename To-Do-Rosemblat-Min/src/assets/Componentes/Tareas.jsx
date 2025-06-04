import React from 'react';
import './Tareas.css';

function Tarea({ id, nombre, fechaCreacion, completada, onToggleCompletada, onEliminarTarea }) {
  const formatoFecha = (fecha) => {
    if (!fecha) return '';
    const d = new Date(fecha);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  };

  return (
    <div className={`tarea ${completada ? 'completa' : 'pendiente'}`}>
      <h2 className={`tarea-nombre ${completada ? 'tachado' : ''}`}>{nombre}</h2>
      <p className="tarea-fecha">Creada: {formatoFecha(fechaCreacion)}</p>
      <p className="tarea-estado">Estado: {completada ? 'Completa' : 'Pendiente'}</p>
      <div className="tarea-botones">
        <button 
          className="tarea-boton-completar"
          onClick={() => onToggleCompletada(id)}
        >
          {completada ? 'Marcar como Pendiente' : 'Marcar como Completa'}
        </button>
        <button 
          className="tarea-boton-eliminar"
          onClick={() => onEliminarTarea(id)}
        >
          Eliminar ×
        </button>
      </div>
    </div>
  );
}

export default Tarea;