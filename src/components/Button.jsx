import React from 'react';
import './Button.css'; // Import the CSS file for styling
import {getTheme}  from '../theme/index'

const Button = ({ label, onClick, style }) => {
  const theme = getTheme();
  return (
    <button className="button" style={{ ...style, backgroundColor: theme.primaryBackground }} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
