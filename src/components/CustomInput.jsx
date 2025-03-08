import React from 'react';
import './CustomInput.css'; // Import the CSS file for styling
import theme from '../theme/index';

const CustomInput = ({ label, type, value, onChange, required }) => {
  return (
    <div className="custom-input">
      <label style={{ color: theme.text.primary }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          borderColor: theme.border.primary,
          color: theme.text.primary,
          backgroundColor: theme.background.secondary,
        }}
      />
    </div>
  );
};

export default CustomInput;
