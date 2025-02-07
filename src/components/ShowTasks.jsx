export const ShowTasks = ({ tasksList, changeStatus, removeTaks })=>{

    return <>
    <table>
        <thead>
            <tr>
                <th>Tareas</th>
                <th>Estado</th>
                <th>Opciones</th>
            </tr>
        </thead>
        <tbody>
          {tasksList.map((e,i) => {
            return <tr key={i}>
                <td>{e.task}</td>
                <td>{e.status ? "Completado" : "No Completado"}</td>
                <td>
                    <button onClick={() => { removeTaks(i)}}>Eliminar</button>
                    <button onClick={() => { changeStatus(i)} }>Completar</button>
                </td>
            </tr>
          })}
        </tbody>
    </table>
    </>
}