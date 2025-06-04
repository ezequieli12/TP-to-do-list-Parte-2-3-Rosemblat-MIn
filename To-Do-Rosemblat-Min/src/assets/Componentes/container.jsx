import React, { useState, useEffect } from 'react';
import FormularioTarea from './inputContainer';
import Filtros from './filtros';
import ListadoTarea from './ListaTareas';
import './container.css';

function TodoList() {
  const [tareas, setTareas] = useState(() => {
    const saved = localStorage.getItem('todoListTareas');
    return saved ? JSON.parse(saved).map(t => ({
      ...t,
      fechaCreacion: new Date(t.fechaCreacion),
      fechaCompletada: t.fechaCompletada ? new Date(t.fechaCompletada) : null
    })) : [];
  });

  const [filtro, setFiltro] = useState('todas');
  const [tareaMasRapida, setTareaMasRapida] = useState(null);

  useEffect(() => {
    const completadas = tareas.filter(t => t.completada && t.fechaCreacion && t.fechaCompletada);
    
    if (completadas.length === 0) {
      setTareaMasRapida(null);
      return;
    }

    const tareaRapida = completadas.reduce((rapida, actual) => {
      const tiempoRapida = rapida.fechaCompletada - rapida.fechaCreacion;
      const tiempoActual = actual.fechaCompletada - actual.fechaCreacion;
      return tiempoActual < tiempoRapida ? actual : rapida;
    }, completadas[0]);

    const duracion = Math.round((tareaRapida.fechaCompletada - tareaRapida.fechaCreacion) / 60000);
    setTareaMasRapida({ nombre: tareaRapida.nombre, duracion: `${duracion}m` });
  }, [tareas]);

  useEffect(() => {
    const tareasParaGuardar = tareas.map(t => ({
      ...t,
      fechaCreacion: t.fechaCreacion.toISOString(),
      fechaCompletada: t.fechaCompletada ? t.fechaCompletada.toISOString() : null
    }));
    localStorage.setItem('todoListTareas', JSON.stringify(tareasParaGuardar));
  }, [tareas]);

  const agregarTarea = (nombreTarea) => {
    const nuevaTarea = {
      id: Date.now(),
      nombre: nombreTarea,
      fechaCreacion: new Date(),
      completada: false,
      fechaCompletada: null
    };
    setTareas(prev => [...prev, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completada: !tarea.completada,
          fechaCompletada: tarea.completada ? null : new Date()
        };
      }
      return tarea;
    }));
  };

  const eliminarCompletadas = () => {
    setTareas(tareas.filter(tarea => !tarea.completada));
  };

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'pendientes') return !tarea.completada;
    return true;
  });

  return (
    <div className='container'>
      <h1>Lista de Tareas</h1>
      <FormularioTarea onAgregarTarea={agregarTarea} />
      <Filtros 
        filtroActual={filtro}
        onCambiarFiltro={setFiltro}
        onEliminarCompletadas={eliminarCompletadas}
      />
      <ListadoTarea
        tareas={tareasFiltradas}
        onToggleCompletada={toggleCompletada}
        onEliminarTarea={eliminarTarea}
        tareaMasRapida={tareaMasRapida}
      />
    </div>
  );
}

export default TodoList;