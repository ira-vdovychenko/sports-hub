import React from "react";
import {Header} from '../Header';
import {LeftMenuVertical} from '../LeftVerticalMenu';
import {Footer} from '../Footer';  
import {PageContainer, MainContainer, MainContent } from "./styled";

export const Layout = ({ children }) => {
    return (
      <PageContainer>
        <Header />
        <MainContainer>
          <LeftMenuVertical />
          <MainContent>
            {children}
          </MainContent>
        </MainContainer>
        <Footer />   
      </PageContainer>
    );
  };