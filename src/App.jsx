import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Tasks from './components/Tasks'

import './App.css'


const App = () => {

  const [tasks, setTasks] = useState([
    {
      title: 'Teste 1',
      id: '1',
      check: true
    },
    {
      title:'teste 2',
      id: '2',
      check: false
    }])
  
  const [inputData, setInputData] = useState('')

  const handleDel = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    
    setTasks(newTasks)
  }

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

  const handleCheck = (taskId) => {
    const newTasks = tasks.map( (task) => {
      if (task.id === taskId){
        return {...task, check: !task.check
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <>
      <div div className="container">
        <div className="addContainer">
          <Input 
            inputData={inputData} 
            setInputData={setInputData}/>
          <Button 
            handleAdd={handleAdd} 
            inputData={inputData} 
            setImputData={setInputData}>
              Adicionar
          </Button>
        </div>
          <Tasks 
            tasks={tasks} 
            handleDel={handleDel}
            handleCheck={handleCheck}>
          </Tasks>
      </div>
    </>
  )
}

export default App
