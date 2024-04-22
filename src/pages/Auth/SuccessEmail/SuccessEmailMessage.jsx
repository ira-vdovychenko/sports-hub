import React from "react";
import SentEmailIcon from '../../../assets/sentemail.svg';
import * as Styled from "./styled.js";

export const SuccessEmailMessage = ({ email }) => {
    return (
        <Styled.SuccessEmailContainer>
            <Styled.SuccessEmailIcon>
            <img src={SentEmailIcon} alt="Sent email icon" />
            </Styled.SuccessEmailIcon>
            <Styled.SuccessEmailTitle>Check your email {email}</Styled.SuccessEmailTitle>
            <Styled.SuccessEmailText>
                If there's Sports Hub account linked to this email address, we'll send over instructions to reset your password.
            </Styled.SuccessEmailText>
        </Styled.SuccessEmailContainer>
    )
}