import React from 'react'

import './Input.css'

import { useInput } from '../context/InputContext'

const Input = () => {

  const { inputData, setInputData } = useInput();
  //const [inputData, setInputData] = useState('')

  const handleInput = (e)=>{
    setInputData(e.target.value)
    console.log(inputData)
  }
  return ( 
    <input onChange={handleInput} type="text" value={inputData}></input>
   );
}
 
export default Input;