import styled from "styled-components";
import AuthPhoto from '../../assets/AuthPhoto.png';

export const AuthPageContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 1440px;
`;

export const LeftContentBox = styled.div`
    position: relative;
    display: flex;
    width: 45%;
    height: 100%;
`;

export const LogoBox = styled.div`
   width: 253px;  
    height: 83px; 
    margin: 0;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
`;

export const AuthPagePhoto = styled.div`
    & {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(${AuthPhoto});
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
    }
    &:after {
        content: "AuthPagePhoto";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        }
`;

export const RightContentBox = styled.div`
    position: relative;
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;









