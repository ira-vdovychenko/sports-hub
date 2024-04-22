import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAdmin } from "../../redux/actions/authActions.js";
import { ReactComponent as SwitchIcon } from '../../assets/switch.svg';
import * as Styled from "./styled.js";

export const AccountSwitcher = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector(state => state.auth.isAdmin);
  const navigate = useNavigate();
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const toggleMode = () => {
    if (isAdmin) {
      dispatch(setAdmin(false));
      localStorage.setItem('isAdmin', false); 
      navigate('/');
    } else if (!isAdmin){
      dispatch(setAdmin(true));
      localStorage.setItem('isAdmin', true); 
      navigate('/admin'); 
    }
  };

  const tooltipText = isAdmin ? 'Switch to user view' : 'Switch to admin view';
  
  return (
    <Styled.SwitchBox>
      <Styled.SwitchButton
        onClick={toggleMode}
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
