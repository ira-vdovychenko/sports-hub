import styled from "styled-components";
import { ReactComponent as UpIcon } from "../../assets/UpIcon.svg";
import { ReactComponent as DownIcon } from "../../assets/DownIcon.svg";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 50px;
  column-gap: 30px;
  background-color: #FFF;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const UserImage = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-weight: 600;
  font-style: normal;
  font-size: 12px;
`;

export const DropDownSurvey = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const DropDownButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const DropDownSurveyList = styled.div`
  width: 178px;
  height: 286px;
  position: absolute;
  right: 0;
  top: 25px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 0px 17px #00000017;
`;

export const DropDownSurveyItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  box-sizing: border-box;
  height: 41px;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: #d721301c;
    color: #C63638;
  }

  &:first-child {
    padding-top: 25px;
    font-weight: 600;
  }

  &:first-child:hover {
    background: none;
    color: black;
  }

  &:last-child {
    height: 50px; 
    border-top: 1px solid #EDEDED;
  }
`;

export const ItemEmail = styled.div`
  border-top: none;
  font-style: normal;
  padding-top: 0px;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: #7F7B7B;

  &:hover {
    background: none;
    color: #7F7B7B;
  }
`;

export const MenuUpIcon = styled(UpIcon)`
  width: 100%;
`;

export const MenuDownIcon = styled(DownIcon)`
  width: 100%;
`;