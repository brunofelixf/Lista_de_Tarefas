import React from 'react'
import './Task.css'

const Task = ({task, handleDel, handleCheck}) => {
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