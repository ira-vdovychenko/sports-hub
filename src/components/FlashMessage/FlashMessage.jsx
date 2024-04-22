import React, { useEffect } from "react";
import * as Styled from "./styled.js";
import SuccessIcon from "../../assets/successicon.svg";
import ErrorIcon  from "../../assets/flash-error-icon.svg";
import CloseIcon from "../../assets/closeicon.svg";

export const FlashMessage = ({ title, description, titleStyle, descriptionStyle, type, width, $top, $right, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
/* 
   useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []); */
 
  const icon = type === "success" ? <img src={SuccessIcon} alt="Success Icon" /> : <img src={ErrorIcon} alt="Error Icon" />;
  return (
    <>
      <Styled.FlashMessageBox width={width} $top={$top} $right={$right}>
        <Styled.FlashMessageIcon>
          {icon}
        </Styled.FlashMessageIcon>
        <Styled.FlashMessage>
          <Styled.FlashMessageTitle
            style={titleStyle}
          >
            {title}
          </Styled.FlashMessageTitle>
          <Styled.FlashMessageDescription
             style={descriptionStyle} 
          >
            {description}
          </Styled.FlashMessageDescription>
        </Styled.FlashMessage>
        <Styled.FlashMessageCloseIcon onClick={handleClose}>
          <img src={CloseIcon} alt="Close Icon" />
        </Styled.FlashMessageCloseIcon>
      </Styled.FlashMessageBox>
    </>
  );
};
