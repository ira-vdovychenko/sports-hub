import styled from "styled-components";

export const UserHeader = styled.header`
    width: 100%;
    top: 0;
    z-index: 10;
    position: fixed;  
`;

export const UserHeaderNavbar = styled.nav`
    display: flex;
    height: 83px;
    justify-content: space-between;
    background-color: #f9f3a7;
    border-bottom: 1px solid #EDEDED;
`;

export const LogoLink = styled.a`
    text-decoration: none;
    color: inherit
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 253px;
    margin-right: auto;
    background-color: #FBE7C4; 
`;

export const UserSearch = styled.div`
    width: 456px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f3a7;
    
`;

export const UserSocialMedia = styled.div`
    width: 317px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: #dee9bf;
`;

export const UserProfile = styled.div`
    width: 262px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffff;
`;

export const UserLanguages = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d7e5f1;
`;



