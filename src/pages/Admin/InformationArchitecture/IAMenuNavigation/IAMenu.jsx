import React, { useEffect, useRef, useState } from "react";
import { Popup } from "../../../../components/Popup/Popup";
import { ReactComponent as DeleteIcon } from "../../../../assets/popupdelete.svg";
import { ReactComponent as WarningIcon } from "../../../../assets/popupwarning.svg";
import * as Styled from "./styled";

export const IAMenu = ({
  item,
  itemType,
  isActive,
  onPress,
  onDelete,
  onEdit,
  name,
  onPressChangeVisibility,
  onPressToMove,
  categories,
  subcategories,
  selectedCategory,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [itemName, setItemName] = useState("");
  const [isMoveToOpen, setIsMoveToOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsHovering(false);
        setIsMoveToOpen(false);
        setActiveCategory("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleMouseOver = () => {
    if (!isDropdownOpen) setIsHovering(true);
  };

  const handleMouseOut = () => {
    if (!isDropdownOpen) setIsHovering(false);
  };

  const handleDeleteButtonClick = () => {
    setIsDeletePopupVisible(true);
  };

  const handleEditButtonClick = () => {
    setIsEditPopupVisible(true);
    setItemName(name);
  };

  const changeVisibility = (e) => {
    e.preventDefault();
    onPressChangeVisibility();
  };

  const handleMoveToCategory = (e, newCategoryId) => {
    e.preventDefault();
    if (itemType === "subcategory") {
      onPressToMove(newCategoryId, item, itemType);
      setIsDropdownOpen(false);
      setIsHovering(false);
      setIsMoveToOpen(false);
      setActiveCategory("");
    } else if (itemType === "team") {
      if (activeCategory === newCategoryId) {
        setActiveCategory("");
      } else {
        setActiveCategory(newCategoryId);
      }
    }
  };

  const handleMoveToSubcategory = (e, newSubcategoryId) => {
    e.preventDefault();
    if (itemType === "team") {
      onPressToMove(newSubcategoryId, item, itemType);
      setIsDropdownOpen(false);
      setIsHovering(false);
      setIsMoveToOpen(false);
      setActiveCategory("");
    }
  };

  const showDropdownItem = () => {
    if (itemType !== "category") return true;
    return itemType === "category" && !item.isStatic;
  };

  return (
    <Styled.MenuItem onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isHovering && (
        <Styled.ItemButton>
          <Styled.ItemIcon />
        </Styled.ItemButton>
      )}

      <Styled.ItemName
        style={{ color: isActive ? "#D72130" : "#B2B2B2" }}
        itemType={itemType}
        onClick={onPress}
      >
        {name}
      </Styled.ItemName>

      {item.isHidden && (
        <Styled.HiddenElement>
          <Styled.HiddenElementText>hidden</Styled.HiddenElementText>
        </Styled.HiddenElement>
      )}

      {isHovering && (
        <Styled.ItemButton>
          <Styled.MenuIcon onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
        </Styled.ItemButton>
      )}

      {isDropdownOpen && (
        <Styled.DropDownWrapper ref={dropdownRef}>
          <Styled.DropDownMenu>
            <Styled.DropDownMenuButton
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Styled.MenuIcon
                style={{ stroke: isDropdownOpen ? "#D72130" : "#B2B2B2" }}
              />
            </Styled.DropDownMenuButton>

            {itemType !== "category" && (
              <Styled.DropDownMenuElement>
                <Styled.DropDownMenuElementText
                  onClick={() => setIsMoveToOpen(!isMoveToOpen)}
                >
                  Move to
                </Styled.DropDownMenuElementText>
              </Styled.DropDownMenuElement>
            )}
            {isMoveToOpen && (
              <Styled.CategoriesDropDownMenu>
                {categories &&
                  categories.length > 0 &&
                  categories
                    .filter(
                      (category) =>
                        category.SportID !== selectedCategory?.SportID
                    )
                    .map(
                      (category) =>
                        !category.isStatic && (
                          <Styled.DropDownMenuElement
                            key={category.SportID}
                            onClick={(e) => {
                              handleMoveToCategory(e, category.SportID);
                            }}
                            onMouseOver={() => setHoveredCategory(category)}
                            onMouseOut={() => setHoveredCategory(null)}
                          >
                            <Styled.DropDownMenuElementText>
                              {category.SportName}
                            </Styled.DropDownMenuElementText>

                            {hoveredCategory === category &&
                              itemType === "team" && (
                                <Styled.SubcategoriesDropDownMenu>
                                  {subcategories &&
                                  subcategories[category.SportID] ? (
                                    subcategories[category.SportID].map(
                                      (subcategory) => (
                                        <Styled.DropDownMenuElement
                                          key={subcategory.LeagueID}
                                          onClick={(e) => {
                                            handleMoveToSubcategory(
                                              e,
                                              subcategory.LeagueID
                                            );
                                          }}
                                        >
                                          <Styled.DropDownMenuElementText>
                                            {subcategory.LeagueName}
                                          </Styled.DropDownMenuElementText>
                                        </Styled.DropDownMenuElement>
                                      )
                                    )
                                  ) : (
                                    <p>No subcategories available</p>
                                  )}
                                </Styled.SubcategoriesDropDownMenu>
                              )}
                          </Styled.DropDownMenuElement>
                        )
                    )}
              </Styled.CategoriesDropDownMenu>
            )}

            <Styled.DropDownMenuElement>
              <Styled.DropDownMenuElementText onClick={changeVisibility}>
                {item && item.isHidden ? "Show" : "Hide"}
              </Styled.DropDownMenuElementText>
            </Styled.DropDownMenuElement>
            {showDropdownItem() && (
              <Styled.DropDownMenuElement>
                <Styled.DropDownMenuElementText
                  onClick={handleDeleteButtonClick}
                >
                  Delete
                </Styled.DropDownMenuElementText>
              </Styled.DropDownMenuElement>
            )}
            {showDropdownItem() && (
              <Styled.DropDownMenuElement>
                <Styled.DropDownMenuElementText onClick={handleEditButtonClick}>
                  Edit
                </Styled.DropDownMenuElementText>
              </Styled.DropDownMenuElement>
            )}
          </Styled.DropDownMenu>
        </Styled.DropDownWrapper>
      )}

      {isDeletePopupVisible && (
        <Popup
          icon={<DeleteIcon />}
          title={`You are about to delete this ${itemType}!`}
          titleStyle={{ fontSize: 14, fontWeight: 700, paddingTop: 76 }}
          description={"Are you sure?"}
          submitButton="Delete"
          cancelButton="Cancel"
          isVisible={isDeletePopupVisible}
          onClose={() => setIsDeletePopupVisible(false)}
          onSubmit={() => {
            setIsDeletePopupVisible(false);
            onDelete && onDelete();
          }}
        />
      )}
      {isEditPopupVisible && (
        <Popup
          icon={<WarningIcon />}
          title={`You are about to edit this ${itemType}!`}
          titleStyle={{ fontSize: 14, fontWeight: 700, paddingTop: 76 }}
          description={"Are you sure?"}
          submitButton="Save"
          cancelButton="Cancel"
          showForm
          showInput
          inputPlaceholder={itemName}
          inputValue={itemName}
          onInputChange={(e) => setItemName(e.target.value)}
          isVisible={isEditPopupVisible}
          onClose={() => setIsEditPopupVisible(false)}
          onSubmit={() => {
            setIsEditPopupVisible(false);
            onEdit && onEdit(itemName, itemType);
          }}
        />
      )}
    </Styled.MenuItem>
  );
};
