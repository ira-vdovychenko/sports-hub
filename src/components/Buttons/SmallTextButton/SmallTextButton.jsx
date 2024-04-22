import React from "react";
import * as Styled from "./styled.js";

export const SmallTextButton = ({ color, size, hover, active, disabled, buttonStyle, onClick, children, $isCreateItemButton }) =>  {
  const ButtonComponent = $isCreateItemButton ? Styled.createItemButton : Styled.SmallTextButton;

  return (
    <ButtonComponent 
      color={color} 
      size={size} 
      hover={hover}  
      active={active} 
      disabled={disabled}
      style={buttonStyle}
      $isCreateItemButton={$isCreateItemButton}
      onClick={onClick}
      >
      {children}
    </ButtonComponent>
  );
}