import styled from "styled-components";

export const FlashMessageBox = styled.div`
  position: fixed;
  top: ${(props) => props.$top || "83px"};
  right: ${(props) => props.$right || "50px"};
  width: ${(props) => props.width || "400px"};
  height: 86px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 28px #818181;
  z-index: 1000;
`;
export const FlashMessage = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-left: 78px;
`;

export const FlashMessageTitle = styled.h4`
  color: #000000;
  font-style: normal;
  font-family:  Open Sans, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  display: flex;
  text-align: left;
  margin: 0;
`;
export const FlashMessageDescription = styled.p`
  color: #000000;
  font-style: normal;
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  text-align: left;
  margin: 0;
`;
export const FlashMessageIcon = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const FlashMessageCloseIcon = styled.span`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 10px;
  height: 10px;
`;
