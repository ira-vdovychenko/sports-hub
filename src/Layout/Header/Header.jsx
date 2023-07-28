import React from "react";
import Search from './Search';
import SelectLanguage from './SelectLanguage';
import SocialShare from './SocialShare';
import UserMenu from './UserMenu'; 
import {HeaderContainer, Logo, UserMenuContainer} from './styled';

export const Header = () => {
    return (
      <HeaderContainer>
        <Logo>
          <span>Sports Hub</span>
        </Logo>
        <Search />
        <SocialShare />
        <UserMenuContainer>
          <UserMenu />
          <SelectLanguage />
        </UserMenuContainer>
      </HeaderContainer>
    );
  };

