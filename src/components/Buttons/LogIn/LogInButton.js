import React from "react";
import * as Styled from "./styled";

export default function LogInButton({ children, onClick }) {
    return (
        <Styled.LogIn onClick={onClick}>
            {children}
        </Styled.LogIn>
    );
  }