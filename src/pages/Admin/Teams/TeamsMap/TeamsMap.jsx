import React from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapControls, LocationMarker, TeamsMarker, EditTeamMarker} from "./index.js";
import "leaflet/dist/leaflet.css";
import GlobalStyle from "./styled.js";

export const TeamsMap = ({ filteredTeams, isFiltering, addTeamButtonClicked, mapLocation, selectedTeamForEdit}) => {
  const teams = useSelector((state) => state.team.teams);
  const locations = useSelector((state) => state.team.locations);
  const usaCenter = [39.8283, -98.5795];
  const usaBounds = [
    [24.396308, -125.0],
    [49.384358, -66.93457],
  ];

  return (
    <>
      <GlobalStyle />
      <MapContainer
        center={usaCenter}
        zoom={4}
        style={{ height: "100%", width: "100%" }}
        maxBounds={usaBounds}
        maxBoundsViscosity={0.8}
      >
        <MapControls />
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
        />
        {!addTeamButtonClicked && !selectedTeamForEdit && <TeamsMarker locations={locations} teams={teams} filteredTeams={filteredTeams} isFiltering={isFiltering}/>}
        {selectedTeamForEdit && !addTeamButtonClicked  && <EditTeamMarker selectedTeamForEdit={selectedTeamForEdit} />}
        {addTeamButtonClicked && <LocationMarker mapLocation={mapLocation} />}
      </MapContainer>
    </>
  );
};
