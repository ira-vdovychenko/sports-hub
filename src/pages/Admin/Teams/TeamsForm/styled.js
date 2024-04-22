import styled from "styled-components";
import { ReactComponent as DownIcon } from "../../../../assets/DownIcon.svg";

export const TeamsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 246px;
  margin-top: 15px;
`;

export const InputLabel = styled.label`
  height: 11px;
  color: #7f8899;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: 0.9px;
  align-self: flex-start;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 53px;
`;
export const FileInputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 155px;
  border: 1px solid #d4d9e2;
  background-color: rgba(196, 196, 196, 0.08);
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
`;
export const TeamLogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FileInputIconBox = styled.span`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FileInputButtonBox = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DropdownContainer = styled.div`
  position: relative;
  font-family: "Open Sans", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  box-shadow: rgba(0, 0, 0, 0.0949246);
`;

export const DropdownList = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 246px;
  position: absolute;
  box-shadow: 0 0 17px #00000017;
  background: #ffffff;
`;

export const DropdownItem = styled.div`
  border: 1px solid white;
  padding: 0;
  width: 100%;
  height: 39px;
  border-radius: 0;
  text-align: center;
  &:hover {
    background: rgba(215, 33, 48, 0.11);
  }
`;
export const DropDownMenuItemText = styled.h3`
  margin-left: 25px;
  text-align: left;
  font-family: "Open Sans", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #7f7b7b;
  &:hover {
    color: #d72130;
  }
`;

export const InputButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const DropDownButton = styled.button`
  position: absolute;
  right: 5px;
  top: 0;
  height: 100%;
  border: none;
  background-color: transparent;
`;

export const MenuDownIcon = styled(DownIcon)`
  width: 100%;
`;

export const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;
