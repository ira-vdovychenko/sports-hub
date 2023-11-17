import React from "react";
import * as Styled from "./styled";

export default function HorizontalMenu({  activePage, setActivePage }) {
    const handleLinkClick = (page) => {
      console.log("Setting active page to:", page);
        setActivePage(page);
      };
    return(
      <Styled.HeaderHorisontalMenuBox>
      <Styled.HorisontalMenu>
          <Styled.MenuLink to={""} onClick={() => handleLinkClick("Home")} className={activePage === "Home" ? "active" : ""}>
              Home
          </Styled.MenuLink>
          <Styled.MenuLink to={"lifestyle"} onClick={() => handleLinkClick("Lifestyle")} className={activePage === "Lifestyle" ? "active" : ""}>
              Lifestyle
          </Styled.MenuLink>
          <Styled.MenuLink to={"video"} onClick={() => handleLinkClick("Video")} className={activePage === "Video" ? "active" : ""}>
              Video
          </Styled.MenuLink>
          <Styled.MenuLink to={"dealbook"} onClick={() => handleLinkClick("Dealbook")} className={activePage === "Dealbook" ? "active" : ""}>
              Dealbook
          </Styled.MenuLink>
      </Styled.HorisontalMenu>
  </Styled.HeaderHorisontalMenuBox>
    )
}