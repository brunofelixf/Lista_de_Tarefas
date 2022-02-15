import React from 'react'
import './Input.css'


const Input = ({inputData, setInputData}) => {

  //const [inputData, setInputData] = useState('')

  const handleInput = (e)=>{
    setInputData(e.target.value)
    console.log(inputData)
  }
  return ( 
    <input onChange={handleInput} type="text"></input>
   );
}
 
export default Input;