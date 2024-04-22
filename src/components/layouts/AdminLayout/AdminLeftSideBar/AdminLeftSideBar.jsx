import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import * as Styled from "./styled.js";

export const AdminLeftSideBar = () => {
  const [hoveredItem, setHoveredItem] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setHoveredItem(true);
  };

  const handleMouseLeave = () => {
    setHoveredItem(false);
  };

  const menuItems = [
    { title: "Surveys", icon: <SurveysIcon />, link: "" },
    { title: "Banners", icon: <BannersIcon />, link: "" },
    { title: "Languages", icon: <LanguagesIcon />, link: "" },
    { title: "Footer", icon: <FooterIcon />, link: "" },
    { title: "Share", icon: <ShareIcon />, link: "" },
    { title: "Users", icon: <UsersIcon />, link: "" },
    { title: "IA", icon: <IAIcon />, link: "/admin/information-architecture" },
    { title: "Teams", icon: <TeamsIcon />, link: "/admin/teams" },
    { title: "News Partners", icon: <NewsPartnersIcon />, link: "" },
    { title: "Advertising", icon: <AdvertisingIcon />, link: "" },
  ];

  const MenuItem = ({ item, icon, tooltip, link }) => {
    const isActive = location.pathname === link;
    return (
      <Styled.TooltipContainer>
        <Styled.LeftMenuTooltip $isVisible={hoveredItem === item}>
          {tooltip}
          <Styled.TooltipArrow />
        </Styled.LeftMenuTooltip>

        <Styled.LeftMenuIconBox>
          <Styled.LeftMenuIcon
            size={30}
            color={isActive ? "#D72130" : "#b2b2b2"}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={link}>{icon}</Link>
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
            link={item.link}
          />
        ))}
      </Styled.LeftSideBar>
    </Styled.LeftSideBarBox>
  );
};
