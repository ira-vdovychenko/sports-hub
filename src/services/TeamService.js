export const getTeams = async (LeagueID) => {
  const res = await fetch(`/mirage-api/teams/${LeagueID}`);
  const data = await res.json();
  const teams = data.teams.models.map(({ TeamID, TeamName, LeagueID, SportID, isHidden = false }) => ({
    TeamID,
    TeamName,
    LeagueID,
    SportID,
    isHidden,
  }));

  return teams;
};
  
export const createTeam = async (teamData) => {
  try {
    console.log('Creating team:', teamData);
    const res = await fetch('/mirage-api/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teamData),
    });

    if (!res.ok) {
      throw new Error('Failed to create team');
    }

    if (res.status !== 201) {
      const data = await res.json();
      console.log('Response data:', data);
    }

    return res.json();
  } catch (error) {
    console.error('Error creating team:', error);
    throw error;
  }
};
  
export const updateTeam = async (TeamID, teamData) => {
  try {
    console.log('Updating team:', teamData);
    const res = await fetch(`/mirage-api/teams/${TeamID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teamData),
    });

    if (!res.ok) {
      throw new Error('Failed to update team');
    }

    if (res.status !== 200) {
      const data = await res.json();
      console.log('Response data:', data);
    }

    return res.json();
  } catch (error) {
    console.error('Error updating team:', error);
    throw error;
  }
};

  export const deleteTeam = async (TeamID) => {
    return fetch(`/mirage-api/teams/${TeamID}`, {
      method: 'DELETE',
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Failed to delete team');
      }
      if (res.status !== 204) {
        console.log('Response status:', res.status);
      }
  
      return res;
    });
  };