import React from 'react';

import './Button.css';

import { useInput } from '../context/InputContext';
import { useTasks } from '../context/TaskContext';

const Button = ({children}) => {

  const { inputData, setInputData } = useInput();
  const { tasks, setTasks } = useTasks();

  const handleAdd = (task) => {
    const newTasks = [
      ...tasks,
      {
        title: task,
        id: Math.random()*10,
        check: false
      }
    ]
    setTasks(newTasks)
  }

  const handleClick = () => {
    handleAdd(inputData);
    setInputData("");
  };

  return ( 
    <div className="btnContainer">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}
 
export default Button;