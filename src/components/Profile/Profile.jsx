import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout, setAdmin } from "../../redux/actions/authActions.js";
import { removeToken } from "../../services/AuthService.js";
import { SecondarySmallButton, SmallTextButton } from "../Buttons/index.js";
import ellipse from "../../assets/Ellipse.png";
import * as Styled from "./styled.js";

export const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const isAuthenticated = !!token;

  useEffect(() => {
    const isAdminLocal = localStorage.getItem("isAdmin");
    if (isAdminLocal === "true") {
      dispatch(setAdmin(true));
    } else if (isAdminLocal === "false") {
      dispatch(setAdmin(false));
    }
  }, []);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = async () => {
    await removeToken();  
    setProfileMenuOpen(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("tokenExpirationTime");
    dispatch(logout());
    navigate("/");
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
