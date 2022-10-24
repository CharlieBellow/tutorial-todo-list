import React from 'react'
import './Button.css'

const Button = ({children, onClick }) => {
  return ( 
    <button onClick={ onClick} className="add-button">
      { children}
    </button>
   );
}
 
export default Button;

// exemplo de children:
/*<button className="button">
  { children} // <h1>Texto dentro dobotão é a children do botão</h1>
    </button>*/
