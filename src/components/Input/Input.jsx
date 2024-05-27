import React from "react";
import * as Styled from './styled.js';

export const Input = React.forwardRef(({ type, value, name, placeholder, inputStyle, size, $error, $success, hover, active, onChange, onBlur }, ref) => (
    <Styled.Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      style={inputStyle}
      size={size}
      $success={$success}
      $error={$error}
      hover={hover}
      active={active}
      ref={ref}
      onBlur={onBlur} 
      onChange={onChange}
    />
));

