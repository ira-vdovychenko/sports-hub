import styled from "styled-components";

export const ForgotPasswordForm = styled.form`
  position: absolute;
  width: 50%;
  left: 30%; 
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center; 
`;

export const AuthPageHeader = styled.div`
    display: flex;
    width: 50%;
    height: 35px;
    align-self: center;
    justify-content: flex-end;
    flex-direction: row;
    position: fixed;
    top: 24px;
    left: 48%;
`;

export const AuthLabel = styled.label`
    align-self: center;
    color: #596377;
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
`;

export const AuthButtonBox = styled.div`
    margin-left: 30px;
    width: 130px;
    height: 32px;
    display: flex;
`;


export const FormTitle = styled.div`
  display: flex;
  align-self: flex-start;
  padding-right: 61px;
  align-items: center;
  color: #000;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FormDescription = styled.div`
  display: flex;
  align-self: flex-start;
  color: #596377;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.07px;
  margin-top: 7px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  padding-left: 0;
  margin-top: 20px;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  height: 11px;
  color: #434C5D;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 11px; 
  letter-spacing: 0.9px;
  align-self: flex-start;
  text-transform: uppercase;
  margin-bottom: 3px;
`;
export const WarningMessage = styled.div`
  display: flex;
  align-self: flex-start;
  color: #D72130;
  font-family: Open Sans;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal
`;

export const SubmitButtonsBox = styled.div`
  width: 100%;
  margin-top: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  
`;
