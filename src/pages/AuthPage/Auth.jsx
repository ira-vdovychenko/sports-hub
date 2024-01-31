import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import { RegisterForm } from "../../components/Forms/Registration/RegisterForm";
import { LogInForm } from "../../components/Forms/LogIn/LogInForm";
import { LogoButton } from "../../components/Buttons/Logo/LogoButton";

export const AuthPage = ({ isLogin }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
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
        {isLogin ? <LogInForm /> : <RegisterForm />}
      </Styled.RightContentBox>
    </Styled.AuthPageContainer>
  );
};
