import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { setUser, setToken, setRole, setTokenExpirationTime, setAdmin } from "../../../redux/actions/authActions.js";
import { logInUserMirage, getToken } from "../../../services/AuthService.js";
import { jwtDecode } from "jwt-decode";
import { Input } from "../../../components/Input/Input.jsx";
import { SecondarySmallButton, LargeButton } from "../../../components/Buttons/index.js";
import { ReactComponent as FB } from "../../../assets/FB.svg";
import { ReactComponent as Google } from "../../../assets/Google.svg";
import * as Styled from "./styled.js";

export const LogInForm = () => {
  const isPasswordChangeSuccess = useSelector(state => state.auth.isPasswordChangeSuccess);
 
  const {
    register,
    watch,
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

      const loginResultMirage = await logInUserMirage(userData);
      if (loginResultMirage.success) {
        const user = loginResultMirage.data.user;
        const userRole = loginResultMirage.data.user?.RoleID;
        const isAdmin = loginResultMirage.data.user?.roleIds.includes("1");

        dispatch(setUser(user));
        dispatch(setRole(userRole));
        dispatch(setAdmin(isAdmin));

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("role", JSON.stringify(userRole));
        localStorage.setItem("isAdmin", JSON.stringify(isAdmin));

        setErrorState({ status: null, message: "" });

        const userEmail = loginResultMirage.data.user?.Email;
        const getTokenResult = await getToken({ Email: userEmail });
        if (getTokenResult.success) {
          const accessToken = getTokenResult.data.accessToken;
          const decodedToken = jwtDecode(accessToken);

          dispatch(setToken(accessToken));
          dispatch(setTokenExpirationTime(decodedToken.exp));

          localStorage.setItem("accessToken", JSON.stringify(accessToken));
          localStorage.setItem("tokenExpirationTime", JSON.stringify(decodedToken.exp));

          if (userRole === 2) {
            navigate("/");
          } else if (userRole === 1) {
            const adminUsername = loginResultMirage.data.user?.UserName.replace(/\s+/g, "-");
            navigate(`/admin/${adminUsername}`);
          }
        } else {
          setErrorState({
            status: getTokenResult.status || 400,
            message: "Failed to log in. Please try again.",
          });
        }
      } else {
        setErrorState({
          status: loginResultMirage.status || 400,
          message: "Incorrect user ID or password. Try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
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
          <SecondarySmallButton 
            size={"130px"}>
            <Link to="/register">Get Started</Link>
          </SecondarySmallButton>
        </Styled.AuthButtonBox>
      </Styled.AuthPageHeader>
      <Styled.LogInForm>
        <Styled.FormTitle>Log in to Sports Hub</Styled.FormTitle>
        <Styled.FormIcons>
          <FB />
          <Google />
        </Styled.FormIcons>
        {isPasswordChangeSuccess && <Styled.SuccessMessage>Your password has been updated.</Styled.SuccessMessage>}
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
            $error={errors.email} 
            $success={!!watch("email")}
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
            $error={errors.password}
            $success={!!watch("password")}
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
            size='395px'
            onClick={handleSubmit(onSubmit)}
          >
            LOG IN
          </LargeButton>
        </Styled.LogInButtonBox>
      </Styled.LogInForm>
    </>
  );
};
