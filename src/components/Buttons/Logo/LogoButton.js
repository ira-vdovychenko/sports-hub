import React from "react";
import * as Styled from "./styled";

export const LogoButton = ({ onClick, children }) => {
    return (
        <Styled.LogoBtn onClick={onClick}>
            {children}
        </Styled.LogoBtn>
    );
  }