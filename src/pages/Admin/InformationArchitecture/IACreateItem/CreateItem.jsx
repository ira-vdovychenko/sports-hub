import React, { useState } from "react";
import { Popup } from "../../../../components/Popup/Popup";
import { SignUpButton } from "../../../../components/Buttons/SignUp/SignUpButton";
import * as Styled from "./styled";

export const CreateItem = ({ itemType, onPress }) => {
  const [isVisible, setVisibility] = useState(false);
  const [itemName, setItemName] = useState("");

  const buttonTexts = {
    category: "+ Add category",
    subcategory: "+ Add subcategory",
    team: "+ Add team",
  };

  const handleButtonClick = () => {
    setVisibility(true);
  };

  const handlePopupClose = () => {
    setVisibility(false);
  };

  const handlePopupSubmit = (event) => {
    event.preventDefault();
    if (itemName.length !== 0) {
      onPress(itemType, itemName);
      setItemName("");
    }

    setVisibility(false);
  };

  return (
    <>
      <Styled.AddButtonBox>
        <SignUpButton isCreateItemButton onClick={handleButtonClick}>
          {buttonTexts[itemType]}
        </SignUpButton>
        {isVisible && (
          <Popup
            title={`Add new ${itemType}`}
            onSubmit={handlePopupSubmit}
            onClose={handlePopupClose}
            showForm
            showInput
            label={"name"}
            inputPlaceholder={`Name your ${itemType.toLowerCase()} item`}
            inputValue={itemName}
            onInputChange={(e) => setItemName(e.target.value)}
            submitButton="Add"
            cancelButton="Cancel"
            isVisible={isVisible}
            setVisibility={setVisibility}
          />
        )}
      </Styled.AddButtonBox>
    </>
  );
};
