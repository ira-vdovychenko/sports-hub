import React from "react";
import * as Styled from "./styled";

export const LargeButton = ({ size, hover, active, disabled, fontFamily, fontSize, fontWeight, backgroundColor, onClick, children }) => {
    return (
    <Styled.LargeButton 
        size={size} 
        hover={hover} 
        active={active} 
        disabled={disabled} 
        fontFamily={fontFamily} 
        fontSize={fontSize} 
        fontWeight={fontWeight} 
        backgroundColor={backgroundColor}
        onClick={onClick}
    >
        {children}
    </Styled.LargeButton>
)
    };