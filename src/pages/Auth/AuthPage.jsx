import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { RegisterForm, LogInForm, ResetPasswordForm, ForgotPasswordForm } from "./index";
import { LogoButton } from "../../components/Buttons/index";
import * as Styled from "./styled";

export const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
  };

  const getPathType = () => {
    const path = location.pathname;
    if (path === "/login") {
      return "login";
    } else if (path === "/register") {
      return "register";
    } else if (path === "/forgot-password") {
      return "forgot-password";
    } else if (path === "/reset-password") {
      return "reset-password";
    }
    return "register";
  };

  const renderForm = () => {
    const pathType = getPathType();

    switch (pathType) {
      case "login":
        return <LogInForm />;
      case "forgot-password":
        return <ForgotPasswordForm />;
      case "reset-password":
        return <ResetPasswordForm />;
      case "register":
      default:
        return <RegisterForm />;
    }
  };

  return (
    <Styled.AuthPageContainer>
      <Styled.LeftContentBox>
        <Styled.LogoBox>
          <LogoButton onClick={handleLogoClick}>
            <Link to="/">Sports Hub</Link>
          </LogoButton>
        </Styled.LogoBox>
        <Styled.AuthPagePhoto />
      </Styled.LeftContentBox>
      <Styled.RightContentBox>
        {renderForm()}
      </Styled.RightContentBox>
    </Styled.AuthPageContainer>
  );
};