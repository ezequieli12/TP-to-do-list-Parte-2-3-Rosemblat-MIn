import Tarea from "./Tareas";

function ListaTareas()
{
    return (
        <div>
            <Tarea nombre="Tarea1" estado1="completada" estado2='✅' Hora="8m 33s"/>
            <Tarea nombre="Tarea2" estado1="completada" estado2='✅' Hora="2m 33s"/>
            <Tarea nombre="Tarea3" estado1="pendiente" estado2='❌' Hora="10m 33s"/>
        </div>
    );
}

export default ListaTareas;