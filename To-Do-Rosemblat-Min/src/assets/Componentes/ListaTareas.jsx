import Tarea from "./Tareas";
import React from 'react';
function ListaTareas()
{
    return (
        <div>
            <Tarea nombre="Tarea1" completada='elemento-tareaCompletada' estado2='✅' Hora="8m 33s"/>
            <Tarea nombre="Tarea2" completada='elemento-tareaCompletada' estado2='✅' Hora="2m 33s"/>
            <Tarea nombre="Tarea3" completada='elemento-tarea' estado2='❌' Hora="10m 33s"/>
        </div>
    );
}

export default ListaTareas;