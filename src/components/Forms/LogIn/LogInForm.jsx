import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setUser,
  setToken,
  setAdmin,
} from "../../../redux/actions/authActions";
import * as Styled from "./styled";
import { logInUser } from "../../../services/AuthService";
import { Input } from "../../Input/Input";
import { LargeButton } from "../../Buttons/Large/styled";
import { LogInButton } from "../../Buttons/LogIn/LogInButton";
import { ReactComponent as FB } from "../../../assets/FB.svg";
import { ReactComponent as Google } from "../../../assets/Google.svg";

export const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [errorState, setErrorState] = useState({ status: null, message: "" });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const userData = {
        Email: data.email,
        EncryptedPassword: data.password,
      };

      const loginResult = await logInUser(userData);
      if (loginResult.success) {
        setErrorState({ status: null, message: "" });
        dispatch(setUser(loginResult.data.user));

        const token = loginResult.data.token;
        dispatch(setToken(token));
        localStorage.setItem("token", token);

        console.log(token);

        const userRole = loginResult.data.user?.RoleID;

        const isAdmin = loginResult.data.user?.roleIds.includes("1");
        dispatch(setAdmin(isAdmin));
        console.log(userRole);

        if (userRole === 2) {
          navigate("/");
        } else if (userRole === 1) {
          const adminUsername = loginResult.data.user?.UserName.replace(
            /\s+/g,
            "-"
          );
          navigate(`/admin/${adminUsername}`);
        }
      } else {
        setErrorState({
          status: loginResult.status || 400,
          message: "Incorrect user ID or password. Try again.",
        });
      }
    } catch (error) {
      setErrorState({
        status: error.status || 400,
        message: error.message || "Incorrect user ID or password. Try again.",
      });
    }
  };
  return (
    <>
      <Styled.AuthPageHeader>
        <Styled.AuthLabel>Don’t have an account?</Styled.AuthLabel>
        <Styled.AuthButtonBox>
          <LogInButton width={"130px"}>
            <Link to="/register">Get Started</Link>
          </LogInButton>
        </Styled.AuthButtonBox>
      </Styled.AuthPageHeader>
      <Styled.LogInForm>
        <Styled.FormTitle>Log in to Sports Hub</Styled.FormTitle>
        <Styled.FormIcons>
          <FB />
          <Google />
        </Styled.FormIcons>
        {errorState.message ? (
          <Styled.WarningMessage>{errorState.message}</Styled.WarningMessage>
        ) : null}
        <Styled.InputBox>
          <Styled.InputLabel>Email address</Styled.InputLabel>
          <Input
            type="email"
            width={"100%"}
            name="email"
            placeholder="Email@gmail.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email.",
              },
            })}
          />
          {errors.email && (
            <Styled.WarningMessage>
              {errors.email.message}
            </Styled.WarningMessage>
          )}
        </Styled.InputBox>
        <Styled.InputBox>
          <Styled.LabelsBox>
            <Styled.InputLabel>Password</Styled.InputLabel>
            <Styled.ForgotPassword>
              <Link to="/forgot-password">Forgot password?</Link>
            </Styled.ForgotPassword>
          </Styled.LabelsBox>
          <Input
            type="password"
            width={"100%"}
            name="password"
            placeholder="8 + characters (letters and numbers)"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message:
                  "Password must contain at least 8 characters (letters and numbers).",
              },
              pattern: {
                value: /\d/,
                message:
                  "Password must contain at least 8 characters (letters and numbers).",
              },
            })}
          />
          {errors.password && (
            <Styled.WarningMessage>
              {errors.password.message}
            </Styled.WarningMessage>
          )}
        </Styled.InputBox>
        <Styled.LogInButtonBox>
          <LargeButton
            type="submit"
            width={"100%"}
            onClick={handleSubmit(onSubmit)}
          >
            LOG IN
          </LargeButton>
        </Styled.LogInButtonBox>
      </Styled.LogInForm>
    </>
  );
};
