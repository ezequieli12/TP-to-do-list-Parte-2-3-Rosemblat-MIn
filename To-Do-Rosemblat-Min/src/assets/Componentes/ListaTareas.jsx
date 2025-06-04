import React from 'react';
import Tarea from './Tareas';
import Estadistica from './tareaMasRapida';

function ListadoTareas({ tareas, onToggleCompletada, onEliminarTarea, tareaMasRapida }) {
  return (
    <div className="listado-tareas">
      {tareas.map(tarea => (
        <Tarea
          key={tarea.id}
          id={tarea.id}
          nombre={tarea.nombre}
          fechaCreacion={tarea.fechaCreacion}
          completada={tarea.completada}
          onToggleCompletada={onToggleCompletada}
          onEliminarTarea={onEliminarTarea}
        />
      ))}
      {tareaMasRapida && <Estadistica nombre={tareaMasRapida.nombre} duracion={tareaMasRapida.duracion} />}
    </div>
  );
}

export default ListadoTareas;