import React from "react";
import * as Styled from './styled';

export const Input = React.forwardRef(({ type, value, name, placeholder, width, onChange, onBlur }, ref) => (
    <Styled.Input
      ref={ref}
      type={type}
      name={name}
      value={value}
      width={width}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
));

