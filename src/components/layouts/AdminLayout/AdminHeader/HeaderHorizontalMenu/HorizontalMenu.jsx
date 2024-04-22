import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as LeftArrowIcon } from "../../../../../assets/leftarrow.svg";
import { ReactComponent as RightArrowIcon } from "../../../../../assets/rightarrow.svg";
import * as Styled from "./styled.js";

export const HorizontalMenu = ({ setActivePage }) => {
  const categories = useSelector((state) => state.ia.categories);
  const location = useLocation();
  const menuRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/admin") {
      setActivePage("Home");
    } else {
      const pathSegments = path.split("/").filter(Boolean);
      const currentPage =
        pathSegments[0] === "admin" && pathSegments[1]
          ? pathSegments[1]
          : "Home";
      setActivePage(currentPage.charAt(0).toUpperCase() + currentPage.slice(1));
    }
  }, [location, setActivePage]);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/admin") {
      setActivePage("Home");
    } else {
      const pathSegments = path.split("/").filter(Boolean);
      const currentPage =
        pathSegments[0] === "admin" && pathSegments[1]
          ? pathSegments[1]
          : "Home";
      setActivePage(currentPage.charAt(0).toUpperCase() + currentPage.slice(1));
    }
  }, [location, setActivePage]);

  const checkScroll = () => {
    const menu = menuRef.current;
    if (menu) {
      const isScrollable = menu.scrollWidth > menu.clientWidth;
      setCanScrollLeft(menu.scrollLeft > 0);
      setCanScrollRight(
        isScrollable && menu.scrollLeft < menu.scrollWidth - menu.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const handleScroll = () => {
      setCanScrollLeft(menu.scrollLeft > 0);
      setCanScrollRight(menu.scrollLeft < menu.scrollWidth - menu.clientWidth);
    };

    menu.addEventListener("scroll", handleScroll);

    return () => {
      menu.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollMenu = (direction) => {
    const menu = menuRef.current;
    const scrollAmount = direction === "left" ? -200 : 200;
    menu.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <Styled.HeaderHorisontalMenuBox>
      {canScrollLeft && (
        <Styled.ScrollButton
          className="left"
          onClick={() => scrollMenu("left")}
        >
          <LeftArrowIcon />
        </Styled.ScrollButton>
      )}
      <Styled.HorisontalMenu ref={menuRef}>
        <Styled.MenuLink to="/admin" end>
          Home
        </Styled.MenuLink>
        {categories?.length > 0 &&
          categories.map((category) => (
            <Styled.MenuLink
              key={category.SportID}
              to={`/admin/${category.SportName.toLowerCase()}`}
             
            >
              {category.SportName}
              {category.isHidden && <Styled.HiddenText>hidden</Styled.HiddenText>}
            </Styled.MenuLink>
          ))}
      </Styled.HorisontalMenu>
      {canScrollRight && (
        <Styled.ScrollButton
          className="right"
          onClick={() => scrollMenu("right")}
        >
          <RightArrowIcon />
        </Styled.ScrollButton>
      )}
    </Styled.HeaderHorisontalMenuBox>
  );
};
