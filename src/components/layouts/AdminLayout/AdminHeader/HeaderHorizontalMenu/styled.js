import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderHorisontalMenuBox = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #ededed;
  z-index: 1000;
  box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.09);
`;

export const HorisontalMenu = styled.nav`
  width: 100%;
  height: 25px;
  position: relative;
  left: 101px;
  margin-right: 200px;
  overflow-x: auto;
  white-space: nowrap;
  max-width: 100%; 
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const MenuLink = styled(NavLink)`
  color: #b2b2b2;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  margin-left: 66px;
  text-transform: uppercase;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &.active {
    color: #d72130;
  }
`;

export const HiddenText = styled.span`
  position: absolute;
  top: -5px;
  left: 26px;
  width: 35px;
  height: 14px;
  background: rgba(196, 196, 196, 0.3);
  border-radius: 50px;
  text-align: center;
  font-size: 8px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.4);
`;

export const ScrollButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &.left {
    left: 20px;
  }
  &.right {
    right: 20px;
  }
  &:disabled {
        display: none; 
    } 
`;



