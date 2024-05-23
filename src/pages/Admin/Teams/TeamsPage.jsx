import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTeam, updateTeam, deleteTeam, loadTeams, loadLocations, addLocation, setSelectedTeamForEdit, setSelectedTeamForDelete, setAddTeamButtonClicked, clearMapLocation } from "../../../redux/actions/teamActions.js";
import { loadCategories, loadSubcategories } from "../../../redux/actions/iaActions.js";
import * as CategoryService from "../../../services/CategoryService.js";
import * as SubcategoryService from "../../../services/SubcategoryService.js";
import * as TeamService from "../../../services/TeamService.js";
import { TeamsMap, TeamFormContainer, TeamTable } from "./index.js";
import { FlashMessage } from "../../../components/FlashMessage/FlashMessage.jsx";
import { Popup } from "../../../components/Popup/Popup.jsx";
import { ReactComponent as NegativeIcon } from "../../../assets/popupnegative.svg";
import { ReactComponent as WarningIcon } from "../../../assets/popupwarning.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/popupdelete.svg";
import { v4 as uuidv4 } from "uuid";
import * as Styled from "./styled";

export const TeamsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const addTeamButtonClicked = useSelector((state) => state.team.addTeamButtonClicked);
  const mapLocation = useSelector((state) => state.team.mapLocation);
  const teams = useSelector((state) => state.team.teams);
  const selectedTeamForEdit = useSelector((state) => state.team.selectedTeamForEdit);
  const selectedTeamForDelete = useSelector((state) => state.team.selectedTeamForDelete);

  const [mode, setMode] = useState("default");
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isTeamEdited, setIsTeamEdited] = useState(false);
  const [currentEditingTeam, setCurrentEditingTeam] = useState({});
  const [nextEditingTeam, setNextEditingTeam] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);
  const [warningDeleteMessage, setWarningDeleteMessage] = useState(false);
  const [selectedId, setSelectedId] = useState({
    locationId: "",
    categoryId: "",
    subcategoryId: "",
    teamId: "",
  });
  const [teamData, setTeamData] = useState({
    LocationName: "",
    LocationID: "",
    SportName: "",
    SportID: "",
    LeagueName: "",
    LeagueID: "",
    TeamName: "",
    TeamID: "",
    date: "",
    logo: "",
  });

  useEffect(() => {
    if (mode === "add") {
      setTeamData({
        LocationName: "",
        SportName: "",
        LeagueName: "",
        TeamName: "",
      });
    } else if (mode === "default") {
      setTeamData({
        LocationName: "All",
        SportName: "All",
        LeagueName: "All",
        TeamName: "",
      });
    }
  }, [mode]);

  useEffect(() => {
    const fetchData = async () => {
      const locationsData = await TeamService.getLocations();
      dispatch(loadLocations(locationsData));

      const categoriesData = await CategoryService.getCategories();
      const categoriesArray = Object.values(categoriesData.sports);
      dispatch(loadCategories(categoriesArray));

      const subcategoriesData = await SubcategoryService.getSubcategories();
      dispatch(loadSubcategories(subcategoriesData));

      const teamsData = await TeamService.getTeams();
      dispatch(loadTeams(teamsData));
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (addTeamButtonClicked) {
      setIsFiltering(false);
      dispatch(setSelectedTeamForEdit(null));
      setMode("add");
    }
  }, [addTeamButtonClicked]);

  useEffect(() => {
    if (selectedTeamForEdit && isTeamEdited) {
      setWarningMessage(true);
      setNextEditingTeam(selectedTeamForEdit);
    } else if (selectedTeamForEdit && !isTeamEdited) {
      setMode("edit");
      dispatch(setAddTeamButtonClicked(false));
      setTeamData(selectedTeamForEdit);
      setIsFiltering(false);
      setCurrentEditingTeam(selectedTeamForEdit);
      setNextEditingTeam({});
    }
  }, [selectedTeamForEdit]);

  useEffect(() => {
    if (selectedTeamForDelete) {
      setMode("default");
      dispatch(setSelectedTeamForEdit(null));
      dispatch(setAddTeamButtonClicked(false));
      setIsFiltering(false);
      setWarningDeleteMessage(true);
    }
  }, [selectedTeamForDelete]);

  const confirmEditTeam = () => {
    setWarningMessage(false);
    setTeamData(nextEditingTeam);
    setCurrentEditingTeam(nextEditingTeam);
    dispatch(setSelectedTeamForEdit(nextEditingTeam));
    setNextEditingTeam({});
  };

  const cancelEditTeam = async () => {
    await dispatch(setSelectedTeamForEdit(currentEditingTeam));
    setWarningMessage(false);
  };

  const confirmDeleteTeam = () => {
    deleteTeamSubmit();
  };
  const cancelDeleteTeam = () => {
    setWarningDeleteMessage(false);
    dispatch(setSelectedTeamForDelete(null));
  };

  const addTeamSubmit = async (values) => {
    const { LocationID, SportID, LeagueID, TeamName, logo } = values;
    const addTeamData = {
      LocationID,
      SportID,
      LeagueID,
      TeamID: uuidv4(),
      TeamName,
      date: new Date().toLocaleDateString("en-GB"),
      logo: logo || "",
    };
    try {
      if (!token) {
        return;
      }
      if (!addTeamData.LocationID || !addTeamData.SportID || !addTeamData.LeagueID || !addTeamData.TeamName) {
        return;
      }
      await TeamService.createTeam(addTeamData);
      setSuccessMessage({
        title: "Your team is successfully added",
        description: "This team is added to your IA",
      });
      dispatch(addTeam(addTeamData));
      dispatch(addLocation(addTeamData.LocationID));
      setMode("default");
      dispatch(setSelectedTeamForEdit(null));
      dispatch(setAddTeamButtonClicked(false));
      dispatch(clearMapLocation());
    } catch (error) {
      setErrorMessage(true);
    }
  };

  const editTeamSubmit = async (values) => {
      const { LocationName, LocationID, SportID, LeagueID, TeamID, TeamName, date, logo } = values;
      const editTeamData = {
        LocationName,
        LocationID,
        SportID,
        LeagueID,
        TeamID,
        TeamName,
        date,
        logo: logo || "",
      };
      try {
        if (!token) {
          return;
        }
      await TeamService.updateTeam(TeamID, editTeamData);
      setSuccessMessage({
        title: "Your team is successfully updated",
        description: "The changes have been saved to your IA",
      });
      dispatch(updateTeam(TeamID, editTeamData));
      setIsTeamEdited(false);
      dispatch(setSelectedTeamForEdit(null));
      setMode("default");
      dispatch(clearMapLocation());
    } catch (error) {
      setErrorMessage(true);
    }
  };

  const deleteTeamSubmit = async () => {
    try {
      if (!token) {
        return;
      }
      await TeamService.deleteTeam(selectedTeamForDelete.TeamID);
      setWarningDeleteMessage(false);
      dispatch(deleteTeam(selectedTeamForDelete.TeamID));
      dispatch(setSelectedTeamForDelete(null));
    } catch (error) {
      setErrorMessage(true);
    }
  };

  const filterTeamsSubmit = () => {
    const filteredTeams = teams.filter((team) => {
      const isLocationMatch = selectedId.locationId
        ? team.LocationID === selectedId.locationId
        : true;
      const isCategoryMatch = selectedId.categoryId
        ? team.SportID === selectedId.categoryId
        : true;
      const isSubcategoryMatch = selectedId.subcategoryId
        ? team.LeagueID === selectedId.subcategoryId
        : true;
      const isTeamMatch = selectedId.teamId
        ? team.TeamID === selectedId.teamId
        : true;

      return (
        isLocationMatch && isCategoryMatch && isSubcategoryMatch && isTeamMatch
      );
    });
    setFilteredTeams(filteredTeams);
    setIsFiltering(true);
  };

  const handleSubmit = (values) => {
    if (mode === "add") {
      return addTeamSubmit(values);
    } else if (mode === "edit") {
      return editTeamSubmit(values);
    } else {
      return filterTeamsSubmit(values);
    }
  };
  const handleCancel = () => {
    setMode("default");
    setIsTeamEdited(false);
    dispatch(clearMapLocation());
    dispatch(setSelectedTeamForEdit(null));
    dispatch(setAddTeamButtonClicked(false));
    setIsFiltering(false);
  };

  return (
    <Styled.TeamsContainer>
      {successMessage ? (
        <FlashMessage
          type={"success"}
          width={"472px"}
          $top={"230px"}
          $right={"400px"}
          title={successMessage.title}
          description={successMessage.description}
          onClose={() => setSuccessMessage(null)}
        />
      ) : null}
      {errorMessage && (
        <Popup
          height={"216px"}
          icon={<NegativeIcon />}
          title={"Something went wrong!"}
          titleStyle={{ fontSize: 14, fontWeight: 700, paddingTop: 76 }}
          description={"Please try again later"}
          showCloseIcon={true}
          onClosePopup={() => setErrorMessage(null)}
        />
      )}
      {warningMessage && (
        <Popup
          height={"246px"}
          icon={<WarningIcon />}
          title={"You are on the way to publish the changes!"}
          titleStyle={{ fontSize: 14, fontWeight: 700, paddingTop: 76 }}
          description={"Publish all changes?"}
          showButtons={true}
          submitButton="Yes"
          cancelButton="Cancel"
          onClose={() => cancelEditTeam()}
          onSubmit={() => confirmEditTeam()}
        />
      )}
      {warningDeleteMessage && (
        <Popup
          height={"246px"}
          icon={<DeleteIcon />}
          title={"You are about to delete this team!"}
          titleStyle={{ fontSize: 14, fontWeight: 700, paddingTop: 76 }}
          description={
            <>
              This team will be deleted from sub category
              <br />
              Are you sure?
            </>
          }
          showButtons={true}
          submitButton="Delete"
          cancelButton="Cancel"
          onClose={() => cancelDeleteTeam()}
          onSubmit={() => confirmDeleteTeam()}
        />
      )}
      <Styled.TeamBox>
        <Styled.TeamsMapBox>
          <TeamsMap
            filteredTeams={filteredTeams}
            isFiltering={isFiltering}
            mapLocation={mapLocation}
            addTeamButtonClicked={addTeamButtonClicked}
            selectedTeamForEdit={selectedTeamForEdit}
          />
        </Styled.TeamsMapBox>
        <Styled.TeamsFormBox>
          <TeamFormContainer
            mode={mode}
            teamData={teamData}
            setSelectedId={setSelectedId}
            setIsTeamEdited={setIsTeamEdited}
            addTeamButtonClicked={addTeamButtonClicked}
            mapLocation={mapLocation}
            onSubmitForm={handleSubmit}
            onCancel={handleCancel}
          />
        </Styled.TeamsFormBox>
      </Styled.TeamBox>
      <Styled.TeamsTableBox>
        <TeamTable filteredTeams={filteredTeams} isFiltering={isFiltering} />
      </Styled.TeamsTableBox>
    </Styled.TeamsContainer>
  );
};
