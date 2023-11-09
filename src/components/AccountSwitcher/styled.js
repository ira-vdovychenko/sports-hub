import styled from 'styled-components';
import { ReactComponent as SwitchIcon } from '../../assets/switch.svg';

export const SwitchButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  background: transparent;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  width: 173px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transform: translateX(-50%);
  background-color: #313541;
  color: white;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
`;

export const SwitchLayoutIcon = styled(SwitchIcon)`
  width: 100%;
`;


