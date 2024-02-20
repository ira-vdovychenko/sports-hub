import React from "react";
import { useDispatch  } from "react-redux";
import { setSaveButtonClicked } from "../../../../redux/actions/iaActions";
import { LogInButton } from "../../../../components/Buttons/LogIn/LogInButton";
import * as Styled from "./styled";

export const IAHeader = () => {
  const dispatch = useDispatch();

  const handleSaveButtonClick = () => {
    dispatch(setSaveButtonClicked(true));
  };

  return (
    <Styled.IAHeaderBox>
      <Styled.IAHeaderTitle>Information Architecture</Styled.IAHeaderTitle>
      <Styled.IAHeaderButtonBox>
        <LogInButton
          color="#FFF"
          backgroundcolor="#D72130"
          width="134px"
          onClick={handleSaveButtonClick}
        >
          Save
        </LogInButton>
      </Styled.IAHeaderButtonBox>
    </Styled.IAHeaderBox>
  );
};
