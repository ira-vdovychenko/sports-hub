import styled from "styled-components";
import success from "../../assets/success.svg";
import error from "../../assets/error.svg";

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 350px;
  height: 42px;
  flex-shrink: 0;
  border-width: 1px;
  border-style: solid;
  padding-right: 20px;
  background-image: ${(props) => {
    if (props.state === "success") {
      return `url(${success})`;
    } else if (props.state === "error") {
      return `url(${error})`;
    } else {
      return "none";
    }
  }};
  background-repeat: no-repeat;
  background-position: right 10px center;
  border-color: ${(props) => {
    if (props.state === "normal") {
      return "#D4D9E2";
    } else if (props.state === "hover" || props.state === "active") {
      return "#A6A9AF";
    } else if (props.state === "success") {
      return "#56BD5B";
    } else if (props.state === "error") {
      return "#E1464E";
    }
  }};
  font-style: normal;
  font-family: ${(props) => {
    if (
      props.state === "normal" ||
      props.state === "hover" ||
      props.state === "active"
    ) {
      return "Open Sans";
    } else if (props.state === "success" || props.state === "error") {
      return "Lato";
    }
  }};
  font-size: ${(props) => {
    if (
      props.state === "normal" ||
      props.state === "hover" ||
      props.state === "active"
    ) {
      return "12px";
    } else if (props.state === "success" || props.state === "error") {
      return "14px";
    }
  }};
  font-weight: ${(props) => {
    if (
      props.state === "normal" ||
      props.state === "hover" ||
      props.state === "active"
    ) {
      return "600";
    } else if (props.state === "success" || props.state === "error") {
      return "400";
    }
  }};
  line-height: ${(props) => {
    if (props.state === "success" || props.state === "error") {
      return "17px";
    } else {
      return "normal";
    }
  }};
  color: ${(props) => {
    if (props.state === "normal" || props.state === "hover") {
      return "#C6CCD7";
    } else if (props.state === "active") {
      return "#000";
    } else if (props.state === "success" || props.state === "error") {
      return "#31354";
    }
  }};
`;

export const SuccessIcon = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  fill: #e1464e;
`;

export const ErrorIcon = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  fill: #e1464e;
`;

export const ErrorMessageWrapper = styled.div`
  position: absolute;
  bottom: -28px;
`;

export const ErrorMessage = styled.p`
  right: 0;
  color: #D72130;
  text-align: right;
  font-family: Lato;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
`;
