import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    position: fixed;
    z-index: 10;
`;

export const HeaderNavbar = styled.nav`
    height: var(--header-row-height);
    display: flex;
    background-color: #F8F3A7;
`;

export const HeaderPageName = styled.div`
    height: var(--header-row-height);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D7E4F1;
`;

export const HeaderHorisontalMenu = styled.div`
    height: var(--header-row-height);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DFE9BE;
`;

export const Logo = styled.div`
    width: 253px;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: #FBE7C4;
`;

export const Switch = styled.div`
    padding: 0 30px;
    display: flex;
    align-items: center;
    background-color: #ECD3E5;
`;

export const Profile = styled.div`
    padding: 0 100px;
    display: flex;
    align-items: center;
    background-color: #FBF7D5;
`;

export const LogoLink = styled.a`
    text-decoration: none;
    color: inherit
`;