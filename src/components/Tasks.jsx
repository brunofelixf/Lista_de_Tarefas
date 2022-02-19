import React from 'react'; 

import { useTasks } from '../context/TaskContext';

import Task from './Task';

const Tasks = () => {

  const { tasks } = useTasks();

  return ( 
    <>
    {
      tasks.map(task => (
        <Task 
          task={task}
        />
      ))
    }
    </>
   );
}
 
export default Tasks;