import styled from "styled-components";

export const Input = styled.input`
  width: ${props => props.width || '350px'};
  height: 36px;
  outline: none;
  border: 1px solid #D4D9E2;
  margin: 0;
  box-sizing: border-box;
  padding-left: 14px;

  &::placeholder {
    color: #C6CCD7;
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-indent: 0px;
  }

  &:hover {
    border: 1px solid #A6A9AF;
  }

  &:active,
  &:focus::placeholder {
    color: #000;  
  }

 ]
`;








