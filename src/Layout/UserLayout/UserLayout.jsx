import React from "react";
import {Header} from '../Header';
import {LeftMenuVertical} from '../LeftVerticalMenu'; 
import {UserPageContainer, UserMainContainer, UserMainContent } from "./styled";

export const UserLayout = ({ children }) => {
    return (
      <UserPageContainer>
        <Header />
        <UserMainContainer>
          <LeftMenuVertical />
          <UserMainContent>
            {children}
          </UserMainContent>
        </UserMainContainer>   
      </UserPageContainer>
    );
  };