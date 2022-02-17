import React from 'react'
import './Input.css'


const Input = ({inputData, setInputData}) => {

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