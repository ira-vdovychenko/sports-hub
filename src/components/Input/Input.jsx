import React from "react";
import * as Styled from "./styled.js";

export const Input = React.forwardRef(
  (
    { type = "text", value, name, placeholder, style, size, onChange, ...props},
    ref
  ) => (
    <Styled.Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      style={style}
      size={size}
      ref={ref}
      onChange={onChange}
      {...props}
    />
  )
);
