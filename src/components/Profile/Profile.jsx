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
  const isAdmin = useSelector(state => state.auth.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
 
  const isAuthenticated = !!token;

  useEffect(() => {
    const isAdminLocal = localStorage.getItem("isAdmin");
    if (isAdminLocal === 'true') {
      dispatch(setAdmin(true));
    } else if(isAdminLocal === 'false'){
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
    <Styled.ProfileContainer>
      {isAuthenticated && !isAdmin ? (
        <Styled.User ref={menuRef}>
          <Styled.UserImage src={ellipse} alt="User's Image" />
          <Styled.UserName>{user?.UserName}</Styled.UserName>
          <Styled.DropDownSurvey>
            <Styled.DropDownButton onClick={toggleProfileMenu}>
              {isProfileMenuOpen ? <Styled.MenuUpIcon /> : <Styled.MenuDownIcon />}
            </Styled.DropDownButton>
            {isProfileMenuOpen && (
              <Styled.DropDownSurveyList>
                <Styled.DropDownNameItem>
                  {user?.UserName}
                  <Styled.ItemEmail>{user?.Email}</Styled.ItemEmail>
                </Styled.DropDownNameItem>
                <Styled.DropDownSurveyItem to="/profile" onClick={() => setProfileMenuOpen(false)}>
                  View profile
                </Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem to="/profile/change-password" onClick={() => setProfileMenuOpen(false)}>
                  Change password
                </Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem to="/profile/surveys" onClick={() => setProfileMenuOpen(false)}>
                  My surveys
                </Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem  to="/profile/team-hub" onClick={() => setProfileMenuOpen(false)}>
                  Team hub
                </Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem onClick={handleLogout}>Log out</Styled.DropDownSurveyItem>
              </Styled.DropDownSurveyList>
            )}
          </Styled.DropDownSurvey>
        </Styled.User>
      ) : (
        <>
          {!isAuthenticated && (
            <>
              <Link to="/register">
                <SmallTextButton buttonStyle={{textAlign: 'center'}}>Sign up</SmallTextButton>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <SecondarySmallButton>Log in</SecondarySmallButton>
              </Link>
            </>
          )}
        </>
      )}
      {isAuthenticated && isAdmin && (
        <Styled.User>
          <Styled.UserImage src={ellipse} alt="User's Image" />
          <Styled.UserName>
            {user?.UserName}
            <Styled.ItemEmail>Administrator</Styled.ItemEmail>
          </Styled.UserName>
          <Styled.DropDownSurvey>
            <Styled.DropDownButton onClick={toggleProfileMenu}>
              {isProfileMenuOpen ? <Styled.MenuUpIcon /> : <Styled.MenuDownIcon />}
            </Styled.DropDownButton>
            {isProfileMenuOpen && (
              <Styled.DropDownSurveyList>
                <Styled.DropDownNameItem>
                  {user?.UserName}
                  <Styled.ItemEmail>{user?.Email}</Styled.ItemEmail>
                </Styled.DropDownNameItem>
                <Styled.DropDownSurveyItem onClick={handleLogout}>Log out</Styled.DropDownSurveyItem>
              </Styled.DropDownSurveyList>
            )}
          </Styled.DropDownSurvey>
        </Styled.User>
      )}
    </Styled.ProfileContainer>
  );
};
