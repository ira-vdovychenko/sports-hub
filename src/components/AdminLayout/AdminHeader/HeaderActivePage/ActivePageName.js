import React from "react";
import * as Styled from "./styled";

export default function ActivePageName({ activePage }) {
    return (
        <Styled.HeaderPageNameBox>
            <Styled.HeaderPageName>{activePage}</Styled.HeaderPageName>
        </Styled.HeaderPageNameBox>
    )
}