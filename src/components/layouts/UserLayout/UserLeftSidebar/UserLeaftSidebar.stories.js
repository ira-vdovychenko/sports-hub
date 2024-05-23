import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LineIcon } from "../../../../assets/left-menu-line.svg";

export default {
  title: "Components/UserLeftSidebar",
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "menuItemClicked",
      type: { name: "function", required: true },
    },
    fontFamily: { control: "text" },
    fontSize: { control: "inline-radio", options: ["12px", "14px", "16px"] },
    fontWeight: { control: "inline-radio", options: [400, 700, 900] },
  },
};

const MenuContainer = styled.div`
  display: flex;
`;

const LineIconWrapper = styled.div`
  margin-right: 10px;
  margin-top: 60px;
`;

const MenuList = styled.ul`
  height: 373px;
  width: 125px;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-items: center;
  gap: 19px;
  padding: 0;
`;

const MenuItem = styled.li`
  padding: 0;
  width: 100%;
  height: 13px;
  text-align: left;
  list-style-type: none;
  position: relative;
  cursor: pointer;
`;

const MenuItemText = styled.p`
  margin-left: 15px;
  text-align: left;
  font-family: ${(props) => props.fontFamily || "Open Sans, sans-serif"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 700};
  font-size: ${(props) => props.fontSize || "14px"};
  line-height: 19px;
  color: ${(props) => (props.$isActive ? "#D72130" : "#B2B2B2")};
`;

const Marker = styled.span`
  position: absolute;
  display: ${(props) => (props.$active ? "block" : "none")};
  width: 5px;
  height: 5px;
  background-color: #d72130;
  border-radius: 50%;
  top: 20px;
  left: 5px;
`;

export const UserLeftSidebar = (args) => {
  const menuItems = [
    "HOME",
    "NBA",
    "NFL",
    "MLB",
    "NHL",
    "CBB",
    "CFB",
    "NASCAR",
    "GOLF",
    "SOCCER",
    "MORE",
    "LIFESTYLE",
    "DEALBOOK",
    "VIDEO",
  ]; 
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuItemClick = (index) => {
    setActiveIndex(index);
    args.onClick();
  };

  return (
    <MenuContainer>
      <LineIconWrapper>
        <LineIcon />
      </LineIconWrapper>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(index)}>
            <Marker $active={index === activeIndex} />
            <MenuItemText
              $isActive={index === activeIndex}
              fontFamily={args.fontFamily}
              fontSize={args.fontSize}
              fontWeight={args.fontWeight}
            >
              {item}
            </MenuItemText>
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};
