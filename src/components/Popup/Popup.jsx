import React from "react";
import * as Styled from './styled.js';
import { LogInButton } from "../Buttons/LogIn/LogInButton.jsx";
import { SignUpButton } from "../Buttons/SignUp/SignUpButton.jsx";
import { Input } from "../Input/Input.jsx"; 

export const Popup = ({ icon, title, titleStyle, label, description, onSubmit, onClose, showForm, showInput, inputValue, onInputChange, inputPlaceholder, submitButton, cancelButton }) => {
  return (
    <Styled.PopupContainer>
      <Styled.PopupContent>
      {icon && <Styled.Icon>{icon}</Styled.Icon>}
        <Styled.PopupTitle style={titleStyle}>{title}</Styled.PopupTitle>
        <Styled.PopupDescription>{description}</Styled.PopupDescription>
        <Styled.PopupLabel>{label}</Styled.PopupLabel>
        {showForm && (
          <Styled.PopupForm onSubmit={onSubmit}>
            {showInput && (
              <Styled.PopupInputBox>
                <Input type="text" value={inputValue} placeholder={inputPlaceholder} onChange={onInputChange} /> 
                </Styled.PopupInputBox>
            )}
            </Styled.PopupForm>
            )}
            <Styled.CancelButtonBox>
        <SignUpButton  onClick={onClose}>{cancelButton}</SignUpButton>
        </Styled.CancelButtonBox>
        <Styled.SubmitButtonBox>
            <LogInButton color="#FFF" backgroundcolor="#D72130" onClick={onSubmit} >{submitButton}</LogInButton>
            </Styled.SubmitButtonBox>
      </Styled.PopupContent>
    </Styled.PopupContainer>
  );
};


