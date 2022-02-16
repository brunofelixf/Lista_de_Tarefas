import React from 'react'
import './Task.css'

const Task = ({task}) => {
  return ( 
    <>
    <div className="tskContainer">
      <div>
       {task.title}
      </div>
      <div>
        <button>X</button>
      </div>
    </div>
    </>
   );
}
 
export default Task;