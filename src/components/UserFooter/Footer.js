import React from "react";
import * as Styled from "./styled";

export const Footer = () => {
    return (
        <Styled.FooterBox>
            <Styled.FooterTopNavbar>
                <Styled.CompanyInfo>Company Info</Styled.CompanyInfo>
                <Styled.Contributors>Contributors</Styled.Contributors>
                <Styled.NewsLetter>News Letter</Styled.NewsLetter>
            </Styled.FooterTopNavbar>
            <Styled.FooterBottomNavbar>
                <Styled.FooterLogo>Logo</Styled.FooterLogo>
            </Styled.FooterBottomNavbar>
        </Styled.FooterBox>
    )
}