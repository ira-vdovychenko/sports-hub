import React from "react";
import LogInButton from "../Buttons/LogIn/LogInButton";
import SignUpButton from "../Buttons/SignUp/SignUpButton";
import * as Styled from "./styled";

export default function Profile() {
    return(
        <Styled.Profile>
            <SignUpButton>Sign Up</SignUpButton>
            <LogInButton>Log In</LogInButton>
        </Styled.Profile>
    )
}