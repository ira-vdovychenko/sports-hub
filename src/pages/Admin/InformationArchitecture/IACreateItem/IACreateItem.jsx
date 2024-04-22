import React, { useState } from "react";
import { Popup } from "../../../../components/Popup/Popup.jsx";
import { SmallTextButton } from "../../../../components/Buttons/index.js";
import * as Styled from "./styled.js";

export const IACreateItem = ({ itemType, onPress }) => {
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
        <SmallTextButton $isCreateItemButton onClick={handleButtonClick}>
          {buttonTexts[itemType]}
        </SmallTextButton>
        {isVisible && (
          <Popup
            title={`Add new ${itemType}`}
            onSubmit={handlePopupSubmit}
            onClose={handlePopupClose}
            showForm
            showInput
            showButtons={true}
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
