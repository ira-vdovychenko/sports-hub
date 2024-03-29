import React/*  { useState } */ from "react";
import { Link, Route, Routes } from 'react-router-dom';
import { LogoButton } from "../../Buttons/Logo/LogoButton.jsx";
import { Profile } from "../../ProfileSection/Profile.jsx";
import { Switch } from "../../AccountSwitcher/Switch.jsx";
import { HorizontalMenu } from "./HeaderHorizontalMenu/HorizontalMenu.jsx";
/* import { ActivePageName } from "./HeaderActivePage/ActivePageName"; */
import { IAHeader } from '../../../pages/Admin/InformationArchitecture/IAHeader/IAHeader.jsx';
import * as Styled from "./styled.js";

export const AdminHeader = () => {
/*   const [activePage, setActivePage] = useState(""); */

  return (
  /*   <div> */
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
      {/*   <ActivePageName  activePage={activePage} > */}
        <Styled.HeaderActivePage>
            <Routes>
              <Route path={"information-architecture"} element={<IAHeader />} /> 
            </Routes>  
        </Styled.HeaderActivePage>
       {/* </ActivePageName> */}
        <HorizontalMenu /* setActivePage={setActivePage}  */ />
      </Styled.Header>
   /*  </div> */
  );
}
