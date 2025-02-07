import { useState } from 'react'
import './App.css'
import { AddTask } from './components/AddTask'
import { Logos } from './components/Logos'
import { ShowTasks } from './components/ShowTasks'

function App() {
 const [tasks,setTasks] = useState([])

 const addTask = (newTask)=>{
  let object = {
    task: newTask,
    status: false
  }
  setTasks([...tasks,object])
 }

 const changeStatus = (indice)=>{
  tasks[indice].status = !tasks[indice].status
  setTasks([...tasks])
 }

 const removeTaks = (indice)=>{
  tasks.splice(indice,1)
  setTasks([...tasks])
 }
  return (
    <>
      <Logos />
      <h1>Administrador de tareas</h1>
      <AddTask addTask={addTask} />
      <ShowTasks tasksList={tasks} changeStatus={changeStatus} removeTaks={removeTaks} />
    </>
  )
}

export default App
