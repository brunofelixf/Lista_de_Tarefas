import React from 'react';
import './Task.css';
import { useTasks } from '../context/TaskContext';


const Task = ({task}) => {
 
  const { tasks, setTasks} = useTasks();

  const handleCheck = (taskId) => {
    const newTasks = tasks.map( (task) => {
      if (task.id === taskId){
        return { ...task, check: !task.check }
      }
      return task
    })
    setTasks(newTasks)
  }

  const handleDel = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    
    setTasks(newTasks)
  }

  return ( 
    <>
    <div 
      className="tskContainer"
      style={ task.check ? 
        { 
        borderLeft: '12px solid chartreuse',
        color: "black"
        }: {} }>
      <div 
        className= "tskTitle" 
        onClick={() => handleCheck(task.id)}>
        {task.title}
      </div>
      <div>
        <button onClick={() => handleDel(task.id)}>X</button>
      </div>
    </div>
    </>
   );
}
 
export default Task;