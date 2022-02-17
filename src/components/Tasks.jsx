import React from 'react'  
import Task from './Task'

const Tasks = ({tasks, handleDel, handleCheck}) => {
  return ( 
    <>
    {
      tasks.map(task => (
        <Task 
          task={task}  
          handleDel={handleDel}
          handleCheck={handleCheck}
        />
      ))
    }
    </>
   );
}
 
export default Tasks;