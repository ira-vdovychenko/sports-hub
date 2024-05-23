import React from "react";
import * as Styled from './styled.js';

export const Input = React.forwardRef(({ type, value, name, placeholder, inputStyle, width, height, $error, $success, hover, active, onChange, onBlur }, ref) => (
    <Styled.Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      style={inputStyle}
      width={width}
      height={height}
      $success={$success}
      $error={$error}
      hover={hover}
      active={active}
      ref={ref}
      onBlur={onBlur} 
      onChange={onChange}
    />
));

