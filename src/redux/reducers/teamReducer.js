const initialState = {
  mapLocation: null,
  locations: [],
  teams: [],
  selectedTeamForEdit: null,
  selectedTeamForDelete: null,
  addTeamButtonClicked: false,
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MAP_LOCATION":
      return {
        ...state,
        mapLocation: action.payload,
      };
    case "CLEAR_MAP_LOCATION":
      return {
        ...state,
        mapLocation: null,
      };
    case "ADD_LOCATION":
      const locationExists = state.locations.some(
        (loc) => loc.LocationID === action.payload.LocationID
      );
      return {
        ...state,
        locations: locationExists
          ? state.locations
          : [...state.locations, action.payload],
      };
    case "LOAD_LOCATIONS":
      return {
        ...state,
        locations: action.payload,
      };
    case "LOAD_TEAMS":
      return {
        ...state,
        teams: action.payload,
      };
    case "UPDATE_TEAMS":
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        teams: action.payload,
      };
    case "ADD_TEAM":
      return {
        ...state,
        teams: [action.payload, ...state.teams],
      };
    case "UPDATE_TEAM":
      return {
        ...state,
        teams: state.teams.map((team) =>
          team.TeamID === action.payload.teamId
            ? { ...team, ...action.payload.updatedInfo }
            : team
        ),
      };
    case "DELETE_TEAM":
      return {
        ...state,
        teams: state.teams.filter((team) => team.TeamID !== action.payload),
      };
    case "SET_SELECTED_TEAM_FOR_EDIT":
      return {
        ...state,
        selectedTeamForEdit: action.payload,
      };
    case "SET_SELECTED_TEAM_FOR_DELETE":
      return {
        ...state,
        selectedTeamForDelete: action.payload,
      };
    case "ADD_TEAM_BUTTON_CLICKED":
      return {
        ...state,
        addTeamButtonClicked: action.payload,
      };
    default:
      return state;
  }
};
