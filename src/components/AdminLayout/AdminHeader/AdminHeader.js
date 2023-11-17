import React, { useState } from "react";
import { Link } from 'react-router-dom';
import LogoButton from "../../Buttons/Logo/LogoButton";
import Profile from "../../ProfileSection/Profile";
import Switch from "../../AccountSwitcher/Switch";
import HorizontalMenu from "./HeaderHorizontalMenu/HorizontalMenu";
import ActivePageName from "./HeaderActivePage/ActivePageName";
import * as Styled from "./styled";

export default function AdminHeader() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div>
      <Styled.Header>
        <Styled.HeaderNavbar>
          <Styled.HeaderLogo>
            <LogoButton>
              <Link to="/admin">Sports Hub</Link>
            </LogoButton>
          </Styled.HeaderLogo>
          <Styled.UserMenu>
            <Styled.HeaderSwitch>
              <Switch />
            </Styled.HeaderSwitch>
            <Styled.HeaderProfile>
              <Profile />
            </Styled.HeaderProfile>
          </Styled.UserMenu>
        </Styled.HeaderNavbar>
        <ActivePageName activePage={activePage} />
        <HorizontalMenu setActivePage={setActivePage} />
      </Styled.Header>
    </div>
  );
}
