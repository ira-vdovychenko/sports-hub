import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Input } from "../../../../components/Input/Input.jsx";
import { LongButton, SmallTextButton } from "../../../../components/Buttons/index.js";
import { ReactComponent as AddLogoIcon } from "../../../../assets/add-logo-icon.svg";
import * as Styled from "./styled.js";

export const TeamForm = ({mode, teamData, setTeamData, setSelectedLocationId, setSelectedCategoryId, setSelectedSubcategoryId,setSelectedTeamId, isTeamEdited, setIsTeamEdited, editingTeamInitialState, addTeamButtonClicked, mapLocation,onSubmit, onCancel }) => {
  const teams = useSelector((state) => state.team.teams);
  const locations = useSelector((state) => state.team.locations);
  const categories = useSelector((state) => state.ia.categories);
  const subcategories = useSelector((state) => state.ia.subcategories);
  const fileInputRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSubcategory, setIsOpenSubcategory] = useState(false);
  const [isOpenTeamName, setIsOpenTeamName] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (mapLocation && mapLocation.LocationName) {
      const { LocationID, LocationName } = mapLocation;
      setTeamData((prevTeamData) => ({
        ...prevTeamData,
        LocationName,
        LocationID,
      }));
    }
  }, [mapLocation, setTeamData]);
  

  useEffect(() => {
    if (mode === 'add') {
      setIsDisabled(!addTeamButtonClicked);
    } else if (mode === 'edit') {
      setIsDisabled(!isTeamEdited);
    } else if (mode === 'default') {
      setIsDisabled(true)
    }
  }, [isTeamEdited, mode]);

  const handleInputChange = (value, field) => {
    setTeamData((prevTeamData) => {
      const updatedTeamData = { ...prevTeamData, [field]: value };
      const teamEdited = checkIsTeamEdited(updatedTeamData);
      setIsTeamEdited(teamEdited);
      return updatedTeamData;
    });
  };

  const checkIsTeamEdited = (updatedTeamData) => {
    if (mode === "edit") {
      for (const key in updatedTeamData) {
        if (updatedTeamData[key] !== editingTeamInitialState[key]) {
          return true;
        }
      }
      return false;
    }
    return false;
  };

  const filteredLocations = teamData.LocationName && teamData.LocationName.length > 0 
    ? locations.filter((location) => location.LocationName && location.LocationName.toLowerCase().includes(teamData.LocationName.toLowerCase()))
    : [];

  const filteredSubcategories = subcategories.filter((sub) => sub.SportID === selectedCategory);

  const filteredTeams = teamData.TeamName && teamData.TeamName.length > 0 
    ? teams.filter((team) => team.TeamName && team.TeamName.toLowerCase().includes(teamData.TeamName.toLowerCase()))
    : [];
  
  const handleLocationInputChange = (e) => {
    const newName = e.target.value;
    setTeamData((prevTeamData) => ({
      ...prevTeamData,
      LocationName: newName,
    }));
    handleInputChange(newName, 'LocationName')
    setIsOpenLocation(newName.length > 0 );
    setIsFiltered(newName.trim().length > 0);
  };

  const handleLocationSelect = ({ LocationID,LocationName }) => {
    setTeamData((prevTeamData) => ({
      ...prevTeamData,
      LocationID: LocationID,
      LocationName: LocationName,
    }));
    handleInputChange(LocationID, "LocationID");
    handleInputChange(LocationName, "LocationName");
    if (mode === "default") {
      setSelectedLocationId(LocationID);
      setIsDisabled(false);
    }
    setIsOpenLocation(false);
  };
  
  const handleCategorySelect = ({ SportID, SportName }) => {
    setSelectedCategory(SportID);
    setTeamData((prevTeamData) => ({
      ...prevTeamData,
      SportID,
      SportName,
    }));
    handleInputChange(SportID, "SportID");
    handleInputChange(SportName, "SportName");
    if (mode === "default") {
      setSelectedCategoryId(SportID);
      setIsDisabled(false);
    }
    setIsOpenCategory(false);
    setIsOpenSubcategory(false);
  };

  const handleSubcategorySelect = ({ LeagueID, LeagueName }) => {
    setTeamData((prevTeamData) => ({
      ...prevTeamData,
      LeagueID,
      LeagueName,
    }));
    handleInputChange(LeagueID, "LeagueID");
    handleInputChange(LeagueName, "LeagueName");
    if (mode === "default") {
      setSelectedSubcategoryId(LeagueID);
      setIsDisabled(false);
    }
    setIsOpenSubcategory(false);  
  };

  const handleTeamNameInputChange = (e) => {
    const newName = e.target.value;
    setTeamData((prevTeamData) => ({
      ...prevTeamData,
      TeamName: newName,
    }));
    handleInputChange(newName, "TeamName"); 
    setIsOpenTeamName(newName.length > 0);
  };

  const handleTeamNameSelect = ({ TeamID, TeamName}) => {
    setTeamData((prevTeamData) => ({
      ...prevTeamData,
      TeamName,
      TeamID,
    }));
    handleInputChange(TeamName, "TeamName");
    handleInputChange(TeamID, "TeamID");
    if (mode === "default") {
      setSelectedTeamId(TeamID);
      setIsDisabled(false);
    }
    setIsOpenTeamName(false);
  };

  const triggerFileInput = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleLogoChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const logoUrl = URL.createObjectURL(file);
      setTeamData((prevTeamData) => ({
        ...prevTeamData,
        logo: logoUrl,
      }));
      handleInputChange(logoUrl, "logo");
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const toggleDropdownLocation = (e) => {
    e.preventDefault();
    setIsOpenLocation((prevIsOpenLocation) => {
      const nextIsOpenLocation = !prevIsOpenLocation;
      if (nextIsOpenLocation) {
        setIsOpenCategory(false);
        setIsOpenSubcategory(false);
        setIsOpenTeamName(false);
      }
      return nextIsOpenLocation;
    });
  };

  const toggleDropdownCategory = (e) => {
    e.preventDefault();
    setIsOpenCategory((prevIsOpenCategory) => {
      const nextIsOpenCategory = !prevIsOpenCategory;
      if (nextIsOpenCategory) {
        setIsOpenLocation(false);
        setIsOpenSubcategory(false);
        setIsOpenTeamName(false);
      }
      return nextIsOpenCategory;
    });
  };

  const toggleDropdownSubcategory = (e) => {
    e.preventDefault();
    setIsOpenSubcategory((prevIsOpenSubcategory) => {
      const hasSubcategories = subcategories.some(
        (sub) => sub.SportID === selectedCategory
      );
      const nextIsOpenSubcategory = !prevIsOpenSubcategory && hasSubcategories;
      if (nextIsOpenSubcategory) {
        setIsOpenLocation(false);
        setIsOpenCategory(false);
        setIsOpenTeamName(false);
      }
      return nextIsOpenSubcategory;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  const handleCancel = (e) => {
      e.preventDefault();
      onCancel();
  };

  return (
    <Styled.TeamsForm onSubmit={handleSubmit}>
      <Styled.InputBox>
        <Styled.InputLabel>Select location</Styled.InputLabel>
        <Styled.DropdownContainer>
          <Styled.InputButtonContainer>
            <Input
              width={"246px"}
              name="LocationName"
              value={teamData.LocationName}
              onChange={handleLocationInputChange}
              placeholder="Select location"
            />
            <Styled.DropDownButton onClick={toggleDropdownLocation}>
              <Styled.MenuDownIcon />
            </Styled.DropDownButton>
          </Styled.InputButtonContainer>
          {isOpenLocation && (
            <Styled.DropdownList>
              {(isFiltered ? filteredLocations : locations).map((location) => (
                <Styled.DropdownItem
                  key={location.LocationID}
                  onClick={() => handleLocationSelect(location)}
                >
                  <Styled.DropDownMenuItemText>
                    {location.LocationName}
                  </Styled.DropDownMenuItemText>
                </Styled.DropdownItem>
              ))}
            </Styled.DropdownList>
          )}
        </Styled.DropdownContainer>
      </Styled.InputBox>
      <Styled.InputBox>
        <Styled.InputLabel>select category</Styled.InputLabel>
        <Styled.DropdownContainer>
          <Styled.InputButtonContainer>
            <Input
              width={"246px"}
              name="SportName"
              value={teamData.SportName}
              onChange={() => {}}
              placeholder="Select category"
            />
            <Styled.DropDownButton onClick={toggleDropdownCategory}>
              <Styled.MenuDownIcon />
            </Styled.DropDownButton>
          </Styled.InputButtonContainer>
          {isOpenCategory && (
            <Styled.DropdownList>
              {categories
                .filter((category) => !category.isStatic)
                .map((category) => (
                  <Styled.DropdownItem
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
        <Styled.InputLabel>select subcategory</Styled.InputLabel>
        <Styled.DropdownContainer>
          <Styled.InputButtonContainer>
            <Input
              width={"246px"}
              name="LeagueName"
              value={teamData.LeagueName}
              onChange={() => {}}
              placeholder="Select subcategory"
            />
            <Styled.DropDownButton onClick={toggleDropdownSubcategory}>
              <Styled.MenuDownIcon />
            </Styled.DropDownButton>
          </Styled.InputButtonContainer>
          {isOpenSubcategory && (
            <Styled.DropdownList>
              {filteredSubcategories.map((subcategory) => (
                <Styled.DropdownItem
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
        <Styled.InputLabel>Team Name</Styled.InputLabel>
        <Styled.DropdownContainer>
          <Input
            width={"246px"}
            name="TeamName"
            value={teamData.TeamName}
            onChange={handleTeamNameInputChange}
            placeholder="Name of team or player"
          />
          {isOpenTeamName && filteredTeams.length > 0 && (
            <Styled.DropdownList>
              {filteredTeams.map((team) => (
                <Styled.DropdownItem
                  key={team.TeamID}
                  onClick={() => {
                    handleTeamNameSelect(team);
                    setIsOpenTeamName(false);
                  }}
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
        {teamData.logo && !isHovering && (
          <Styled.TeamLogoBox>
            <img
              src={teamData.logo}
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
                onClick={triggerFileInput}
                buttonStyle={{textAlign: 'center', fontWeight: '600'}}
                size="130px"
              >
                <span style={{ color: "red" }}>Add logo</span>{" "}
                <span style={{ color: "black" }}>right here</span>
              </SmallTextButton>
            </Styled.FileInputButtonBox>
            <Input
              ref={fileInputRef}
              width={"246px"}
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              inputStyle={{ visibility: "hidden" }}
            />
          </>
        )}
      </Styled.FileInputBox>
      <Styled.ButtonsBox>
        <LongButton
          type="submit"
          buttonStyle={{fontWeight: '400'}}
          disabled={isDisabled}
        >
          {mode === "edit" ? "Save" : mode === "default" ? "Apply" : "Add Team"}
        </LongButton>
        <SmallTextButton
          size="95px"
          $textAlign='center'
          buttonStyle={{textAlign: 'center'}}
          onClick={handleCancel}
          disabled={isDisabled}
        >
          Cancel
        </SmallTextButton>
      </Styled.ButtonsBox>
    </Styled.TeamsForm>
  );
}  
