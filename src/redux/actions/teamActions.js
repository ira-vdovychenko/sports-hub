export const setMapLocation = (locationData) => ({
  type: "SET_MAP_LOCATION",
  payload: locationData,
});

export const clearMapLocation = () => ({
  type: "CLEAR_MAP_LOCATION",
});

export const addLocation = (locationData) => ({
  type: "ADD_LOCATION",
  payload: locationData,
});

export const loadLocations = (locations) => ({
  type: "LOAD_LOCATIONS",
  payload: locations,
});

export const loadTeams = (teams) => ({
  type: "LOAD_TEAMS",
  payload: teams,
});
export const updateTeams = (teams) => ({
  type: "UPDATE_TEAMS",
  payload: teams,
});

export const addTeam = (teamData) => {
  return {
    type: "ADD_TEAM",
    payload: teamData,
  };
};

export const updateTeam = (teamId, updatedInfo) => {
  return {
    type: "UPDATE_TEAM",
    payload: { teamId, updatedInfo },
  };
};

export const deleteTeam = (teamId) => {
  return {
    type: "DELETE_TEAM",
    payload: teamId,
  };
};

export const setSelectedTeamForEdit = (team) => ({
  type: "SET_SELECTED_TEAM_FOR_EDIT",
  payload: team,
});

export const setSelectedTeamForDelete = (team) => ({
  type: "SET_SELECTED_TEAM_FOR_DELETE",
  payload: team,
});

export const setAddTeamButtonClicked = (isClicked) => ({
  type: "ADD_TEAM_BUTTON_CLICKED",
  payload: isClicked,
});
