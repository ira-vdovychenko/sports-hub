import { v4 as uuidv4 } from 'uuid';

export function createLeagues(server, sport) {
  const leagueNames = ['AFC East', 'AFC West', 'AFC North', 'AFC South'];

  return leagueNames.map((leagueName) => {
    return server.create('league', {
      LeagueID: uuidv4(),  
      LeagueName: leagueName,
      SportID: sport.SportID,
      sport,
    });
  });
}