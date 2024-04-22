import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => props.width || "350px"};
  height: ${(props) => props.height || "36px"};
  outline: none;
  border: 1px solid
    ${(props) => {
      if (props.hover) return "#a6a9af";
      if (props.active) return "#a6a9af";
      if (props.$error) return "#E1464E";
      if (props.$success) return "#56BD5B";
      return "#d4d9e2";
    }};
  margin: 0;
  box-sizing: border-box;
  padding-left: 14px;
  &:hover {
    border: 1px solid "#a6a9af";
  }
  &:active {
    color: 1px solid "#a6a9af";
  }

  &::placeholder {
    color: #c6ccd7;
    font-style: normal;
    font-family: Open Sans, sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 16.34px;
    text-indent: 0px;
  }
  &:focus::placeholder {
    color: #000;
  }
`;
