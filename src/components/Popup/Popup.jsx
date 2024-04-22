import React, { useEffect } from "react";
import * as Styled from "./styled.js";
import { SmallButton, SmallTextButton } from "../Buttons/index.js";
import { Input } from "../Input/Input.jsx";
import CloseIcon from "../../assets/popup-close-icon.svg";

export const Popup = ({ icon, title, titleStyle, label, description, descriptionStyle, height, onSubmit, onClose, onClosePopup, showForm, showInput, showButtons, showCloseIcon, inputValue, onInputChange, inputPlaceholder, submitButton, cancelButton }) => {
  const handleClose = () => {
    if (onClosePopup) {
      onClosePopup();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Styled.PopupContainer>
      <Styled.PopupContent height={height}>
        {icon && <Styled.Icon>{icon}</Styled.Icon>}
        <Styled.PopupTitle style={titleStyle}>{title}</Styled.PopupTitle>
        <Styled.PopupDescription style={descriptionStyle}>{description}</Styled.PopupDescription>
        <Styled.PopupLabel>{label}</Styled.PopupLabel>
        {showForm && (
          <Styled.PopupForm onSubmit={onSubmit}>
            {showInput && (
              <Styled.PopupInputBox>
                <Input
                  type="text"
                  value={inputValue}
                  placeholder={inputPlaceholder}
                  onChange={onInputChange}
                />
              </Styled.PopupInputBox>
            )}
          </Styled.PopupForm>
        )}
        {showButtons && (
          <>
            <Styled.CancelButtonBox>
              <SmallTextButton onClick={onClose}>{cancelButton}</SmallTextButton>
            </Styled.CancelButtonBox>
            <Styled.SubmitButtonBox>
              <SmallButton
                onClick={onSubmit}
              >
                {submitButton}
              </SmallButton>
            </Styled.SubmitButtonBox>
          </>
        )}
        {showCloseIcon && (
          <Styled.PopupCloseIcon onClick={handleClose}>
            <img src={CloseIcon} alt="Close Icon" />
          </Styled.PopupCloseIcon>
        )}
      </Styled.PopupContent>
    </Styled.PopupContainer>
  );
};
