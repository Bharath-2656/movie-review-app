import React from 'react';
import './Button.css'; // Import the CSS file for styling
import theme  from '../theme/index'

const Button = ({ label, onClick, style }) => {
  return (
    <button className="button" style={{ ...style, backgroundColor: theme.green[200] }} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
