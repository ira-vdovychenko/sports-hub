import styled from "styled-components";

export const RegistrationForm = styled.form`
  position: absolute;
  width: 50%;
  left: 30%; 
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const FormIcons = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 13.635px;
`;

export const FormText = styled.div`
  display: flex;
  align-self: flex-start;
  color: #434c5d;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
export const InputLabel = styled.label`
  height: 11px;
  color: #434C5D;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 11px; 
  letter-spacing: 0.9px;
  margin-bottom: 3px;
  text-transform: uppercase;
`;

export const NameInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 34px;

`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  padding-left: 0;
  margin: 0 auto;
  flex-direction: column;
`;

export const RegistrationButtonBox = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 42px;
  display: flex;
`;
