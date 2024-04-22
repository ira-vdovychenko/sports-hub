import React from "react";
import { useDispatch  } from "react-redux";
import { setAddTeamButtonClicked } from "../../../../redux/actions/teamActions";
import { SmallButton } from "../../../../components/Buttons/index";
import * as Styled from "./styled";

export const TeamsHeader = () => {
  const dispatch = useDispatch();

  const handleAddTeamButtonClick = () => {
    dispatch(setAddTeamButtonClicked(true));
  };

  return (
    <Styled.TeamsHeaderBox>
      <Styled.TeamsHeaderTitle>Teams</Styled.TeamsHeaderTitle>
      <Styled.TeamsHeaderButtonBox>
        <SmallButton
          size="134px"
          buttonStyle={{fontWeight: '600'}}
          onClick={handleAddTeamButtonClick}
        >
          + Add team
        </SmallButton>
      </Styled.TeamsHeaderButtonBox>
    </Styled.TeamsHeaderBox>
  );
};
