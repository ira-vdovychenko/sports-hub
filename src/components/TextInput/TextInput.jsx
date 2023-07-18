import React, { useState } from "react";
import PropTypes from "prop-types";
import success from "../../assets/success.svg";
import error from "../../assets/error.svg";
import {
  ErrorIcon,
  SuccessIcon,
  StyledInput,
  ErrorMessageWrapper,
  ErrorMessage,
  StyledInputWrapper,
} from "./styled";
import { StyleSheetManager } from "styled-components";

const TextInput = ({ state, onChange }) => {
  const [showError, setShowError] = useState(false);
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);

    if (isValidEmail) {
      setShowError(false);
    } else {
      setShowError(true);
    }

    onChange(inputValue);
  };

  return (
    <StyledInputWrapper>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "state"}>
        <StyledInput
          type="email"
          state={state}
          value={value}
          onChange={handleInputChange}
        />
        {state === "success" && (
          <SuccessIcon src={success} alt="Success Icon" />
        )}
        {state === "error" && <ErrorIcon src={error} alt="Error Icon" />}
      </StyleSheetManager>
      {showError && (
        <ErrorMessageWrapper>
          <ErrorMessage>
            Please enter your email address in format: yourname@email.com
          </ErrorMessage>
        </ErrorMessageWrapper>
      )}
    </StyledInputWrapper>
  );
};


TextInput.propTypes = {
  state: PropTypes.oneOf(["normal", "active", "hover", "success", "error"]),
  onChange: PropTypes.func.isRequired,
};

export default TextInput;



