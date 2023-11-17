import styled from "styled-components";

export const LeftSideBarBox = styled.div`
    width: 87px;
    height: 800px;
    position: fixed;
    top: var(--header-height);
    padding: 30px 0px;
    text-align: center;
    border-right: 2px solid #D8D8D8;
    z-index: 999;
`;

export const LeftSideBar = styled.div`
    height: 701px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center; 
    gap: 5px;
`;
export const LeftMenuIconBox = styled.div`
  width: 60px;
  height: 60px;
 
  border-radius: 100%;
  :hover {
    background-color: #c6ccd71c;
  }
`;

export const LeftMenuIcon = styled.div`
  border-radius: 50%;
  padding-top: 15px;
  line-height: 35px;
  svg {
    width: ${({ size }) => (size ? `${size}px` : "100%")};
    height: ${({ size }) => (size ? `${size}px` : "100%")};
    stroke: ${({ color }) => color || "#b2b2b2"};
  }
  :hover svg *{
    stroke: #d72130;
    background-color: transparent;
  }
`;



export const LeftMenuTooltip = styled.div`
  position: absolute;
  top: 50%; 
  left: calc(100% + 5px); 
  transform: translate(0, -50%);
  background-color: #313541;
  width: 119px;
  height: 40px;
  color: white;
  padding: 10px;
  border-radius: 3px;
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 14px;
  line-height: 35px;
  text-align: center;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

export const TooltipArrow = styled.div`
  position: absolute;
  content: " ";
  top: 50%;
  left: -7px;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent #313541 transparent transparent;
`;

export const TooltipContainer = styled.div`
  position: relative;
  
  &:hover ${LeftMenuTooltip} {
    display: block;
  }
`;





