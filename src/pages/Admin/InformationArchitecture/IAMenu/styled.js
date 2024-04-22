import styled from "styled-components";
import { ReactComponent as HorizontalIcon } from "../../../../assets/horizontalicon.svg";
import { ReactComponent as VerticalIcon } from "../../../../assets/verticalicon.svg";

export const MenuItem = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  height: 36px;
  border: 0.5px solid #D4D9E2;
`;

export const ItemButton = styled.button`
  z-index: 1;
  margin: 0;
  padding: 0;
  width: 16%;
  height: 100%;
  background: #FFFEFE;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ItemIcon = styled(VerticalIcon)`
  width: 16px;
  height: 16px;
  color: #B2B2B2;
`;

export const MenuIcon = styled(HorizontalIcon)`
    z-index: 5;
  cursor: pointer;
  margin-bottom: 8px;
  margin-top: 8px;
  margin-right: 5px;
 fill: #B2B2B2;

  &:hover {
    stroke: #D72130;
  } 
`;

export const ItemName = styled.h3`
  flex-grow: 1;
  height: 36px;
  margin: 0;
  font-family: 'Open Sans', serif;
  font-style: normal;
  font-size: 14px;
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${(props) => (props.itemType === "category" ? 700 : 400)};
`;

export const DropDownWrapper = styled.div`
  position: relative;
  font-family: 'Open Sans', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  box-shadow: rgba(0, 0, 0, 0.0949246);
 
`;

export const DropDown = styled.div`
  z-index: 3;
  left: -30px;
  display: flex;
  flex-direction: column;
  width: 168px;
  position: absolute;
  top: -18px;
  box-shadow: 0 0 17px #00000017;
  background: #FFFFFF;
`;
export const DropDownMenu = styled(DropDown)`
  z-index: 3;
  
`;

export const CategoriesDropDownMenu = styled(DropDownMenu)`
  z-index: 4;
  top: 37px;
  left: 168px;
`;
export const SubcategoriesDropDownMenu = styled(DropDownMenu)`
  z-index: 5;
  top: 0;
  left: 168px;
`;

export const DropDownMenuElement = styled.div`
  border: 1px solid white;
  padding: 0;
  width: 100%;
  height: 39px;
  border-radius: 0;
  text-align: center;
  &:hover {
    background:  rgba(215, 33, 48, 0.11);
  }
`;
export const DropDownMenuElementText = styled.h2`
  margin-left: 25px;
  text-align: left;
  font-family: 'Open Sans', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  &:hover {
    color: #D72130;
  }
`;

export const DropDownMenuButton = styled.button`
  z-index: 1;
  margin-left: 10px;
  padding: 0;
  height: 36px;
  width: 20px;
  background: #FFFEFE;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HiddenElement = styled.span`
  z-index: 2;
  position: absolute;
  top: 11px;
  left: 16px;
  width: 35px;
  height: 14px;
  background: rgba(196, 196, 196, 0.3);
  border-radius: 50px;
  margin: 0;
`;

export const HiddenElementText = styled.h3`
  text-align: center;
  margin: 0;
  font-family: 'Open Sans', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 13px;
  color: rgba(0, 0, 0, 0.4);
`;

