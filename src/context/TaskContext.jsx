import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export default function TaskProvider({children}) {

  const [tasks, setTasks] = useState([
  // {
  //   id: 1,
  //   title: "Texto",
  //   check: true
  // },
  // {
  //   id: 2,
  //   title: "Teste2",
  //   check: false
  // }
]);

  return (
    <TaskContext.Provider
    value={{
      tasks,
      setTasks}}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks(){
  const context = useContext(TaskContext);
  const { tasks, setTasks } = context;
  return { tasks, setTasks };
}