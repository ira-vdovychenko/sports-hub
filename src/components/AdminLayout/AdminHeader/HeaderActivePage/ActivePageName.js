import React from "react";
import * as Styled from "./styled";

export const ActivePageName = ({ activePage }) => {
    return (
        <Styled.HeaderPageNameBox>
            <Styled.HeaderPageName>{activePage}</Styled.HeaderPageName>
        </Styled.HeaderPageNameBox>
    )
}