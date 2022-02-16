import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Tasks from './components/Tasks'

import './App.css'


function App() {

  const [tasks, setTasks] = useState([{title: 'Teste 1'},{title:'teste 2'}])
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
          <Tasks tasks={tasks}></Tasks>
      </div>
    </>
  )
}

export default App
