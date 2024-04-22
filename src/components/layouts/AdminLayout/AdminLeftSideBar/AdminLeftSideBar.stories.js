import React, { useState } from "react";
import { ReactComponent as SurveysIcon } from "../../../../assets/leftmenu/Surveys.svg";
import { ReactComponent as BannersIcon } from "../../../../assets/leftmenu/Banners.svg";
import { ReactComponent as LanguagesIcon } from "../../../../assets/leftmenu/Langueges.svg";
import { ReactComponent as FooterIcon } from "../../../../assets/leftmenu/Footer.svg";
import { ReactComponent as ShareIcon } from "../../../../assets/leftmenu/Shares.svg";
import { ReactComponent as UsersIcon } from "../../../../assets/leftmenu/My users.svg";
import { ReactComponent as IAIcon } from "../../../../assets/leftmenu/IA.svg";
import { ReactComponent as TeamsIcon } from "../../../../assets/leftmenu/Teams.svg";
import { ReactComponent as NewsPartnersIcon } from "../../../../assets/leftmenu/News partnerds.svg";
import { ReactComponent as AdvertisingIcon } from "../../../../assets/leftmenu/Advertising.svg";
import * as Styled from "./styled";

export default {
  title: "AdminLeftSidebar",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start", alignItems: "flex-start", width: "60%", height: "100vh" }}>
        <div style={{ width: "60%" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    hoveredItem: { control: "boolean" },
    isActive: { control: "boolean" },
}
}
export const AdminLeftSideBar = () => {
  const [hoveredItem, setHoveredItem] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setHoveredItem(true);
    setIsActive(true);
  
  };

  const handleMouseLeave = () => {
    setHoveredItem(false);
    setIsActive(false);

  };

  const menuItems = [
    { title: "Surveys", icon: <SurveysIcon /> },
    { title: "Banners", icon: <BannersIcon /> },
    { title: "Languages", icon: <LanguagesIcon /> },
    { title: "Footer", icon: <FooterIcon /> },
    { title: "Share", icon: <ShareIcon /> },
    { title: "Users", icon: <UsersIcon /> },
    { title: "IA", icon: <IAIcon /> },
    { title: "Teams", icon: <TeamsIcon /> },
    { title: "News Partners", icon: <NewsPartnersIcon /> },
    { title: "Advertising", icon: <AdvertisingIcon /> },
  ];

  const iconStyles = {
    color: isActive ? "#D72130" : "#b2b2b2",
  };
  const MenuItem = ({ item, icon, tooltip }) => {
    return (
      <Styled.TooltipContainer>
        <Styled.LeftMenuTooltip fontFamily={'Open-sans'} $isVisible={hoveredItem === item} >
          {tooltip}
          <Styled.TooltipArrow />
        </Styled.LeftMenuTooltip>

        <Styled.LeftMenuIconBox>
          <Styled.LeftMenuIcon
            size={30}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}  
          >
            {icon}
          </Styled.LeftMenuIcon>
        </Styled.LeftMenuIconBox>
      </Styled.TooltipContainer>
    );
  };

  return (
    <Styled.LeftSideBarBox>
      <Styled.LeftSideBar>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            tooltip={item.title}
            icon={item.icon}
            style={iconStyles}
          />
        ))}
      </Styled.LeftSideBar>
    </Styled.LeftSideBarBox>
  );
};
