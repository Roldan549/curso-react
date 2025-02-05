import { useState } from 'react'
import './App.css'
import { AddTask } from './components/AddTask'

function App() {
 const [tasks,setTasks] = useState([])

 const addTask = (newTask)=>{
  let object = {
    task: newTask,
    status: false
  }
  setTasks([...tasks,object])
  console.log(tasks)
 }
  return (
    <>
      <AddTask addTask={addTask} />
    </>
  )
}

export default App
