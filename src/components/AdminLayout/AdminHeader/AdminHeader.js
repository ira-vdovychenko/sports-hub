import React from "react";
import Profile from "../../ProfileSection/Profile";
import * as Styled from "./styled";

export default function AdminHeader() {
    return (
        <div>
            <Styled.Header>
                <Styled.HeaderNavbar>
                    <Styled.Logo>
                        <Styled.LogoLink href="#">Logo or identity</Styled.LogoLink>
                    </Styled.Logo>
                    <Styled.Switch>Switch</Styled.Switch>
                    <Profile/>
                </Styled.HeaderNavbar>
                <Styled.HeaderPageName>Active configuration page name, CTA</Styled.HeaderPageName>
                <Styled.HeaderHorisontalMenu>Horisontal menu with static items</Styled.HeaderHorisontalMenu>
            </Styled.Header>
        </div>
    );
}