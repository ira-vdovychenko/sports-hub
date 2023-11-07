import styled from "styled-components";
import { NavLink } from "react-router-dom";

const personalWidth = '169px';
const changePasswordWidth = '229px';
const surveysWidth = '185px';
const teamHubWidth = '176px';

export const ProfileNavigationContainer = styled.div`
  width: 1027px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 83px;
  margin-left: 253px; 
`;

export const Options = styled.div`
  width: 759px;
  height: 39px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin-top: 79px;
  z-index: 4;
`;

export const OptionLink = styled(NavLink)`
  width: ${props => {
    switch (props.type) {
      case 'personal':
        return personalWidth;
      case 'change-password':
        return changePasswordWidth;
      case 'surveys':
        return surveysWidth;
      case 'team-hub':
        return teamHubWidth;
        default:
        return '176px';
    }
  }};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  border: 1px solid #EDEDED;
  font-size: 14px;
  font-family: Open Sans;
  text-align: center;
  line-height: 19px;
  font-weight: 601;
  z-index: 5;

  &.active {
    height: 41px;
    background: white;
    color: #D72130;
    transform: scale(1.01);
    border: none;
    box-shadow: 3px 2px 14px #0000001f;
    z-index: 6;
  }
`;