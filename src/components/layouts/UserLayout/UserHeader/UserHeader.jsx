import React from "react";
import { Link } from "react-router-dom";
import { Profile } from "../../../Profile/Profile.jsx";
import { AccountSwitcher } from "../../../AccountSwitcher/AccountSwitcher.jsx";
import { LogoButton } from "../../../Buttons/index.js";
import * as Styled from "./styled.js";

export const UserHeader = () => {
  const storedRole = localStorage.getItem("role");

  return (
    <Styled.UserHeader>
      <Styled.UserHeaderNavbar>
        <Styled.Logo>
          <LogoButton>
            <Link to="/">Sports Hub</Link>
          </LogoButton>
        </Styled.Logo>
        <Styled.UserSearch>Search</Styled.UserSearch>
        <Styled.UserSocialMedia>Social Media</Styled.UserSocialMedia>
        {storedRole === "1" && <AccountSwitcher />}
        <Profile />
        <Styled.UserLanguages>Languages</Styled.UserLanguages>
      </Styled.UserHeaderNavbar>
    </Styled.UserHeader>
  );
};
