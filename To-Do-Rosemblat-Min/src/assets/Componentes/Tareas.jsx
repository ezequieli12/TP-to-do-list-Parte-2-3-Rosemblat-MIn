import './Tareas.css'
function Tarea(tarea)
{
    return (
        <div className={tarea.completada}>
            <p>{tarea.nombre}</p>
            <p ><span>{tarea.estado2}</span></p>
            <p><span>{tarea.Hora}</span></p>
            <p><button className="button elimnar u-full-width"> ×</button></p>
        </div>
    );
}

export default Tarea;