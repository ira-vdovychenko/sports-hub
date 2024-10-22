import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { checkUserEmail, sendEmail, getToken } from "../../../services/AuthService.js";
import { setToken } from "../../../redux/actions/authActions.js";
import { useAuth } from "../../../context/AuthContext.jsx";
import { Link } from "react-router-dom";
import { Input } from "../../../components/Input/Input.jsx";
import { SecondarySmallButton, SmallTextButton, LargeButton} from "../../../components/Buttons/index.js";
import { SuccessEmailMessage } from "../index.js";
import * as Styled from "./styled.js";

export const ForgotPasswordForm = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [errorState, setErrorState] = useState({ status: null, message: "" });
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async ({ email }) => {
    try {
      const userEmail = await checkUserEmail(email);
      if (userEmail) {
        const res = await sendEmail({ email: userEmail });
        if (res.message === "Email sent successfully") {
          setEmailSent(true);
          setErrorState({ status: null, message: "" });

          const getTokenResult = await getToken({ email: userEmail });
          if (getTokenResult.success) {
            const accessToken = getTokenResult.data.accessToken;
            dispatch(setToken(accessToken));
            handleLogin(userEmail, null, false, accessToken, null);
          } else {
            console.error("Failed to get token:", getTokenResult.error);
          }
        } else {
          setErrorState({ status: "error", message: res.message });
        }
      } else {
        setErrorState({
          status: "error",
          message: "User with this email does not exist.",
        });
      }
    } catch (error) {
      setErrorState({ status: "error", message: "An error occurred." });
    }
    setEmail(email);
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
      {emailSent ? (
        <SuccessEmailMessage email={email} />
      ) : (
        <Styled.ForgotPasswordForm>
          <Styled.FormTitle>Forgot your password?</Styled.FormTitle>
          {errorState.message ? (
            <Styled.WarningMessage>{errorState.message}</Styled.WarningMessage>
          ) : (
            <Styled.FormDescription>
              Enter your email address below and <br />
              we’ll get you back on track.
            </Styled.FormDescription>
          )}
          <Styled.InputBox>
            <Styled.InputLabel>Email address</Styled.InputLabel>
            <Input
              type="email"
              size="100%"
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
          <Styled.SubmitButtonsBox>
            <LargeButton
              type="submit"
              size='395px'
              onClick={handleSubmit(onSubmit)}
            >
              REQUEST RESET LINK
            </LargeButton>
            <SmallTextButton buttonStyle={{fontWeight: '600', color: 'black'}} size="95px">
              <Link to="/login">Back to Log In</Link>
            </SmallTextButton>
          </Styled.SubmitButtonsBox>
        </Styled.ForgotPasswordForm>
      )}
    </>
  );
};
