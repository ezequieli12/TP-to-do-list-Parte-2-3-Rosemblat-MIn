import React, { useState } from 'react';
import './inputContainer.css';

function FormularioTarea({ onAgregarTarea }) {
  const [nombreTarea, setNombreTarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombreTarea.trim()) {
      onAgregarTarea(nombreTarea);
      setNombreTarea('');
    }
  };

  return (
    <div className="formulario-tarea">
      <h2 className="formulario-titulo">Agregar nueva tarea</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <label className="formulario-etiqueta">Nombre de la tarea</label>
        <input 
          className="formulario-input" 
          type='text'
          value={nombreTarea}
          onChange={(e) => setNombreTarea(e.target.value)}
        />
        <button className="formulario-boton" type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
}

export default FormularioTarea;