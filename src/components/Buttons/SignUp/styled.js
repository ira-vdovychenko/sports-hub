import styled from "styled-components";

export const SignUp = styled.button`
  display: flex;
  width: 57px;
  height: 19px;
  color: #D72130;
  background-color: transparent;
  padding: 0px 14px 2px 0px;
  align-items: center;
  flex-shrink: 0;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  border: none;
  
  &:hover {
    color: #E02232;
  }

  &:active {
    color: #C80515;
  }

  &:disabled {
    display: none; 
  }

`;
export const createItemButton = styled(SignUp)`
    width: 160px;
      height: 32px;
      border: 0.5px dashed #B2B2B2;
      color: #B2B2B2;
      padding: 0;
      justify-content: center;

      &:hover {
        color: #B2B2B2;
      }

      &:active {
        color: #B2B2B2;
      }
`;
