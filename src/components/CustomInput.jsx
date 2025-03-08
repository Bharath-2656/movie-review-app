import React from 'react';
import './CustomInput.css';
import {getTheme} from '../theme/index';

const CustomInput = ({ label, type, value, onChange, required, style }) => {
    const theme = getTheme();
  
  return (
    <div className="custom-input" style={style}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
        style={{
          borderColor: theme.primary,
          color: theme.primary,
          backgroundColor: theme.secondaryBackground,
        }}
      />
    </div>
  );
};

export default CustomInput;
