import React from "react";
import * as Styled from './styled.js';

export const Input = React.forwardRef(({ type, value, name, placeholder, inputStyle, width, height, $error, $success, hover, active, onChange, onBlur }, ref) => (
    <Styled.Input
      ref={ref}
      type={type}
      name={name}
      value={value}
      width={width}
      height={height}
      placeholder={placeholder}
      style={inputStyle}
      onBlur={onBlur}
      $success={$success}
      $error={$error}
      hover={hover}
      active={active} 
      onChange={onChange}
    />
));

