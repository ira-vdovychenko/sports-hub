import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoButton } from "../../../Buttons/index.js";
import { Profile } from "../../../Profile/Profile.jsx";
import { AccountSwitcher } from "../../../AccountSwitcher/AccountSwitcher.jsx";
import { ActivePageName, HorizontalMenu } from './index.js';
import { IAHeader } from "../../../../pages/Admin/InformationArchitecture/index.js";
import { TeamsHeader } from "../../../../pages/Admin/Teams/index.js";
import * as Styled from "./styled.js";

export const AdminHeader = () => {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();

  return (
    <Styled.Header>
      <Styled.HeaderNavbar>
        <Styled.HeaderLogo>
          <LogoButton>
            <Link to="/admin">Sports Hub</Link>
          </LogoButton>
        </Styled.HeaderLogo>
        <Styled.UserMenu>
          <Styled.HeaderSwitch>
            <AccountSwitcher /> 
          </Styled.HeaderSwitch>
          <Styled.HeaderProfile>
            <Profile /> 
          </Styled.HeaderProfile>
        </Styled.UserMenu>
      </Styled.HeaderNavbar>
       <Styled.HeaderActivePage>
        {location.pathname === "/admin/information-architecture" ? (
          <IAHeader />
        ) : location.pathname === "/admin/teams" ? (
          <TeamsHeader />
        ) : (
          <ActivePageName activePage={activePage} />
        )}
      </Styled.HeaderActivePage>
      <HorizontalMenu setActivePage={setActivePage} />  
    </Styled.Header>
  );
};
