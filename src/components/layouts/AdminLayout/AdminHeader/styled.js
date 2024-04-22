import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;   
`;  

export const HeaderNavbar = styled.nav`
    height: 82px;
    display: flex;
    background-color: #FFF;
    border-bottom: 1px solid #EDEDED;
`;

export const HeaderLogo = styled.div`
    width: 253px;
    margin-right: auto;
    display: flex;
    align-items: center;
`;

export const UserMenu = styled.div`
    display: flex;
    align-items: center;
    padding: 0 45px;
    column-gap: 30px;
    white-space: nowrap;
    border-left: 1px solid #EDEDED;
`;

export const HeaderSwitch = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderProfile = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderActivePage = styled.div` 
    display: flex;
    height: 78px;
    justify-content: center;
    background-color:  #FFFFFF;
`;