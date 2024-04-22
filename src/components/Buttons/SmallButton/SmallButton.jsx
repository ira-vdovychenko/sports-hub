import React from "react";
import * as Styled from "./styled.js";

export const SmallButton = ({ size, hover, active, disabled, buttonStyle, backgroundColor, children, onClick }) => {
    return (
      <Styled.SmallButton
        onClick={onClick}
        size={size}
        hover={hover} 
        active={active} 
        disabled={disabled}
        style={buttonStyle} 
        backgroundColor={backgroundColor}
      >
        {children}
      </Styled.SmallButton>
    );
  }

