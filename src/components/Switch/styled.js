import styled from 'styled-components';

export const SwitchButton = styled.div`
  cursor: pointer;
  position: relative;
`;

export const Tooltip = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 14px;
  padding: 15px 25px;
  line-height: 45px;
  background-color: #313541;
  color: white;
  border-radius: 3px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 7px;
  border-style: solid;
  border-color: transparent transparent #313541 transparent;
  display: none;
  ${SwitchButton}:hover & {
    display: block;
  }
`;