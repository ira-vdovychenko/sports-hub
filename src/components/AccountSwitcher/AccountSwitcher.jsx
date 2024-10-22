import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext.jsx";
import { ReactComponent as SwitchIcon } from "../../assets/switch.svg";
import * as Styled from "./styled.js";

export const AccountSwitcher = () => {
  const { toggleMode } = useAuth();
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleToggleMode = () => {
    toggleMode(isAdmin);
  };

  const tooltipText = isAdmin ? "Switch to user view" : "Switch to admin view";

  return (
    <Styled.SwitchBox>
      <Styled.SwitchButton
        onClick={handleToggleMode}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <SwitchIcon />
        <Styled.Tooltip
          className="tooltip"
          $showTooltip={isTooltipVisible ? "block" : "none"}
        >
          {tooltipText}
          <Styled.TooltipArrow />
        </Styled.Tooltip>
      </Styled.SwitchButton>
    </Styled.SwitchBox>
  );
};
