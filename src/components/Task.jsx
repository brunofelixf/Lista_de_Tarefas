import React from 'react';
import './Task.css'

const Task = ({task}) => {
  return ( 
    <>
    <div className="tskContainer">
      <p>{task}</p>
    </div>
    </>
   );
}
 
export default Task;