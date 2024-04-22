import styled from "styled-components";

export const UserLeftSidebarWrapper = styled.aside`
  display: flex;
  width: 253px;
  height: var(--menu--size);
  position: absolute;
  top: 83px;
  background: #ffffff;
  z-index: 11;
`;

export const LineIconWrapper = styled.div`
  position: absolute;
  left: -10px; 
  top: 70px;
`;

export const UserLeftSidebarMenuContent = styled.div`
  position: relative;
  top: 75px;
  left: 45px;
  height: 673px;
  width: 125px;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-items: center;
  gap: 19px;
  padding: 0;
  z-index: 11;
`;
export const UserLeftSideBlur = styled.div`
  width: 100%;
  height: calc(100vh - var(--user-header-height));
  z-index: 1000;
  position: fixed;
  top: 81px;
  padding-left: 253px;
  background: rgba(77, 75, 75, 0.4);
  backdrop-filter: blur(28px);
  z-index: 10;
`;

export const LeftMenuItem = styled.div`
  position: relative;
  padding: 0;
  width: 100%;
  height: 13px;
  text-align: left;
  list-style-type: none;
  z-index: 11;
`;
export const LeftMenuItemText = styled.p`
  margin-left: 15px;
  text-align: left;
  font-family: "Open Sans", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => (props.$isActive ? "#D72130" : "#B2B2B2")};
`;

export const LeftMarker = styled.span`
  position: absolute;
  display: ${(props) => (props.$active ? "block" : "none")};
  width: 5px;
  height: 5px;
  background-color: #d72130;
  border-radius: 50%;
  top: 23px;
  left: 10px;
`;
export const LeftMenuItemButton = styled.button`
  background: transparent;
  border: 0;
  width: 100%;
`;

export const LeftSubcategoriesMenu = styled.div`
  height: var(--menu--size);
  position: absolute;
  left: 253px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 253px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 13px 4px 14px 0px #00000017;
  z-index: 10000;
`;
export const LeftSubcategoriesItem = styled.div`
  position: relative;
  padding: 0;
  width: 100%;
  height: 41px;
  background: ${(props) =>
    props.$isActiveSubcategory ? "#d721301c" : "#ffffff"};
  &:first-child {
    margin-top: 83px;
  }
`;
export const LeftSubcategoriesText = styled.p`
  text-align: center;
  font-family: "Open Sans", serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  color: ${(props) => (props.$isActiveSubcategory ? "#D72130" : "#000000")};
`;
export const LeftSubcategoriesButton = styled.button`
  background: transparent;
  border: 0;
  margin-left: 80px;
  height: 41px;
`;

export const LeftTeamsMenu = styled(LeftSubcategoriesMenu)`
  background: #f8f8f8;
  width: 176px;
  left: 505px;
  box-shadow: 13px 4px 14px 0px #00000017;
`;
export const LeftTeamsItem = styled(LeftSubcategoriesItem)`
  background: #f8f8f8;
  &:hover {
    background: #d721301c;
  }
`;
export const LeftTeamsText = styled(LeftSubcategoriesText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: #d72130;
  }
`;
export const LeftTeamsButton = styled(LeftSubcategoriesButton)`
  margin-left: 15px;
`;

export const UserLeftMenuIcons = styled.div`
  width: 253px;
  min-height: var(--icon--size);
  top: var(--icon--position);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d7e4f1;
`;
