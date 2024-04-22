import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTeam, updateTeam, deleteTeam, loadTeams, loadLocations, addLocation, setSelectedTeamForEdit, setSelectedTeamForDelete, setAddTeamButtonClicked, clearMapLocation} from "../../../redux/actions/teamActions.js";
import { loadCategories, loadSubcategories } from "../../../redux/actions/iaActions.js";
import * as CategoryService from "../../../services/CategoryService.js";
import * as SubcategoryService from "../../../services/SubcategoryService.js";
import * as TeamService from "../../../services/TeamService.js";
import { TeamsMap, TeamForm, TeamTable } from "./index.js";
import { FlashMessage } from "../../../components/FlashMessage/FlashMessage.jsx";
import { Popup } from "../../../components/Popup/Popup.jsx";
import { ReactComponent as NegativeIcon } from "../../../assets/popupnegative.svg";
import { ReactComponent as WarningIcon } from "../../../assets/popupwarning.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/popupdelete.svg";
import { v4 as uuidv4 } from "uuid";
import * as Styled from "./styled";

export const TeamsPage = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const addTeamButtonClicked = useSelector((state) => state.team.addTeamButtonClicked);
  const mapLocation = useSelector((state) => state.team.mapLocation);
  const teams = useSelector((state) => state.team.teams);
  const selectedTeamForEdit = useSelector((state) => state.team.selectedTeamForEdit);
  const selectedTeamForDelete = useSelector((state) => state.team.selectedTeamForDelete);
  const [mode, setMode] = useState("default");
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [selectedLocaionId, setSelectedLocationId] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(""); 
  const [selectedTeamId, setSelectedTeamId] = useState(""); 
  const [isTeamEdited, setIsTeamEdited] = useState(false);
  const [editingTeamInitialState, setEditingTeamInitialState] = useState({});
  const [currentEditingTeam, setCurrentEditingTeam] = useState({});
  const [nextEditingTeam, setNextEditingTeam] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);
  const [warningDeleteMessage, setWarningDeleteMessage] = useState(false);

  const getInitialTeamData = () => ({
    LocationID: "",
    LocationName: "All",
    SportID: "",
    SportName: "All",
    LeagueID: "",
    LeagueName: "All",
    TeamID: "",
    TeamName: "",
    date: new Date(),
    logo: "",
  });

  const [teamData, setTeamData] = useState(getInitialTeamData());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationsData = await TeamService.getLocations();
        dispatch(loadLocations(locationsData));

        const categoriesData = await CategoryService.getCategories();
        const categoriesArray = Object.values(categoriesData.sports);
        dispatch(loadCategories(categoriesArray));

        const subcategoriesData = await SubcategoryService.getSubcategories();      
        dispatch(loadSubcategories(subcategoriesData));

        const teamsData = await TeamService.getTeams();
        dispatch(loadTeams(teamsData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  
  useEffect(() => {
    if (mode === "default") {
      setTeamData(getInitialTeamData());
    }
  }, [mode]);

  useEffect(() => {
    if (addTeamButtonClicked) {
      setIsFiltering(false);
      dispatch(setSelectedTeamForEdit(null));
      setMode("add");
      setTeamData({
        LocationID: "",
        LocationName: "",
        SportID: "",
        SportName: "",
        LeagueID: "",
        LeagueName: "",
        TeamID: "",
        TeamName: "",
        date: new Date(),
        logo: "",
      });
    }
  }, [addTeamButtonClicked]);

  useEffect(() => {
    if (selectedTeamForEdit && isTeamEdited) {
      setWarningMessage(true);
      setNextEditingTeam(selectedTeamForEdit);
    } else if (selectedTeamForEdit && !isTeamEdited) {
      setMode("edit");
      dispatch(setAddTeamButtonClicked(false));
      setIsFiltering(false);
      const editTeamData = {
        LocationID: selectedTeamForEdit.LocationID,
        LocationName: selectedTeamForEdit.LocationName,
        SportID: selectedTeamForEdit.SportID,
        SportName: selectedTeamForEdit.SportName,
        LeagueID: selectedTeamForEdit.LeagueID,
        LeagueName: selectedTeamForEdit.LeagueName,
        TeamID: selectedTeamForEdit.TeamID,
        TeamName: selectedTeamForEdit.TeamName,
        Longitude: selectedTeamForEdit.Longitude,
        Latitude: selectedTeamForEdit.Latitude,
        date: selectedTeamForEdit.date,
        logo: selectedTeamForEdit.logo,
      };
      setTeamData(editTeamData);
      setEditingTeamInitialState(editTeamData);
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

  const addTeamSubmit = async (e) => {
    e.preventDefault();
    const addTeamData = {
      LocationID: teamData.LocationID,
      SportID: teamData.SportID,
      LeagueID: teamData.LeagueID,
      TeamID: uuidv4(),
      TeamName: teamData.TeamName,
      date: teamData.date.toLocaleDateString("en-GB"),
      logo: teamData.logo || "",
    };

    try {
      if (
        !teamData.LocationID || !teamData.SportID || !teamData.LeagueID || !teamData.TeamName) {
        return;
      }
      if (!token) {
        return;
      }
      await TeamService.createTeam(addTeamData);
      setSuccessMessage({
        title: "Your team is successfully added",
        description: "This team is added to your IA",
      });
      dispatch(addTeam(addTeamData));
      dispatch(addLocation(addTeamData.LocationID));
      setMode('default');
      setTeamData(getInitialTeamData());
      dispatch(setSelectedTeamForEdit(null));
      dispatch(setAddTeamButtonClicked(false));
      dispatch(clearMapLocation());
    } catch (error) {
      setErrorMessage(true);
    }
  };

  const editTeamSubmit = async (e) => {
    e.preventDefault();
    const editTeamData = {
      LocationID: teamData.LocationID,
      SportID: teamData.SportID,
      LeagueID: teamData.LeagueID,
      TeamID: teamData.TeamID,
      TeamName: teamData.TeamName,
      date: teamData.date,
      logo: teamData.logo || "",
    };

    try {
      if (
        !isTeamEdited ||
        !teamData.LocationID ||
        !teamData.SportID ||
        !teamData.LeagueID ||
        !teamData.TeamName
      ) {
        return;
      }
      if (!token) {
        return;
      }
      await TeamService.updateTeam(teamData.TeamID, editTeamData);
      setSuccessMessage({
        title: "Your team is successfully updated",
        description: "The changes have been saved to your IA",
      });
      dispatch(updateTeam(teamData.TeamID, teamData));
      setIsTeamEdited(false);
      dispatch(setSelectedTeamForEdit(null));
      setMode('default');
      dispatch(clearMapLocation());
      setTeamData(getInitialTeamData());
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
    const filteredTeams = teams.filter(team => {
      const isLocationMatch = selectedLocaionId ? team.LocationID === selectedLocaionId : true;
      const isCategoryMatch = selectedCategoryId ? team.SportID === selectedCategoryId : true;
      const isSubcategoryMatch = selectedSubcategoryId ? team.LeagueID === selectedSubcategoryId : true;
      const isTeamMatch = selectedTeamId ? team.TeamID === selectedTeamId : true;
  
      return isLocationMatch && isCategoryMatch && isSubcategoryMatch && isTeamMatch;
    });
    setFilteredTeams(filteredTeams);
    setIsFiltering(true);
  };

  const handleCancel = () => {
    setMode('default');
    setTeamData(getInitialTeamData());
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
          $right={'400px'}
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
          description={<>This team will be deleted from sub category<br />Are you sure?</>}
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
          <TeamForm
            mode={mode}
            teamData={teamData}
            setTeamData={setTeamData}
            setSelectedLocationId={setSelectedLocationId}
            setSelectedCategoryId={setSelectedCategoryId}
            setSelectedSubcategoryId={setSelectedSubcategoryId}
            setSelectedTeamId={setSelectedTeamId}
            isTeamEdited={isTeamEdited}
            setIsTeamEdited={setIsTeamEdited}
            editingTeamInitialState={editingTeamInitialState}
            addTeamButtonClicked={addTeamButtonClicked}
            mapLocation={mapLocation}
            onSubmit={mode === "add" ? addTeamSubmit : (mode === "edit" ? editTeamSubmit : filterTeamsSubmit)}
            onCancel={handleCancel}
          />
        </Styled.TeamsFormBox>
      </Styled.TeamBox>
      <Styled.TeamsTableBox>
        <TeamTable
          filteredTeams={filteredTeams}
          isFiltering={isFiltering}
        />
      </Styled.TeamsTableBox>
    </Styled.TeamsContainer>
  );
};
