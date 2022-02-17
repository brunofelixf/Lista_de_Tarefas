import React from 'react';
import './Button.css'

const Button = ({children, handleAdd, inputData, setInputData}) => {

  const handleClick = () => {
    handleAdd(inputData);
    setInputData("");
  };

  return ( 
    <div className="btnContainer">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}
 
export default Button;