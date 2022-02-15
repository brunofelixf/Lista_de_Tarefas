import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Task from './components/Task'

import './App.css'


function App() {

  const [tasks, setTasks] = useState('Teste 1')
  const [inputData, setInputData] = useState('')

  const handleAdd = (task) => {
    const newTasks = [
      ...tasks,
      {
        title: task
      }
    ]
    setTasks(newTasks)
  }
  return (
    <>
      <div div className="container">
        <div className="addContainer">
          <Input inputData={inputData} setInputData={setInputData}/>
          <Button handleAdd={handleAdd} inputData={inputData} setImputData={setInputData}>Adicionar</Button>
        </div>
          <Task task={tasks}></Task>
      </div>
    </>
  )
}

export default App
