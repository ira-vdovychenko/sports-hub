import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderHorisontalMenuBox = styled.div`
    width: 1440px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #EDEDED;
    z-index: 1000;
    box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.09);     
`;

export const HorisontalMenu = styled.nav`
    width: 100%;
    height: 20px;
    position: relative;
    left: 101px;
`;

export const MenuLink = styled(NavLink)`
    color: #B2B2B2;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    margin-left: 66px;
    
    &:first-child {
        margin-left: 0;
    }
    
    &.active {
        color: #D72130;
    }
`;