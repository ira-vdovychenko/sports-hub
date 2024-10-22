import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as Styled from "./styled.js";
import { checkEmailExists, registerUser } from "../../../services/AuthService.js";
import { Input } from "../../../components/Input/Input.jsx";
import { SecondarySmallButton, LargeButton } from "../../../components/Buttons/index.js";
import { ReactComponent as FB } from "../../../assets/FB.svg";
import { ReactComponent as Google } from "../../../assets/Google.svg";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const [errorState, setErrorState] = useState({ status: null, message: "" });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const emailExists = await checkEmailExists(data.email);

      if (emailExists) {
        console.log("Email already exists:", data.email);
        setErrorState({
          status: 400,
          message: "The user with this email already exists in the system.",
        });
        return;
      }

      const userData = {
        UserID: "",
        UserName: `${data.firstName} ${data.lastName}`,
        Email: data.email,
        FirstName: data.firstName,
        LastName: data.lastName,
        EncryptedPassword: data.password,
        RoleID: "",
      };

      const registrationResult = await registerUser(userData);

      if (registrationResult.success) {
        setErrorState({ status: null, message: "" });
        reset();
        navigate("/login");
      } else {
        setErrorState({
          status: registrationResult.status || 500,
          message: registrationResult.message || "Registration failed.",
        });
        return;
      }
    } catch (error) {
      if (error.status === 400) {
        setErrorState({
          status: error.status || 400,
          message:
            error.message ||
            "The user with this email already exists in the system.",
        });
      } else {
        setErrorState({
          status: error.status || 500,
          message: error.message || "Unexpected error during registration.",
        });
      }
    }
  };

  return (
    <>
      <Styled.AuthPageHeader>
        <Styled.AuthLabel>Already have an account?</Styled.AuthLabel>
        <Styled.AuthButtonBox>
          <SecondarySmallButton size={"130px"}>
            <Link to="/login">Log In</Link>
          </SecondarySmallButton>
        </Styled.AuthButtonBox>
      </Styled.AuthPageHeader>
      <Styled.RegistrationForm onSubmit={handleSubmit(onSubmit)}>
        <Styled.FormTitle>Create Account</Styled.FormTitle>
        <Styled.FormIcons>
          <FB />
          <Google />
        </Styled.FormIcons>
        {errorState.message ? (
          <Styled.WarningMessage>{errorState.message}</Styled.WarningMessage>
        ) : (
          <Styled.FormText>Or use your email for registration:</Styled.FormText>
        )}
        <Styled.NameInputBox>
          <div>
            <Styled.InputLabel>FIRST NAME</Styled.InputLabel>
            <Input
              type="text"
              size="100%"
              name="firstName"
              placeholder="John"
              {...register("firstName", {
                required: true,
                minLength: {
                  value: 3,
                  message: "The name must be between 3 and 20 characters.",
                },
                maxLength: {
                  value: 20,
                  message: "The name must be between 3 and 20 characters.",
                },
              })}
            />
            {errors.firstName && (
              <Styled.WarningMessage>
                {errors.firstName.message}
              </Styled.WarningMessage>
            )}
          </div>
          <div>
            <Styled.InputLabel>LAST NAME</Styled.InputLabel>
            <Input
              type="text"
              size="100%"
              name="lastName"
              placeholder="Doe"
              {...register("lastName", {
                required: true,
                minLength: {
                  value: 3,
                  message: "The name must be between 3 and 20 characters.",
                },
                maxLength: {
                  value: 20,
                  message: "The name must be between 3 and 20 characters.",
                },
              })}
            />
            {errors.lastName && (
              <Styled.WarningMessage>
                {errors.lastName.message}
              </Styled.WarningMessage>
            )}
          </div>
        </Styled.NameInputBox>
        <Styled.InputBox>
          <Styled.InputLabel>EMAIL</Styled.InputLabel>
          <Input
            type="email"
            size="100%"
            name="email"
            placeholder="jonhdoe@gmail.com"
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
          <Styled.InputLabel>PASSWORD</Styled.InputLabel>
          <Input
            type="password"
            size="100%"
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
        <Styled.RegistrationButtonBox>
          <LargeButton
            type="submit"
            size='395px'
            onClick={handleSubmit(onSubmit)}
          >
            SIGN UP
          </LargeButton>
        </Styled.RegistrationButtonBox>
      </Styled.RegistrationForm>
    </>
  );
};
