import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import filtros from './assets/Componentes/filtros.jsx';
import inputContainer from './assets/Componentes/inputContainer.jsx';

function App() {
  return (
    <div class="container">
        <h1>Lista de Tareas</h1>
        <inputContainer/>
        <filtros/>
        <ul id="listaTareas"></ul>
        <button id="limpiarCompletadas">Eliminar Completadas</button>
        <p id="tareaMasRapida"></p>
    </div>
  );
}

export default App
