import React from 'react'
import './Task.css'

const Task = ({task, handleDel}) => {
  return ( 
    <>
    <div className="tskContainer">
      <div>
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