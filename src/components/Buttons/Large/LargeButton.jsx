import React from "react";
import * as Styled from "./styled";

export const LargeButton = ({width, onClick, children}) => (
    <Styled.LargeButton width={width} onClick={onClick}>
        {children}
    </Styled.LargeButton>
)