import React, { useState } from 'react';
import * as Styled from "./styled";

export default function Switch()  {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [isUserView, setUserView] = useState(true);
  
    const handleSwitch = () => {
      setUserView((prevIsUserView) => !prevIsUserView);
    };
  
    const tooltipText = isUserView ? 'Switch to admin view' : 'Switch to user view';
  
    return (
      <Styled.SwitchButton onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
        {tooltipVisible && <Styled.Tooltip>{tooltipText}</Styled.Tooltip>}
        <div aria-label="switcher-div" className="switch-button" onClick={handleSwitch}>
          {isUserView ? <span>User View</span> : <span>Admin View</span>}
        </div>
      </Styled.SwitchButton>
    );
  };