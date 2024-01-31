import React from "react";
import * as Styled from "./styled";
import { Profile } from "../ProfileSection/Profile";
import { Switch } from "../AccountSwitcher/Switch";

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
