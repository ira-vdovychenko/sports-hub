import React from "react";
import * as Styled from "./styled.js";
import { Profile } from "../ProfileSection/Profile.jsx";
import { Switch } from "../AccountSwitcher/Switch.jsx";

export const UserHeader = () => {
    return (
        <Styled.UserHeader>
            <Styled.UserHeaderNavbar>
                <Styled.Logo>
                    <Styled.LogoLink href="#">Logo or identity</Styled.LogoLink>
                </Styled.Logo>
                <Styled.UserSearch>Search</Styled.UserSearch>
                <Styled.UserSocialMedia>Social Media</Styled.UserSocialMedia>
                <Switch />
                <Profile />
                <Styled.UserLanguages>Languages</Styled.UserLanguages>
            </Styled.UserHeaderNavbar>
        </Styled.UserHeader>
            
    );
}
