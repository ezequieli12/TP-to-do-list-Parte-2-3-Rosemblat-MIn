import Tarea from "./Tareas";

function ListaTareas()
{
    return (
        <div>
            <Tarea nombre="Tarea1" estado='✅' Hora="8m 33s"/>
            <Tarea nombre="Tarea2" estado='✅' Hora="2m 33s"/>
            <Tarea nombre="Tarea3" estado='❌' Hora="10m 33s"/>
        </div>
    );
}

export default ListaTareas;