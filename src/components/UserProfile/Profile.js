import {React, useState} from "react";
import LogInButton from "../Buttons/LogIn/LogInButton";
import SignUpButton from "../Buttons/SignUp/SignUpButton";
import ellipse from "../../assets/Ellipse.png";
import * as Styled from "./styled";

export default function Profile() {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [auth, setAuth] = useState(true);

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <Styled.ProfileContainer>
            {auth ? (
                <Styled.User>
                    <Styled.UserImage src={ellipse} alt="User's Image" />
                    <Styled.UserName>Ivan Baloh</Styled.UserName>
                    <Styled.DropDownSurvey>
                    <Styled.DropDownButton onClick={toggleProfileMenu}>
                            {isProfileMenuOpen ? (
                                <Styled.MenuUpIcon /> 
                            ) : (
                                <Styled.MenuDownIcon /> 
                            )}
                        </Styled.DropDownButton>
                        {isProfileMenuOpen && (
                            <Styled.DropDownSurveyList>
                                <Styled.DropDownSurveyItem>Ivan Balon</Styled.DropDownSurveyItem>
                                <Styled.DropDownSurveyItem>
                                    <Styled.ItemEmail>ivanbaloh@gmail.com</Styled.ItemEmail>
                                </Styled.DropDownSurveyItem>
                                <Styled.DropDownSurveyItem>View profile</Styled.DropDownSurveyItem>
                                <Styled.DropDownSurveyItem>Change password</Styled.DropDownSurveyItem>
                                <Styled.DropDownSurveyItem>My surveys</Styled.DropDownSurveyItem>
                                <Styled.DropDownSurveyItem>Team Hub</Styled.DropDownSurveyItem>
                                <Styled.DropDownSurveyItem>Log out</Styled.DropDownSurveyItem>
                            </Styled.DropDownSurveyList>
                        )}
                    </Styled.DropDownSurvey>
                </Styled.User>
            ) : (
                <>
                    <SignUpButton>Sign Up</SignUpButton>
                    <LogInButton>Log In</LogInButton>
                </>
            )}
        </Styled.ProfileContainer>
    );
}