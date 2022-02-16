import React from 'react'  
import Task from './Task'

const Tasks = ({tasks, handleDel}) => {
  return ( 
    <>
    {
      tasks.map(task => (
        <Task 
          task={task}  
          handleDel={handleDel}
        />
      ))
    }
    </>
   );
}
 
export default Tasks;