import { v4 as uuidv4 } from 'uuid';
import houstonRocketsLogo from '../../assets/houston-rockets-logo.png';
import lakersLogo from '../../assets/la-lakers-logo.png';
import clippersLogo from '../../assets/la-clippers-logo.png'; 
import spursLogo from '../../assets/san-antonio-logo.png';
import celticsLogo from '../../assets/boston-celtics-logo.png';
import bullsLogo from '../../assets/chicago-bulls-logo.png';
import hawksLogo from '../../assets/atlanta-hawks-logo.png';
import wizardsLogo from '../../assets/washington-wizards-logo.png';
import raidersLogo from '../../assets/las-vegas-raiders.png';
import chargersLogo from '../../assets/la-chargers-logo.png';
import patriotsLogo from '../../assets/new-england-patriots-logo.png';
import buffaloLogo from '../../assets/buffalo-bills-logo.png';

export function createTeams(server) {
  let nba = server.schema.sports.findBy({ SportName: 'NBA' });
  let westNBA = server.schema.leagues.where({ LeagueName: 'AFC West', SportID: nba.SportID }).models[0];
  let eastNBA = server.schema.leagues.where({ LeagueName: 'AFC East', SportID: nba.SportID }).models[0];

  if (!nba || !westNBA || !eastNBA) {
    console.error('NBA, Western Conference, or Eastern Conference not found');
    return;
  }

  let locationsNbaWest = [
    { name: 'Houston Rockets', city: 'Houston, Texas' },
    { name: 'Los Angeles Lakers', city: 'Los Angeles, California' },
    { name: 'LA Clippers', city: 'Los Angeles, California' },
    { name: 'San Antonio Spurs', city: 'San Antonio, Texas' }
  ];

  const westNbaTeamLogos = {
    'Houston Rockets': houstonRocketsLogo,
    'Los Angeles Lakers': lakersLogo,
    'LA Clippers': clippersLogo,
    'San Antonio Spurs': spursLogo,
  };

  const fixedDate = "08/03/2024";

  locationsNbaWest.forEach(({ name, city }) => {
    let location = server.schema.locations.findBy({ LocationName: city });
    server.create('team', {
      TeamID: uuidv4(),
      TeamName: name,
      LeagueID: westNBA.LeagueID,
      SportID: nba.SportID,
      LocationID: location.LocationID,
      logo: westNbaTeamLogos[name], 
      date: fixedDate,
    });
  });

  let locationsEast = [
    { name: 'Boston Celtics', city: 'Boston, Massachusetts' },
    { name: 'Chicago Bulls', city: 'Chicago, Illinois' },
    { name: 'Atlanta Hawks', city: 'Atlanta, Georgia' },
    { name: 'Washington Wizards', city: 'Washington, D.C., District of Columbia' }
  ];

  const eastNbaTeamLogos = {
    'Boston Celtics': celticsLogo,
    'Chicago Bulls': bullsLogo,
    'Atlanta Hawks': hawksLogo,
    'Washington Wizards': wizardsLogo,
  };

  locationsEast.forEach(({ name, city }) => {
    let location = server.schema.locations.findBy({ LocationName: city });
    if (!location) {
      console.error(`Location for ${name} not found`);
      return;
    }

    server.create('team', {
      TeamID: uuidv4(),
      TeamName: name,
      LeagueID: eastNBA.LeagueID, 
      SportID: nba.SportID,
      LocationID: location.LocationID, 
      logo: eastNbaTeamLogos[name], 
      date: fixedDate,
    });
  });

  let nfl = server.schema.sports.findBy({ SportName: 'NFL' });
  let westNFL = server.schema.leagues.where({ LeagueName: 'AFC West', SportID: nfl.SportID }).models[0];
  let eastNFL = server.schema.leagues.where({ LeagueName: 'AFC East', SportID: nfl.SportID }).models[0];
  if (!nfl || !westNFL || !eastNFL) {
    console.error('NFL, Western Conference, or Eastern Conference not found');
    return;
  }

  let locationsNflWest = [
    { name: 'Las Vegas Raiders', city: 'Las Vegas, Nevada' },
    { name: 'Los Angeles Chargers', city: 'Los Angeles, California' },
  ];

  const westNflTeamLogos = {
    'Las Vegas Raiders': raidersLogo,
    'Los Angeles Chargers': chargersLogo,
  };

  locationsNflWest.forEach(({ name, city }) => {
    let location = server.schema.locations.findBy({ LocationName: city });
    if (!location) {
      console.error(`Location for ${name} not found`);
      return;
    }
  
    server.create('team', {
      TeamID: uuidv4(),
      TeamName: name,
      LeagueID: westNFL.LeagueID, 
      SportID: nfl.SportID,
      LocationID: location.LocationID, 
      logo: westNflTeamLogos[name], 
      date: fixedDate,
    });
  });

  let locationsNflEast = [
    { name: 'New England Patriots', city: 'Las Vegas, Nevada' },
    { name: 'Buffalo Bills', city: 'Los Angeles, California' },
  ];

  const eastNflTeamLogos = {
    'New England Patriots': patriotsLogo,
    'Buffalo Bills': buffaloLogo,
  };

  locationsNflEast.forEach(({ name, city }) => {
    let location = server.schema.locations.findBy({ LocationName: city });
    if (!location) {
      console.error(`Location for ${name} not found`);
      return;
    }
  
    server.create('team', {
      TeamID: uuidv4(),
      TeamName: name,
      LeagueID: eastNFL.LeagueID, 
      SportID: nfl.SportID,
      LocationID: location.LocationID, 
      logo: eastNflTeamLogos[name], 
      date: fixedDate,
    });
  });
}
