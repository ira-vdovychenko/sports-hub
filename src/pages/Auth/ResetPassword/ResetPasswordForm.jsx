import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPasswordChangeSuccess } from "../../../redux/actions/authActions.js";
import { verifyToken, changePassword } from "../../../services/AuthService.js";
import { Input } from "../../../components/Input/Input.jsx";
import { SecondarySmallButton, SmallTextButton, LargeButton } from "../../../components/Buttons/index.js";
import * as Styled from "./styled.js";

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const [errorState, setErrorState] = useState({ status: null, message: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const password = watch("password"); 

  const onSubmit = async (data) => {
    try {
      const tokenVerifyResult = await verifyToken();
      if (tokenVerifyResult.success) {
        const user = tokenVerifyResult.data.user;
        const userEmail = user.Email;
        const changePasswordResult = await changePassword(
          userEmail,
          data.password
        );
        if (changePasswordResult.success) {
          dispatch(setPasswordChangeSuccess(true));
          navigate("/login");
          setErrorState({ status: null, message: "" });
        } else {
          setErrorState({
            status: changePasswordResult.status || 400,
            message:
              changePasswordResult.error ||
              "Failed to change password. Please try again.",
          });
        }
      } else {
        setErrorState({
          status: tokenVerifyResult.status || 401,
          message:
            tokenVerifyResult.error || "Token is invalid. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error in ResetPasswordForm:", error);
      setErrorState({
        status: 500,
        message: "An error occurred while resetting password.",
      });
    }
  };

  return (
    <>
      <Styled.AuthPageHeader>
        <Styled.AuthLabel>Don’t have an account?</Styled.AuthLabel>
        <Styled.AuthButtonBox>
          <SecondarySmallButton size={"130px"}>
            <Link to="/register">Get Started</Link>
          </SecondarySmallButton>
        </Styled.AuthButtonBox>
      </Styled.AuthPageHeader>
      <Styled.ResetPasswordForm>
        <Styled.FormTitle>Please enter your new password.</Styled.FormTitle>
        {errorState.message ? (
          <Styled.WarningMessage>{errorState.message}</Styled.WarningMessage>
        ) : null}
        <Styled.InputBox>
          <Styled.InputLabel>New Password</Styled.InputLabel>
          <Input
            type="password"
            width={"100%"}
            name="password"
            placeholder="New Password"
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
              },
            })}
          />
          {errors.password && (
            <Styled.WarningMessage>
              {errors.password.message}
            </Styled.WarningMessage>
          )}
        </Styled.InputBox>
        <Styled.InputBox>
          <Styled.InputLabel>Confirm Password</Styled.InputLabel>
          <Input
            type="password"
            width={"100%"}
            name="confirmPassword"
            placeholder="Confirm Password"
            $error={errors.confirmPassword}
            $success={!!watch("confirmPassword")}
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <Styled.WarningMessage>
              {errors.confirmPassword.message}
            </Styled.WarningMessage>
          )}
        </Styled.InputBox>
        <Styled.SubmitButtonsBox>
          <LargeButton
            type="submit"
            size='395px'
            onClick={handleSubmit(onSubmit)}
          >
            SET NEW PASSWORD
          </LargeButton>
          <SmallTextButton buttonStyle={{fontWeight: '600', color: 'black'}} size="95px">
            <Link to="/login">Back to Log In</Link>
          </SmallTextButton>
        </Styled.SubmitButtonsBox>
      </Styled.ResetPasswordForm>
    </>
  );
};
