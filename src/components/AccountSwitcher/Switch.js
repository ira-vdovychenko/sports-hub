import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SwitchIcon } from '../../assets/switch.svg';
import * as Styled from "./styled";

export const Switch = () => {
  const navigate = useNavigate();
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const isUserView = window.location.pathname.startsWith('/admin');
  const tooltipText = isUserView ? 'Switch to user view' : 'Switch to admin view';

  const navigateToPage = () => {
    navigate(isUserView ? '/' : '/admin');
  };

  return (
    <Styled.SwitchBox>
      <Styled.SwitchButton
        onClick={navigateToPage}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <SwitchIcon />
        <Styled.Tooltip className="tooltip" $showTooltip={isTooltipVisible ? 'block' : 'none'}>
          {tooltipText}
          <Styled.TooltipArrow />
        </Styled.Tooltip>
      </Styled.SwitchButton>
    </Styled.SwitchBox>
  );
}
