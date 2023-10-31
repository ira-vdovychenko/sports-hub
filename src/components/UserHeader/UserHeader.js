import React from "react";
import * as Styled from "./styled";

export default function UserHeader() {
    return (
        <Styled.UserHeader>
            <Styled.UserHeaderNavbar>
                <Styled.Logo>
                    <Styled.LogoLink href="#">Logo or identity</Styled.LogoLink>
                </Styled.Logo>
                <Styled.UserSearch>Search</Styled.UserSearch>
                <Styled.UserSocialMedia>Social Media</Styled.UserSocialMedia>
                <Styled.UserProfile>Profile</Styled.UserProfile>
                <Styled.UserLanguages>Languages</Styled.UserLanguages>
            </Styled.UserHeaderNavbar>
        </Styled.UserHeader>
            
    );
}
