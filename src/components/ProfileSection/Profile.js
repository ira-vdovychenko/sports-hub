import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LogInButton from "../Buttons/LogIn/LogInButton";
import SignUpButton from "../Buttons/SignUp/SignUpButton";
import ellipse from "../../assets/Ellipse.png";
import * as Styled from "./styled";

export default function Profile() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [auth, setAuth] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const { pathname } = useLocation();

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  useEffect(() => {
    if (pathname.startsWith('/admin')) {
      setIsAdmin(true);
    }
  }, [pathname]);

  return (
    <Styled.ProfileContainer>
      {auth && !isAdmin ? (
        <Styled.User>
          <Styled.UserImage src={ellipse} alt="User's Image" />
          <Styled.UserName>Ivan Baloh</Styled.UserName>
          <Styled.DropDownSurvey>
            <Styled.DropDownButton onClick={toggleProfileMenu}>
              {isProfileMenuOpen ? <Styled.MenuUpIcon /> : <Styled.MenuDownIcon />}
            </Styled.DropDownButton>
            {isProfileMenuOpen && (
              <Styled.DropDownSurveyList>
                <Styled.DropDownNameItem>
                  Ivan Baloh
                  <Styled.ItemEmail>ivanbaloh@gmail.com</Styled.ItemEmail>
                </Styled.DropDownNameItem>
                <Styled.DropDownSurveyItem to="/profile">View profile</Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem to="/profile/change-password">Change password</Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem to="/profile/surveys">My surveys</Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem to="/profile/team-hub">Team hub</Styled.DropDownSurveyItem>
                <Styled.DropDownSurveyItem>Log out</Styled.DropDownSurveyItem>
              </Styled.DropDownSurveyList>
            )}
          </Styled.DropDownSurvey>
        </Styled.User>
      ) : (
        <>
          {!isAdmin && (
            <>
              <SignUpButton>Sign Up</SignUpButton>
              <LogInButton>Log In</LogInButton>
            </>
          )}
        </>
      )}
      {isAdmin && (
        <Styled.User>
          <Styled.UserImage src={ellipse} alt="User's Image" />
          <Styled.UserName>
            Brandon Miles
            <Styled.ItemEmail>Administrator</Styled.ItemEmail>
          </Styled.UserName>
          <Styled.DropDownSurvey>
            <Styled.DropDownButton onClick={toggleProfileMenu}>
              {isProfileMenuOpen ? <Styled.MenuUpIcon /> : <Styled.MenuDownIcon />}
            </Styled.DropDownButton>
            {isProfileMenuOpen && (
              <Styled.DropDownSurveyList>
                <Styled.DropDownNameItem>
                  Ivan Baloh
                  <Styled.ItemEmail>ivanbaloh@gmail.com</Styled.ItemEmail>
                </Styled.DropDownNameItem>
                <Styled.DropDownSurveyItem>Log out</Styled.DropDownSurveyItem>
              </Styled.DropDownSurveyList>
            )}
          </Styled.DropDownSurvey>
        </Styled.User>
      )}
    </Styled.ProfileContainer>
  );
}
