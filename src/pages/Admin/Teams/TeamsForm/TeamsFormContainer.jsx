import React from "react";
import { Formik } from "formik";
import { TeamFormFields } from "./TeamsFormFields"; 

export const TeamFormContainer = ({ mode, teamData, addTeamButtonClicked, mapLocation, setIsTeamEdited, setSelectedId, onSubmitForm, onCancel }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        LocationName: teamData.LocationName,
        LocationID: teamData.LocationID,
        SportName: teamData.SportName,
        SportID: teamData.SportID,
        LeagueName: teamData.LeagueName,
        LeagueID: teamData.LeagueID,
        TeamName: teamData.TeamName,
        TeamID: teamData.TeamID,
        date: teamData.date,
        logo: teamData.logo,
      }}
      onSubmit={(values, actions) => {
        onSubmitForm(values, actions);
      }}
    >
      {() => (
        <TeamFormFields
          mode={mode}
          addTeamButtonClicked={addTeamButtonClicked}
          mapLocation={mapLocation}
          setIsTeamEdited={setIsTeamEdited}
          setSelectedId={setSelectedId}
          onCancel={onCancel}
        />
      )}
    </Formik>
  );
};
