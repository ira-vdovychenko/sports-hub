import { v4 as uuidv4 } from 'uuid';

export function createLocations(server) {
  let houston = server.schema.cities.findBy({ CityName: "Houston" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${houston.CityName}, ${houston.state.StateName}`,
    CityID: houston.CityID,
    StateID: houston.state.StateID,
    CountryID: houston.state.country.CountryID,
    PostalCode: "77002",
    Latitude: "29.749907",
    Longitude: "-95.358421",
  });

  let losAngeles = server.schema.cities.findBy({ CityName: "Los Angeles" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${losAngeles.CityName}, ${losAngeles.state.StateName}`,
    CityID: losAngeles.CityID,
    StateID: losAngeles.state.StateID,
    CountryID: losAngeles.state.country.CountryID,
    PostalCode: "90099",
    Latitude: "34.052235",
    Longitude: "-118.243683",
  });

  let sanAntonio = server.schema.cities.findBy({ CityName: "San Antonio" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${sanAntonio.CityName}, ${sanAntonio.state.StateName}`,
    CityID: sanAntonio.CityID,
    StateID: sanAntonio.state.StateID,
    CountryID: sanAntonio.state.country.CountryID,
    PostalCode: "78205 ",
    Latitude: "29.4241",
    Longitude: "-98.4936",
  });

  let boston = server.schema.cities.findBy({ CityName: "Boston" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${boston.CityName}, ${boston.state.StateName}`,
    CityID: boston.CityID,
    StateID: boston.state.StateID,
    CountryID: boston.state.country.CountryID,
    PostalCode: "02114",
    Latitude: "42.3662",
    Longitude: "-71.0621",
  });

  let chicago = server.schema.cities.findBy({ CityName: "Chicago" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${chicago.CityName}, ${chicago.state.StateName}`,
    CityID: chicago.CityID,
    StateID: chicago.state.StateID,
    CountryID: chicago.state.country.CountryID,
    PostalCode: "60612",
    Latitude: "41.8807",
    Longitude: "-87.6742",
  });

  let atlanta = server.schema.cities.findBy({ CityName: "Atlanta" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${atlanta.CityName}, ${atlanta.state.StateName}`,
    CityID: atlanta.CityID,
    StateID: atlanta.state.StateID,
    CountryID: atlanta.state.country.CountryID,
    PostalCode: "30303",
    Latitude: "33.7573",
    Longitude: "-84.3963",
  });

  let washington = server.schema.cities.findBy({ CityName: "Washington, D.C." });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${washington.CityName}, ${washington.state.StateName}`,
    CityID: washington.CityID,
    StateID: washington.state.StateID,
    CountryID: washington.state.country.CountryID,
    PostalCode: "20004",
    Latitude: "38.8981",
    Longitude: "-77.0209",
  });

  let lasVegas = server.schema.cities.findBy({ CityName: "Las Vegas" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${lasVegas.CityName}, ${lasVegas.state.StateName}`,
    CityID: lasVegas.CityID,
    StateID: lasVegas.state.StateID,
    CountryID: lasVegas.state.country.CountryID,
    PostalCode: "89030",
    Latitude: "36.188110",
    Longitude: "-115.176468",
  });

  let foxborough = server.schema.cities.findBy({ CityName: "Foxborough" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${foxborough.CityName}, ${foxborough.state.StateName}`,
    CityID: foxborough.CityID,
    StateID: foxborough.state.StateID,
    CountryID: foxborough.state.country.CountryID,
    PostalCode: "02035",
    Latitude: "42.065377",
    Longitude: "-71.247831",
  });

  let buffalo = server.schema.cities.findBy({ CityName: "Buffalo" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${buffalo.CityName}, ${buffalo.state.StateName}`,
    CityID: buffalo.CityID,
    StateID: buffalo.state.StateID,
    CountryID: buffalo.state.country.CountryID,
    PostalCode: "14201",
    Latitude: "42.880230",
    Longitude: "-78.878738",
  });

  /*   let saltLakeCity = server.schema.cities.findBy({ CityName: "Salt Lake City"});
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${saltLakeCity.CityName}, ${saltLakeCity.state.StateName}`,
    CityID: saltLakeCity.CityID,
    StateID: saltLakeCity.state.StateID,
    CountryID: saltLakeCity.state.country.CountryID,
    PostalCode: "84101",
    Latitude: "40.758701",
    Longitude: "-111.876183",
  });//-
  let memphis = server.schema.cities.findBy({ CityName: "Memphis" });
  server.create("location", {
    LocationID: uuidv4(),
    LocationName: `${memphis.CityName}, ${memphis.state.StateName}`,
    CityID: memphis.CityID,
    StateID: memphis.state.StateID,
    CountryID: memphis.state.country.CountryID,
    PostalCode: "38101",
    Latitude: "35.117500",
    Longitude: "-89.971107",
  });//- */

}
