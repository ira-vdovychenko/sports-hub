import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from "./styled";

export default function Switch() {
  const navigate = useNavigate();
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const isUserView = window.location.pathname.startsWith('/admin');
  const tooltipText = isUserView ? 'Switch to user view' : 'Switch to admin view';

  const navigateToPage = () => {
    navigate(isUserView ? '/' : '/admin');
  };

  return (
    <Styled.SwitchButton
      onClick={navigateToPage}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <Styled.SwitchLayoutIcon />
      <Styled.Tooltip className="tooltip" showTooltip={isTooltipVisible ? 'block' : 'none'}>
        {tooltipText}
      </Styled.Tooltip>
    </Styled.SwitchButton>
  );
}