import React from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Task from './components/Task'

import './App.css'
;


function App() {
  return (
    <>
      <div div className="container">
        <div className="addContainer">
          <Input />
          <Button>Adicionar</Button>
        </div>
          <Task />
      </div>
    </>
  )
}

export default App
