import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { SecondarySmallButton, SmallTextButton } from "../Buttons/index.js";
import ellipse from "../../assets/Ellipse.png";
import * as Styled from "./styled.js";

export const Profile = () => {
  const { isAuthenticated, user, isAdmin, handleLogout } = useAuth();
  const menuRef = useRef(null);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Styled.ProfileContainer  data-testid="profile-container">
      {isAuthenticated && !isAdmin ? (
        <Styled.User ref={menuRef}>
          <Styled.UserImage src={ellipse} alt="User's Image" />
          <Styled.UserName>{user?.UserName}</Styled.UserName>
          <Styled.DropDownSurvey >
            <Styled.DropDownButton onClick={toggleProfileMenu}  aria-label="Open profile menu">
              {isProfileMenuOpen ? (
                <Styled.MenuUpIcon />
              ) : (
                <Styled.MenuDownIcon />
              )}
            </Styled.DropDownButton>
            {isProfileMenuOpen && (
              <Styled.DropDownSurveyList>
                <Styled.DropDownNameItem>
                  {user?.UserName}
                  <Styled.ItemEmail>{user?.Email}</Styled.ItemEmail>
                </Styled.DropDownNameItem>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Styled.DropDownSurveyItem
                    onClick={() => setProfileMenuOpen(false)}
                  >
                    View profile
                  </Styled.DropDownSurveyItem>
                </Link>
                  <Link to="/profile/change-password" style={{ textDecoration: "none" }}>
                  <Styled.DropDownSurveyItem
                    onClick={() => setProfileMenuOpen(false)}
                  >
                    Change password
                  </Styled.DropDownSurveyItem>
                </Link>
                  <Link to="/profile/surveys" style={{ textDecoration: "none" }}>
                  <Styled.DropDownSurveyItem
                    onClick={() => setProfileMenuOpen(false)}
                  >
                     My surveys
                  </Styled.DropDownSurveyItem>
                </Link>
                  <Link to="/profile/team-hub" style={{ textDecoration: "none" }}>
                  <Styled.DropDownSurveyItem
                    onClick={() => setProfileMenuOpen(false)}
                  >
                     Team hub
                  </Styled.DropDownSurveyItem>
                </Link>
                <Styled.DropDownSurveyLastItem
                  onClick={handleLogout}
                >
                  Log out
                </Styled.DropDownSurveyLastItem>
              </Styled.DropDownSurveyList>
            )}
          </Styled.DropDownSurvey>
        </Styled.User>
      ) : (
        <>
          {!isAuthenticated && (
            <>
              <Link to="/register">
                <SmallTextButton aria-label="sign-up" buttonStyle={{ textAlign: "center" } }>
                  Sign up
                </SmallTextButton>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }} >
                <SecondarySmallButton aria-label="log-in" >Log in</SecondarySmallButton>
              </Link>
            </>
          )}
        </>
      )}
      {isAuthenticated && isAdmin && (
        <Styled.User  ref={menuRef}>
          <Styled.UserImage src={ellipse} alt="User's Image" />
          <Styled.UserName>
            {user?.UserName}
            <Styled.ItemEmail>Administrator</Styled.ItemEmail>
          </Styled.UserName>
          <Styled.DropDownSurvey>
            <Styled.DropDownButton onClick={toggleProfileMenu}>
              {isProfileMenuOpen ? (
                <Styled.MenuUpIcon />
              ) : (
                <Styled.MenuDownIcon />
              )}
            </Styled.DropDownButton>
            {isProfileMenuOpen && (
              <Styled.DropDownSurveyList>
                <Styled.DropDownNameItem>
                  {user?.UserName}
                  <Styled.ItemEmail>{user?.Email}</Styled.ItemEmail>
                </Styled.DropDownNameItem>
                <Styled.DropDownSurveyLastItem
                  onClick={handleLogout}
                >
                  Log out
                </Styled.DropDownSurveyLastItem>
              </Styled.DropDownSurveyList>
            )}
          </Styled.DropDownSurvey>
        </Styled.User>
      )}
    </Styled.ProfileContainer>
  );
};
