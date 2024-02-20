import React from "react";
import * as Styled from "./styled.js";

export const SignUpButton = ({ children, onClick, color, width, isBold, isCreateItemButton }) =>  {
  const ButtonComponent = isCreateItemButton ? Styled.createItemButton : Styled.SignUp;

  return (
    <ButtonComponent onClick={onClick} color={color} width={width} $isBold={isBold}>
      {children}
    </ButtonComponent>
  );
}