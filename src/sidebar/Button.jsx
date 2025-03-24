import React from 'react';

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button 
      onClick={onClickHandler} 
      value={value} 
      className={`px-2 py-1 border text-base hover:bg-blue-500 hover:text-white hover:bg-blue`}>
      {title}
    </button>
  );
};

export default Button;
