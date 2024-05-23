import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useFormikContext, Field, Form } from "formik";
import { Input } from "../../../../components/Input/Input.jsx";
import { LongButton, SmallTextButton } from "../../../../components/Buttons/index.js";
import { ReactComponent as AddLogoIcon } from "../../../../assets/add-logo-icon.svg";
import * as Styled from "./styled.js";

export const TeamFormFields = ({ mode, mapLocation, addTeamButtonClicked, setIsTeamEdited, setSelectedId, onCancel }) => {
  const teams = useSelector((state) => state.team.teams);
  const locations = useSelector((state) => state.team.locations);
  const categories = useSelector((state) => state.ia.categories);
  const subcategories = useSelector((state) => state.ia.subcategories);

  const fileInputRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    location: false,
    category: false,
    subcategory: false,
    teamName: false,
  });

  const { values, setFieldValue, dirty, handleChange, handleSubmit } = useFormikContext(); 

  useEffect(() => {
    if (mapLocation) {
      setFieldValue("LocationName", mapLocation.LocationName);
      setFieldValue("LocationID", mapLocation.LocationID);
    }
  }, [mapLocation]);

  useEffect(() => {
    if (mode === "edit" && dirty) {
      setIsTeamEdited(true);
    }
  }, [dirty]);

  const handleLocationSelect = (location) => {
    setFieldValue("LocationName", location.LocationName);
    setFieldValue("LocationID", location.LocationID);
    if (mode === "default") {
        setSelectedId({locationId: location.LocationID})
    }
    toggleMenu("location");
  };

  const handleCategorySelect = (category) => {
    setFieldValue("SportName", category.SportName);
    setFieldValue("SportID", category.SportID);
    if (mode === "default") {
        setSelectedId({categoryId: category.SportID})
    }
    toggleMenu("category");
  };

  const handleSubcategorySelect = (subcategory) => {
    setFieldValue("LeagueName", subcategory.LeagueName);
    setFieldValue("LeagueID", subcategory.LeagueID);
    if (mode === "default") {
        setSelectedId({subcategoryId: subcategory.LeagueID})
    }
    toggleMenu("subcategory");
  };

  const handleTeamSelect = (team) => {
    setFieldValue("TeamName", team.TeamName);
    setFieldValue("TeamID", team.TeamID);
    if (mode === "default") {
        setSelectedId({teamId: team.TeamID})
    }
    toggleMenu("teamName");
  };

  const filteredItems = (type) => {
    switch (type) {
      case "locations":
        return values.LocationName && values.LocationName.length > 0
          ? locations.filter((location) =>
              location.LocationName.toLowerCase().includes(
                values.LocationName.toLowerCase()
              )
            )
          : [];
      case "teams":
        return values.TeamName && values.TeamName.length > 0
          ? teams.filter((team) =>
              team.TeamName.toLowerCase().includes(
                values.TeamName.toLowerCase()
              )
            )
          : [];
      default:
        return [];
    }
  };

  const toggleMenu = (type) => {
    setDropdownState((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const triggerFileInput = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <Styled.TeamsForm onSubmit={handleSubmit}>
      <Styled.InputBox>
        <Styled.InputLabel>Select location</Styled.InputLabel>
        <Styled.DropdownContainer>
          <Styled.InputButtonContainer>
            <Field
              as={Input}
              type="text"
              name="LocationName"
              placeholder="Select location"
              value={values.LocationName}
              onChange={(e) => {
                handleChange(e);
                const newName = e.target.value;
                setIsFiltered(newName.length > 0);
                if (newName.length > 0) {
                  toggleMenu("location");
                }
              }}
            />
            <Styled.DropDownButton
              type="button"
              onClick={() => toggleMenu("location")}
            >
              <Styled.MenuDownIcon />
            </Styled.DropDownButton>
          </Styled.InputButtonContainer>
          {dropdownState.location && (
            <Styled.DropdownList>
              {(isFiltered ? filteredItems("locations") : locations).map(
                (location) => (
                  <Styled.DropdownItem
                    type="button"
                    key={location.LocationID}
                    onClick={() => handleLocationSelect(location)}
                  >
                    <Styled.DropDownMenuItemText>
                      {location.LocationName}
                    </Styled.DropDownMenuItemText>
                  </Styled.DropdownItem>
                )
              )}
            </Styled.DropdownList>
          )}
        </Styled.DropdownContainer>
      </Styled.InputBox>

      <Styled.InputBox>
        <Styled.InputLabel>Select category</Styled.InputLabel>
        <Styled.DropdownContainer>
          <Styled.InputButtonContainer>
            <Field
              as={Input}
              type="text"
              name="SportName"
              placeholder="Select category"
              value={values.SportName}
            />
            <Styled.DropDownButton
              type="button"
              onClick={() => toggleMenu("category")}
            >
              <Styled.MenuDownIcon />
            </Styled.DropDownButton>
          </Styled.InputButtonContainer>
          {dropdownState.category && (
            <Styled.DropdownList>
              {categories
                .filter((category) => !category.isStatic)
                .map((category) => (
                  <Styled.DropdownItem
                    type="button"
                    key={category.SportID}
                    onClick={() => handleCategorySelect(category)}
                  >
                    <Styled.DropDownMenuItemText>
                      {category.SportName}
                    </Styled.DropDownMenuItemText>
                  </Styled.DropdownItem>
                ))}
            </Styled.DropdownList>
          )}
        </Styled.DropdownContainer>
      </Styled.InputBox>

      <Styled.InputBox>
        <Styled.InputLabel>Select subcategory</Styled.InputLabel>
        <Styled.DropdownContainer>
          <Styled.InputButtonContainer>
            <Field
              as={Input}
              type="text"
              name="LeagueName"
              placeholder="Select subcategory"
              value={values.LeagueName}
            />
            <Styled.DropDownButton
              type="button"
              onClick={() => toggleMenu("subcategory")}
            >
              <Styled.MenuDownIcon />
            </Styled.DropDownButton>
          </Styled.InputButtonContainer>
          {dropdownState.subcategory && (
            <Styled.DropdownList>
              {subcategories
                .filter((subcategory) => subcategory.SportID === values.SportID)
                .map((subcategory) => (
                  <Styled.DropdownItem
                    type="button"
                    key={subcategory.LeagueID}
                    onClick={() => handleSubcategorySelect(subcategory)}
                  >
                    <Styled.DropDownMenuItemText>
                      {subcategory.LeagueName}
                    </Styled.DropDownMenuItemText>
                  </Styled.DropdownItem>
                ))}
            </Styled.DropdownList>
          )}
        </Styled.DropdownContainer>
      </Styled.InputBox>

      <Styled.InputBox>
        <Styled.InputLabel>Team</Styled.InputLabel>
        <Styled.DropdownContainer>
          <Styled.InputButtonContainer>
            <Field
              as={Input}
              type="text"
              name="TeamName"
              placeholder="Select team"
              value={values.TeamName}
              onChange={(e) => {
                handleChange(e);
                toggleMenu("teamName");
              }}
            />
          </Styled.InputButtonContainer>
          {dropdownState.teamName && (
            <Styled.DropdownList>
              {filteredItems("teams").map((team) => (
                <Styled.DropdownItem
                  type="button"
                  key={team.TeamID}
                  onClick={() => handleTeamSelect(team)}
                >
                  <Styled.DropDownMenuItemText>
                    {team.TeamName}
                  </Styled.DropDownMenuItemText>
                </Styled.DropdownItem>
              ))}
            </Styled.DropdownList>
          )}
        </Styled.DropdownContainer>
      </Styled.InputBox>

      <Styled.FileInputBox
        $isVisible={addTeamButtonClicked || mode === "edit"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {values.logo && !isHovering && (
          <Styled.TeamLogoBox>
            <img
              src={values.logo}
              alt="Team Logo"
              style={{ width: "204px", height: "100%", objectFit: "contain" }}
            />
          </Styled.TeamLogoBox>
        )}
        {isHovering && (
          <>
            <Styled.FileInputIconBox>
              <AddLogoIcon />
            </Styled.FileInputIconBox>
            <Styled.FileInputButtonBox>
              <SmallTextButton
                type="button"
                onClick={triggerFileInput}
                buttonStyle={{ textAlign: "center", fontWeight: "600" }}
                size="130px"
              >
                <span style={{ color: "red" }}>Add logo</span>{" "}
                <span style={{ color: "black" }}>right here</span>
              </SmallTextButton>
            </Styled.FileInputButtonBox>
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              inputStyle={{ visibility: "hidden" }}
              name="logo"
              onChange={(e) => {
                handleChange(e);
                const file = e.target.files[0];
                if (file) {
                  const logoUrl = URL.createObjectURL(file);
                  setFieldValue("logo", logoUrl);
                }
              }}
            />
          </>
        )}
      </Styled.FileInputBox>
      <Styled.ButtonsBox>
        <LongButton 
          type="submit" 
          buttonStyle={{fontWeight: '400'}} 
          disabled={
            mode === 'add'
              ? values.SportName === '' || 
              values.LeagueName === '' || 
              values.TeamName === '' || 
              values.LocationID === ''
              : !dirty
          }
        >
          {mode === "edit" ? "Save" : mode === "default" ? "Apply" : "Add to list"}
        </LongButton>
        <SmallTextButton
          type="button"
          buttonStyle={{ textAlign: "center" }}
          disabled={
            mode === "add"
              ? values.SportName === "" ||
                values.LeagueName === "" ||
                values.TeamName === "" ||
                values.LocationID === ""
              : !dirty
          }
          onClick={onCancel}
        >
          Cancel
        </SmallTextButton>
      </Styled.ButtonsBox>
    </Styled.TeamsForm>
  );
};
