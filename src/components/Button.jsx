import React from 'react';
import './Button.css'

const Button = ({children, handleAdd, inputData, setImputData}) => {

  const handleClick = () => {
    handleAdd(inputData)
    setImputData('')
  }

  return ( 
    <div className="btnContainer">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}
 
export default Button;