import styled from "styled-components";

export const PopupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(77, 75, 75, 0.4);
  backdrop-filter: blur(28px);
`;

export const PopupContent = styled.div`
  max-width: 458px;
  height: 260px;
  position: relative;
  top: 20%;
  margin: auto;
  background-color: #FFF;
  box-shadow: 0 4px 28px #818181;
`;

export const PopupTitle = styled.h2`
  padding-top: ${props => props.paddingTop || '42px'};
  font-family: 'Open Sans', serif;
  font-style: normal;
  font-weight: ${props => props.fontWeight || 600};
  font-size: ${props => props.fontSize || '24px'};
  line-height: normal;
  text-align: center;
  color: #000000;
`;
export const PopupDescription = styled.h2`
  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PopupForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const PopupInputBox = styled.div`
  display: flex;
  margin-top: -10px;
`;
export const PopupLabel = styled.label`
  margin-left: 11.4%;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  color: #7F8899;
`;

export const SubmitButtonBox = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 17px;
  right: 52px;

`;
export const CancelButtonBox = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 22px;
  left: 228px;
`;

export const Icon = styled.span`
   position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 20%;
`;