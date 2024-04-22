import React from "react";
import * as Styled from "./styled";

export const LongButton = ({ size, hover, active, disabled, buttonStyle, backgroundColor, onClick, children }) => {
    return (
    <Styled.LongButton 
        size={size} 
        hover={hover} 
        active={active} 
        disabled={disabled} 
        style={buttonStyle} 
        backgroundColor={backgroundColor}
        onClick={onClick}
    >
        {children}
    </Styled.LongButton>
    )
};