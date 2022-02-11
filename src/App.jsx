import React from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Task from './components/Task'

import './App.css'
;


function App() {
  return (
    <>
      <div className="container">
        <div className="addContainer">
          <Input></Input>
          <div className="btnContainer">
            <Button>Adicionar</Button>
          </div>
        </div>
        <div className="tskContainer">
        <Task></Task>
        </div>
      </div>
    </>
  )
}

export default App
