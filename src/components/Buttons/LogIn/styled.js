import styled from "styled-components";

export const LogIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || '107px'};
  height: 32px;
  color: ${props => props.color || "#D72130"};
  background-color: ${props => props.backgroundcolor || 'transparent'};
  font-size: 12px;
  border: 1px solid #C63638;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  line-height: 17px;

  &:hover {
    color: ${props => props.hovercolor || "#FFF"};
    background-color: ${props => props.hoverbackground || "#D72130"};
    border: none;
  }
  &:active {
    color: ${props => props.hovercolor || "#FFF"};
    background-color: ${props => props.hoverbackground || "#D72130"};
    border: none;
  }
`;