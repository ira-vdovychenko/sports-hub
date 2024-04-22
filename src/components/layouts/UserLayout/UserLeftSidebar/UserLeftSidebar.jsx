import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import * as CategoryService from "../../../../services/CategoryService.js";
import * as SubcategoryService from "../../../../services/SubcategoryService.js";
import * as TeamService from "../../../../services/TeamService.js";
import { ReactComponent as LineIcon } from '../../../../assets/left-menu-line.svg';
import * as Styled from "./styled.js";

export const UserLeftSidebar = () => {
  const categories = useSelector((state) => state.ia.categories);
  const teams = useSelector((state) => state.team.teams);
  const subcategories = useSelector((state) => state.ia.subcategories); 
  const navigate = useNavigate();
  const [categoriesData, setCategoriesData] = useState([]);
  const [subcategoriesData, setSubcategoriesData] = useState([]);
  const [teamsData, setTeamsData] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const [activeSubMenuItem, setActiveSubMenuItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedSubсategory, setSelectedSubcategory] = useState({});
  const [isSubcategoriesMenuOpen, setIsSubcategoriesMenuOpen] = useState(false);
  const [isTeamsMenuOpen, setIsTeamsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
         if (categories && categories.length > 0) {
          setCategoriesData(categories);
        } else { 
          const categoriesFromServer = await CategoryService.getCategories();
          const categoriesArray = Object.values(categoriesFromServer.sports);
          setCategoriesData(categoriesArray);
         } 
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchSubcategories = async () => {
      try {
         if (subcategories && subcategories.length > 0) {
          setSubcategoriesData(subcategories);
        } else { 
          const subcategoriesFromServer =
            await SubcategoryService.getSubcategories();
          setSubcategoriesData(subcategoriesFromServer);
        } 
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    const fetchTeams = async () => {
      try {
         if (teams && teams.length > 0) {
          setTeamsData(teams);
        } else { 
          const teamsFromServer = await TeamService.getTeams();
          setTeamsData(teamsFromServer);
         } 
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchCategories();
    fetchSubcategories();
    fetchTeams();
  }, []);

  const handleCategoryMouseEnter = (category) => {
    setActiveMenuItem(category);
    setSelectedCategory(category);
    setIsSubcategoriesMenuOpen(true);
    setIsTeamsMenuOpen(false);
  };

  const handleSubcategoryMouseEnter = (subcategory) => {
    setActiveSubMenuItem(subcategory);
    setActiveMenuItem(selectedCategory);
    setSelectedSubcategory(subcategory);
    setIsTeamsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsSubcategoriesMenuOpen(false);
    setIsTeamsMenuOpen(false);
    setActiveSubMenuItem('');
  };

  const handleHomeClick = () => {
    setIsSubcategoriesMenuOpen(false);
    setActiveSubMenuItem("");
    setActiveMenuItem("home");
    navigate("/");
  };
  
  const handleCategoryClick = (category) => {
    setIsSubcategoriesMenuOpen(false);
    setActiveMenuItem(category);
    navigate(`/${category.SportName}`);
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveMenuItem(selectedCategory)
    setActiveSubMenuItem(subcategory);
    setIsSubcategoriesMenuOpen(false);
    setIsTeamsMenuOpen(false);
    navigate(`/${selectedCategory.SportName.replace(/\s/g, "")}/${subcategory.LeagueName.replace(/\s/g, "")}`);
  };

  const handleTeamClick = (team) => {
    setIsSubcategoriesMenuOpen(false);
    setIsTeamsMenuOpen(false);
    navigate(`/${selectedCategory.SportName}/${selectedSubсategory.LeagueName.replace(/\s/g,"")}/${team.TeamName.replace(/\s/g, "")}`
    );
  };

  return (
    <div>
      {isSubcategoriesMenuOpen && <Styled.UserLeftSideBlur />}
      <Styled.UserLeftSidebarWrapper onMouseLeave={() => handleMenuClose()}>
        <Styled.UserLeftSidebarMenuContent>
        <Styled.LineIconWrapper>
          <LineIcon />
        </Styled.LineIconWrapper>
          <Styled.LeftMenuItem>
            <Styled.LeftMenuItemButton onClick={() => handleHomeClick()}>
              <Styled.LeftMenuItemText $isActive={activeMenuItem === "home"}>
                HOME
              </Styled.LeftMenuItemText>
            </Styled.LeftMenuItemButton>
            <Styled.LeftMarker $active={activeMenuItem === "home"} />
          </Styled.LeftMenuItem>
          {categoriesData.map((category) => (
            <Styled.LeftMenuItem key={category.SportID}>
              <Styled.LeftMenuItemButton
                onMouseEnter={() => handleCategoryMouseEnter(category)}
                onClick={() => handleCategoryClick(category)}
              >
                <Styled.LeftMenuItemText
                  $isActive={activeMenuItem === category}
                >
                  {category.SportName}
                </Styled.LeftMenuItemText>
              </Styled.LeftMenuItemButton>
              <Styled.LeftMarker
                $active={activeMenuItem === category}
              />
            </Styled.LeftMenuItem>
          ))}
        </Styled.UserLeftSidebarMenuContent>
        {isSubcategoriesMenuOpen && selectedCategory && (
          <Styled.LeftSubcategoriesMenu>
            {subcategoriesData
              .filter((sub) => sub.SportID === selectedCategory.SportID)
              .map((subcategory) => (
                <Styled.LeftSubcategoriesItem
                  key={subcategory.LeagueID}
                  $isActiveSubcategory={activeSubMenuItem === subcategory}
                  >
                  <Styled.LeftSubcategoriesButton
                    onMouseEnter={() => handleSubcategoryMouseEnter(subcategory)}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    >
                    <Styled.LeftSubcategoriesText $isActiveSubcategory={activeSubMenuItem === subcategory}>
                      {subcategory.LeagueName}
                    </Styled.LeftSubcategoriesText>
                  </Styled.LeftSubcategoriesButton>
                </Styled.LeftSubcategoriesItem>
              ))}
          </Styled.LeftSubcategoriesMenu>
        )}
        {isTeamsMenuOpen && selectedSubсategory && teamsData.length > 0 && (
          <Styled.LeftTeamsMenu>
            {teamsData
              .filter((t) => t.LeagueID === selectedSubсategory.LeagueID)
              .map((team) => (
                <Styled.LeftTeamsItem key={team.TeamID}>
                  <Styled.LeftTeamsButton onClick={() => handleTeamClick(team)}>
                    <Styled.LeftTeamsText>{team.TeamName}</Styled.LeftTeamsText>
                  </Styled.LeftTeamsButton>
                </Styled.LeftTeamsItem>
              ))}
          </Styled.LeftTeamsMenu>
        )}
      </Styled.UserLeftSidebarWrapper>
{/* 
      <Styled.UserLeftMenuIcons>
        Icons: fb, G, twitter, youtube
      </Styled.UserLeftMenuIcons> */}
    </div>
  );
};
