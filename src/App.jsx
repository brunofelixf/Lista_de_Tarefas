import React from 'react'
import Button from './components/Button'
import Input from './components/Input';

import './App.css'
;


function App() {
  return (
    <>
      <div className="container">
        <div className="addContainer">
          <Input></Input>
          <Button>Adicionar</Button>
        </div>
        <tarefas></tarefas>
      </div>
    </>
  )
}

export default App
