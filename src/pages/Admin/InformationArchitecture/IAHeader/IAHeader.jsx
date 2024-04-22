import React from "react";
import { useDispatch  } from "react-redux";
import { setSaveButtonClicked } from "../../../../redux/actions/iaActions";
import { SmallButton } from "../../../../components/Buttons/index";
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
        <SmallButton
          size="134px"
          buttonStyle={{fontWeight: '600'}}
          onClick={handleSaveButtonClick}
        >
          Save
        </SmallButton>
      </Styled.IAHeaderButtonBox>
    </Styled.IAHeaderBox>
  );
};
