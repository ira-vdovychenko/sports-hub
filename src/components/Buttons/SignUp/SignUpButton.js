import React from "react";
import * as Styled from "./styled";

export const SignUpButton = ({ children, onClick, isCreateItemButton }) =>  {
  const ButtonComponent = isCreateItemButton ? Styled.createItemButton : Styled.SignUp;

  return (
    <ButtonComponent onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}