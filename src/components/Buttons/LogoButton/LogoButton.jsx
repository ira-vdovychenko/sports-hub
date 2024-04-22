import React from "react";
import * as Styled from "./styled.js";

export const LogoButton = ({ onClick, buttonStyle, backgroundColor, children }) => {
    return (
        <Styled.LogoButton 
            onClick={onClick}
            style={buttonStyle} 
            backgroundColor={backgroundColor}
        >
            {children}
        </Styled.LogoButton>
    );
  }