import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styled";

export default function UserHeader() {
    return (
        <Styled.UserHeader>
            <Styled.UserHeaderNavbar>
                <Styled.Logo>
                    <Styled.LogoButton as={Link} to="/home">
                        Sports Hub
                    </Styled.LogoButton>
                </Styled.Logo>
                <Styled.UserSearch>Search</Styled.UserSearch>
                <Styled.UserSocialMedia>Social Media</Styled.UserSocialMedia>
                <Styled.UserProfile>Profile</Styled.UserProfile>
                <Styled.UserLanguages>Languages</Styled.UserLanguages>
            </Styled.UserHeaderNavbar>
        </Styled.UserHeader>
            
    );
}
