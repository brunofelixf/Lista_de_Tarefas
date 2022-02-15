import React from 'react';
import './Button.css'

const Button = ({children}) => {
  return ( 
    <div className="btnContainer">
      <button>{children}</button>
    </div>
  );
}
 
export default Button;