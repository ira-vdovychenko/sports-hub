import { v4 as uuidv4 } from 'uuid';


export default function createTeams(server, league, sport) {
  const teamNames = ['Houston', 'Los Angeles L', 'Memphis', 'Utah Jazz'];

  return teamNames.map((teamName) => {
    return server.create('team', {
      TeamID: uuidv4(),
      TeamName: teamName,
      LeagueID: league.LeagueID,
      SportID: sport.SportID,
      sport,
      league,
    });
  });
}
