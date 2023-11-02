import React from "react";
import * as Styled from "./styled";

export default function SignUpButton({ children, onClick, disabled }) {
    return (
      <Styled.SignUp onClick={onClick} disabled={disabled}>
        {children}
      </Styled.SignUp>
    );
  }