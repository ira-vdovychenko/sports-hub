import React from "react";
import * as Styled from "./styled.js";

export const LogInButton = ({ children, onClick, color, backgroundcolor, width}) => {
    return (
        <Styled.LogIn onClick={onClick} color={color} backgroundcolor={backgroundcolor} width={width}>
            {children}
        </Styled.LogIn>
    );
  }