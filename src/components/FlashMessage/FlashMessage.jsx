import React from "react";
import * as Styled from './styled';
import SuccessIcon from '../../assets/successicon.svg';
import CloseIcon from '../../assets/closeicon.svg';

export const FlashMessage = ({ title, description, onClose }) => {
    const handleClose = () => {
      if (onClose) {
        onClose();
      }
    };
  
    return (
      <>
        <Styled.FlashMessageBox>
          <Styled.FlashMessageIcon>
            <img src={SuccessIcon} alt="Success Icon" />
          </Styled.FlashMessageIcon>
          <Styled.FlashMessage>
            <Styled.FlashMessageTitle>{title}</Styled.FlashMessageTitle>
            <Styled.FlashMessageDescription>{description}</Styled.FlashMessageDescription>
          </Styled.FlashMessage>
          <Styled.FlashMessageCloseIcon onClick={handleClose}>
            <img src={CloseIcon} alt="Close Icon" />
          </Styled.FlashMessageCloseIcon>
        </Styled.FlashMessageBox>
      </>
    );
  };
  
