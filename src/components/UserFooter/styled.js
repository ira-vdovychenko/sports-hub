import styled from "styled-components";

export const FooterBox = styled.footer`
    width: 100%;
    top: calc(var(--icon--position) + 1300px );
    position: absolute;
    align-items: center;
`;

export const FooterTopNavbar = styled.nav`
    height: var(--footer-row-height-top);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbf7d5;
    z-index: 9; 
`;

export const FooterBottomNavbar = styled.nav`
    height: var(--footer-row-height-bottom);
    display: flex;
    align-items: center;
    background-color: #fbf7d5;
    z-index: 10; 
`;

export const CompanyInfo = styled.div`
    width: 33%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dfe9be;
`;

export const Contributors = styled.div`
    width: 34%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ecd3e5;
`;

export const NewsLetter = styled.div`
    width: 33%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d7e4f1;
`;

export const FooterLogo = styled.div`
    height: 100%;
    margin-right: auto;
    padding: 0 100px;
    display: flex;
    align-items: center;
    text-decoration: none;   
`;