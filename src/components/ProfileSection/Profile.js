import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";
import { LogInButton } from "../Buttons/LogIn/LogInButton";
import { SignUpButton } from "../Buttons/SignUp/SignUpButton";
import ellipse from "../../assets/Ellipse.png";
import * as Styled from "./styled";

export const Profile = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("User:", user);
  console.log("Token:", token);

  const isAuthenticated = !!token;

  const isAdmin = user?.isAdmin || false;

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <Styled.ProfileContainer>
      {isAuthenticated && !isAdmin ? (
        <Styled.User>
          <Styled.UserImage src={ellipse} alt="User's Image" />
          <Styled.UserName>{user?.UserName}</Styled.UserName>
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
                <Styled.DropDownSurveyItem to="/profile">
                  View profile
                </Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem to="/profile/change-password">
                  Change password
                </Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem to="/profile/surveys">
                  My surveys
                </Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem to="/profile/team-hub">
                  Team hub
                </Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem onClick={handleLogout}>
                  Log out
                </Styled.DropDownSurveyItem>
              </Styled.DropDownSurveyList>
            )}
          </Styled.DropDownSurvey>
        </Styled.User>
      ) : (
        <>
          {!isAdmin && (
            <>
              <Link to="/register">
                <SignUpButton>Sign Up</SignUpButton>
              </Link>
              <Link to="/login">
                <LogInButton>Log In</LogInButton>
              </Link>
            </>
          )}
        </>
      )}
      {
        /* isAuthenticated && */ isAdmin && (
          <Styled.User>
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
                  <Styled.DropDownSurveyItem onClick={handleLogout}>
                    Log out
                  </Styled.DropDownSurveyItem>
                </Styled.DropDownSurveyList>
              )}
            </Styled.DropDownSurvey>
          </Styled.User>
        )
      }
    </Styled.ProfileContainer>
  );
};
