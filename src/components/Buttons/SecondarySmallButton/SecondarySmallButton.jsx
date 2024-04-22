import React from "react";
import * as Styled from "./styled.js";

export const SecondarySmallButton = ({ size, hover, active, disabled, buttonStyle, color, backgroundColor, children, onClick  }) => {
  return (
        <Styled.SecondarySmallButton
          onClick={onClick}
          size={size}
          hover={hover}  
          active={active} 
          disabled={disabled}
          style={buttonStyle} 
          color={color}
          backgroundColor={backgroundColor}
        >
          {children}
        </Styled.SecondarySmallButton>
  )
}