import React from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Tasks from './components/Tasks';

import './App.css';

import TaskProvider from './context/TaskContext';
import InputProvider from './context/InputContext';

const App = () => {

  return (
    <>
      <div div className="container">
        <TaskProvider>
          <InputProvider> 
           <div className="addContainer">
              <Input />
              <Button>
                Adicionar
              </Button>
           </div>
          </InputProvider>
          <Tasks/>
        </TaskProvider>
      </div>
    </>
  );
}

export default App;
